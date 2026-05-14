"use client";

import Link from "next/link";
import { INDUSTRIES } from "@/lib/industries";
import { SUBSIDY_LP_ENABLED } from "@/lib/featureFlags";

export default function Footer() {
  const mdGridCols = SUBSIDY_LP_ENABLED
    ? "md:grid-cols-[auto_auto_auto_auto]"
    : "md:grid-cols-[auto_auto_auto]";

  return (
    <footer className="w-full bg-neutral-800 border-t border-white/10 box-border">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Noto+Sans+JP:wght@500;700&display=swap');
      `}</style>

      <div className="footer-inner flex w-full flex-col lp-container">
        <div
          className={`mx-auto grid w-full max-w-[343px] grid-cols-1 items-start gap-6 md:max-w-none md:gap-x-12 md:gap-y-10 ${mdGridCols}`}
        >
            {/* ロゴ */}
            <div className="flex items-center">
              <div className="text-white text-2xl font-bold font-['Montserrat'] tracking-tight drop-shadow-[0_4px_12px_rgba(0,115,255,0.3)]">
                Omakase AI
              </div>
            </div>

            {/* 事例紹介：見出し + リンク（PCは縦並び） */}
            <nav className="flex flex-col gap-2" aria-label="事例紹介">
              <p className="text-white text-sm font-bold m-0">
                事例紹介
              </p>
              {/* PC: INDUSTRIES の順番どおり / モバイル: 逆順（BtoB上・人材下） */}
              <ul className="hidden md:flex flex-col gap-y-1 list-none m-0 p-0">
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
              <ul className="flex md:hidden flex-col gap-y-1 list-none m-0 p-0">
                {[...INDUSTRIES].reverse().map((industry) => (
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

            {SUBSIDY_LP_ENABLED ? (
              <nav className="flex flex-col gap-2" aria-label="補助金">
                <p className="text-white text-sm font-bold m-0">補助金</p>
                <ul className="flex flex-col gap-1 list-none m-0 p-0">
                  <li>
                    <Link
                      href="/subsidy"
                      className="text-white/80 text-sm font-medium hover:text-white hover:underline transition-colors duration-200 underline-offset-2"
                    >
                      デジタル化・AI導入補助金で導入
                    </Link>
                  </li>
                </ul>
              </nav>
            ) : null}

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

            <div className="min-w-0 md:col-span-full">
              <p className="m-0 pb-10 text-center text-white/60 text-sm font-bold font-['Noto_Sans_JP'] md:pb-14">
                © 2026 ZEALS Co. Ltd
              </p>
            </div>
          </div>
      </div>
    </footer>
  );
}