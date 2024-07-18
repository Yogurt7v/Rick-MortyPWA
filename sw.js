const staticCacheName = "static-site-V3";
const dynamicCacheName = "dynamic-site-V3";

const ASSETS = [
  "/",
  "/index.html",
  "/src/index.css",
  "/src/App.css",
  "/app.js",
  "/src/App.jsx",
  "/src/main.jsx",
  "/error.html",
  "/src/pages/Categories.jsx",
  "/src/pages/Home.jsx",
  "/src/pages/Locations.jsx",
  "/src/pages/Episodes.jsx",
  "/src/pages/Heroes.jsx",
  "/src/assets/Rick_and_Morty.svg.png",
  "/src/assets/background.jpg",
];

self.addEventListener("install", async () => {
  const cache = await caches.open(staticCacheName);
  await cache.addAll(ASSETS);
  console.log("### Installed service worker");
}); 

self.addEventListener("activate", async () => {
  console.log("### Activated service worker");
  const cachesKeysArr = await caches.keys();
  await Promise.all(
    cachesKeysArr
      .filter((key) => key !== staticCacheName && key !== dynamicCacheName)
      .map((key) => caches.delete(key))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request));
});

async function cacheFirst(request) {
  const cached = await caches.match(request);
  try {
    return cached ?? await fetch(request)
    .then((response) => {
      console.log("### Caching", response);
        return networkFirst(request);
      })
  } catch (e) {
    return networkFirst(request);
  }
}

async function networkFirst(request) {
  const cache = await caches.open(dynamicCacheName);

  try {
    const response = await fetch(request);
    await cache.put(request, response.clone());
    return response;
  } catch (e) {
    const cached = await cache.match(request);
    return cached ?? await caches.match("./error.html");
  }
}
