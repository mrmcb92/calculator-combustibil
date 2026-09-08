// ── Translations ────────────────────────────────────────────────────────────

const TRADUCERI = {
  en: {
    titlu:          'Fuel Calculator',
    subtitlu:       'Estimate the cost before or after your trip',
    tabCost:        'Cost',
    tabRange:       'Range',
    tabHistory:     'History',
    profileDefault: '— Vehicle —',
    distanta:       'Distance',
    turRetur:       'Round trip',
    consum:         'Avg. consumption',
    pret:           'Fuel price',
    pasageri:       'Passengers',
    split:          'Split cost',
    buget:          'Budget',
    consumR:        'Avg. consumption',
    pretR:          'Fuel price',
    butonCalc:      'Calculate',
    butonLoading:   'Calculating...',
    butonReset:     'Reset',
    labelLitri:     'Fuel needed',
    labelCost:      'Total cost',
    labelCostKm:    'Cost / km',
    labelPerPax:    'Per person',
    labelMaxDist:   'Max distance',
    labelLitriR:    'Fuel needed',
    unitLitri:      'liters',
    unitKm:         'km',
    share:          'Share',
    clearHistory:   'Clear history',
    noHistory:      'No calculations yet.',
    profileName:    'Vehicle name:',
    profileSaved:   'Profile saved!',
    profileDeleted: 'Profile deleted.',
    profileNone:    'Select a profile first.',
    copiedMsg:      'Copied!',
    syncTitle:      'Sync Profiles',
    syncDesc1:      'Your device code — share it with another device:',
    syncDesc2:      'Enter another device\'s code to use the same profiles:',
    syncCopy:       'Copy',
    syncApply:      'Sync',
    syncOk:         'Synced! Profiles will appear shortly.',
    syncInvalid:    'Invalid code — must be 6 characters.',
    syncConnecting: 'Connecting...',
    syncConnected:  'Synced',
    syncOffline:    'Offline — using local profiles',
    fuelType:       'Fuel type',
    fuelLocation:   'Location',
    nationalAvg:    '🇷🇴 National Average',
    priceDefault:   'default prices · tap to refresh',
    priceUpdated:   'updated',
    priceLive:      'live',
    priceLoading:   'updating...',
    priceRonOnly:   'live prices in RON only',
    priceDisclaimer: 'Real station prices (Peco Online & PretCarburant) — updated daily',
    installApp:     'Install app',
    installTitle:   'Install app',
    installIntro:   'Add Fuel Calculator to your home screen for quick, offline access — it works like a native app.',
    installDone:    'App installed.',
    installIOS:     [
      'Tap the Share button in Safari\'s toolbar (the square with an arrow).',
      'Scroll down and tap "Add to Home Screen".',
      'Tap "Add" in the top-right corner.',
    ],
    installAndroid: [
      'Tap the ⋮ menu in your browser (top-right).',
      'Tap "Install app" or "Add to Home screen".',
      'Confirm with "Install".',
    ],
    installDesktop: [
      'Click the install icon in the address bar (a screen with a down arrow).',
      'Click "Install" in the dialog.',
      'If you don\'t see it, open the browser menu and choose "Install Fuel Calculator".',
    ],
    eroareNaN:      (f) => `"${f}" is not a valid number.`,
    eroareInterval: (f, a, b) => `"${f}" must be between ${a} and ${b}.`,
  },
  ro: {
    titlu:          'Calculator Combustibil',
    subtitlu:       'Estimează costul înainte sau după drum',
    tabCost:        'Cost',
    tabRange:       'Autonomie',
    tabHistory:     'Istoric',
    profileDefault: '— Vehicul —',
    distanta:       'Distanță',
    turRetur:       'Tur-retur',
    consum:         'Consum mediu',
    pret:           'Preț combustibil',
    pasageri:       'Pasageri',
    split:          'Împarte costul',
    buget:          'Buget',
    consumR:        'Consum mediu',
    pretR:          'Preț combustibil',
    butonCalc:      'Calculează',
    butonLoading:   'Se calculează...',
    butonReset:     'Resetează',
    labelLitri:     'Combustibil',
    labelCost:      'Cost total',
    labelCostKm:    'Cost / km',
    labelPerPax:    'Per persoană',
    labelMaxDist:   'Distanță maximă',
    labelLitriR:    'Combustibil necesar',
    unitLitri:      'litri',
    unitKm:         'km',
    share:          'Distribuie',
    clearHistory:   'Șterge istoricul',
    noHistory:      'Niciun calcul salvat.',
    profileName:    'Nume vehicul:',
    profileSaved:   'Profil salvat!',
    profileDeleted: 'Profil șters.',
    profileNone:    'Selectează un profil mai întâi.',
    copiedMsg:      'Copiat!',
    syncTitle:      'Sincronizare Profiluri',
    syncDesc1:      'Codul tău — trimite-l pe alt dispozitiv:',
    syncDesc2:      'Introdu codul altui dispozitiv pentru aceleași profiluri:',
    syncCopy:       'Copiază',
    syncApply:      'Sincronizează',
    syncOk:         'Sincronizat! Profilurile apar în câteva secunde.',
    syncInvalid:    'Cod invalid — trebuie să aibă 6 caractere.',
    syncConnecting: 'Se conectează...',
    syncConnected:  'Sincronizat',
    syncOffline:    'Offline — profiluri locale',
    fuelType:       'Tip combustibil',
    fuelLocation:   'Locație',
    nationalAvg:    '🇷🇴 Medie Națională',
    priceDefault:   'prețuri implicite · apasă pentru refresh',
    priceUpdated:   'actualizat',
    priceLive:      'live',
    priceLoading:   'se actualizează...',
    priceRonOnly:   'prețuri live doar în RON',
    priceDisclaimer: 'Prețuri exacte din benzinării (Peco Online & PretCarburant) — actualizate zilnic',
    installApp:     'Instalează aplicația',
    installTitle:   'Instalează aplicația',
    installIntro:   'Adaugă Calculator Combustibil pe ecranul principal pentru acces rapid și offline — funcționează ca o aplicație nativă.',
    installDone:    'Aplicație instalată.',
    installIOS:     [
      'Apasă butonul Share din bara Safari (pătratul cu o săgeată).',
      'Derulează în jos și apasă „Add to Home Screen".',
      'Apasă „Add" în colțul din dreapta sus.',
    ],
    installAndroid: [
      'Apasă meniul ⋮ din browser (dreapta sus).',
      'Apasă „Instalează aplicația" sau „Adaugă la ecranul principal".',
      'Confirmă cu „Instalează".',
    ],
    installDesktop: [
      'Apasă pictograma de instalare din bara de adrese (un ecran cu o săgeată în jos).',
      'Apasă „Instalează" în fereastra apărută.',
      'Dacă nu o vezi, deschide meniul browserului și alege „Instalează Calculator Combustibil".',
    ],
    eroareNaN:      (f) => `Câmpul „${f}" nu este valid.`,
    eroareInterval: (f, a, b) => `„${f}" trebuie să fie între ${a} și ${b}.`,
  }
};

