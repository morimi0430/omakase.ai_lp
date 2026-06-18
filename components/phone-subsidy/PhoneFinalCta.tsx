'use client';

import { PhoneCtaButton, PhoneFigmaInner, PhoneFigmaSection } from './layout';

export default function PhoneFinalCta() {
  return (
    <PhoneFigmaSection py="cta" className="relative overflow-hidden bg-[#0a0f1c]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 135.76px 28.3px at 50% 50%, rgba(0,168,158,0.1) 0%, rgba(0,168,158,0) 60%)',
        }}
        aria-hidden
      />

      <PhoneFigmaInner gap="48" className="relative mx-auto items-center">
        <div className="flex w-full max-w-[500px] flex-col items-center text-center" style={{ gap: 23 }}>
          <h2 className="font-[Inter,sans-serif] text-[36px] font-extrabold leading-[43.2px] tracking-[-1px] text-white">
            電話対応の課題、
            <br />
            Omakase AIが解決し
            <br />
            ます。
          </h2>
          <p className="font-[Inter,sans-serif] text-[15px] leading-[27px] text-[rgba(255,255,255,0.5)] md:text-[14px] md:leading-[25.2px]">
            導入コストや対応範囲など、ご要件に合わせて個別にご提案いたします。
          </p>
          <PhoneCtaButton href="/document-request" className="w-full max-w-[274px]">
            お問い合わせ・資料請求
          </PhoneCtaButton>
        </div>
      </PhoneFigmaInner>
    </PhoneFigmaSection>
  );
}
