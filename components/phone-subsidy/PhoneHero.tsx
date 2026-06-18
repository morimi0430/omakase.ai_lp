'use client';

import { Container } from '@/components/Container';
import { PhoneCtaButton, phoneCtaPrimaryClassName, phoneHeroSectionClass } from './layout';
import { PhoneScreenshot } from './PhoneScreenshot';
import { phoneImages, phoneScreenshotSizes } from './images';

const heroScreenshot = (
  <PhoneScreenshot
    variant="hero"
    src={phoneImages.hero}
    alt="Omakase AI 電話対話インターフェース"
    priority
    {...phoneScreenshotSizes.hero}
  />
);

export default function PhoneHero() {
  return (
    <section className={`relative w-full ${phoneHeroSectionClass}`}>
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#f8fafb]" />
        <div
          className="absolute right-0 top-20 size-[600px]"
          style={{
            background: 'radial-gradient(circle, rgba(0,168,158,0.06) 0%, rgba(0,168,158,0) 70%)',
          }}
        />
        <div
          className="absolute left-0 top-40 size-[400px]"
          style={{
            background: 'radial-gradient(circle, rgba(0,168,158,0.04) 0%, rgba(0,168,158,0) 70%)',
          }}
        />
      </div>

      <Container className="relative">
        <div className="mx-auto w-full max-w-[1200px]">
          {/* モバイル — Figma 322:1561: 見出し → 画像 → 説明 → CTA */}
          <div className="flex flex-col items-center gap-8 md:hidden">
            <h1 className="w-full text-center font-[Inter,sans-serif] font-bold tracking-[-1.5px] text-[#111827]">
              <span className="block text-[32px] leading-[36.8px]">
                まるでオペレーター
                <br />
                のように
                <span className="text-[#0d9488]">自然な音声で</span>
              </span>
              <span className="mt-0 block text-[31.1px] leading-[36.8px]">24時間365日対応。</span>
            </h1>

            <div className="w-full min-w-0">{heroScreenshot}</div>

            <p className="text-center font-[Inter,sans-serif] text-[15px] font-normal leading-[27px] text-[#6B7280]">
              従来のIVRとは別次元。Omakase AI電話は会話の
              <br />
              文脈を理解し、解約防止・注文受付・FAQ対応ま
              <br />
              でを自律的に完結します。ecforce・Shopifyなど
              <br />
              とのCRM連携も標準対応。
            </p>

            <PhoneCtaButton href="/document-request" className={phoneCtaPrimaryClassName}>
              資料請求・無料相談
            </PhoneCtaButton>
          </div>

          {/* PC — 2カラム */}
          <div
            className="hidden w-full grid-cols-1 md:grid md:grid-cols-2 md:items-center"
            style={{ gap: '40px', columnGap: '64px' }}
          >
            <div className="flex flex-col items-start" style={{ gap: '31.1px' }}>
              <h1 className="font-[Inter,sans-serif] text-[#111827]">
                <span className="block text-[clamp(28px,4.5vw,49.8px)] font-bold leading-[59.8px] tracking-[-2px] md:text-[49.8px]">
                  まるでオペレーターの
                </span>
                <span className="block text-[clamp(28px,4.5vw,49.8px)] font-bold leading-[59.8px] tracking-[-2px] md:text-[49.8px]">
                  ように
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: 'linear-gradient(90deg, #14B8A6 0%, #0D9488 100%)' }}
                  >
                    自然な音声で
                  </span>
                </span>
                <span className="block text-[clamp(28px,4.5vw,49.8px)] font-bold leading-[59.8px] tracking-[-2px] md:text-[49.8px]">
                  24時間365日対応
                </span>
              </h1>

              <p className="max-w-[560px] font-[Inter,sans-serif] text-[17px] font-normal leading-[30.6px] text-[#6B7280]">
                従来のIVRとは別次元。Omakase AI電話は会話の文脈を理解し、解約防止・注文受付・FAQ対応までを自律的に完結します。ecforce・ShopifyなどとのCRM連携も標準対応。
              </p>

              <PhoneCtaButton href="/document-request" className={phoneCtaPrimaryClassName}>
                資料請求・無料相談
              </PhoneCtaButton>
            </div>

            {heroScreenshot}
          </div>
        </div>
      </Container>
    </section>
  );
}
