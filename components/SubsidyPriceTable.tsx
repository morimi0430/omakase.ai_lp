import SectionTitle from './SectionTitle';
import { Container } from './Container';
import { subsidyDesign as D } from './subsidy/designTokens';

const priceItems = [
  { item: 'システム利用料（年額）', amount: '574,080円', detail: '月額59,800円×12ヶ月から20%OFF適用' },
  { item: '初期構築費', amount: '1,000,000円', detail: 'プロンプト作成、AI学習設定、サイト埋込支援' },
  { item: '研修・オンボーディング支援', amount: '500,000円', detail: '運用マニュアル作成、操作レクチャー（2〜3ヶ月目）' },
  { item: '運用保守費（年額）', amount: '480,000円', detail: '月額4万円×12ヶ月分' },
];

const subsidyBreakdown = [
  {
    label: '通常枠（補助率 1/2）',
    supplement: '約128万円',
    selfPay: '約128万円',
    isRecommended: false,
    description: '幅広い中小企業が対象',
  },
  {
    label: '賃金引上枠（補助率 2/3）',
    supplement: '約170万円',
    selfPay: '約85万円',
    isRecommended: true,
    description: '地域別最低賃金＋30円以上の賃上げを実施する場合',
  },
];

const prepItems = ['商品データ（CSV）', 'ブランドガイドライン', 'FAQ・過去の接客ログ', 'Webサイトへのタグ設置権限'];

