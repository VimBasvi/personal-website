import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  allowedDevOrigins: ["10.65.2.11", '192.168.1.18'],
};

export default nextConfig;
