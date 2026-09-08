// tests/core.test.js — zero-dependency unit tests for core.js
// Run from repo root:  node tests/core.test.js
'use strict';

const path = require('path');
const assert = require('assert');
require(path.join(__dirname, '..', 'core.js'));

const { parseNum, toL100, computeCore, normalizeFuelType, mergeFuelPrices } = global.FuelCore;

let passed = 0;
const failures = [];

function test(name, fn) {
  try {
    fn();
    passed++;
  } catch (err) {
    failures.push({ name, err });
  }
}

// ── parseNum ─────────────────────────────────────────────────────────────────

test('parseNum: European decimal comma', () => {
  assert.strictEqual(parseNum('6,5'), 6.5);
});

test('parseNum: dot decimal', () => {
  assert.strictEqual(parseNum('7.20'), 7.2);
});

test('parseNum: trims whitespace', () => {
  assert.strictEqual(parseNum('  150 '), 150);
});

test('parseNum: empty string → NaN', () => {
  assert.ok(Number.isNaN(parseNum('')));
});

test('parseNum: null/undefined → NaN', () => {
  assert.ok(Number.isNaN(parseNum(null)));
  assert.ok(Number.isNaN(parseNum(undefined)));
});

test('parseNum: garbage → NaN', () => {
  assert.ok(Number.isNaN(parseNum('abc')));
});

// ── toL100 ─────────────────────────────────────────────────────────────────

test('toL100: L100 passthrough', () => {
  assert.strictEqual(toL100(6.5, 'L100'), 6.5);
});

test('toL100: km/L → L/100', () => {
  assert.strictEqual(toL100(20, 'kmL'), 5);
});

test('toL100: mpg → L/100 (US factor 235.214)', () => {
  assert.ok(Math.abs(toL100(36, 'mpg') - 235.214 / 36) < 1e-9);
});

// ── computeCore ────────────────────────────────────────────────────────────

test('computeCore: 150 km @ 6.5 L/100 @ 7.20 RON', () => {
  const r = computeCore(150, 6.5, 7.2);
  assert.ok(Math.abs(r.litri - 9.75) < 1e-9);          // 150/100*6.5
  assert.ok(Math.abs(r.cost - 70.2) < 1e-9);           // 9.75*7.2
  assert.ok(Math.abs(r.costPerKm - 0.468) < 1e-9);     // 70.2/150
});

test('computeCore: round-trip distance doubles', () => {
  const r = computeCore(300, 6.5, 7.2);                // 150 × 2
  assert.ok(Math.abs(r.litri - 19.5) < 1e-9);
  assert.ok(Math.abs(r.cost - 140.4) < 1e-9);
});

test('computeCore: zero distance divides safely (costPerKm = Infinity)', () => {
  const r = computeCore(0, 6.5, 7.2);
  assert.strictEqual(r.litri, 0);
  assert.strictEqual(r.cost, 0);
  // costPerKm = 0/0 = NaN — callers validate distance > 0 first, so this only
  // documents the pure-math behaviour, it must not throw.
  assert.ok(typeof r.costPerKm === 'number');
});

test('parseNum: handles negative number strings correctly', () => {
  assert.strictEqual(parseNum('-5'), -5);
  assert.strictEqual(parseNum(' -3,14 '), -3.14);
});

test('computeCore: handles decimal precision for liters and cost accurately', () => {
  const r = computeCore(85.5, 5.2, 9.72);
  const expectedLiters = (85.5 / 100) * 5.2;
  const expectedCost = expectedLiters * 9.72;
  assert.ok(Math.abs(r.litri - expectedLiters) < 1e-9);
  assert.ok(Math.abs(r.cost - expectedCost) < 1e-9);
  assert.ok(Math.abs(r.costPerKm - (expectedCost / 85.5)) < 1e-9);
});

// ── fuel-prices.json verification ──────────────────────────────────────────

test('normalizeFuelType: normalizes DieselPlus variations', () => {
  assert.strictEqual(normalizeFuelType('DieselPlus'), 'DieselPlus');
  assert.strictEqual(normalizeFuelType('diesel+'), 'DieselPlus');
  assert.strictEqual(normalizeFuelType('Diesel+'), 'DieselPlus');
  assert.strictEqual(normalizeFuelType('dieselplus'), 'DieselPlus');
  assert.strictEqual(normalizeFuelType('DIESEL+'), 'DieselPlus');
  assert.strictEqual(normalizeFuelType('95'), 'B95');
  assert.strictEqual(normalizeFuelType('b95'), 'B95');
  assert.strictEqual(normalizeFuelType('98'), 'B98');
  assert.strictEqual(normalizeFuelType('b98'), 'B98');
  assert.strictEqual(normalizeFuelType('diesel'), 'Diesel');
  assert.strictEqual(normalizeFuelType('gpl'), 'GPL');
  assert.strictEqual(normalizeFuelType(''), '');
  assert.strictEqual(normalizeFuelType(null), '');
});

test('mergeFuelPrices: safely preserves DieselPlus when cached prices are missing it', () => {
  const defaults = { B95: 9.77, B98: 10.18, Diesel: 10.23, DieselPlus: 10.61, GPL: 4.67 };
  // Old stale cache before DieselPlus was added
  const staleCache = { B95: 9.70, B98: 10.10, Diesel: 10.20, GPL: 4.60 };
  const merged = mergeFuelPrices(defaults, staleCache);
  assert.strictEqual(merged.DieselPlus, 10.61, 'DieselPlus must fall back to default when missing in cache');
  assert.strictEqual(merged.B95, 9.70, 'B95 should take cached value');
  assert.strictEqual(merged.Diesel, 10.20, 'Diesel should take cached value');

  // City without DieselPlus should still retain DieselPlus from base
  const cityPricesWithoutDieselPlus = { B95: 9.65, Diesel: 10.15 };
  const cityMerged = mergeFuelPrices(merged, null, cityPricesWithoutDieselPlus);
  assert.strictEqual(cityMerged.DieselPlus, 10.61, 'DieselPlus must persist in city prices if city data lacks it');
  assert.strictEqual(cityMerged.Diesel, 10.15, 'City-specific diesel should override');
});

test('fuel-prices.json: valid structure and realistic Romanian prices', () => {
  const fs = require('fs');
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'fuel-prices.json'), 'utf8'));
  assert.ok(data.prices, 'missing prices object');
  const requiredKeys = ['B95', 'B98', 'Diesel', 'DieselPlus', 'GPL'];
  requiredKeys.forEach(k => {
    assert.ok(typeof data.prices[k] === 'number', `price ${k} is not a number`);
    assert.ok(data.prices[k] >= 2.0 && data.prices[k] <= 25.0, `price ${k} (${data.prices[k]}) is outside realistic bounds`);
  });
  assert.ok(data.prices.B98 >= data.prices.B95, 'B98 premium petrol should be >= B95 regular');
  assert.ok(data.prices.DieselPlus >= data.prices.Diesel, 'DieselPlus premium diesel should be >= standard Diesel');
  assert.ok(data.prices.GPL < data.prices.B95, 'GPL price should be less than petrol');
  assert.ok(data.cities && Object.keys(data.cities).length >= 10, 'expected at least 10 city prices');
  assert.ok(data.cities.Bucuresti, 'Bucuresti city prices should be present');
});

// ── Report ─────────────────────────────────────────────────────────────────

console.log(`\n✓ ${passed} tests passed`);
if (failures.length) {
  console.log(`✗ ${failures.length} tests FAILED:\n`);
  failures.forEach(({ name, err }) => {
    console.log(`  - ${name}\n    ${err.message}`);
  });
  process.exit(1);
}
