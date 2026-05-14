'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container } from './Container';

const purple = '#4900EE';
const yellowBg = '#F6FF51';
const ctaGradient = 'linear-gradient(95.13deg, #DE35F9 -49.03%, #4403CD 85.27%)';
/** 参照: 紫の上にうっすら横方向のライン */
const ctaWaveOverlay =
  'repeating-linear-gradient(92deg, rgba(255,255,255,0.07) 0 1px, transparent 1px 56px), repeating-linear-gradient(-4deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 72px)';

const CTA_PC_BG = '/images/industries/subsidy/CTA_BG.png';

const CTA_TEXT_MAX_W = 640;
/** PC: 文言列の右に並べる人物写真の表示サイズ */
const CTA_PORTRAIT = { w: 255, h: 338 } as const;
const CTA_COL_GAP = 32;
/**
 * 文言ブロックを帯の左右中央に置きつつ右の写真と重ねないための幅上限。
 * 中央幅 B・帯幅 W・写真幅 w・隙間 g のとき、B/2 + w + g ≤ W/2 → B ≤ W − 2(w+g)
 */
const CTA_CENTERED_NO_OVERLAP = 2 * (CTA_PORTRAIT.w + CTA_COL_GAP);

function SubsidyCTAPlayIcon({ sizePx }: { sizePx: number }) {
  return (
    <span
      aria-hidden
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: sizePx,
        height: sizePx,
        borderRadius: '50%',
        background: purple,
        color: yellowBg,
        fontSize: Math.round(sizePx * 0.38),
        lineHeight: 1,
        flexShrink: 0,
        paddingLeft: 2,
      }}
    >
      ▶
    </span>
  );
}

function SubsidySubcopy({
  fontSize,
  textAlign = 'center',
  /** モバイル帯のみ: 「かかりますので」の直後で改行 */
  breakAfterKakarimasu = false,
}: {
  fontSize: number;
  textAlign?: 'center' | 'left';
  breakAfterKakarimasu?: boolean;
}) {
  return (
    <p
      style={{
        color: 'rgba(255,255,255,0.95)',
        fontFamily: '"Noto Sans JP"',
        fontSize,
        fontWeight: 400,
        lineHeight: '180%',
        margin: 0,
        textAlign,
        width: '100%',
        maxWidth: '100%',
        whiteSpace: 'normal',
        overflowWrap: 'anywhere',
        wordBreak: 'break-word',
      }}
    >
      ZEALSが申請から入金まで伴走サポートいたします。
      <br />
      申請には{' '}
      <span style={{ color: yellowBg, fontWeight: 700 }}>約2週間</span>
      ほど準備がかかりますので
      {breakAfterKakarimasu ? <br /> : null}
      お早めにご連絡ください。
    </p>
  );
}

export default function SubsidyCTASection() {
  return (
    <>
      {/* ──────────────────── モバイル版 ──────────────────── */}
      <section
        className="w-full md:hidden"
        style={{
          position: 'relative',
          background: ctaGradient,
          paddingTop: 24,
          paddingBottom: 28,
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: ctaWaveOverlay,
            opacity: 0.45,
            pointerEvents: 'none',
          }}
        />
        <Container className="relative z-[1]">
          <div
            style={{
              width: '100%',
              maxWidth: 400,
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
                width: '100%',
              }}
            >
              <h2
                style={{
                  color: '#FFF',
                  textAlign: 'center',
                  fontFamily: '"Noto Sans JP"',
                  fontSize: '24px',
                  fontWeight: 700,
                  lineHeight: '150%',
                  margin: 0,
                  width: '100%',
                  whiteSpace: 'normal',
                  overflowWrap: 'anywhere',
                  wordBreak: 'break-word',
                }}
              >
                補助金申請の相談無料受付中！
              </h2>

              <SubsidySubcopy fontSize={13} breakAfterKakarimasu />

              <Link
                href="/document-request"
                style={{
                  display: 'inline-flex',
                  flexWrap: 'nowrap',
                  maxWidth: '100%',
                  padding: '14px 28px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px',
                  borderRadius: '300px',
                  border: 'none',
                  background: yellowBg,
                  color: purple,
                  fontFamily: '"Noto Sans JP"',
                  fontSize: '15px',
                  fontWeight: 700,
                  lineHeight: 'normal',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  textAlign: 'center',
                  boxSizing: 'border-box',
                }}
              >
                補助金申請の相談をする
                <SubsidyCTAPlayIcon sizePx={24} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ──────────────────── PC版 ──────────────────── */}
      <section
        className="hidden md:block w-full"
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          backgroundColor: '#4403CD',
          backgroundImage: `url(${CTA_PC_BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          paddingTop: 20,
          paddingBottom: 0,
        }}
      >
        <Container className="relative z-[1]">
          <div
            style={{
              position: 'relative',
              width: '100%',
              boxSizing: 'border-box',
              padding: '32px 16px 40px',
              minHeight: Math.max(CTA_PORTRAIT.h, 280),
            }}
          >
            {/*
              文言は「帯（Container 幅）の左右中央」。写真はレイアウト幅に含めず absolute で右のみ。
              文言列の幅は B ≤ W − 2(w+g)（CTA_CENTERED_NO_OVERLAP）で写真と被らない。
            */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <div
                style={{
                  width: `min(${CTA_TEXT_MAX_W}px, calc(100% - ${CTA_CENTERED_NO_OVERLAP}px))`,
                  maxWidth: '100%',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 14,
                }}
              >
                <h2
                  style={{
                    color: '#FFF',
                    textAlign: 'center',
                    fontFamily: '"Noto Sans JP"',
                    fontSize: 'clamp(28px, 2.4vw, 38px)',
                    fontWeight: 700,
                    lineHeight: '140%',
                    margin: 0,
                    width: '100%',
                    maxWidth: '100%',
                    whiteSpace: 'normal',
                    overflowWrap: 'anywhere',
                    wordBreak: 'break-word',
                  }}
                >
                  補助金申請の相談無料受付中！
                </h2>

                <SubsidySubcopy fontSize={16} />

                <Link
                  href="/document-request"
                  style={{
                    display: 'inline-flex',
                    flexWrap: 'nowrap',
                    maxWidth: '100%',
                    padding: '16px 36px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                    borderRadius: '300px',
                    border: 'none',
                    background: yellowBg,
                    color: purple,
                    fontFamily: '"Noto Sans JP"',
                    fontSize: '18px',
                    fontWeight: 700,
                    lineHeight: 'normal',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    textAlign: 'center',
                    boxSizing: 'border-box',
                  }}
                >
                  補助金申請の相談をする
                  <SubsidyCTAPlayIcon sizePx={28} />
                </Link>
              </div>
            </div>

            <div
              style={{
                position: 'absolute',
                right: 0,
                bottom: 0,
                width: CTA_PORTRAIT.w,
                height: CTA_PORTRAIT.h,
                zIndex: 0,
                overflow: 'hidden',
                lineHeight: 0,
                pointerEvents: 'none',
              }}
            >
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <Image
                  src="/images/common/message_main.png"
                  alt="ZEALSサポート担当"
                  fill
                  sizes={`${CTA_PORTRAIT.w}px`}
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'top right',
                  }}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
