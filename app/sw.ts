import { defaultCache } from "@serwist/next/worker";
import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
import { CacheFirst, Serwist } from "serwist";

// This declares the value of `injectionPoint` to TypeScript.
// `injectionPoint` is the string that will be replaced by the
// actual precache manifest. By default, this string is set to
// `"self.__SW_MANIFEST"`.
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
  runtimeCaching: [
    {
      matcher: /.*/, // regex for matching all urls      
      handler: new CacheFirst(),
    },
  ],
});

self.addEventListener('fetch', (event) => {
  if (event.preloadResponse) {
    event.respondWith(
      (async () => {
        const preloadResponse = await event.preloadResponse;
        await new Promise(resolve => setTimeout(resolve, 100)); // Introduce a small delay
        return preloadResponse || fetch(event.request);
      })()
    );
  }
});

serwist.addEventListeners();