// ── Storage (localStorage may be unavailable: private mode, blocked cookies) ─
// All reads/writes go through these helpers so a blocked storage never crashes
// the app — it degrades to session-only behaviour instead.

function storageGet(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}

function storageSet(key, value) {
  try { localStorage.setItem(key, value); } catch (e) { /* storage unavailable */ }
}

function storageRemove(key) {
  try { localStorage.removeItem(key); } catch (e) { /* storage unavailable */ }
}

// ── State ───────────────────────────────────────────────────────────────────

let limbaActiva  = storageGet('comb_limba')      || 'en';
let consumUnit   = storageGet('comb_consumUnit') || 'L100';
let currency     = storageGet('comb_currency')   || 'RON';
let lastResult   = null;
let profilesCache = [];

// parseNum / toL100 / CONSUM_LABEL / CONSUM_PLACEHOLDER / FuelCore
// are provided by core.js (loaded before app.js).

// ── Firebase ─────────────────────────────────────────────────────────────────

let db = null;
let syncId = null;
let unsubscribeProfiles = null;

const SYNC_ID_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

function generateSyncId() {
  return Array.from({ length: 6 }, () =>
    SYNC_ID_CHARS[Math.floor(Math.random() * SYNC_ID_CHARS.length)]
  ).join('');
}

function getSyncId() {
  let id = storageGet('comb_syncId');
  if (!id || id.length !== 6) {
    id = generateSyncId();
    storageSet('comb_syncId', id);
  }
  return id;
}

function isFirebaseConfigured() {
  return (
    typeof FIREBASE_CONFIG !== 'undefined' &&
    FIREBASE_CONFIG.apiKey &&
    FIREBASE_CONFIG.projectId
  );
}

function initFirebase() {
  // Always generate syncId so the modal shows a code even without Firebase
  syncId = getSyncId();

  if (!isFirebaseConfigured()) {
    profilesCache = localGetProfiles();
    renderProfiles();
    return;
  }

  try {
    if (!firebase.apps.length) {
      firebase.initializeApp(FIREBASE_CONFIG);
    }
    db = firebase.firestore();
    setSyncStatusBar('connecting');

    // Anonymous auth — the Firestore rules require request.auth != null.
    // We only start listening once an (anonymous) user session exists.
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        subscribeToProfiles(syncId);
      }
    });
    firebase.auth().signInAnonymously().catch(e => {
      console.warn('Anonymous sign-in failed:', e);
      profilesCache = localGetProfiles();
      renderProfiles();
      setSyncStatusBar('offline');
    });
  } catch (e) {
    console.warn('Firebase init failed:', e);
    profilesCache = localGetProfiles();
    renderProfiles();
  }
}

function subscribeToProfiles(id) {
  if (unsubscribeProfiles) {
    unsubscribeProfiles();
    unsubscribeProfiles = null;
  }
  if (!db) return;

  setSyncStatusBar('connecting');

  unsubscribeProfiles = db.collection('users').doc(id)
    .onSnapshot(
      snap => {
        const data = snap.data();
        profilesCache = Array.isArray(data?.profiles) ? data.profiles : [];
        // also keep localStorage in sync as offline fallback
        storageSet('comb_profiles', JSON.stringify(profilesCache));
        renderProfiles();
        setSyncStatusBar('connected');
      },
      err => {
        console.warn('Firestore error:', err);
        profilesCache = localGetProfiles();
        renderProfiles();
        setSyncStatusBar('offline');
      }
    );
}

function setSyncStatusBar(state) {
  const bar  = document.getElementById('sync-status-bar');
  const text = document.getElementById('sync-status-text');
  if (!bar || !text) return;
  const tr = t();
  if (state === 'connecting') {
    bar.style.display = '';
    bar.className = 'sync-status-bar connecting';
    text.textContent = tr.syncConnecting;
  } else if (state === 'connected') {
    bar.style.display = '';
    bar.className = 'sync-status-bar connected';
    text.textContent = tr.syncConnected + (syncId ? ' · ' + syncId : '');
    setTimeout(() => { if (bar.className.includes('connected')) bar.style.display = 'none'; }, 3000);
  } else if (state === 'offline') {
    bar.style.display = '';
    bar.className = 'sync-status-bar offline';
    text.textContent = tr.syncOffline;
  }
}

// ── Profile storage helpers ──────────────────────────────────────────────────

function localGetProfiles() {
  try { return JSON.parse(storageGet('comb_profiles') || '[]'); } catch { return []; }
}

function getProfiles() {
  return profilesCache;
}

function saveProfiles(profiles) {
  profilesCache = profiles;
  storageSet('comb_profiles', JSON.stringify(profiles));
  if (db && syncId) {
    db.collection('users').doc(syncId)
      .set({ profiles }, { merge: true })
      .catch(err => console.warn('Firestore write error:', err));
  }
}

// ── Sync modal ───────────────────────────────────────────────────────────────

function openSyncModal() {
  document.getElementById('sync-code-display').textContent = syncId || '------';
  document.getElementById('sync-code-input').value = '';
  document.getElementById('sync-feedback').textContent = '';
  document.getElementById('sync-modal').style.display = '';
  document.body.classList.add('modal-open');
}

function closeSyncModal() {
  document.getElementById('sync-modal').style.display = 'none';
  document.body.classList.remove('modal-open');
}

function onOverlayClick(e) {
  if (e.target === document.getElementById('sync-modal')) closeSyncModal();
}

function copySyncCode() {
  if (!syncId) return;
  navigator.clipboard?.writeText(syncId).then(() => showToast(t().copiedMsg));
}

function applySyncCode() {
  const raw   = document.getElementById('sync-code-input').value.trim().toUpperCase();
  const fb    = document.getElementById('sync-feedback');
  const tr    = t();
  if (raw.length !== 6) {
    fb.textContent = tr.syncInvalid;
    fb.className   = 'sync-feedback error';
    return;
  }
  syncId = raw;
  storageSet('comb_syncId', syncId);
  document.getElementById('sync-code-display').textContent = syncId;
  document.getElementById('sync-code-input').value = '';
  fb.textContent = tr.syncOk;
  fb.className   = 'sync-feedback ok';
  if (db) {
    subscribeToProfiles(syncId);
  }
}

