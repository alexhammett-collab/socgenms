import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: ["http://127.0.0.1:51950", "http://localhost:51950"],
};

export default nextConfig;
