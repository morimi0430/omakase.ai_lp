'use client';

import Link from 'next/link';
import CTAButton from './CTAButton';

export default function SubsidyCTASection() {
  return (
    <>
      <section
        className="md:hidden w-full"
        style={{
          backgroundColor: '#4900EE',
          paddingTop: '60px',
          paddingBottom: '60px',
          paddingLeft: '16px',
          paddingRight: '16px',
        }}
      >
        <div
          style={{
            maxWidth: '343px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <h2
            style={{
              color: '#fff',
              textAlign: 'center',
              fontSize: '24px',
              fontWeight: 700,
              fontFamily: '"Noto Sans JP"',
              lineHeight: '150%',
            }}
          >
            補助金申請の相談は
            <br />
            無料で受け付けています
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.8)',
              textAlign: 'center',
              fontSize: '14px',
              fontFamily: '"Noto Sans JP"',
              lineHeight: '170%',
            }}
          >
            締切まで時間がありません。
            <br />
            今すぐお問い合わせください。
          </p>
          <Link href="/document-request" style={{ width: '100%', textDecoration: 'none' }}>
            <CTAButton
              text="補助金申請の相談をする"
              backgroundColor="#FFF"
              iconSrc="/images/pc/arrow_white.png"
              iconFixed
              style={{ width: '100%' }}
            />
          </Link>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '12px', fontFamily: '"Noto Sans JP"' }}>
            第1次締切：2026年5月12日（火）17:00
          </p>
        </div>
      </section>

      <section
        className="hidden md:flex"
        style={{
          position: 'relative',
          width: '100%',
          padding: '60px 120px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '24px',
          overflow: 'hidden',
        }}
      >
        <img
          src="/images/pc/sec_CTA_BG.png"
          alt=""
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            maxWidth: 720,
          }}
        >
          <h2
            style={{
              color: '#fff',
              textAlign: 'center',
              fontFamily: '"Noto Sans JP"',
              fontSize: '32px',
              fontWeight: 700,
              lineHeight: '150%',
              textShadow: '0 2px 10px #6836D5',
            }}
          >
            補助金申請の相談は無料で受け付けています
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: '16px',
              fontFamily: '"Noto Sans JP"',
              textAlign: 'center',
            }}
          >
            締切まで時間がありません。今すぐお問い合わせください。
          </p>
          <Link href="/document-request" style={{ textDecoration: 'none' }}>
            <CTAButton
              text="補助金申請の相談をする"
              backgroundColor="#FFF"
              iconSrc="/images/pc/arrow_white.png"
            />
          </Link>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', fontFamily: '"Noto Sans JP"' }}>
            第1次締切：2026年5月12日（火）17:00
          </p>
        </div>
      </section>
    </>
  );
}
