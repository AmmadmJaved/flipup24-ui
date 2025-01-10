import type { NextConfig } from "next";

const nextConfig = {
  experimental: { outputFileTracing: true }, // Include only required files for the build
};
module.exports = nextConfig;