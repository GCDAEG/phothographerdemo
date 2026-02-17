import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images:{
    remotePatterns: [
      new URL('https://img.freepik.com')
,
      new URL('https://img.freepik.com/*')
    ],
  }
};

export default nextConfig;
