/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
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
