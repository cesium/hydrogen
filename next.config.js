/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.hydrogen.cesium.pt",
      },
      {
        protocol: "https",
        hostname: "cdn.shopk.it",
      },
    ],
  },
};

export default nextConfig;
