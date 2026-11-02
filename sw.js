const CACHE_NAME = 'naruka-erp-shell-v2';
const SHELL = ['./', './index.html', './manifest.json', './icons/icon-192.png', './icons/icon-512.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(SHELL)));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))));
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  // Only cache this GitHub Pages app shell. Never cache the Apps Script ERP,
  // student information, login/session data, or other cross-origin responses.
  if (url.origin === self.location.origin && event.request.method === 'GET') {
    event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
  }
});
