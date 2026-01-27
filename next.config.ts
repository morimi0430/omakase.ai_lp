import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://static.hsappstatic.net https://cdn.omakase.ai https://www.googletagmanager.com",
              "frame-src 'self' https://meetings.hubspot.com https://meetings-na2.hubspot.com",
              "connect-src 'self' https://api.hubspot.com https://api.omakase.ai",
              "img-src 'self' data: https:",
              "style-src 'self' 'unsafe-inline'"
            ].join('; ')
          }
        ]
      }
    ];
  }
};

export default nextConfig;