import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: 'cdn.explorecams.com' }
    ]
  }
};

export default nextConfig;
