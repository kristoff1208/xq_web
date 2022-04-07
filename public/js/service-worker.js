const staticCacheName = "v10::design-embraced";
this.addEventListener("install", (e) => {
  this.skipWaiting(),
    e.waitUntil(
      caches.open(staticCacheName).then((e) => e.addAll(["/offline.html"]))
    );
}),
  this.addEventListener("fetch", (e) => {
    e.respondWith(
      caches
        .match(e.request)
        .then((t) => t || fetch(e.request))
        .catch(() => caches.match("/offline.html"))
    );
  });
