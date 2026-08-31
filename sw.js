const CACHE = "sven-v4.5";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./assets/exercises/bulgarian_split.svg",
  "./assets/exercises/cable_crunch.svg",
  "./assets/exercises/cable_curl.svg",
  "./assets/exercises/cable_fly.svg",
  "./assets/exercises/cable_lateral.svg",
  "./assets/exercises/cable_leg_curl.svg",
  "./assets/exercises/db_row.svg",
  "./assets/exercises/ez_curl.svg",
  "./assets/exercises/face_pull.svg",
  "./assets/exercises/hammer_curl.svg",
  "./assets/exercises/incline_curl.svg",
  "./assets/exercises/incline_db.svg",
  "./assets/exercises/lat_pull.svg",
  "./assets/exercises/overhead_tri.svg",
  "./assets/exercises/reverse_crunch.svg",
  "./assets/exercises/seated_row.svg",
  "./assets/exercises/shoulder_press.svg",
  "./assets/exercises/smith_bench.svg",
  "./assets/exercises/smith_calf.svg",
  "./assets/exercises/smith_rdl.svg",
  "./assets/exercises/smith_squat.svg",
  "./assets/exercises/stationary_bike.svg",
  "./assets/exercises/straight_arm_pull.svg",
  "./assets/exercises/treadmill_walk.svg",
  "./assets/exercises/triceps_push.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) =>
      cached || fetch(event.request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE).then((cache) => cache.put(event.request, copy));
        return response;
      }).catch(() => caches.match("./index.html"))
    )
  );
});
