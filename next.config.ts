import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/demo-request", destination: "/document-request", permanent: false },
      { source: "/demo-request/thank-you", destination: "/document-request", permanent: false },
      // 閉鎖。source は完全一致（/phone-subsidy/interview 等はマッチしない）。permanent は 308。
      { source: "/", destination: "https://omakase.ai", permanent: true },
      { source: "/phone-subsidy", destination: "https://omakase.ai/phone", permanent: true },
    ];
  },
};

export default nextConfig;
