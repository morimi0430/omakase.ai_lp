"use client";

import { INDUSTRIES } from "@/lib/industries";

export default function Footer() {
  return (
    <>
    <footer className="w-full bg-neutral-800 border-t border-white/10 box-border">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Noto+Sans+JP:wght@500;700&display=swap');
      `}</style>

      <div className="footer-inner flex flex-col lp-container justify-center items-center">
        <div className="w-full max-w-[1440px] flex flex-col flex-1 min-h-[12rem] items-center">
          {/* PC: 中央揃え・ロゴ＋事例紹介列＋法務列（最大幅1440） / モバイル: 縦積み */}
          <div className="w-full max-w-[343px] md:max-w-none mx-auto flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
            {/* ロゴ */}
            <div className="flex items-center">
              <div className="text-white text-2xl font-bold font-['Montserrat'] tracking-tight drop-shadow-[0_4px_12px_rgba(0,115,255,0.3)]">
                Omakase.ai
              </div>
            </div>

            {/* 事例紹介：見出し + リンク（PCは縦並び） */}
            <nav className="flex flex-col gap-2" aria-label="事例紹介">
              <p className="text-white text-sm font-bold m-0">
                事例紹介
              </p>
              <ul className="flex flex-wrap gap-x-4 gap-y-1 md:flex-col md:flex-nowrap md:gap-y-1 list-none m-0 p-0">
                {INDUSTRIES.map((industry) => (
                  <li key={industry.slug}>
                    <a
                      href={`/industries/${industry.slug}`}
                      className="text-white/80 text-sm font-medium hover:text-white hover:underline transition-colors duration-200 underline-offset-2"
                    >
                      {industry.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* 法務：見出し + プライバシーポリシー・利用規約 */}
            <nav className="flex flex-col gap-2" aria-label="法務">
              <p className="text-white text-sm font-bold m-0">
                法務
              </p>
              <ul className="flex flex-col gap-1 list-none m-0 p-0">
                <li>
                  <a
                    href="https://www.omakase.ai/jp/register/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 text-sm font-medium hover:text-white hover:underline transition-colors duration-200 underline-offset-2"
                  >
                    プライバシーポリシー
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.omakase.ai/jp/register/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 text-sm font-medium hover:text-white hover:underline transition-colors duration-200 underline-offset-2"
                  >
                    利用規約
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* コピーライト（親の下に配置・中央） */}
          <p className="mt-auto pt-8 text-white/60 text-sm font-bold font-['Noto_Sans_JP'] m-0 text-center">
            © 2026 ZEALS Co. Ltd
          </p>
        </div>
      </div>
    </footer>
    {/* モバイル: 固定CTAの下に隠れないよう、フッター直後のスクロール余白 */}
    <div className="footer-mobile-spacer md:hidden" aria-hidden />
    </>
  );
}