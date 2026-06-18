import type { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/Container';

type SectionPy = 'hero' | 'standard' | 'compact' | 'learning' | 'cta';

const sectionPyClass: Record<SectionPy, string> = {
  hero: 'phone-section-py-hero',
  standard: 'phone-section-py-standard',
  compact: 'phone-section-py-compact',
  learning: 'phone-section-py-learning',
  cta: 'phone-section-py-cta',
};

type InnerGap = '40' | '48' | '64';

const innerGapClass: Record<InnerGap, string> = {
  '40': 'phone-inner-gap-40',
  '48': 'phone-inner-gap-48',
  '64': 'phone-inner-gap-64',
};

/** セクション外枠 — 他LPと同じ Container（max 1440 / 左右 16|120px） */
export function PhoneFigmaSection({
  id,
  className = '',
  py = 'standard',
  children,
}: {
  id?: string;
  className?: string;
  py?: SectionPy;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`relative w-full ${sectionPyClass[py]} ${className}`.trim()}>
      <Container>{children}</Container>
    </section>
  );
}

/** セクション内 — max-w 1200 中央（SubsidySteps 等と同じ） */
export function PhoneFigmaInner({
  children,
  className = '',
  gap = '48',
}: {
  children: ReactNode;
  className?: string;
  gap?: InnerGap;
}) {
  return (
    <div className={`phone-section-inner ${innerGapClass[gap]} ${className}`.trim()}>{children}</div>
  );
}

export function PhoneSectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="w-full text-center font-[Inter,sans-serif] text-[36px] font-extrabold leading-[54px] tracking-[-1px] text-[#111827]">
      {children}
    </h2>
  );
}

export function PhoneSectionLead({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`mx-auto text-center font-[Inter,sans-serif] text-[16px] font-normal leading-[24px] text-[#6B7280] ${className}`}
    >
      {children}
    </p>
  );
}

export function PhoneSectionHeader({
  children,
  lead,
  leadClassName = '',
}: {
  children: ReactNode;
  lead: ReactNode;
  leadClassName?: string;
}) {
  return (
    <div className="phone-section-header">
      {children}
      <PhoneSectionLead className={leadClassName}>{lead}</PhoneSectionLead>
    </div>
  );
}

/** ページ内標準CTA（ヒーロー・ヘッダー共通） */
export const phoneCtaPrimaryClassName = 'w-[227px] !px-0 shrink-0 whitespace-nowrap';

export function PhoneCtaButton({
  href,
  children,
  className = '',
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`relative inline-flex h-[48px] shrink-0 items-center justify-center gap-2 rounded-[12px] bg-[#14b8a6] px-8 text-[15px] font-semibold leading-[22.5px] text-white shadow-[0px_10px_15px_-3px_rgba(20,184,166,0.2),0px_4px_6px_-4px_rgba(20,184,166,0.2)] transition-opacity hover:opacity-90 ${className}`}
    >
      {children}
      <Image src="/images/phone-subsidy/icons/arrow-white.svg" alt="" width={16} height={16} />
    </Link>
  );
}

/** ヒーロー専用 — section 要素に直接付ける縦余白クラス */
export const phoneHeroSectionClass = sectionPyClass.hero;
