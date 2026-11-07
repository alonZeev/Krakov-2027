const CACHE_NAME = 'poland-trip-v2';
const ASSETS = [
    './',
    './index.html',
    './styles.css',
    './app.js',
    './sw.js',
    './manifest.json',
    './icons/icon-192.png',
    './icons/icon-512.png'
];

self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
    e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request)));
});
