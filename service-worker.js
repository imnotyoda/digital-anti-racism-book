self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("anti-racism-book-cache").then(function(cache) {
      return cache.addAll(["index.html"]);
    })
  );
});
