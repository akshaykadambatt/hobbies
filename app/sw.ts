import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
import {
  CacheableResponsePlugin,
  CacheFirst,
  NetworkFirst,
  Serwist,
  StaleWhileRevalidate,
} from "serwist";
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
      matcher: /\.(?:webp|png|jpg|jpeg|svg|gif)$/i,
      handler: new CacheFirst(),
    },
    {
      matcher: /\.(?:js|css)$/i,
      handler: new NetworkFirst(),
    },
    {
      matcher: /^https:\/\/api\.hobbies1\.com\/.*/i,
      handler: new NetworkFirst(),
    },
    {
      matcher: /.*/,
      handler: new NetworkFirst(),
    }
  ],
});
const swr = new NetworkFirst();

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (url.origin === location.origin && url.pathname === "/") {
    event.respondWith(swr.handle({ event, request }));
  }
});
serwist.addEventListeners();
