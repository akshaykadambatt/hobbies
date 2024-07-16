import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
import { CacheableResponsePlugin, CacheFirst, NetworkFirst, Serwist } from "serwist";
import { defaultCache } from "@serwist/next/worker";

declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}
declare const self: ServiceWorkerGlobalScope;

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  disableDevLogs: true,
  runtimeCaching: [
    ...defaultCache, 
    {
      matcher: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      handler: new CacheFirst(),
    },
    {
      matcher: /\.(?:js|css|webp|png|jpg|jpeg|svg|gif)$/i,
      handler: new CacheFirst(),
    },
    {
      matcher: /.*/,
      handler: new NetworkFirst(),
    }
  ],
});
self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const preloadResponse = await event.preloadResponse;
        if (preloadResponse) {
          return preloadResponse;
        }

        const networkResponse = await fetch(event.request);
        return networkResponse;
      } catch (error) {
        // Handle errors
      }
    })());
  }
});

serwist.addEventListeners();