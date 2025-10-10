import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Tell webpack not to try to bundle these Node.js modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    
    return config;
  },
};

export default nextConfig;