import type { Metadata } from "next";
import { Noto_Sans_JP, Inter } from "next/font/google";
import Script from "next/script";
import { OmakaseWidgetLoader } from "@/components/OmakaseWidgetLoader";
import "./globals.css";

const MAIN_WIDGET_LOADER_URL =
  "https://cdn.omakase.ai/loader.min.js?apiKey=oma_live_-LH8h-LAMmQrbZC02FkjeBkFlVXMSMbfz2xXGAbQewylhLITikHOxV4AcpYd9vNB&_=1769417340779";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Omakase.com",
  description: "Omakase LP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${inter.variable} ${notoSansJP.className}`}>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NVD669VW');
            `,
          }}
        />
        
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NVD669VW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        
        {children}
        
        {/* メイン用ウィジェットはレイアウトで読み込み（階層と同じ扱い）。介護時だけクライアントで差し替え。localhostでは403のため本番のみ */}
        {process.env.NODE_ENV === "production" && (
          <Script
            id="omakase-main-widget"
            src={MAIN_WIDGET_LOADER_URL}
            strategy="afterInteractive"
          />
        )}
        <OmakaseWidgetLoader />
      </body>
    </html>
  );
}