// ── Install (Add to Home Screen) ─────────────────────────────────────────────

let deferredInstallPrompt = null;

function isStandalone() {
  return window.matchMedia('(display-mode: standalone)').matches
      || window.navigator.standalone === true;
}

function detectPlatform() {
  const ua = navigator.userAgent || '';
  if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) return 'ios';
  if (/Android/.test(ua)) return 'android';
  return 'desktop';
}

function initInstall() {
  const btn = document.getElementById('btn-install');
  if (!btn) return;
  // Already installed → no button needed.
  if (isStandalone()) { btn.style.display = 'none'; return; }

  // Show by default so iOS users (no beforeinstallprompt event) always get the guide.
  btn.style.display = '';

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();           // keep our own button instead of the mini-infobar
    deferredInstallPrompt = e;
    btn.style.display = '';
  });

  window.addEventListener('appinstalled', () => {
    deferredInstallPrompt = null;
    btn.style.display = 'none';
    closeInstallModal();
    showToast(t().installDone);
  });
}

async function handleInstallClick() {
  // Native prompt available (Android / Chromium desktop) → use it directly.
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    const { outcome } = await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    if (outcome === 'accepted') {
      document.getElementById('btn-install').style.display = 'none';
    }
    return;
  }
  // Otherwise (iOS Safari, or prompt not yet fired) → show manual guide.
  openInstallModal();
}

function renderInstallSteps() {
  const tr = t();
  const platform = detectPlatform();
  const steps = platform === 'ios'     ? tr.installIOS
              : platform === 'android' ? tr.installAndroid
              :                          tr.installDesktop;
  // Build nodes with textContent — no HTML injection surface.
  const list = document.getElementById('install-steps');
  list.innerHTML = '';
  steps.forEach(s => {
    const li = document.createElement('li');
    li.textContent = s;
    list.appendChild(li);
  });
}

function openInstallModal() {
  renderInstallSteps();
  document.getElementById('install-modal').style.display = '';
  document.body.classList.add('modal-open');
}

function closeInstallModal() {
  document.getElementById('install-modal').style.display = 'none';
  document.body.classList.remove('modal-open');
}

function onInstallOverlayClick(e) {
  if (e.target === document.getElementById('install-modal')) closeInstallModal();
}

// ── Theme (light/dark) ────────────────────────────────────────────────────────
// Initial theme is applied by an inline <head> script before first paint;
// here we only handle toggling and keeping the browser UI color in sync.

const THEME_COLORS = { dark: '#0a141e', light: '#f5f5f5' };

function currentTheme() {
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
}

function updateThemeColorMeta() {
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', THEME_COLORS[currentTheme()]);
}

function toggleTheme() {
  const next = currentTheme() === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  storageSet('comb_theme', next);
  updateThemeColorMeta();
}

// ── Formatters ──────────────────────────────────────────────────────────────

const fmt  = new Intl.NumberFormat('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fmt1 = new Intl.NumberFormat('ro-RO', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

function t() { return TRADUCERI[limbaActiva]; }

// ── Fuel prices ───────────────────────────────────────────────────────────────

// Default fallback prices for Romania (RON/L) — exact 2026 market averages
const FUEL_DEFAULTS_RON = {
  B95: 9.77,
  B98: 10.18,
  Diesel: 10.23,
  DieselPlus: 10.61,
  GPL: 4.67
};
const FUEL_CACHE_KEY    = 'comb_fuelPrices';
const FUEL_CACHE_TTL    = 12 * 60 * 60 * 1000; // 12 hours — daily updates

let selectedFuelType     = (typeof normalizeFuelType === 'function' ? normalizeFuelType(storageGet('comb_fuelType')) : storageGet('comb_fuelType')) || '';
let selectedFuelLocation = storageGet('comb_fuelLocation') || 'national';

// ── Fuel price functions ──────────────────────────────────────────────────────

// Prices are served primarily via /api/fuel-prices, fallback to local fuel-prices.json,
// and then GitHub raw CDN.
const FUEL_PRICES_URL =
  'https://raw.githubusercontent.com/mrmcb92/fuel-calculator/main/fuel-prices.json';

function loadFuelPriceCache() {
  try { return JSON.parse(storageGet(FUEL_CACHE_KEY) || 'null'); } catch { return null; }
}

async function fetchFuelPrices() {
  try {
    let res = await fetch('/api/fuel-prices?t=' + Date.now());
    if (!res.ok) {
      res = await fetch('./fuel-prices.json?t=' + Date.now());
    }
    if (!res.ok) {
      res = await fetch(FUEL_PRICES_URL + '?t=' + Date.now());
    }
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.prices) return null;

    // Validate each price value is a positive number
    const prices = {};
    for (const [k, v] of Object.entries(data.prices)) {
      const n = parseFloat(v);
      if (!isNaN(n) && n > 0) prices[k] = Math.round(n * 100) / 100;
    }
    if (!Object.keys(prices).length) return null;

    // Guarantee all default fuels (including DieselPlus) are populated
    for (const [k, v] of Object.entries(FUEL_DEFAULTS_RON)) {
      if (!prices[k]) prices[k] = v;
    }

    // Parse and validate city prices
    const cities = {};
    if (data.cities && typeof data.cities === 'object') {
      for (const [cityName, cityPrices] of Object.entries(data.cities)) {
        if (cityPrices && typeof cityPrices === 'object') {
          const validCity = {};
          for (const [fk, fv] of Object.entries(cityPrices)) {
            const num = parseFloat(fv);
            if (!isNaN(num) && num > 0) validCity[fk] = Math.round(num * 100) / 100;
          }
          if (Object.keys(validCity).length) cities[cityName] = validCity;
        }
      }
    }

    const cache = {
      prices,
      nationalAverages: Object.assign({}, prices, data.nationalAverages || {}),
      cities,
      networks:   data.networks || {},
      timestamp:  Date.now(),
      updatedAt:  data.updated || null,
      source:     'live',
    };
    storageSet(FUEL_CACHE_KEY, JSON.stringify(cache));
    populateLocationDropdowns();
    updateFuelPriceBadge();
    return cache;
  } catch (e) {
    console.warn('Fuel price fetch failed:', e);
    return null;
  }
}

