const CACHE_NAME = 'combustibil-v16';
const resurse = [
  './',
  'index.html',
  'app.js',
  'core.js',
  'style.css',
  'manifest.json',
  'favicon.svg',
  'favicon-32.png',
  'favicon-16.png',
  'apple-touch-icon.png',
  'icon-nou-192.png',
  'icon-nou-512.png',
  'fuel-prices.json'
];

self.addEventListener('install', (eveniment) => {
  self.skipWaiting();
  eveniment.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      const urlsToCache = resurse.map(url => new URL(url, self.location.href).href);
      return cache.addAll(urlsToCache);
    }).catch((err) => {
      console.error('[SW] Eroare la instalare, nu s-au putut cachea resursele:', err);
    })
  );
});

self.addEventListener('activate', (eveniment) => {
  eveniment.waitUntil(
    caches.keys().then((numeCacheUri) => {
      return Promise.all(
        numeCacheUri.map((nume) => {
          if (nume !== CACHE_NAME) {
            return caches.delete(nume);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (eveniment) => {
  if (eveniment.request.method !== 'GET') return;
  if (!eveniment.request.url.startsWith('http')) return;

  // Don't intercept cross-origin requests (e.g. Firebase, external APIs)
  const reqUrl = new URL(eveniment.request.url);
  if (reqUrl.origin !== self.location.origin) return;

  eveniment.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(eveniment.request).then((raspunsCache) => {
        const cerereRetea = fetch(eveniment.request).then((raspunsRetea) => {
          if (raspunsRetea && raspunsRetea.status === 200) {
            cache.put(eveniment.request, raspunsRetea.clone());
          }
          return raspunsRetea;
        }).catch(() => {
          // rețeaua nu e disponibilă, nu facem nimic
        });

        // returnează cache-ul imediat dacă există, altfel așteptăm rețeaua
        return raspunsCache || cerereRetea;
      });
    })
  );
});
