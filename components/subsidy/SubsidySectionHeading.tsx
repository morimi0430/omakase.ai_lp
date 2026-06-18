import type { ReactNode } from 'react';
import SectionTitle from '@/components/SectionTitle';
import { subsidyDesign as D } from './designTokens';

/** 長い見出し: モバイルは 1 行・可変サイズ、md 以上は従来 36px */
const oneLineMobileTitleClassName =
  'max-md:whitespace-nowrap max-md:text-[clamp(17px,4.85vw,30px)] max-md:leading-snug md:text-[36px] md:leading-normal';

/**
 * メインLPの About / Features と同様、SectionTitle（見出し＋24px＋アクセント線）の直下に
 * 本文までの余白（SP 60px / PC 80px）を付与する。
 * @see components/About.tsx — `afterTitleMobile` / `afterTitlePc` と subsidyDesign を同期
 */
export default function SubsidySectionHeading({
  title,
  oneLineMobile,
  accentColor,
}: {
  title: ReactNode;
  /** モバイルで 1 行に収めるため文字サイズを下げる（md 以上は 36px のまま） */
  oneLineMobile?: boolean;
  /** タイトル下アクセント線の色。未指定時は紫グラデーション */
  accentColor?: string;
}) {
  return (
    <>
      <SectionTitle
        title={title}
        titleClassName={oneLineMobile ? oneLineMobileTitleClassName : undefined}
        accentColor={accentColor}
      />
      <div
        aria-hidden
        className="w-full shrink-0 md:hidden"
        style={{ height: D.afterTitleMobile }}
      />
      <div
        aria-hidden
        className="hidden w-full shrink-0 md:block"
        style={{ height: D.afterTitlePc }}
      />
    </>
  );
}
