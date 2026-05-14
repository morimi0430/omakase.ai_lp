import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/demo-request", destination: "/document-request", permanent: false },
      { source: "/demo-request/thank-you", destination: "/document-request", permanent: false },
    ];
  },
};

export default nextConfig;
