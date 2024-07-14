import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    "name": "Hobbies",
    "short_name": "Hobbies",
    "icons":[
        {
            "src": "/icons/android-chrome-144x144.png",
            "purpose": "maskable",
          "sizes": "144x144",
          "type": "image/png",
        },
        {
          "src": "/icons/android-chrome-192x192.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "any"
        },
        {
          "src": "/icons/android-chrome-512x512.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "any"
        }
      ],
    "theme_color": "#FFFFFF",
    "background_color": "#FFFFFF",
    "start_url": "/",
    "scope": ".",
    "display": "standalone",
    "orientation": "portrait"
  };
}