function getCurrentFuelPrices() {
  const cache = loadFuelPriceCache();
  const basePrices = typeof mergeFuelPrices === 'function'
    ? mergeFuelPrices(FUEL_DEFAULTS_RON, cache?.prices)
    : Object.assign({}, FUEL_DEFAULTS_RON, cache?.prices);

  if (selectedFuelLocation && selectedFuelLocation !== 'national' && cache?.cities?.[selectedFuelLocation]) {
    const cityPrices = cache.cities[selectedFuelLocation];
    return typeof mergeFuelPrices === 'function'
      ? mergeFuelPrices(basePrices, null, cityPrices)
      : Object.assign({}, basePrices, cityPrices);
  }
  return basePrices;
}

function populateLocationDropdowns() {
  const cache = loadFuelPriceCache();
  const cities = cache?.cities ? Object.keys(cache.cities).sort((a, b) => a.localeCompare(b, 'ro')) : [];

  ['location-select', 'location-select-r'].forEach(id => {
    const sel = document.getElementById(id);
    if (!sel) return;
    const currentVal = selectedFuelLocation;
    sel.innerHTML = '';

    const natOpt = document.createElement('option');
    natOpt.value = 'national';
    natOpt.id = id === 'location-select' ? 'opt-nat' : 'opt-nat-r';
    natOpt.textContent = t().nationalAvg;
    sel.appendChild(natOpt);

    cities.forEach(city => {
      const opt = document.createElement('option');
      opt.value = city;
      opt.textContent = city;
      sel.appendChild(opt);
    });

    sel.value = currentVal && (currentVal === 'national' || cities.includes(currentVal)) ? currentVal : 'national';
  });
}

function setFuelLocation(loc) {
  selectedFuelLocation = loc || 'national';
  storageSet('comb_fuelLocation', selectedFuelLocation);
  ['location-select', 'location-select-r'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = selectedFuelLocation;
  });
  updateFuelPriceBadge();
  if (selectedFuelType) {
    applyFuelTypePrice(selectedFuelType, true);
  }
}

function updateFuelPriceBadge() {
  const badge = document.getElementById('fuel-price-badge');
  const badgeR = document.getElementById('fuel-price-badge-r');
  if (!badge && !badgeR) return;

  const fuelKey = typeof normalizeFuelType === 'function' ? normalizeFuelType(selectedFuelType) : selectedFuelType;
  if (!fuelKey || currency !== 'RON') {
    if (badge) badge.style.display = 'none';
    if (badgeR) badgeR.style.display = 'none';
    return;
  }

  const prices = getCurrentFuelPrices();
  const price = prices[fuelKey] || FUEL_DEFAULTS_RON[fuelKey];
  if (!price) {
    if (badge) badge.style.display = 'none';
    if (badgeR) badgeR.style.display = 'none';
    return;
  }

  const cache = loadFuelPriceCache();
  const natPrice = cache?.nationalAverages?.[fuelKey] || cache?.prices?.[fuelKey] || FUEL_DEFAULTS_RON[fuelKey];

  let text = '';
  if (selectedFuelLocation && selectedFuelLocation !== 'national') {
    text = `${selectedFuelLocation}: ${price.toFixed(2)} RON/L` + (natPrice && natPrice !== price ? ` (medie: ${natPrice.toFixed(2)})` : '');
  } else {
    text = `${t().nationalAvg.replace(/^[^\w\s]+/, '').trim()}: ${price.toFixed(2)} RON/L`;
  }

  [badge, badgeR].forEach(el => {
    if (!el) return;
    el.textContent = text;
    el.style.display = 'inline-block';
  });
}

// Recompute the freshness badge based on the cache, the selected fuel type and
// the active currency. Used on init, language/currency switches and refreshes.
function refreshFreshnessBadge() {
  if (currency !== 'RON' && selectedFuelType) {
    updatePriceFreshness(null, 'ron-only');
    return;
  }
  const cache = loadFuelPriceCache();
  if (cache && cache.source === 'live') {
    updatePriceFreshness(cache.updatedAt || cache.timestamp, 'live');
  } else {
    updatePriceFreshness(null, 'default');
  }
  updateFuelPriceBadge();
}

async function initFuelPrices() {
  populateLocationDropdowns();
  const cache = loadFuelPriceCache();
  const now   = Date.now();

  // If cache is missing any default fuel key (e.g. DieselPlus from earlier visits), force re-fetch
  const hasAllFuels = cache && cache.prices && Object.keys(FUEL_DEFAULTS_RON).every(k => typeof cache.prices[k] === 'number');

  if (hasAllFuels && (now - cache.timestamp) < FUEL_CACHE_TTL) {
    refreshFreshnessBadge();
  } else {
    updatePriceFreshness(null, 'loading');
    await fetchFuelPrices();
    refreshFreshnessBadge();
  }

  if (selectedFuelType) {
    updateFuelTypeButtons();
    applyFuelTypePrice(selectedFuelType, false);
  }
}

async function refreshFuelPrices() {
  storageRemove(FUEL_CACHE_KEY);
  updatePriceFreshness(null, 'loading');
  const fresh = await fetchFuelPrices();
  refreshFreshnessBadge();
  if (selectedFuelType) applyFuelTypePrice(selectedFuelType, true);
  showToast(fresh ? t().priceLive + ' ✓' : t().priceDefault);
}

function selectFuelType(type) {
  const fuelKey = typeof normalizeFuelType === 'function' ? normalizeFuelType(type) : type;
  selectedFuelType = fuelKey;
  storageSet('comb_fuelType', fuelKey);
  updateFuelTypeButtons();
  // Reflect "RON only" notice when a type is picked under a non-RON currency.
  refreshFreshnessBadge();
  updateFuelPriceBadge();
  applyFuelTypePrice(fuelKey, true);
}

function applyFuelTypePrice(type, overwrite) {
  if (currency !== 'RON') {
    // Don't auto-fill for non-RON currencies — prices are RON-based
    return;
  }
  const fuelKey = typeof normalizeFuelType === 'function' ? normalizeFuelType(type) : type;
  const prices = getCurrentFuelPrices();
  const price  = prices[fuelKey] || FUEL_DEFAULTS_RON[fuelKey];
  if (!price) return;
  const val = price.toFixed(2);
  // Cost tab
  const pretEl = document.getElementById('pret');
  if (pretEl && (overwrite || !pretEl.value)) {
    pretEl.value = val;
    recalculeaza();
  }
  // Range tab
  const pretREl = document.getElementById('pret-r');
  if (pretREl && (overwrite || !pretREl.value)) {
    pretREl.value = val;
    calcRange();
  }
  updateFuelPriceBadge();
}

