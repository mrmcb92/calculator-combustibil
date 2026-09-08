#!/usr/bin/env python3
"""
Fetches current Romanian fuel prices and writes them to fuel-prices.json
in the project root.

Multi-source precision pipeline:
1. Primary 1: pretcarburant.ro — daily national averages, 20+ city prices, station network prices
2. Primary 2: peco-online.ro/calculator.php — official national daily average prices (B95, B98, Diesel, Diesel+, GPL)
3. Fallback 1: peco-online.ro/minime.php — cheapest station prices by city
4. Fallback 2: globalpetrolprices.com — national weekly average

Run from repo root:  python scripts/fetch_fuel_prices.py
"""

import json
import re
import sys
import datetime
from pathlib import Path
import urllib.request
import urllib.error

PRICES_FILE = Path(__file__).parent.parent / "fuel-prices.json"

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/124.0.0.0 Safari/537.36"
    ),
    "Accept-Language": "ro-RO,ro;q=0.9,en-US;q=0.8,en;q=0.7",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
}

# Sanity bounds for Romanian fuel prices (RON/L)
PRICE_MIN = 2.0
PRICE_MAX = 30.0


def load_current_prices():
    try:
        with open(PRICES_FILE, encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return {
            "prices": {
                "B95": 9.77,
                "B98": 10.31,
                "Diesel": 10.23,
                "DieselPlus": 10.94,
                "GPL": 4.67
            }
        }


def _fetch_html(url: str, timeout: int = 15) -> str | None:
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            return resp.read().decode("utf-8", errors="ignore")
    except Exception as exc:
        print(f"  ⚠  fetch failed for {url}: {exc}")
        return None


def _to_float(text: str) -> float | None:
    """Convert price string like '9.77', '9,77', '10.23 lei' to float."""
    clean = re.sub(r"[^\d.,]", "", str(text)).strip()
    if not clean:
        return None
    if "," in clean and "." in clean:
        if clean.index(".") < clean.index(","):
            clean = clean.replace(".", "").replace(",", ".")
        else:
            clean = clean.replace(",", "")
    elif "," in clean:
        clean = clean.replace(",", ".")
    try:
        val = round(float(clean), 2)
        if PRICE_MIN <= val <= PRICE_MAX:
            return val
    except ValueError:
        pass
    return None


def _avg(values: list[float]) -> float | None:
    return round(sum(values) / len(values), 2) if values else None


# ── 1. pretcarburant.ro (National averages, 20 cities, station networks) ──────

def fetch_pretcarburant() -> dict:
    """
    Scrapes pretcarburant.ro for:
    - national average fuel prices (B95, Diesel, GPL, and city table averages)
    - individual city prices for 20 Romanian county seats
    - brand network prices (Petrom, OMV, Rompetrol, MOL, Lukoil, Socar, etc.)
    """
    html = _fetch_html("https://www.pretcarburant.ro")
    if not html:
        return {}

    data = {"averages": {}, "cities": {}, "networks": {}}

    # Extract national average from header / meta
    # e.g. "Preț benzină 9,77, motorină 10,23, GPL 4,67 lei/L azi"
    m_meta = re.search(
        r"benzin[aă]\s+([\d]+(?:[.,]\d+)?).*?motorin[aă]\s+([\d]+(?:[.,]\d+)?).*?GPL\s+([\d]+(?:[.,]\d+)?)",
        html,
        re.I
    )
    if m_meta:
        b95 = _to_float(m_meta.group(1))
        diesel = _to_float(m_meta.group(2))
        gpl = _to_float(m_meta.group(3))
        if b95: data["averages"]["B95"] = b95
        if diesel: data["averages"]["Diesel"] = diesel
        if gpl: data["averages"]["GPL"] = gpl

    # Extract 20 cities table:
    # <tr><td class="td-city"><a href="...">Bucuresti</a>...</td>
    # <td class="td-price">9.73 lei</td> (B95)
    # <td class="td-price">10.21 lei</td> (B98)
    # <td class="td-price">10.19 lei</td> (Diesel)
    # <td class="td-price">10.61 lei</td> (Diesel+)
    # <td class="td-price">4.63 lei</td> (GPL)
    city_rows = re.findall(r"<tr>\s*<td class=[\"']td-city[\"']>([\s\S]*?)</tr>", html)
    city_b98_list = []
    city_diesel_plus_list = []

    for r in city_rows:
        cm = re.search(r"<a[^>]*>([^<]+)</a>", r)
        prices_raw = re.findall(r"<td class=[\"']td-price[\"']>([\d.,]+)\s*lei</td>", r)
        if cm and len(prices_raw) >= 5:
            city_name = cm.group(1).strip()
            p_b95 = _to_float(prices_raw[0])
            p_b98 = _to_float(prices_raw[1])
            p_diesel = _to_float(prices_raw[2])
            p_dplus = _to_float(prices_raw[3])
            p_gpl = _to_float(prices_raw[4])
            if all([p_b95, p_b98, p_diesel, p_dplus, p_gpl]):
                data["cities"][city_name] = {
                    "B95": p_b95,
                    "B98": p_b98,
                    "Diesel": p_diesel,
                    "DieselPlus": p_dplus,
                    "GPL": p_gpl,
                }
                city_b98_list.append(p_b98)
                city_diesel_plus_list.append(p_dplus)

    # If national average for B98 or Diesel+ wasn't explicitly in meta,
    # compute from the comprehensive 20-city table
    if city_b98_list and "B98" not in data["averages"]:
        data["averages"]["B98"] = _avg(city_b98_list)
    if city_diesel_plus_list and "DieselPlus" not in data["averages"]:
        data["averages"]["DieselPlus"] = _avg(city_diesel_plus_list)

    # Extract brand networks
    net_cards = re.findall(r"<a[^>]*class=[\"']network-card[\"'][\s\S]*?</a>", html)
    for c in net_cards:
        nm = re.search(r"<span class=[\"']network-name[\"']>([^<]+)</span>", c)
        prm = re.search(r"<span class=[\"']network-price[\"']>([\d.,]+)</span>", c)
        if nm and prm:
            p_val = _to_float(prm.group(1))
            if p_val:
                data["networks"][nm.group(1).strip()] = p_val

    return data


# ── 2. peco-online.ro/calculator.php (Official national daily averages) ───────

def fetch_peco_averages() -> dict:
    """
    Extracts official window.preturiMediiIeri published by peco-online.ro:
    {"Benzina_Regular":9.76,"Benzina_Premium":10.31,"Motorina_Regular":10.23,"Motorina_Premium":10.94,"GPL":4.66}
    """
    html = _fetch_html("https://www.peco-online.ro/calculator.php")
    if not html:
        return {}

    m = re.search(r"window\.preturiMediiIeri\s*=\s*(\{[\s\S]*?\});", html)
    if not m:
        return {}

    try:
        raw = json.loads(m.group(1))
        out = {}
        if "Benzina_Regular" in raw and (v := _to_float(raw["Benzina_Regular"])):
            out["B95"] = v
        if "Benzina_Premium" in raw and (v := _to_float(raw["Benzina_Premium"])):
            out["B98"] = v
        if "Motorina_Regular" in raw and (v := _to_float(raw["Motorina_Regular"])):
            out["Diesel"] = v
        if "Motorina_Premium" in raw and (v := _to_float(raw["Motorina_Premium"])):
            out["DieselPlus"] = v
        if "GPL" in raw and (v := _to_float(raw["GPL"])):
            out["GPL"] = v
        return out
    except Exception as exc:
        print(f"  ⚠  peco-online parse error: {exc}")
        return {}


# ── 3. peco-online.ro/minime.php (Cheapest station fallback) ───────────────────

def fetch_peco_minime() -> dict:
    """
    Scrapes peco-online.ro/minime.php — cheapest station prices across top 5 cities.
    """
    html = _fetch_html("https://www.peco-online.ro/minime.php")
    if not html:
        return {}

    cols = {"B95": [], "Diesel": [], "GPL": []}
    rows = re.findall(r"<tr>([\s\S]*?)</tr>", html)
    for row in rows:
        cells = re.findall(r"<td class=[\"']pret[\"']>([\d.,]+)</td>", row)
        if len(cells) == 3:
            b95 = _to_float(cells[0])
            diesel = _to_float(cells[1])
            gpl = _to_float(cells[2])
            if b95: cols["B95"].append(b95)
            if diesel: cols["Diesel"].append(diesel)
            if gpl: cols["GPL"].append(gpl)

    return {k: _avg(v) for k, v in cols.items() if v}


# ── 4. globalpetrolprices.com (International fallback) ────────────────────────

def fetch_gpp_price(fuel: str) -> float | None:
    urls = {
        "B95": "https://www.globalpetrolprices.com/Romania/gasoline_prices/",
        "Diesel": "https://www.globalpetrolprices.com/Romania/diesel_prices/",
        "GPL": "https://www.globalpetrolprices.com/Romania/lpg_prices/",
    }
    url = urls.get(fuel)
    if not url:
        return None
    html = _fetch_html(url)
    if not html:
        return None
    m = re.search(r"current\s+\w+\s+price\s+in\s+Romania\s+is\s+RON\s+(\d{1,2}[.,]\d{2,3})", html, re.I)
    if m:
        return _to_float(m.group(1))
    m = re.search(r"RON\s+(\d{1,2}[.,]\d{2,3})\s+per\s+liter", html, re.I)
    if m:
        return _to_float(m.group(1))
    return None


# ── Main Reconciliation ───────────────────────────────────────────────────────

def main():
    print("Fetching Romanian fuel prices with enhanced accuracy …\n")
    current = load_current_prices()
    prices = dict(current.get("prices", {}))
    sources_used = []

    # 1. Fetch from pretcarburant.ro
    print("  [1/3] Fetching from pretcarburant.ro …")
    pc_data = fetch_pretcarburant()
    pc_avg = pc_data.get("averages", {})
    pc_cities = pc_data.get("cities", {})
    pc_networks = pc_data.get("networks", {})
    if pc_avg:
        print(f"        ✓ Found national averages: {pc_avg}")
        print(f"        ✓ Found {len(pc_cities)} city prices and {len(pc_networks)} network prices")
        sources_used.append("pretcarburant.ro")

    # 2. Fetch from peco-online.ro/calculator.php
    print("  [2/3] Fetching official averages from peco-online.ro …")
    peco_avg = fetch_peco_averages()
    if peco_avg:
        print(f"        ✓ Found official peco-online averages: {peco_avg}")
        sources_used.append("peco-online.ro")

    # 3. Fallback if needed
    peco_min = {}
    if not peco_avg and not pc_avg:
        print("  [3/3] Fetching fallback from peco-online.ro/minime.php …")
        peco_min = fetch_peco_minime()
        if peco_min:
            sources_used.append("peco-online.ro/minime.php")

    # Reconcile final prices
    changed = False
    new_prices = {}

    # Fuel keys in order: B95, B98, Diesel, DieselPlus, GPL
    fuel_keys = ["B95", "B98", "Diesel", "DieselPlus", "GPL"]

    for k in fuel_keys:
        val = None
        # Highest precision: pretcarburant or peco-online average
        if k in pc_avg and pc_avg[k]:
            val = pc_avg[k]
        elif k in peco_avg and peco_avg[k]:
            val = peco_avg[k]
        elif k in peco_min and peco_min[k]:
            val = peco_min[k]
        else:
            # GPP fallback
            gpp_key = "Diesel" if k == "DieselPlus" else ("B95" if k == "B98" else k)
            val = fetch_gpp_price(gpp_key)
            if val and k in ("B98", "DieselPlus"):
                val = round(val + (0.60 if k == "B98" else 0.70), 2)

        if not val:
            val = prices.get(k)

        if val and PRICE_MIN <= val <= PRICE_MAX:
            if prices.get(k) != val:
                changed = True
            new_prices[k] = val

    # Ensure all 5 fuel keys exist
    if "B98" not in new_prices and "B95" in new_prices:
        new_prices["B98"] = round(new_prices["B95"] + 0.54, 2)
    if "DieselPlus" not in new_prices and "Diesel" in new_prices:
        new_prices["DieselPlus"] = round(new_prices["Diesel"] + 0.71, 2)

    # Use existing cities / networks if fresh ones weren't fetched
    cities = pc_cities or current.get("cities", {})
    networks = pc_networks or current.get("networks", {})

    source_label = " + ".join(sources_used) if sources_used else current.get("source", "peco-online.ro")

    now_utc = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%S.000Z")
    updated_ts = now_utc if changed or not current.get("updated") else current.get("updated")

    result = {
        "updated": updated_ts,
        "source": source_label,
        "currency": "RON",
        "prices": new_prices,
        "nationalAverages": new_prices,
        "cities": cities,
        "networks": networks,
    }

    with open(PRICES_FILE, "w", encoding="utf-8") as f:
        json.dump(result, f, indent=2, ensure_ascii=False)
        f.write("\n")

    print("\n✅ fuel-prices.json updated successfully:")
    print(f"   Updated : {result['updated']}")
    print(f"   Source  : {result['source']}")
    print(f"   Prices  : {json.dumps(result['prices'])}")
    print(f"   Cities  : {len(cities)} cities recorded")
    print(f"   Networks: {list(networks.keys())}")


if __name__ == "__main__":
    main()
