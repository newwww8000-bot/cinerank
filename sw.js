// sw.js
const CF_PROXY = 'https://api.themoviedb.org'; // Cloudflare DNS still resolves this
self.addEventListener('fetch', event => {
  const url = event.request.url;
  if (url.includes('api.themoviedb.org')) {
    // Clone request, keep original headers, just send it through
    event.respondWith(fetch(event.request));
  }
});
