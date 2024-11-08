// @see https://web.dev/articles/service-worker-lifecycle?hl=ja#updates

const cacheName = "react-service-worker-sample-cache";
const urlsToCache = [
  "/index.html",
  "/assets/",
  "./App.tsx",
  // other files
];

// @see https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/install_event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// @see https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/activate_event
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [cacheName];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// @see https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/fetch_event
self.addEventListener("fetch", (_event) => {
  // 例) APIなどのrequestを見て、キャッシュがあればそれを返す
});

// @see https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/push_event
self.addEventListener("push", (_event) => {
  // 例) push messageを受け取った時に処理を行う
});

// @see https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/sync_event
self.addEventListener("sync", (_event) => {
  // 例) offline→onlineになった時に同期処理を行う
});
