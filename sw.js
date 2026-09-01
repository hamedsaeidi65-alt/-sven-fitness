const CACHE = "sven-v4.13-meal-libraries";
const ASSETS = ["./manifest.json"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const req = event.request;
  const isHTML = req.mode === "navigate" || req.destination === "document" || new URL(req.url).pathname.endsWith("/index.html");

  if (isHTML) {
    event.respondWith(
      fetch(req, { cache: "no-store" })
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put("./index.html", copy));
          return response;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  event.respondWith(
    caches.match(req).then((cached) =>
      cached || fetch(req).then((response) => {
        const copy = response.clone();
        caches.open(CACHE).then((cache) => cache.put(req, copy));
        return response;
      })
    )
  );
});