function updateFuelTypeButtons() {
  const normSelected = typeof normalizeFuelType === 'function' ? normalizeFuelType(selectedFuelType) : selectedFuelType;
  document.querySelectorAll('#fuel-type-grid .fuel-btn, #fuel-type-grid-r .fuel-btn').forEach(b => {
    const normBtn = typeof normalizeFuelType === 'function' ? normalizeFuelType(b.dataset.fuel) : b.dataset.fuel;
    b.classList.toggle('active', normBtn === normSelected);
  });
}

function updatePriceFreshness(timestamp, state) {
  const el = document.getElementById('price-freshness');
  if (!el) return;
  const tr     = t();
  const locale = limbaActiva === 'ro' ? 'ro-RO' : 'en-GB';

  const setText = (elem, text, cls) => {
    if (!elem) return;
    elem.textContent = text;
    elem.className   = cls;
  };
  const elR = document.getElementById('price-freshness-r');

  if (state === 'loading') {
    setText(el,  tr.priceLoading, 'price-freshness loading');
    setText(elR, tr.priceLoading, 'price-freshness loading');
  } else if (state === 'live' && timestamp) {
    const ds  = new Date(timestamp).toLocaleString(locale, {
      day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit'
    });
    const txt = '↻ ' + tr.priceUpdated + ' ' + ds;
    setText(el,  txt, 'price-freshness live');
    setText(elR, txt, 'price-freshness live');
  } else if (state === 'ron-only') {
    setText(el,  tr.priceRonOnly, 'price-freshness');
    setText(elR, tr.priceRonOnly, 'price-freshness');
  } else {
    setText(el,  tr.priceDefault, 'price-freshness');
    setText(elR, tr.priceDefault, 'price-freshness');
  }
}

// ── Language ─────────────────────────────────────────────────────────────────

function aplicaLimba() {
  const tr = t();
  const ids = {
    'app-titlu':          tr.titlu,
    'app-subtitlu':       tr.subtitlu,
    'tab-cost-label':     tr.tabCost,
    'tab-range-label':    tr.tabRange,
    'tab-history-label':  tr.tabHistory,
    'profile-default-opt':tr.profileDefault,
    'label-distanta':     tr.distanta,
    'label-tur-retur':    tr.turRetur,
    'label-consum':       tr.consum,
    'label-fuel-type':      tr.fuelType,
    'label-fuel-type-r':    tr.fuelType,
    'fuel-disclaimer':      tr.priceDisclaimer,
    'fuel-disclaimer-r':    tr.priceDisclaimer,
    'label-pret':         tr.pret,
    'label-pasageri':     tr.pasageri,
    'label-split':        tr.split,
    'label-buget':        tr.buget,
    'label-consum-r':     tr.consumR,
    'label-pret-r':       tr.pretR,
    'label-btn-calc':     tr.butonCalc,
    'label-btn-reset':    tr.butonReset,
    'label-share':        tr.share,
    'label-clear-history':tr.clearHistory,
    'modal-sync-title':   tr.syncTitle,
    'modal-sync-desc1':   tr.syncDesc1,
    'modal-sync-desc2':   tr.syncDesc2,
    'label-copy-sync':    tr.syncCopy,
    'label-apply-sync':   tr.syncApply,
    'label-install':      tr.installApp,
    'install-title':      tr.installTitle,
    'install-intro':      tr.installIntro,
  };
  for (const [id, text] of Object.entries(ids)) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }
  // Re-render install steps if the guide is open (language may have changed).
  const im = document.getElementById('install-modal');
  if (im && im.style.display !== 'none') renderInstallSteps();
  document.getElementById('btn-limba').textContent = limbaActiva === 'en' ? 'RO' : 'EN';
  document.documentElement.lang = limbaActiva;
  updateCurrencyLabels();
  populateLocationDropdowns();
  refreshFreshnessBadge();
  if (lastResult) afiseazaRezultat(lastResult);
  renderHistory();
}

function schimbaLimba() {
  limbaActiva = limbaActiva === 'en' ? 'ro' : 'en';
  storageSet('comb_limba', limbaActiva);
  aplicaLimba();
}

// ── Currency ─────────────────────────────────────────────────────────────────

function setCurrency(cur) {
  currency = cur;
  storageSet('comb_currency', cur);
  document.querySelectorAll('#currency-toggle .seg').forEach(b => {
    b.classList.toggle('active', b.dataset.cur === cur);
  });
  updateCurrencyLabels();
  // When switching back to RON and a fuel type is selected, auto-fill price.
  // Either way the freshness badge is re-evaluated so it never gets stuck
  // on the "RON only" notice after returning to RON.
  if (cur === 'RON' && selectedFuelType) {
    applyFuelTypePrice(selectedFuelType, true);
  }
  refreshFreshnessBadge();
  if (lastResult) afiseazaRezultat(lastResult);
}

function updateCurrencyLabels() {
  document.getElementById('unit-pret').textContent   = currency + '/L';
  document.getElementById('unit-pret-r').textContent = currency + '/L';
  document.getElementById('unit-buget').textContent  = currency;
}

// ── Consumption unit ──────────────────────────────────────────────────────────

function setConsumUnit(unit) {
  consumUnit = unit;
  storageSet('comb_consumUnit', unit);
  document.querySelectorAll('#consum-unit-toggle .seg').forEach(b => {
    b.classList.toggle('active', b.dataset.unit === unit);
  });
  document.getElementById('unit-consum').textContent = CONSUM_LABEL[unit];
  document.getElementById('consum').placeholder      = CONSUM_PLACEHOLDER[unit];
  recalculeaza();
}

// ── Tabs ──────────────────────────────────────────────────────────────────────

function setTab(tab) {
  ['cost', 'range', 'history'].forEach(id => {
    document.getElementById('tab-' + id).classList.toggle('active', id === tab);
    document.getElementById('panel-' + id).style.display = id === tab ? '' : 'none';
  });
  if (tab === 'range') {
    const c  = document.getElementById('consum').value;
    const p  = document.getElementById('pret').value;
    const cu = parseNum(c);
    if (!isNaN(cu) && cu > 0) {
      document.getElementById('consum-r').value = String(toL100(cu, consumUnit)).replace(',', '.');
    }
    if (p) document.getElementById('pret-r').value = p;
    calcRange();
  }
  if (tab === 'history') renderHistory();
}

// ── Split passengers ──────────────────────────────────────────────────────────