export default function SubsidyPriceTable() {
  return (
    <>
      <section
        className="w-full md:hidden"
        style={{
          paddingTop: D.sectionPtMobile,
          paddingBottom: D.sectionPbMobile,
          background: D.bgWhite,
        }}
      >
        <Container>
          <SectionTitle title="費用内訳と補助金適用後" isMobile />
          <div style={{ height: D.afterTitleMobile }} />
          <p
            style={{
              textAlign: 'center',
              fontSize: 12,
              color: D.textSub,
              fontFamily: D.fontNoto,
              margin: '0 0 24px 0',
            }}
          >
            ※すべて税抜価格
          </p>
          <h3
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: D.text,
              fontFamily: D.fontNoto,
              margin: '0 0 14px 0',
            }}
          >
            Omakase AI 補助金パッケージ（ベテラン相当）
          </h3>
          <div style={{ border: `1px solid ${D.border}`, borderRadius: D.radiusSm, overflow: 'hidden' }}>
            {priceItems.map((row, i) => (
              <div
                key={row.item}
                style={{
                  padding: '14px 16px',
                  borderBottom: i < priceItems.length - 1 ? `1px solid ${D.border}` : 'none',
                  background: i % 2 === 0 ? D.bgWhite : D.bgGray50,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, alignItems: 'flex-start' }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: D.text, fontFamily: D.fontNoto, margin: 0 }}>{row.item}</p>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: D.purple,
                      fontFamily: 'var(--font-inter)',
                      margin: 0,
                      flexShrink: 0,
                    }}
                  >
                    {row.amount}
                  </p>
                </div>
                <p style={{ fontSize: 12, color: D.textMuted, fontFamily: D.fontNoto, margin: '6px 0 0 0', lineHeight: '150%' }}>
                  {row.detail}
                </p>
              </div>
            ))}
            <div
              style={{
                padding: '16px',
                background: '#F3F4F6',
                borderTop: `2px solid ${D.border}`,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <p style={{ fontSize: 15, fontWeight: 700, color: D.text, fontFamily: D.fontNoto, margin: 0 }}>合計金額</p>
              <p style={{ fontSize: 18, fontWeight: 700, color: D.text, fontFamily: 'var(--font-inter)', margin: 0 }}>
                2,554,080円
              </p>
            </div>
          </div>
          <p style={{ fontSize: 11, color: D.textSub, fontFamily: D.fontNoto, margin: '8px 0 32px 0' }}>
            ※資料内では「約260万円」と表記される場合があります
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 700, color: D.text, fontFamily: D.fontNoto, margin: '0 0 14px 0' }}>
            補助金適用後の実質負担
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {subsidyBreakdown.map((plan) => (
              <div
                key={plan.label}
                style={{
                  borderRadius: D.radiusCard,
                  border: plan.isRecommended ? `1px solid ${D.purpleBtn}` : `1px solid ${D.border}`,
                  padding: 18,
                  background: D.bgWhite,
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
                <p style={{ fontSize: 15, fontWeight: 700, color: D.text, fontFamily: D.fontNoto, margin: '0 0 10px 0' }}>
                  {plan.label}
                </p>
                <div style={{ display: 'flex', gap: 16, marginBottom: 8, alignItems: 'baseline' }}>
                  <div>
                    <p style={{ fontSize: 11, color: D.textSub, fontFamily: D.fontNoto, margin: 0 }}>補助額</p>
                    <p style={{ fontSize: 18, fontWeight: 700, color: D.text, fontFamily: 'var(--font-inter)', margin: 0 }}>
                      {plan.supplement}
                    </p>
                  </div>
                  <span style={{ color: D.border, fontSize: 14 }}>→</span>
                  <div>
                    <p style={{ fontSize: 11, color: D.textSub, fontFamily: D.fontNoto, margin: 0 }}>実質負担</p>
                    <p style={{ fontSize: 20, fontWeight: 700, color: D.purple, fontFamily: 'var(--font-inter)', margin: 0 }}>
                      {plan.selfPay}
                    </p>
                  </div>
                </div>
                <p style={{ fontSize: 12, color: D.textMuted, fontFamily: D.fontNoto, margin: 0, lineHeight: '150%' }}>
                  {plan.description}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 28,
              background: D.bgGray50,
              borderRadius: D.radiusSm,
              padding: 18,
              border: `1px solid ${D.border}`,
            }}
          >
            <h3
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: D.text,
                fontFamily: D.fontNoto,
                margin: '0 0 12px 0',
              }}
            >
              お客様側で必要な準備
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {prepItems.map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: D.purple,
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: 14, fontFamily: D.fontNoto, color: D.textBody, fontWeight: 500 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section
        className="hidden md:block w-full"
        style={{
          paddingTop: D.sectionPtPcLarge,
          paddingBottom: D.sectionPbPcLarge,
          background: D.bgWhite,
        }}
      >
        <Container>
          <SectionTitle title="費用内訳と補助金適用後" isMobile={false} />
          <div style={{ height: D.afterTitlePc }} />
          <p
            style={{
              textAlign: 'center',
              fontSize: 13,
              color: D.textSub,
              fontFamily: D.fontNoto,
              margin: '0 0 40px 0',
            }}
          >
            ※すべて税抜価格
          </p>

          <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 48 }}>
            <div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: D.text,
                  fontFamily: D.fontNoto,
                  margin: '0 0 18px 0',
                }}
              >
                Omakase AI 補助金パッケージ（ベテラン相当）
              </h3>
              <div
                style={{
                  border: `1px solid ${D.border}`,
                  borderRadius: D.radiusCard,
                  overflow: 'hidden',
                  boxShadow: D.shadowCard,
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 3fr',
                    background: '#F3F4F6',
                    padding: '14px 24px',
                    borderBottom: `1px solid ${D.border}`,
                  }}
                >
                  <p style={{ fontSize: 14, fontWeight: 700, color: D.text, fontFamily: D.fontNoto, margin: 0 }}>項目</p>
                  <p style={{ fontSize: 14, fontWeight: 700, color: D.text, fontFamily: D.fontNoto, margin: 0 }}>金額</p>
                  <p style={{ fontSize: 14, fontWeight: 700, color: D.text, fontFamily: D.fontNoto, margin: 0 }}>内容の詳細</p>
                </div>
                {priceItems.map((row, i) => (
                  <div
                    key={row.item}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '2fr 1fr 3fr',
                      padding: '16px 24px',
                      borderBottom: i < priceItems.length - 1 ? `1px solid ${D.border}` : 'none',
                      background: i % 2 === 0 ? D.bgWhite : D.bgGray50,
                      alignItems: 'center',
                    }}
                  >
                    <p style={{ fontSize: 15, fontWeight: 600, color: D.text, fontFamily: D.fontNoto, margin: 0 }}>{row.item}</p>
                    <p style={{ fontSize: 16, fontWeight: 700, color: D.purple, fontFamily: 'var(--font-inter)', margin: 0 }}>
                      {row.amount}
                    </p>
                    <p style={{ fontSize: 14, color: D.textMuted, fontFamily: D.fontNoto, lineHeight: '150%', margin: 0 }}>
                      {row.detail}
                    </p>
                  </div>
                ))}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 3fr',
                    padding: '18px 24px',
                    background: '#F3F4F6',
                    borderTop: `2px solid ${D.border}`,
                    alignItems: 'center',
                  }}
                >
                  <p style={{ fontSize: 16, fontWeight: 700, color: D.text, fontFamily: D.fontNoto, margin: 0 }}>合計金額</p>
                  <p style={{ fontSize: 22, fontWeight: 700, color: D.text, fontFamily: 'var(--font-inter)', margin: 0 }}>
                    2,554,080円
                  </p>
                  <p style={{ fontSize: 12, color: D.textMuted, fontFamily: D.fontNoto, margin: 0, lineHeight: '150%' }}>
                    ※資料内では「約260万円」と表記される場合があります
                  </p>
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 32 }}>
              <div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: D.text,
                    fontFamily: D.fontNoto,
                    margin: '0 0 18px 0',
                  }}
                >
                  補助金適用後の実質負担
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {subsidyBreakdown.map((plan) => (
                    <div
                      key={plan.label}
                      style={{
                        borderRadius: D.radiusCard,
                        border: plan.isRecommended ? `1px solid ${D.purpleBtn}` : `1px solid ${D.border}`,
                        padding: 24,
                        background: D.bgWhite,
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
                      <p style={{ fontSize: 17, fontWeight: 700, color: D.text, fontFamily: D.fontNoto, margin: '0 0 14px 0' }}>
                        {plan.label}
                      </p>
                      <div style={{ display: 'flex', gap: 24, marginBottom: 10, alignItems: 'flex-end' }}>
                        <div>
                          <p style={{ fontSize: 12, color: D.textSub, fontFamily: D.fontNoto, margin: '0 0 4px 0' }}>補助額</p>
                          <p style={{ fontSize: 24, fontWeight: 700, color: D.text, fontFamily: 'var(--font-inter)', margin: 0 }}>
                            {plan.supplement}
                          </p>
                        </div>
                        <div style={{ fontSize: 20, color: D.textSub, paddingBottom: 4 }}>→</div>
                        <div>
                          <p style={{ fontSize: 12, color: D.textSub, fontFamily: D.fontNoto, margin: '0 0 4px 0' }}>実質負担額</p>
                          <p style={{ fontSize: 28, fontWeight: 700, color: D.purple, fontFamily: 'var(--font-inter)', margin: 0 }}>
                            {plan.selfPay}
                          </p>
                        </div>
                      </div>
                      <p style={{ fontSize: 13, color: D.textMuted, fontFamily: D.fontNoto, margin: 0, lineHeight: '150%' }}>
                        {plan.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: D.text,
                    fontFamily: D.fontNoto,
                    margin: '0 0 18px 0',
                  }}
                >
                  お客様側で必要な準備
                </h3>
                <div
                  style={{
                    background: D.bgGray50,
                    borderRadius: D.radiusCard,
                    padding: 28,
                    border: `1px solid ${D.border}`,
                  }}
                >
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {prepItems.map((item) => (
                      <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            background: D.purple,
                            flexShrink: 0,
                          }}
                        />
                        <span style={{ fontSize: 15, fontFamily: D.fontNoto, color: D.textBody, fontWeight: 500 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
