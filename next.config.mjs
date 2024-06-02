import withSerwistInit from "@serwist/next";
/** @type {import('next').NextConfig} */

const withSerwist = withSerwistInit({
  swSrc: "app/sw.ts",
  swDest: "public/sw.js"
});
const nextConfig = {};

export default withSerwist(nextConfig);
