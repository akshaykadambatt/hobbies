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
      matcher: /^https:\/\/api\.yourdomain\.com\/.*/i,
      handler: new NetworkFirst(),
    },
    {
      matcher: /.*/,
      handler: new NetworkFirst(),
    },
    {
      matcher({ request }) {
        return true
      },
      handler: new CacheFirst({
      }),
    }
  ],
});

serwist.addEventListeners();