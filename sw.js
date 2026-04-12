/* ========================================
   Homework Design Studio — Service Worker
   Cache-first for shell, network-first for dynamic
   ======================================== */

const CACHE_NAME = 'homework-v2';

const SHELL_ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './favicon.svg',
  './offline.html',
];

// Filenames (without './') used for the shell-asset matching check.
// Excludes './' because that matches every URL.
const SHELL_FILENAMES = SHELL_ASSETS
  .map(asset => asset.replace(/^\.\//, ''))
  .filter(name => name.length > 0);

// Install — cache shell assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(SHELL_ASSETS))
  );
  self.skipWaiting();
});

// Activate — clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch strategy
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Google Fonts — cache-first (they rarely change)
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return response;
        });
      })
    );
    return;
  }

  // Shell assets — cache-first
  const isShellAsset = SHELL_FILENAMES.some(name => url.pathname.endsWith('/' + name) || url.pathname.endsWith(name));
  if (event.request.mode === 'navigate' || isShellAsset) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        const fetchPromise = fetch(event.request).then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return response;
        }).catch(() => cached || caches.match('./offline.html'));

        return cached || fetchPromise;
      })
    );
    return;
  }

  // Everything else — network-first with offline fallback
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
