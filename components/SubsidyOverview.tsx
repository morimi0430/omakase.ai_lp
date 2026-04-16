import type { CSSProperties } from 'react';
import SectionTitle from './SectionTitle';
import { Container } from './Container';
import { subsidyDesign as D } from './subsidy/designTokens';

const tableBase: CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
  fontFamily: D.fontNoto,
  fontSize: 14,
  border: `1px solid ${D.border}`,
  borderRadius: D.radiusSm,
  overflow: 'hidden',
};

const thCell: CSSProperties = {
  background: '#F3F4F6',
  color: '#111',
  fontWeight: 700,
  textAlign: 'left',
  padding: '10px 14px',
  borderBottom: `1px solid ${D.border}`,
  width: '34%',
};

const tdCell: CSSProperties = {
  padding: '10px 14px',
  borderBottom: `1px solid ${D.border}`,
  background: D.bgWhite,
  color: D.textBody,
  lineHeight: '150%',
  fontWeight: 500,
};

function OverviewTables({ compact }: { compact?: boolean }) {
  const fs = compact ? 13 : 14;
  const th = { ...thCell, fontSize: fs };
  const td = { ...tdCell, fontSize: fs };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 20 : 28 }}>
      <div>
        <h3
          style={{
            fontSize: compact ? 16 : 18,
            fontWeight: 700,
            color: D.text,
            fontFamily: D.fontNoto,
            margin: '0 0 8px 0',
            lineHeight: '150%',
          }}
        >
          ITツールの導入により生産性の向上を目指す制度
        </h3>
        <p
          style={{
            fontSize: compact ? 14 : 15,
            color: D.textBody,
            fontFamily: D.fontNoto,
            lineHeight: '150%',
            margin: '0 0 16px 0',
            fontWeight: 500,
          }}
        >
          Omakase AI は IT 導入補助金の対象となりうるソフトウェア・サービスです。申請可能な枠・金額は事業者様の条件により異なります。
        </p>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <p
          style={{
            fontSize: compact ? 13 : 14,
            fontWeight: 700,
            color: D.text,
            fontFamily: D.fontNoto,
            margin: '0 0 8px 0',
          }}
        >
          制度の共通事項
        </p>
        <table style={tableBase}>
          <tbody>
            <tr>
              <th style={th}>補助対象者</th>
              <td style={td}>中小企業・小規模事業者（法人・個人事業主など）</td>
            </tr>
            <tr>
              <th style={th}>所轄</th>
              <td style={td}>経済産業省（事務局を通じた申請）</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <p
          style={{
            fontSize: compact ? 13 : 14,
            fontWeight: 700,
            color: D.text,
            fontFamily: D.fontNoto,
            margin: '0 0 8px 0',
          }}
        >
          本パッケージ（税抜約260万円）を例とした目安
        </p>
        <table style={tableBase}>
          <thead>
            <tr>
              <th style={{ ...th, width: '26%' }}>枠</th>
              <th style={{ ...th, width: '20%' }}>補助率</th>
              <th style={{ ...th, width: '54%' }}>補助額・実質負担（目安）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>通常枠</td>
              <td style={td}>1/2</td>
              <td style={td}>補助 約128万円／実質負担 約128万円</td>
            </tr>
            <tr>
              <td style={td}>賃金引上枠</td>
              <td style={td}>2/3</td>
              <td style={td}>補助 約170万円／実質負担 約85万円</td>
            </tr>
          </tbody>
        </table>
        <p
          style={{
            fontSize: compact ? 11 : 12,
            color: D.textSub,
            fontFamily: D.fontNoto,
            margin: '8px 0 0 0',
            lineHeight: '160%',
          }}
        >
          ※賃金引上枠には賃上げ等の条件があります。第1次締切の例：2026年5月12日（火）17:00。
        </p>
      </div>
    </div>
  );
}

const plans = [
  {
    name: '通常枠',
    rate: '1/2',
    rateLabel: '補助率',
    subsidyAmount: '約128万円',
    selfAmount: '約128万円',
    description: '幅広い中小企業が対象。補助率は導入費用の1/2。',
    isRecommended: false,
  },
  {
    name: '賃金引上枠',
    rate: '2/3',
    rateLabel: '補助率',
    subsidyAmount: '約170万円',
    selfAmount: '約85万円',
    description: '地域別最低賃金＋30円以上の賃上げを実施する事業者が対象。',
    isRecommended: true,
  },
];

