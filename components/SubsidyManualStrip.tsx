import Link from 'next/link';
import { Container } from './Container';
import { subsidyDesign as D } from './subsidy/designTokens';

const PDF_PATH = '/document/Omakase AI_法人様向け資料.pdf';
const PDF_NAME = 'Omakase AI_法人様向け資料.pdf';

type Variant = 'hero' | 'inline';

export default function SubsidyManualStrip({ variant = 'hero' }: { variant?: Variant }) {
  const isCompact = variant === 'inline';

  return (
    <section
      className="w-full"
      style={{
        background: D.bgMessage,
        borderTop: `1px solid ${D.border}`,
        borderBottom: `1px solid ${D.border}`,
        paddingTop: isCompact ? 40 : 48,
        paddingBottom: isCompact ? 40 : 48,
      }}
    >
      <Container>
        <div
          style={{
            maxWidth: 800,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: isCompact ? 14 : 18,
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontFamily: D.fontNoto,
              fontSize: isCompact ? 20 : 22,
              fontWeight: 700,
              color: D.text,
              lineHeight: '150%',
              margin: 0,
            }}
          >
            {isCompact ? '資料ダウンロード・お問い合わせ' : '法人向け資料のダウンロード'}
          </h2>
          <p
            style={{
              fontFamily: D.fontNoto,
              fontSize: isCompact ? 13 : 14,
              color: D.textMuted,
              lineHeight: '150%',
              margin: 0,
              fontWeight: 500,
            }}
          >
            補助金の利用には事前準備が必要です。まずは資料でサービス概要をご確認ください。
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: isCompact ? 'column' : 'row',
              flexWrap: 'wrap',
              gap: 12,
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <a
              href={PDF_PATH}
              download={PDF_NAME}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 24px',
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
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 24px',
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
              相談・お問い合わせ
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