function toggleSplit() {
  const on = document.getElementById('split-toggle').checked;
  document.getElementById('pasageri-wrap').style.display = on ? '' : 'none';
  recalculeaza();
}

// ── Validation ────────────────────────────────────────────────────────────────

function valideaza(distanta, consumL100, pret) {
  const tr = t();
  if (isNaN(distanta) || distanta < 0.1 || distanta > 50000)
    return tr.eroareInterval(tr.distanta, 0.1, 50000);
  if (isNaN(consumL100) || consumL100 <= 0)
    return tr.eroareNaN(tr.consum);
  if (isNaN(pret) || pret < 0.1 || pret > 1000)
    return tr.eroareInterval(tr.pret, 0.1, 1000);
  return null;
}

function valideazaRange(buget, consumL100, pret) {
  const tr = t();
  if (isNaN(buget) || buget < 0.1 || buget > 1000000)
    return tr.eroareInterval(tr.buget, 0.1, 1000000);
  if (isNaN(consumL100) || consumL100 <= 0)
    return tr.eroareNaN(tr.consumR);
  if (isNaN(pret) || pret < 0.1 || pret > 1000)
    return tr.eroareInterval(tr.pretR, 0.1, 1000);
  return null;
}

// ── Cost calculation ──────────────────────────────────────────────────────────

function getDistantaEffectiva() {
  const d = parseNum(document.getElementById('distanta').value);
  return document.getElementById('tur-retur').checked ? d * 2 : d;
}

// Shared by both the live recalculation and the Calculate button.
function computeCostResult() {
  const distanta   = getDistantaEffectiva();
  const consumRaw  = parseNum(document.getElementById('consum').value);
  const consumL100 = toL100(consumRaw, consumUnit);
  const pret       = parseNum(document.getElementById('pret').value);

  // All fields empty / untouched — stay quiet so the app doesn't scream on load.
  if (isNaN(distanta) || isNaN(consumRaw) || isNaN(pret)) return null;

  const eroare = valideaza(distanta, consumL100, pret);
  if (eroare) return { eroare };

  const core      = FuelCore.computeCore(distanta, consumL100, pret);
  const splitOn   = document.getElementById('split-toggle').checked;
  const rawPax    = parseInt(document.getElementById('pasageri')?.value, 10);
  const pasageri  = splitOn ? Math.max(1, isNaN(rawPax) ? 1 : rawPax) : 1;

  return {
    litri:     core.litri,
    cost:      core.cost,
    costPerKm: core.costPerKm,
    pasageri,
    distanta,
    consumL100,
    pret,
  };
}

function recalculeaza() {
  const res = computeCostResult();
  if (!res) return;
  if (res.eroare) {
    afiseazaEroare(res.eroare);
    return;
  }
  lastResult = res;
  afiseazaRezultat(res);
}

function calculeaza() {
  const btn = document.getElementById('btn-calculeaza');
  const lbl = document.getElementById('label-btn-calc');
  const tr  = t();

  btn.disabled    = true;
  lbl.textContent = tr.butonLoading;

  const res = computeCostResult();
  if (!res) {
    btn.disabled    = false;
    lbl.textContent = tr.butonCalc;
    return;
  }
  if (res.eroare) {
    afiseazaEroare(res.eroare);
    btn.disabled    = false;
    lbl.textContent = tr.butonCalc;
    return;
  }

  lastResult = res;
  storageSet('comb_distanta', document.getElementById('distanta').value);
  storageSet('comb_consum',   document.getElementById('consum').value);
  storageSet('comb_pret',     res.pret);
  addToHistory(res);
  afiseazaRezultat(res);

  btn.disabled    = false;
  lbl.textContent = tr.butonCalc;
}

function afiseazaEroare(msg) {
  const wrap = document.getElementById('rezultat-wrap');
  const rez  = document.getElementById('rezultat');
  document.getElementById('share-row').style.display = 'none';
  wrap.style.display = 'block';
  rez.className   = 'eroare';
  rez.textContent = msg;
}

function afiseazaRezultat(res) {
  const tr   = t();
  const wrap = document.getElementById('rezultat-wrap');
  const rez  = document.getElementById('rezultat');
  wrap.style.display = 'block';
  document.getElementById('share-row').style.display = '';
  rez.className = '';

  const cols = res.pasageri > 1 ? 4 : 3;
  const perPaxHTML = res.pasageri > 1 ? `
    <div class="result-card" data-copy="${fmt.format(res.cost / res.pasageri)}">
      <div class="r-label">${tr.labelPerPax}</div>
      <div class="r-value">${fmt.format(res.cost / res.pasageri)}</div>
      <div class="r-unit">${currency}</div>
    </div>` : '';

  rez.innerHTML = `
    <div class="result-grid cols-${cols}">
      <div class="result-card" data-copy="${fmt1.format(res.litri)}">
        <div class="r-label">${tr.labelLitri}</div>
        <div class="r-value">${fmt1.format(res.litri)}</div>
        <div class="r-unit">${tr.unitLitri}</div>
      </div>
      <div class="result-card" data-copy="${fmt.format(res.cost)}">
        <div class="r-label">${tr.labelCost}</div>
        <div class="r-value">${fmt.format(res.cost)}</div>
        <div class="r-unit">${currency}</div>
      </div>
      <div class="result-card" data-copy="${fmt.format(res.costPerKm)}">
        <div class="r-label">${tr.labelCostKm}</div>
        <div class="r-value">${fmt.format(res.costPerKm)}</div>
        <div class="r-unit">${currency}/km</div>
      </div>
      ${perPaxHTML}
    </div>
  `;

  if (window.innerWidth <= 480) {
    setTimeout(() => {
      wrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 40);
  }
}

// ── Range calculation ─────────────────────────────────────────────────────────

function calcRange() {
  const buget     = parseNum(document.getElementById('buget').value);
  const consumL100 = parseNum(document.getElementById('consum-r').value);
  const pret      = parseNum(document.getElementById('pret-r').value);
  const wrap      = document.getElementById('range-result-wrap');
  const rez       = document.getElementById('range-rezultat');

  if (isNaN(buget) || isNaN(consumL100) || isNaN(pret)) return;

  const eroare = valideazaRange(buget, consumL100, pret);
  if (eroare) {
    afiseazaEroareRange(eroare);
    return;
  }

  const litri = buget / pret;
  const dist  = (litri / consumL100) * 100;

  wrap.style.display = 'block';
  rez.className = '';
  rez.innerHTML = `
    <div class="result-grid cols-2">
      <div class="result-card" data-copy="${fmt.format(dist)}">
        <div class="r-label">${t().labelMaxDist}</div>
        <div class="r-value">${fmt.format(dist)}</div>
        <div class="r-unit">${t().unitKm}</div>
      </div>
      <div class="result-card" data-copy="${fmt1.format(litri)}">
        <div class="r-label">${t().labelLitriR}</div>
        <div class="r-value">${fmt1.format(litri)}</div>
        <div class="r-unit">${t().unitLitri}</div>
      </div>
    </div>
  `;

  if (window.innerWidth <= 480) {
    setTimeout(() => {
      wrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 40);
  }
}

function afiseazaEroareRange(msg) {
  const wrap = document.getElementById('range-result-wrap');
  const rez  = document.getElementById('range-rezultat');
  wrap.style.display = 'block';
  rez.className = 'eroare';
  rez.innerHTML = '';
  rez.textContent = msg;
}

// ── Copy to clipboard ─────────────────────────────────────────────────────────

function copyValue(val) {
  if (!navigator.clipboard) return;
  navigator.clipboard.writeText(val).then(() => showToast(t().copiedMsg));
}

document.addEventListener('click', e => {
  const card = e.target.closest('.result-card[data-copy]');
  if (card) copyValue(card.dataset.copy);
});

// ── Share ─────────────────────────────────────────────────────────────────────

function shareResult() {
  if (!lastResult) return;
  const tr   = t();
  const text = [
    tr.titlu,
    `${tr.distanta}: ${fmt.format(lastResult.distanta)} km`,
    `${tr.labelLitri}: ${fmt1.format(lastResult.litri)} ${tr.unitLitri}`,
    `${tr.labelCost}: ${fmt.format(lastResult.cost)} ${currency}`,
    `${tr.labelCostKm}: ${fmt.format(lastResult.costPerKm)} ${currency}/km`,
  ].join('\n');

  if (navigator.share) {
    navigator.share({ title: tr.titlu, text });
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => showToast(t().copiedMsg));
  }
}

// ── Toast ─────────────────────────────────────────────────────────────────────

let toastTimer;
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 1800);
}

