/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    ATLAS_API_URL: process.env.ATLAS_API_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.hydrogen.cesium.pt",
      },
      {
        protocol: "https",
        hostname: "cdn-shopkit.com",
      },
    ],
  },
};

export default nextConfig;
