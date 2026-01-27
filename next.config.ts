import type { NextConfig } from "next";

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
              // スクリプト：Omakase、GTM、Google Analytics、HubSpotを許可
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.omakase.ai https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com https://*.hubspot.com https://*.hsforms.com https://*.hsappstatic.net https://js.hsforms.net https://js-na2.hubspot.com",
              // スタイル：Google Fonts、HubSpotとインラインスタイルを許可
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.hubspot.com https://*.hsforms.com https://*.hsappstatic.net",
              // iframe：GTMとHubSpotを許可
              "frame-src 'self' https://www.googletagmanager.com https://*.hubspot.com https://meetings-na2.hubspot.com",
              // 画像：全てのHTTPSソースを許可
              "img-src 'self' data: https: https://*.hubspot.com https://*.hsforms.com https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com https://www.google.com https://analytics.google.com",
              // フォント：Google Fonts、HubSpotを許可
              "font-src 'self' data: https://fonts.gstatic.com https://*.hubspot.com https://*.hsforms.com",
              // 接続：Omakase、GTM、Google Analytics、HubSpotのAPIを許可
              "connect-src 'self' https://cdn.omakase.ai https://*.omakase.ai https://www.google-analytics.com https://ssl.google-analytics.com https://analytics.google.com https://www.google.com https://www.googletagmanager.com https://*.hubspot.com https://*.hsforms.com https://*.hsappstatic.net",
            ].join('; ')
          },
        ],
      },
    ];
  },
};

export default nextConfig;