// ── History ───────────────────────────────────────────────────────────────────

function getHistory() {
  try { return JSON.parse(storageGet('comb_history') || '[]'); } catch { return []; }
}

function addToHistory(res) {
  const hist = getHistory();
  hist.unshift({
    date:      new Date().toISOString(),
    distanta:  res.distanta,
    litri:     res.litri,
    cost:      res.cost,
    costPerKm: res.costPerKm,
    pasageri:  res.pasageri,
    currency,
  });
  if (hist.length > 10) hist.pop();
  storageSet('comb_history', JSON.stringify(hist));
}

function clearHistory() {
  storageRemove('comb_history');
  renderHistory();
}

function renderHistory() {
  const hist = getHistory();
  const list = document.getElementById('history-list');
  const btn  = document.getElementById('btn-clear-history');
  const tr   = t();

  if (!hist.length) {
    list.innerHTML = `<p class="no-history">${tr.noHistory}</p>`;
    btn.style.display = 'none';
    return;
  }

  btn.style.display = '';
  const locale = limbaActiva === 'ro' ? 'ro-RO' : 'en-GB';
  list.innerHTML = hist.map(h => {
    const ds  = new Date(h.date).toLocaleString(locale, {
      day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit'
    });
    const cur = h.currency || 'RON';
    const perPax = h.pasageri > 1
      ? `<span>${tr.labelPerPax}: ${fmt.format(h.cost / h.pasageri)} ${cur}</span>` : '';
    return `
      <div class="hist-item">
        <div class="hist-date">${ds}</div>
        <div class="hist-vals">
          <span>${fmt.format(h.distanta)} km</span>
          <span>${fmt1.format(h.litri)} L</span>
          <span class="hist-cost">${fmt.format(h.cost)} ${cur}</span>
          ${perPax}
        </div>
      </div>
    `;
  }).join('');
}

// ── Vehicle profiles ──────────────────────────────────────────────────────────

function renderProfiles() {
  const sel      = document.getElementById('profile-select');
  const tr       = t();
  const profiles = getProfiles();
  const current  = sel.value;

  // Build <option> nodes with textContent — no HTML injection surface.
  sel.innerHTML = '';
  const opts = [{ value: '', label: tr.profileDefault }];
  profiles.forEach(p => opts.push({ value: p.id, label: p.name }));
  opts.forEach(o => {
    const option = document.createElement('option');
    option.value = o.value;
    option.textContent = o.label;
    sel.appendChild(option);
  });
  if (current) sel.value = current;
}

function saveProfile() {
  const consumVal = document.getElementById('consum').value;
  if (!consumVal) return;
  const tr   = t();
  const name = prompt(tr.profileName);
  if (!name || !name.trim()) return;
  const profiles = getProfiles();
  profiles.push({ id: Date.now().toString(), name: name.trim(), consum: parseNum(consumVal), unit: consumUnit });
  saveProfiles(profiles);
  renderProfiles();
  showToast(tr.profileSaved);
}

function loadProfile() {
  const id = document.getElementById('profile-select').value;
  if (!id) return;
  const p = getProfiles().find(x => x.id === id);
  if (!p) return;
  setConsumUnit(p.unit || 'L100');
  document.getElementById('consum').value = p.consum;
  recalculeaza();
}

function deleteProfile() {
  const id = document.getElementById('profile-select').value;
  const tr = t();
  if (!id) { showToast(tr.profileNone); return; }
  saveProfiles(getProfiles().filter(p => p.id !== id));
  renderProfiles();
  showToast(tr.profileDeleted);
}

// ── Mobile / PWA Native App Experience ──────────────────────────────────────────
// 1. Prevent double-tap-to-zoom on screen (so app acts like a native mobile app)
// 2. Prevent pinch/gesture zoom
// 3. Prevent unnecessary screen scrolling/rubber-banding when content fits on screen
//    Scroll is ONLY enabled when data/content actually overflows the viewport.

