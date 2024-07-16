import withSerwistInit from "@serwist/next";
/** @type {import('next').NextConfig} */

const revision = crypto.randomUUID();

const withSerwist = withSerwistInit({
  swSrc: "app/sw.ts",
  swDest: "public/sw.js",
  
  cacheOnNavigation: true,
  register: true,
  additionalPrecacheEntries: [{ url: "/", revision }],
});
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
};

export default withSerwist(nextConfig);
