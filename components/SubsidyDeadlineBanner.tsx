import Link from 'next/link';
import { Container } from './Container';
import { subsidyDesign as D } from './subsidy/designTokens';

function InquiryPlayIcon() {
  return (
    <span
      aria-hidden
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 22,
        height: 22,
        borderRadius: '50%',
        background: '#fff',
        flexShrink: 0,
      }}
    >
      <svg width="7" height="9" viewBox="0 0 7 9" fill="none" style={{ marginLeft: 2 }}>
        <path d="M0 0L7 4.5L0 9V0Z" fill="#3D00CB" />
      </svg>
    </span>
  );
}

export default function SubsidyDeadlineBanner() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 920,
        minHeight: 168,
        margin: '0 auto',
        boxSizing: 'border-box',
        background: D.subsidyHighlightBoxBg,
        border: `1px solid ${D.subsidyHighlightBoxBorder}`,
        borderRadius: 16,
        padding: '16px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        textAlign: 'center',
      }}
    >
      <p
        className="text-[14px] md:text-[16px]"
        style={{
          fontWeight: 700,
          color: D.textBody,
          fontFamily: D.fontNoto,
          margin: 0,
          lineHeight: 1.4,
        }}
      >
        <span>第一次締切：</span>
        <span
          className="text-[16px] md:text-[18px]"
          style={{
            fontWeight: 700,
            background: D.purpleTextGradient90,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            display: 'inline',
          }}
        >
          2026年6月15日(月) 17:00
        </span>
      </p>
      <p
        className="text-[12px] md:text-[13px]"
        style={{
          color: D.textBody,
          fontFamily: D.fontNoto,
          margin: 0,
          lineHeight: 1.55,
          fontWeight: 500,
        }}
      >
        申請の事前準備には約2週間かかります。
        <br className="md:hidden" aria-hidden />
        お早めにご相談ください。
      </p>
      <Link
        href="/document-request"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          padding: '12px 28px',
          borderRadius: D.radiusPill,
          background: D.purpleTextGradient90,
          border: 'none',
          color: '#fff',
          fontWeight: 700,
          fontSize: 15,
          fontFamily: D.fontNoto,
          textDecoration: 'none',
        }}
      >
        補助金申請の相談をする
        <InquiryPlayIcon />
      </Link>
    </div>
  );
}

export function SubsidyDeadlineBannerSection() {
  return (
    <div className="w-full" style={{ background: D.bgWhite }}>
      <Container>
        <div style={{ paddingTop: 40, paddingBottom: 40 }}>
          <SubsidyDeadlineBanner />
        </div>
      </Container>
    </div>
  );
}