function initMobileAppBehavior() {
  // Prevent double-click zoom
  document.addEventListener('dblclick', (e) => {
    e.preventDefault();
  }, { passive: false });

  // Prevent Safari gesture zooming (pinch to zoom)
  ['gesturestart', 'gesturechange', 'gestureend'].forEach(evt => {
    document.addEventListener(evt, (e) => {
      e.preventDefault();
    }, { passive: false });
  });

  // Prevent double-tap zoom on iOS Safari while allowing normal fast taps
  let lastTouchEndTime = 0;
  document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTouchEndTime <= 300) {
      const tag = e.target.tagName;
      if (tag !== 'INPUT' && tag !== 'TEXTAREA') {
        e.preventDefault();
        if (typeof e.target.click === 'function') {
          e.target.click();
        }
      }
    }
    lastTouchEndTime = now;
  }, { passive: false });

  // Smart touch scrolling:
  // Disables rubber-banding / unwanted scrolling when content fits on screen.
  // Allows scrolling only when content exceeds viewport or within scrollable containers.
  let startY = 0;
  let startX = 0;

  document.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches.length === 1) {
      startY = e.touches[0].clientY;
      startX = e.touches[0].clientX;
    }
  }, { passive: true });

  document.addEventListener('touchmove', (e) => {
    if (!e.touches || e.touches.length !== 1) {
      e.preventDefault(); // pinch or multi-touch zoom prevented
      return;
    }

    const currentY = e.touches[0].clientY;
    const currentX = e.touches[0].clientX;
    const deltaY = startY - currentY; // > 0: dragging up (scrolling down)
    const deltaX = startX - currentX;

    // If predominantly horizontal gesture, do not intercept
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      return;
    }

    // Never block interaction on form elements
    const tag = e.target.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') {
      return;
    }

    // Check if user is scrolling inside an internal scrollable container (e.g. modal-box)
    let el = e.target;
    let foundScrollable = null;
    while (el && el !== document.body && el !== document.documentElement) {
      const style = window.getComputedStyle(el);
      const ovY = style.overflowY;
      if ((ovY === 'auto' || ovY === 'scroll') && el.scrollHeight > el.clientHeight) {
        foundScrollable = el;
        break;
      }
      el = el.parentElement;
    }

    if (foundScrollable) {
      const atTop = foundScrollable.scrollTop <= 0;
      const atBottom = foundScrollable.scrollTop + foundScrollable.clientHeight >= foundScrollable.scrollHeight - 1;
      // If at scroll boundary, prevent outer bounce
      if ((deltaY < 0 && atTop) || (deltaY > 0 && atBottom)) {
        e.preventDefault();
      }
      return;
    }

    // Check if the page itself has content that exceeds the screen
    const docHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight,
      document.documentElement.offsetHeight,
      document.body.offsetHeight
    );
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const isScrollNeeded = docHeight > viewportHeight + 4;

    if (!isScrollNeeded) {
      // Content fits entirely on screen -> DO NOT SCROLL
      e.preventDefault();
      return;
    }

    // If scroll IS needed, allow normal smooth scrolling, but prevent elastic bounce past edges
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    const maxScroll = docHeight - viewportHeight;
    const atPageTop = scrollTop <= 0;
    const atPageBottom = scrollTop >= maxScroll - 1;

    if ((deltaY < 0 && atPageTop) || (deltaY > 0 && atPageBottom)) {
      e.preventDefault();
    }
  }, { passive: false });
}

// ── Reset ─────────────────────────────────────────────────────────────────────

function resetForm() {
  ['distanta', 'consum'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('tur-retur').checked    = false;
  document.getElementById('split-toggle').checked = false;
  document.getElementById('pasageri-wrap').style.display = 'none';
  document.getElementById('profile-select').value = '';
  document.getElementById('rezultat-wrap').style.display = 'none';
  document.getElementById('share-row').style.display     = 'none';
  // Range tab fields + results are cleared too so stale values don't linger.
  ['buget', 'consum-r', 'pret-r'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('range-result-wrap').style.display = 'none';
  document.getElementById('range-rezultat').className = '';
  document.getElementById('range-rezultat').textContent = '';
  lastResult = null;
  // Re-apply fuel type price if one is selected, otherwise clear price
  if (selectedFuelType && currency === 'RON') {
    applyFuelTypePrice(selectedFuelType, true);
  } else {
    document.getElementById('pret').value = '';
  }
}

// ── Init ──────────────────────────────────────────────────────────────────────

function incarca() {
  const d = storageGet('comb_distanta');
  const c = storageGet('comb_consum');
  const p = storageGet('comb_pret');
  if (d) document.getElementById('distanta').value = d;
  if (c) document.getElementById('consum').value   = c;
  if (p) document.getElementById('pret').value     = p;

  document.querySelectorAll('#currency-toggle .seg').forEach(b => {
    b.classList.toggle('active', b.dataset.cur === currency);
  });
  document.querySelectorAll('#consum-unit-toggle .seg').forEach(b => {
    b.classList.toggle('active', b.dataset.unit === consumUnit);
  });
  document.getElementById('unit-consum').textContent = CONSUM_LABEL[consumUnit];
  document.getElementById('consum').placeholder      = CONSUM_PLACEHOLDER[consumUnit];

  updateCurrencyLabels();
  aplicaLimba();
  initFirebase();
  updateFuelTypeButtons();
  initFuelPrices();
  initInstall();
  updateThemeColorMeta();
  initMobileAppBehavior();
  recalculeaza();

  // Enter submits from any input: cost inputs run the cost calc, range inputs
  // run the range calc — no more calculating the wrong tab on Enter.
  document.querySelectorAll('input[type=number]').forEach(inp => {
    inp.addEventListener('keydown', e => {
      if (e.key !== 'Enter') return;
      if (inp.closest('#panel-range')) {
        calcRange();
      } else {
        calculeaza();
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', incarca);

// globals
window.calculeaza    = calculeaza;
window.recalculeaza  = recalculeaza;
window.schimbaLimba  = schimbaLimba;
window.setTab        = setTab;
window.setConsumUnit = setConsumUnit;
window.setCurrency   = setCurrency;
window.toggleSplit   = toggleSplit;
window.calcRange     = calcRange;
window.shareResult   = shareResult;
window.clearHistory  = clearHistory;
window.saveProfile   = saveProfile;
window.loadProfile   = loadProfile;
window.deleteProfile = deleteProfile;
window.resetForm     = resetForm;
window.openSyncModal      = openSyncModal;
window.closeSyncModal     = closeSyncModal;
window.onOverlayClick     = onOverlayClick;
window.copySyncCode       = copySyncCode;
window.applySyncCode      = applySyncCode;
window.selectFuelType     = selectFuelType;
window.setFuelLocation    = setFuelLocation;
window.refreshFuelPrices  = refreshFuelPrices;
window.handleInstallClick = handleInstallClick;
window.closeInstallModal  = closeInstallModal;
window.onInstallOverlayClick = onInstallOverlayClick;
window.toggleTheme        = toggleTheme;
