'use client';

import Image from 'next/image';
import Link from 'next/link';
import { subsidyDesign as D } from './subsidy/designTokens';

const bullets = [
  'Omakase AIはデジタル化・AI導入補助金の対象サービスです',
  'ZEALSが申請から入金まで伴走サポート！',
  '申請まで約2週間かかります。お早めにご準備ください！',
];

/** 締切バッジ（円形）: size=180 (PC) / size=110 (Mobile) */
function DeadlineBadge({ size = 180 }: { size?: number }) {
  const s = (n: number) => Math.round(n * (size / 180));
  /** 画像に対して丸を上へ（バッジサイズに比例） */
  const topOffset = Math.round(-55 * (size / 180));
  return (
    <div
      style={{
        position: 'absolute',
        top: topOffset,
        right: 0,
        width: size,
        height: size,
        borderRadius: '50%',
        background: D.purpleCardGradient,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: s(5),
        color: '#fff',
        boxShadow: '0 8px 24px rgba(80,4,245,0.40)',
        zIndex: 3,
      }}
    >
      {/* 【1次締め切】: Noto Sans JP 500 18px */}
      <span
        style={{
          fontFamily: '"Noto Sans JP"',
          fontWeight: 500,
          fontSize: s(18),
          lineHeight: '150%',
          textAlign: 'center',
          letterSpacing: `${s(1)}px`,
        }}
      >
        【1次締め切】
      </span>

      {/* 6月15日: 数字40px / 月日24px、字間は columnGap で調整 */}
      <span
        style={{
          fontFamily: '"Noto Sans JP"',
          fontWeight: 700,
          lineHeight: '120%',
          color: '#F2FF00',
          textAlign: 'center',
          display: 'inline-flex',
          alignItems: 'baseline',
          flexWrap: 'nowrap',
          columnGap: s(2),
        }}
      >
        <span style={{ fontSize: s(40) }}>6</span>
        <span style={{ fontSize: s(24), fontWeight: 700 }}>月</span>
        <span style={{ fontSize: s(40), letterSpacing: `${s(1)}px` }}>15</span>
        <span style={{ fontSize: s(24), fontWeight: 700 }}>日</span>
      </span>

      {/* 17:00: Figtree 700 32px、字間調整 */}
      <span
        style={{
          fontFamily: "'Figtree', var(--font-inter), sans-serif",
          fontWeight: 700,
          fontSize: s(32),
          lineHeight: '150%',
          color: '#F2FF00',
          letterSpacing: `${s(2)}px`,
        }}
      >
        17:00
      </span>
    </div>
  );
}

