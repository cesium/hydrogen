/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.hydrogen.cesium.pt",
      },
    ],
  },
};

export default nextConfig;
