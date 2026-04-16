import Image from 'next/image';
import SectionTitle from './SectionTitle';
import { Container } from './Container';
import { subsidyDesign as D } from './subsidy/designTokens';

const merits = [
  {
    num: '01',
    title: '補助金を活用してコストを抑えた導入',
    body:
      'システム利用料・初期構築・研修などがパッケージ化され、IT導入補助金の対象になりやすい構成です。賃金引上枠では補助率2/3となり、実質負担を抑えられます。',
  },
  {
    num: '02',
    title: '申請手続きの伴走サポート',
    body:
      'GビズIDの準備からマイページでの申請、交付決定後の流れまで、ZEALSが制度上の注意点（交付決定前の契約禁止など）も含めてご案内します。',
  },
];

export default function SubsidyMerits() {
  return (
    <>
      <section
        className="w-full md:hidden"
        style={{
          paddingTop: D.sectionPtMobile,
          paddingBottom: D.sectionPbMobile,
          paddingLeft: D.pxMobile,
          paddingRight: D.pxMobile,
          background: D.bgTint,
        }}
      >
        <SectionTitle title="ZEALSで申請するメリット" isMobile />
        <div style={{ height: D.afterTitleMobile }} />
        <p
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: D.text,
            fontFamily: D.fontNoto,
            lineHeight: '150%',
            margin: '0 0 24px 0',
          }}
        >
          制度の理解とスケジュール管理が申請の鍵です。導入とあわせてZEALSにご相談いただけます。
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {merits.map((m) => (
            <div
              key={m.num}
              style={{
                display: 'flex',
                padding: 12,
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 16,
                borderRadius: D.radiusCard,
                border: `1px solid ${D.borderVioletSoft}`,
                background: 'rgba(255, 255, 255, 0.42)',
                boxShadow: D.shadowCard,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 12,
                    fontWeight: 600,
                    color: D.text,
                  }}
                >
                  {m.num}
                </span>
                <span
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: '50%',
                    background: D.purple,
                  }}
                />
              </div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: D.text,
                  fontFamily: D.fontNoto,
                  lineHeight: '150%',
                  margin: 0,
                }}
              >
                {m.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: D.textBody,
                  fontFamily: D.fontNoto,
                  lineHeight: '150%',
                  margin: 0,
                  fontWeight: 500,
                }}
              >
                {m.body}
              </p>
            </div>
          ))}
        </div>
        <div
          style={{
            height: '197px',
            alignSelf: 'stretch',
            aspectRatio: '343/197',
            position: 'relative',
            marginTop: 32,
            borderRadius: D.radiusCard,
            border: `1px solid ${D.border}`,
            overflow: 'hidden',
            background: D.bgWhite,
          }}
        >
          <Image
            src="/images/common/omakase_demo.png"
            alt="Omakase AIのデモ画面イメージ"
            width={343}
            height={197}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
      </section>

      <section
        className="hidden md:block w-full"
        style={{
          paddingTop: D.sectionPtPcLarge,
          paddingBottom: D.sectionPbPcLarge,
          background: D.bgTint,
        }}
      >
        <div
          style={{
            maxWidth: D.innerMax,
            margin: '0 auto',
            paddingLeft: D.innerPadPc,
            paddingRight: D.innerPadPc,
          }}
        >
          <SectionTitle title="ZEALSで申請するメリット" isMobile={false} />
          <div style={{ height: D.afterTitlePc }} />
          <p
            style={{
              fontSize: 16,
              fontWeight: 500,
              color: D.text,
              fontFamily: D.fontNoto,
              lineHeight: '150%',
              maxWidth: 720,
              margin: '0 auto 48px auto',
              textAlign: 'center',
            }}
          >
            制度の理解とスケジュール管理が申請の鍵です。導入とあわせてZEALSにご相談いただけます。
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 48,
              maxWidth: 1200,
              margin: '0 auto',
            }}
          >
            <div style={{ flex: '1 1 0', minWidth: 0 }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 32,
                }}
              >
                {merits.map((m) => (
                  <div
                    key={m.num}
                    style={{
                      display: 'flex',
                      padding: 24,
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      gap: 20,
                      borderRadius: D.radiusCard,
                      border: `1px solid ${D.borderVioletSoft}`,
                      background: 'rgba(255, 255, 255, 0.42)',
                      boxShadow: D.shadowCard,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span
                        style={{
                          fontFamily: 'Montserrat, sans-serif',
                          fontSize: 12,
                          fontWeight: 600,
                          color: D.text,
                        }}
                      >
                        {m.num}
                      </span>
                      <span
                        style={{
                          width: 4,
                          height: 4,
                          borderRadius: '50%',
                          background: D.purple,
                        }}
                      />
                    </div>
                    <h3
                      style={{
                        fontSize: 22,
                        fontWeight: 700,
                        color: D.text,
                        fontFamily: D.fontNoto,
                        lineHeight: '150%',
                        margin: 0,
                      }}
                    >
                      {m.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 16,
                        color: D.textBody,
                        fontFamily: D.fontNoto,
                        lineHeight: '150%',
                        margin: 0,
                        fontWeight: 500,
                      }}
                    >
                      {m.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div
              style={{
                width: 'min(480px, 38%)',
                flexShrink: 0,
                borderRadius: D.radiusCard,
                border: `1px solid ${D.border}`,
                overflow: 'hidden',
                background: D.bgWhite,
                aspectRatio: '582/337',
              }}
            >
              <Image
                src="/images/common/omakase_demo.png"
                alt="Omakase AIのデモ画面イメージ"
                width={582}
                height={337}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