const points = [
  { title: '対象', body: '中小企業・小規模事業者（法人・個人事業主）' },
  { title: '補助対象費用', body: 'AIシステム利用料＋初期構築費＋研修・運用保守費' },
  { title: '注意', body: '交付決定通知が届く前の契約・支払いは補助の対象になりません。' },
];

export default function SubsidyOverview() {
  return (
    <>
      <section
        className="w-full md:hidden"
        style={{
          paddingTop: D.sectionPtMobile,
          paddingBottom: D.sectionPbMobile,
          background: D.bgGray50,
        }}
      >
        <Container>
          <SectionTitle title="IT導入補助金とは" isMobile />
          <div style={{ height: D.afterTitleMobile }} />
          <p
            style={{
              fontSize: 16,
              lineHeight: '150%',
              color: D.textBody,
              fontFamily: D.fontNoto,
              fontWeight: 500,
              margin: 0,
            }}
          >
            IT導入補助金は、中小企業・小規模事業者がITツールを導入する際に、導入費用の一部を国が補助する制度です。条件に応じて
            <strong style={{ color: D.purple }}> 最大約170万円の補助</strong>
            を受けられる場合があります。
          </p>
          <div style={{ marginTop: 28 }}>
            <OverviewTables compact />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 28 }}>
            {points.map((item) => (
              <div
                key={item.title}
                style={{
                  background: D.bgWhite,
                  borderRadius: D.radiusSm,
                  padding: 16,
                  border: `1px solid ${D.border}`,
                }}
              >
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: D.purple,
                    fontFamily: D.fontNoto,
                    margin: '0 0 6px 0',
                  }}
                >
                  {item.title}
                </p>
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
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <h3
              style={{
                fontSize: 18,
                fontWeight: 700,
                fontFamily: D.fontNoto,
                color: D.text,
                textAlign: 'center',
                margin: '0 0 16px 0',
              }}
            >
              2つの補助枠
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  style={{
                    background: D.bgWhite,
                    borderRadius: D.radiusCard,
                    border: plan.isRecommended ? `1px solid ${D.purpleBtn}` : `1px solid ${D.border}`,
                    padding: 20,
                    position: 'relative',
                    boxShadow: D.shadowCard,
                  }}
                >
                  {plan.isRecommended && (
                    <span
                      style={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        fontSize: 11,
                        fontWeight: 700,
                        fontFamily: D.fontNoto,
                        color: D.purpleBtn,
                      }}
                    >
                      推奨枠
                    </span>
                  )}
                  <p
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      color: D.text,
                      fontFamily: D.fontNoto,
                      margin: '0 0 12px 0',
                    }}
                  >
                    {plan.name}
                  </p>
                  <div style={{ display: 'flex', gap: 12, marginBottom: 10, flexWrap: 'wrap' }}>
                    <div>
                      <p style={{ fontSize: 11, color: D.textSub, fontFamily: D.fontNoto, margin: '0 0 2px 0' }}>
                        {plan.rateLabel}
                      </p>
                      <p style={{ fontSize: 24, fontWeight: 700, color: D.purple, fontFamily: 'var(--font-inter)', margin: 0 }}>
                        {plan.rate}
                      </p>
                    </div>
                    <div style={{ width: 1, background: D.border, alignSelf: 'stretch', minHeight: 40 }} />
                    <div>
                      <p style={{ fontSize: 11, color: D.textSub, fontFamily: D.fontNoto, margin: '0 0 2px 0' }}>補助額</p>
                      <p style={{ fontSize: 17, fontWeight: 700, color: D.text, fontFamily: 'var(--font-inter)', margin: 0 }}>
                        {plan.subsidyAmount}
                      </p>
                    </div>
                    <div>
                      <p style={{ fontSize: 11, color: D.textSub, fontFamily: D.fontNoto, margin: '0 0 2px 0' }}>実質負担</p>
                      <p style={{ fontSize: 17, fontWeight: 700, color: D.purple, fontFamily: 'var(--font-inter)', margin: 0 }}>
                        {plan.selfAmount}
                      </p>
                    </div>
                  </div>
                  <p style={{ fontSize: 13, color: D.textMuted, fontFamily: D.fontNoto, lineHeight: '150%', margin: 0 }}>
                    {plan.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section
        className="hidden md:block w-full"
        style={{
          paddingTop: D.sectionPtPc,
          paddingBottom: D.sectionPbPc,
          background: D.bgGray50,
        }}
      >
        <Container>
          <SectionTitle title="IT導入補助金とは" isMobile={false} />
          <div style={{ height: D.afterTitlePc }} />
          <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 40 }}>
            <p
              style={{
                fontSize: 16,
                lineHeight: '150%',
                color: D.textBody,
                fontFamily: D.fontNoto,
                textAlign: 'center',
                margin: 0,
                fontWeight: 500,
              }}
            >
              IT導入補助金は、中小企業・小規模事業者がITツールを導入する際に、導入費用の一部を国が補助する制度です。
              <br />
              条件に応じて
              <strong style={{ color: D.purple }}> 最大約170万円の補助</strong>
              を受けられる場合があります。
            </p>
            <OverviewTables />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
              {points.map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: D.bgWhite,
                    borderRadius: D.radiusCard,
                    padding: 24,
                    border: `1px solid ${D.border}`,
                    boxShadow: D.shadowCard,
                  }}
                >
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: D.purple,
                      fontFamily: D.fontNoto,
                      margin: '0 0 10px 0',
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontSize: 15,
                      color: D.textBody,
                      fontFamily: D.fontNoto,
                      lineHeight: '150%',
                      margin: 0,
                      fontWeight: 500,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  fontFamily: D.fontNoto,
                  color: D.text,
                  textAlign: 'center',
                  margin: '0 0 24px 0',
                }}
              >
                2つの補助枠
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    style={{
                      background: D.bgWhite,
                      borderRadius: D.radiusCard,
                      border: plan.isRecommended ? `1px solid ${D.purpleBtn}` : `1px solid ${D.border}`,
                      padding: 32,
                      position: 'relative',
                      boxShadow: D.shadowCard,
                    }}
                  >
                    {plan.isRecommended && (
                      <span
                        style={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          fontSize: 12,
                          fontWeight: 700,
                          fontFamily: D.fontNoto,
                          color: D.purpleBtn,
                        }}
                      >
                        推奨枠
                      </span>
                    )}
                    <p
                      style={{
                        fontSize: 22,
                        fontWeight: 700,
                        color: D.text,
                        fontFamily: D.fontNoto,
                        margin: '0 0 20px 0',
                      }}
                    >
                      {plan.name}
                    </p>
                    <div style={{ display: 'flex', gap: 24, marginBottom: 16, alignItems: 'flex-end', flexWrap: 'wrap' }}>
                      <div>
                        <p style={{ fontSize: 12, color: D.textSub, fontFamily: D.fontNoto, margin: '0 0 4px 0' }}>
                          {plan.rateLabel}
                        </p>
                        <p
                          style={{
                            fontSize: 36,
                            fontWeight: 700,
                            color: D.purple,
                            fontFamily: 'var(--font-inter)',
                            lineHeight: 1,
                            margin: 0,
                          }}
                        >
                          {plan.rate}
                        </p>
                      </div>
                      <div>
                        <p style={{ fontSize: 12, color: D.textSub, fontFamily: D.fontNoto, margin: '0 0 4px 0' }}>補助額</p>
                        <p style={{ fontSize: 22, fontWeight: 700, color: D.text, fontFamily: 'var(--font-inter)', margin: 0 }}>
                          {plan.subsidyAmount}
                        </p>
                      </div>
                      <div>
                        <p style={{ fontSize: 12, color: D.textSub, fontFamily: D.fontNoto, margin: '0 0 4px 0' }}>実質負担</p>
                        <p style={{ fontSize: 22, fontWeight: 700, color: D.purple, fontFamily: 'var(--font-inter)', margin: 0 }}>
                          {plan.selfAmount}
                        </p>
                      </div>
                    </div>
                    <p style={{ fontSize: 14, color: D.textMuted, fontFamily: D.fontNoto, lineHeight: '150%', margin: 0 }}>
                      {plan.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
