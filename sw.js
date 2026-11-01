const CACHE_NAME = 'montenegro-trip-v7';
const ASSETS = ['./', './index.html', './styles.css', './app.js', './sw.js', './manifest.json'];

self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
    e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request)));
});