/** バレット: 丸なし・紫のチェックのみ */
function BulletCheck({ size = 18 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        flexShrink: 0,
        marginTop: Math.round(size * 0.28),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.5 7L6 9.5L10.5 4.5"
          stroke="#5004F5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function SubsidyHero() {
  return (
    <>
      {/* Figtree フォントの読み込み */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Figtree:wght@700&display=swap');`}</style>

      <section className="w-full relative md:mt-20 overflow-hidden isolate">
        {/* FV 全体背景（public/images/industries/subsidy/fv-bg.png） */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundColor: '#f5f8fc',
            backgroundImage: "url('/images/industries/subsidy/fv-bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* ──────────────────── モバイル版 ──────────────────── */}
        {/* 左右余白は globals の .lp-container（メインLPの Container と同じ 16px） */}
        <div
          className="lp-container flex md:hidden w-full flex-col relative z-10"
          style={{ paddingTop: '19px', boxSizing: 'border-box', marginTop: 0 }}
        >
          <div className="flex min-w-0 max-w-full flex-col" style={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box', gap: 20 }}>

            {/* 黒背景バナー: border-radius 8px */}
            <div
              style={{
                background: '#111',
                borderRadius: 8,
                padding: '4px 14px',
                height: 36,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                alignSelf: 'center',
              }}
            >
              <img
                src="/images/pc/header_logo.png"
                alt="Omakase.ai"
                style={{ height: 14, width: 'auto', filter: 'brightness(0) invert(1)', flexShrink: 0 }}
              />
              <span
                style={{
                  color: '#fff',
                  fontFamily: '"Noto Sans JP"',
                  fontSize: 11,
                  fontWeight: 700,
                  lineHeight: '150%',
                  whiteSpace: 'nowrap',
                }}
              >
                × デジタル化・AI導入補助金
              </span>
            </div>

            {/* ヘッドライン: 40px 相当だが clamp + 折返しで狭い画面のはみ出し防止 */}
            <div
              className="min-w-0 max-w-full"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'baseline',
                columnGap: 4,
                rowGap: 6,
                width: '100%',
                boxSizing: 'border-box',
                textAlign: 'center',
                fontSize: 'clamp(26px, 8.2vw, 40px)',
              }}
            >
              <span
                style={{
                  fontFamily: '"Noto Sans JP"',
                  fontWeight: 700,
                  lineHeight: '1.1',
                  color: '#0F0F0F',
                }}
              >
                Omakase AIを
              </span>
              <span
                style={{
                  display: 'inline-flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignItems: 'baseline',
                  columnGap: 4,
                  rowGap: 0,
                  minWidth: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 700,
                    lineHeight: '1.1',
                    background: 'linear-gradient(90deg, #BF2BF1 0%, #6017FF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  最大50%OFF
                </span>
                <span
                  style={{
                    fontFamily: '"Noto Sans JP"',
                    fontWeight: 700,
                    lineHeight: '1.1',
                    color: '#0F0F0F',
                  }}
                >
                  で導入！
                </span>
              </span>
            </div>

            {/* 箇条書き（3行） */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {bullets.map((text) => (
                <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <BulletCheck size={18} />
                  <span className="text-14 font-medium text-[#040404]" style={{ lineHeight: '150%' }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* 画像 + 締切バッジ */}
            <div
              className="relative w-full flex justify-center"
              style={{ boxSizing: 'border-box' }}
            >
              <div
                style={{
                  width: '100%',
                  maxWidth: 382,
                  aspectRatio: '382/280',
                  boxSizing: 'border-box',
                  position: 'relative',
                }}
              >
                <Image
                  src="/images/common/omakase_demo.png"
                  alt="Omakase AIの操作画面（ラップトップ＋スマートフォン）"
                  width={382}
                  height={280}
                  className="w-full h-full object-contain"
                  priority
                />
                <DeadlineBadge size={110} />
              </div>
            </div>

            {/* CTA（補助金申請の相談） */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingBottom: 32 }}>
              <Link
                href="/document-request"
                style={{
                  display: 'flex', minHeight: '48px', padding: '10px 12px',
                  justifyContent: 'center', alignItems: 'center', gap: '6px',
                  borderRadius: '300px', border: 'none',
                  background: 'linear-gradient(310deg, #6017FF 44.35%, #8249FF 86.86%)',
                  fontSize: '13px', fontFamily: '"Noto Sans JP"', fontWeight: 700, color: '#FFF',
                  textDecoration: 'none', lineHeight: 1.35, textAlign: 'center',
                }}
              >
                <span>補助金申請の相談をする</span>
                <img src="/images/pc/arrow_white.png" alt="" style={{ width: 20, height: 20, flexShrink: 0 }} />
              </Link>
            </div>
          </div>
        </div>

        {/* ──────────────────── PC版 ──────────────────── */}
        <div className="relative z-10 hidden md:flex w-full justify-center">
          <div
            className="w-full md:max-w-[1440px] relative"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              /* Figma: コンテンツ最小 526.5 + 上60 + 下80（border-box では合算が必要） */
              minHeight: 526.5 + D.sectionPtPc + D.sectionPbPc,
              paddingTop: D.sectionPtPc,
              paddingBottom: D.sectionPbPc,
              paddingLeft: D.innerPadPc,
              paddingRight: D.innerPadPc,
              boxSizing: 'border-box',
            }}
          >
            {/* FV: 1440幅・上下60/80・テキスト列と画像の間 24px・コンテンツ最小高526.5（Figma） */}
            <div
              style={{
                display: 'flex',
                gap: 24,
                alignItems: 'center',
                width: '100%',
              }}
            >
              <div
                style={{
                  flex: '1 1 0%',
                  minWidth: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 20,
                }}
              >
                {/* 黒背景バナー: width~405px, height 40px, border-radius 8px */}
                <div
                  style={{
                    background: '#111',
                    borderRadius: 8,
                    padding: '2px 16px',
                    height: 40,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    width: 'fit-content',
                    maxWidth: 405,
                  }}
                >
                  {/* Omakase.ai ロゴ画像（白反転） */}
                  <img
                    src="/images/pc/header_logo.png"
                    alt="Omakase.ai"
                    style={{ height: 18, width: 'auto', filter: 'brightness(0) invert(1)', flexShrink: 0 }}
                  />
                  {/* テキスト: Noto Sans JP 700 18px */}
                  <span
                    style={{
                      color: '#fff',
                      fontFamily: '"Noto Sans JP"',
                      fontSize: 18,
                      fontWeight: 700,
                      lineHeight: '150%',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    × デジタル化・AI導入補助金
                  </span>
                </div>

                {/* ヘッドライン: 全て44px。「最大50%OFFで導入！」は改行しない */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'baseline',
                    columnGap: 6,
                    rowGap: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: '"Noto Sans JP"',
                      fontWeight: 700,
                      fontSize: 44,
                      lineHeight: '100%',
                      color: '#0F0F0F',
                    }}
                  >
                    Omakase AIを
                  </span>
                  <span style={{ whiteSpace: 'nowrap' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontWeight: 700,
                        fontSize: 44,
                        lineHeight: '100%',
                        background: 'linear-gradient(90deg, #BF2BF1 0%, #6017FF 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      最大50%OFF
                    </span>
                    <span
                      style={{
                        fontFamily: '"Noto Sans JP"',
                        fontWeight: 700,
                        fontSize: 44,
                        lineHeight: '100%',
                        color: '#0F0F0F',
                      }}
                    >
                      で導入！
                    </span>
                  </span>
                </div>

                {/* 箇条書き（3行）・右画像との間は親の gap:24 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 0 }}>
                  {bullets.map((text) => (
                    <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                      <BulletCheck size={18} />
                      <span
                        style={{
                          color: '#040404',
                          fontFamily: '"Noto Sans JP"',
                          fontSize: 18,
                          fontWeight: 500,
                          lineHeight: '150%',
                        }}
                      >
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  flex: '0 0 auto',
                  width: 'clamp(280px, 40.75vw, 587px)',
                  maxWidth: '100%',
                  position: 'relative',
                  height: 392,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  src="/images/common/omakase_demo.png"
                  alt="Omakase AIの操作画面（ラップトップ＋スマートフォン）"
                  width={587}
                  height={387}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  priority
                />
                {/* 締切バッジ: 180×180px */}
                <DeadlineBadge size={180} />
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
