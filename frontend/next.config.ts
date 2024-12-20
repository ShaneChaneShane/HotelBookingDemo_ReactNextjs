import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    REACT_APP_MODE: process.env.REACT_APP_MODE,
    REACT_APP_BACKEND_URL: process.env.REACT_APP_BACKEND_URL,
  },
};

export default nextConfig;
