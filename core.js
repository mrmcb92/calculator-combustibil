// core.js — pure math helpers shared between the app and its Node unit tests.
// Loaded BEFORE app.js in index.html. Exposes the helpers as globals for the
// app and as window.FuelCore (namespace) for the test suite.
(function (global) {
  'use strict';

  // Convert user input to a number, tolerating European decimal commas ("6,5").
  // Returns NaN for empty / non-numeric input.
  function parseNum(value) {
    if (value === null || value === undefined || value === '') return NaN;
    const s = String(value).trim().replace(',', '.');
    return parseFloat(s);
  }

  // Convert a consumption value in the given unit to litres per 100 km.
  function toL100(val, unit) {
    if (unit === 'kmL') return 100 / val;
    if (unit === 'mpg') return 235.214 / val;
    return val;
  }

  // Pure cost calculation for a one-way or round-trip distance in km.
  // Inputs must already be validated by the caller (see valideaza()).
  function computeCore(distantaKm, consumL100, pretPerL) {
    const litri     = (distantaKm / 100) * consumL100;
    const cost      = litri * pretPerL;
    const costPerKm = cost / distantaKm;
    return { litri, cost, costPerKm };
  }

  const CONSUM_PLACEHOLDER = { L100: '6.5', kmL: '15.4', mpg: '36' };
  const CONSUM_LABEL       = { L100: 'L/100', kmL: 'km/L', mpg: 'mpg' };

  // Normalizes fuel type keys to standard identifiers: B95, B98, Diesel, DieselPlus, GPL.
  // Tolerates variants like "diesel+", "Diesel+", "dieselplus", "95", "98", etc.
  function normalizeFuelType(type) {
    if (!type) return '';
    const s = String(type).trim();
    const lower = s.toLowerCase().replace(/[\s_\-+]/g, '');
    if (lower === 'dieselplus' || s.toLowerCase() === 'diesel+' || lower === 'dplus') return 'DieselPlus';
    if (lower === 'b95' || lower === '95') return 'B95';
    if (lower === 'b98' || lower === '98') return 'B98';
    if (lower === 'diesel') return 'Diesel';
    if (lower === 'gpl') return 'GPL';
    return s;
  }

  // Safely merges fallback default prices with cached prices and optional city prices.
  // Guarantees all default fuels (including DieselPlus) exist even with stale caches.
  function mergeFuelPrices(defaults, cachePrices, cityPrices) {
    const base = Object.assign({}, defaults || {}, cachePrices || {});
    if (cityPrices && typeof cityPrices === 'object') {
      return Object.assign({}, base, cityPrices);
    }
    return base;
  }

  // Globals used by app.js (kept in global scope so existing references work).
  global.parseNum           = parseNum;
  global.toL100             = toL100;
  global.CONSUM_PLACEHOLDER = CONSUM_PLACEHOLDER;
  global.CONSUM_LABEL       = CONSUM_LABEL;
  global.normalizeFuelType  = normalizeFuelType;
  global.mergeFuelPrices    = mergeFuelPrices;

  // Namespace used by the Node unit tests (tests/core.test.js).
  global.FuelCore = { parseNum, toL100, computeCore, CONSUM_PLACEHOLDER, CONSUM_LABEL, normalizeFuelType, mergeFuelPrices };
})(typeof window !== 'undefined' ? window : globalThis);
