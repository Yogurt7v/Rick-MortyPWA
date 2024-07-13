/* eslint-disable no-unused-vars */
const staticCacheName = "static-site-V1";
const dynamicCacheName = "dynamic-site-V1";

const ASSETS = [
  "/",
  "/index.html",
  "/src/index.css",
  "/src/App.css",
  "/app.js",
  "/sw.js",
  "/src/assets/Rick_and_Morty.svg.png",
  "/src/assets/background.jpg",
];

self.addEventListener("install", async (event) => {
  const cache = await caches.open(staticCacheName);
  await cache.addAll(ASSETS);
});

self.addEventListener("activate", async (event) => {
  const cachesKeysArray = await caches.keys();
  await Promise.all(
    cachesKeysArray
      .filter((key) => key !== staticCacheName)
      .map((key) => caches.delete(key))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request));
});

async function cacheFirst(request) {
  const cache = await caches.open(request);
  try {
    return cache || (await fetch(request));
  } catch (e) {
    console.log(e);
    return networkFirst(request);
  }
}

async function networkFirst(request) {
  const cache = await caches.open(request);
  try {
    const resp = await fetch(request);
    await cache.put(request, resp.clone());
    return resp;
  } catch (e) {
    console.log(e);
    const cached = await cache.match(request);
    return cached ?? await caches.match("/");
  }
}
