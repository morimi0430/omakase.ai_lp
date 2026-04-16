'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container } from './Container';
import TrustBadgesRow from './TrustBadgesRow';
import { subsidyDesign as D } from './subsidy/designTokens';

const PDF_PATH = '/document/Omakase AI_法人様向け資料.pdf';
const PDF_NAME = 'Omakase AI_法人様向け資料.pdf';

const bulletPoints = [
  'AIシステム・初期構築・研修が補助対象に含まれるパッケージ',
  '補助率は通常枠1/2、賃金引上枠で最大2/3',
  'ZEALSが申請準備から実績報告まで伴走',
];

function CheckIcon() {
  return (
    <div
      style={{
        width: 14,
        height: 14,
        flexShrink: 0,
        marginTop: 4,
      }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7" cy="7" r="7" fill={D.purple} />
        <path d="M3.5 7L6 9.5L10.5 4.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function SubsidyHero() {
  return (
    <section className="w-full" style={{ background: D.bgWhite }}>
      {/* 告知帯：メインLPのヘッダー下より控えめ（白＋下線） */}
      <div
        style={{
          borderBottom: `1px solid ${D.border}`,
          background: D.bgGray50,
          padding: '12px 0',
        }}
      >
        <Container>
          <p
            style={{
              margin: 0,
              textAlign: 'center',
              color: D.textBody,
              fontFamily: D.fontNoto,
              fontSize: 13,
              fontWeight: 500,
              lineHeight: '160%',
            }}
          >
            IT導入補助金活用時、
            <span style={{ color: D.purple, fontWeight: 700 }}>最大約170万円</span>
            の補助・
            <span style={{ color: D.purple, fontWeight: 700 }}>実質約85万円</span>
            からの導入（賃金引上枠・税抜ベース目安）
          </p>
        </Container>
      </div>

      <div
        style={{
          borderBottom: `1px solid ${D.border}`,
          background: D.bgTint,
          padding: '12px 0',
        }}
      >
        <Container>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <TrustBadgesRow />
          </div>
        </Container>
      </div>

      {/* モバイル */}
      <div
        className="flex md:hidden flex-col"
        style={{
          paddingTop: 40,
          paddingBottom: D.sectionPbMobile,
          paddingLeft: D.pxMobile,
          paddingRight: D.pxMobile,
        }}
      >
        <div
          style={{
            border: `1px solid ${D.border}`,
            borderRadius: D.radiusSm,
            background: '#FFFBEB',
            padding: '12px 14px',
            marginBottom: 24,
          }}
        >
          <p
            style={{
              margin: 0,
              color: '#92400E',
              fontSize: 13,
              fontWeight: 700,
              fontFamily: D.fontNoto,
              lineHeight: '150%',
            }}
          >
            【締切】第1次：2026年5月12日（火）17:00まで
          </p>
        </div>

        <p
          style={{
            color: D.purple,
            fontSize: 13,
            fontWeight: 700,
            fontFamily: D.fontNoto,
            margin: '0 0 8px 0',
          }}
        >
          IT導入補助金 × Omakase AI
        </p>
        <h1
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: D.text,
            lineHeight: '150%',
            fontFamily: D.fontNoto,
            margin: 0,
          }}
        >
          通常
          <span style={{ color: D.purple }}>254万円</span>
          のAI導入パッケージが
        </h1>
        <p
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: D.purple,
            fontFamily: D.fontNoto,
            lineHeight: '150%',
            margin: '4px 0 0 0',
          }}
        >
          実質約85万円から導入可能
        </p>
        <p
          style={{
            fontSize: 12,
            color: D.textNote,
            fontFamily: D.fontNoto,
            margin: '12px 0 0 0',
            lineHeight: '160%',
          }}
        >
          ※賃金引上枠（補助率2/3）適用時の目安。個別条件により異なります。
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 24, marginBottom: 20 }}>
          {bulletPoints.map((text) => (
            <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              <CheckIcon />
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: D.textBody,
                  fontFamily: D.fontNoto,
                  lineHeight: '150%',
                }}
              >
                {text}
              </span>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center" style={{ boxSizing: 'border-box', marginBottom: 28 }}>
          <div
            style={{
              width: '100%',
              maxWidth: '382px',
              aspectRatio: '382/319',
              boxSizing: 'border-box',
              borderRadius: D.radiusCard,
              border: `1px solid ${D.border}`,
              overflow: 'hidden',
              background: D.bgGray50,
            }}
          >
            <Image
              src="/images/common/fv_main.png"
              alt="Omakase AIの操作画面イメージ"
              width={382}
              height={319}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
          <a
            href={PDF_PATH}
            download={PDF_NAME}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '14px 20px',
              borderRadius: D.radiusPill,
              background: D.bgWhite,
              border: `1px solid ${D.purpleBtn}`,
              color: D.purpleBtn,
              fontWeight: 700,
              fontSize: 14,
              fontFamily: D.fontNoto,
              textDecoration: 'none',
            }}
          >
            資料をダウンロード
          </a>
          <Link
            href="/document-request"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              padding: '14px 20px',
              borderRadius: D.radiusPill,
              background: 'linear-gradient(310deg, #6017FF 44.35%, #8249FF 86.86%)',
              border: '1px solid #EF96FF',
              color: '#fff',
              fontWeight: 700,
              fontSize: 14,
              fontFamily: D.fontNoto,
              textDecoration: 'none',
            }}
          >
            補助金・導入の相談
          </Link>
        </div>
      </div>

      {/* PC */}
      <div className="hidden md:flex w-full justify-center">
        <div
          className="w-full"
          style={{
            maxWidth: D.innerMax,
            paddingLeft: D.innerPadPc,
            paddingRight: D.innerPadPc,
            paddingTop: 56,
            paddingBottom: 72,
            display: 'flex',
            alignItems: 'flex-start',
            gap: 60,
          }}
        >
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                display: 'inline-flex',
                border: `1px solid ${D.border}`,
                borderRadius: D.radiusSm,
                background: '#FFFBEB',
                padding: '10px 16px',
                marginBottom: 24,
                alignSelf: 'flex-start',
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: '#92400E',
                  fontSize: 14,
                  fontWeight: 700,
                  fontFamily: D.fontNoto,
                }}
              >
                【締切】第1次：2026年5月12日（火）17:00まで
              </p>
            </div>

            <p
              style={{
                color: D.purple,
                fontSize: 14,
                fontWeight: 700,
                fontFamily: D.fontNoto,
                margin: '0 0 8px 0',
              }}
            >
              IT導入補助金 × Omakase AI
            </p>
            <h1
              style={{
                fontFamily: D.fontNoto,
                fontWeight: 700,
                color: D.text,
                lineHeight: '150%',
                margin: 0,
                fontSize: 28,
              }}
            >
              通常<span style={{ color: D.purple, fontSize: 36 }}>254万円</span>のAI導入パッケージが
            </h1>
            <p
              style={{
                fontFamily: D.fontNoto,
                fontWeight: 700,
                color: D.purple,
                fontSize: 36,
                lineHeight: '140%',
                margin: '8px 0 0 0',
              }}
            >
              実質約85万円から導入可能
            </p>
            <p
              style={{
                fontSize: 12,
                color: D.textNote,
                fontFamily: D.fontNoto,
                margin: '12px 0 28px 0',
                lineHeight: '160%',
              }}
            >
              ※賃金引上枠（補助率2/3）適用時の目安。個別条件により異なります。
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 32 }}>
              {bulletPoints.map((text) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <CheckIcon />
                  <span
                    style={{
                      fontSize: 16,
                      fontWeight: 500,
                      color: D.textBody,
                      fontFamily: D.fontNoto,
                      lineHeight: '150%',
                    }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
              <a
                href={PDF_PATH}
                download={PDF_NAME}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '16px 28px',
                  borderRadius: D.radiusPill,
                  background: D.bgWhite,
                  border: `1px solid ${D.purpleBtn}`,
                  color: D.purpleBtn,
                  fontWeight: 700,
                  fontSize: 16,
                  fontFamily: D.fontNoto,
                  textDecoration: 'none',
                }}
              >
                資料をダウンロード
              </a>
              <Link
                href="/document-request"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                  padding: '16px 28px',
                  borderRadius: D.radiusPill,
                  background: 'linear-gradient(310deg, #6017FF 44.35%, #8249FF 86.86%)',
                  border: '1px solid #EF96FF',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 16,
                  fontFamily: D.fontNoto,
                  textDecoration: 'none',
                }}
              >
                補助金・導入の相談
              </Link>
            </div>
          </div>

          <div style={{ flexShrink: 0, width: 360, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div
              style={{
                borderRadius: D.radiusCard,
                border: `1px solid ${D.border}`,
                overflow: 'hidden',
                background: D.bgGray50,
                aspectRatio: '382/319',
              }}
            >
              <Image
                src="/images/common/fv_main.png"
                alt="Omakase AIの操作画面イメージ"
                width={382}
                height={319}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <aside>
              <div
                style={{
                  border: `1px solid ${D.border}`,
                  borderRadius: D.radiusCard,
                  background: D.bgWhite,
                  boxShadow: D.shadowCard,
                  padding: '28px 24px',
                }}
              >
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: D.textMuted,
                  fontFamily: D.fontNoto,
                  margin: '0 0 20px 0',
                }}
              >
                Omakase AI 補助金パッケージ（ベテラン相当・税抜）
              </p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingBottom: 12,
                  marginBottom: 12,
                  borderBottom: `1px solid ${D.border}`,
                }}
              >
                <span style={{ fontSize: 13, fontFamily: D.fontNoto, color: D.textMuted }}>通常合計</span>
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    fontFamily: 'var(--font-inter)',
                    textDecoration: 'line-through',
                    color: D.textSub,
                  }}
                >
                  約254万円
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingBottom: 12,
                  marginBottom: 12,
                  borderBottom: `1px solid ${D.border}`,
                }}
              >
                <span style={{ fontSize: 13, fontFamily: D.fontNoto, color: D.textMuted }}>補助（賃上枠・目安）</span>
                <span style={{ fontSize: 15, fontWeight: 700, fontFamily: 'var(--font-inter)', color: D.purple }}>
                  約170万円
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontSize: 14, fontWeight: 700, fontFamily: D.fontNoto }}>実質負担（目安）</span>
                <span style={{ fontSize: 28, fontWeight: 700, fontFamily: 'var(--font-inter)', color: D.purple }}>
                  約85万円〜
                </span>
              </div>
              <p
                style={{
                  margin: '16px 0 0 0',
                  padding: 12,
                  background: D.bgGray50,
                  borderRadius: D.radiusSm,
                  fontSize: 12,
                  color: D.textMuted,
                  fontFamily: D.fontNoto,
                  lineHeight: '160%',
                }}
              >
                通常枠（1/2）の場合の実質負担目安は約128万円です。
              </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
