import SectionTitle from './SectionTitle';
import { Container } from './Container';

const plans = [
  {
    name: '通常枠',
    rate: '1/2',
    rateLabel: '補助率',
    subsidyAmount: '約128万円',
    selfAmount: '約128万円',
    description: '幅広い中小企業が対象。補助率は導入費用の1/2。',
    color: '#6017FF',
    isRecommended: false,
  },
  {
    name: '賃金引上枠',
    rate: '2/3',
    rateLabel: '補助率',
    subsidyAmount: '約170万円',
    selfAmount: '約85万円',
    description: '地域別最低賃金＋30円以上の賃上げを実施する事業者が対象。お得な枠です。',
    color: '#6017FF',
    isRecommended: true,
  },
];

export default function SubsidyOverview() {
  return (
    <>
      {/* モバイル版 */}
      <section className="w-full md:hidden bg-gray-50" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <Container>
          <SectionTitle title="IT導入補助金とは" isMobile />
          <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{
              fontSize: '15px',
              lineHeight: '180%',
              color: '#333',
              fontFamily: '"Noto Sans JP"',
            }}>
              IT導入補助金は、中小企業・小規模事業者がITツールを導入する際に、導入費用の一部を国が補助する制度です。
              Omakase AIのようなAIシステムも対象となり、<strong style={{ color: '#6017FF' }}>最大170万円の補助</strong>を受けることができます。
            </p>

            {/* ポイント3つ */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
              {[
                { icon: '🏢', title: '対象', body: '中小企業・小規模事業者（法人・個人事業主）' },
                { icon: '💰', title: '補助対象', body: 'AIシステム利用料＋初期構築費＋研修・運用保守費' },
                { icon: '📅', title: '交付決定前の契約は無効', body: '交付決定通知が届く前に契約・支払いを行うと補助金が降りません' },
              ].map((item, i) => (
                <div key={i} style={{
                  background: '#fff',
                  borderRadius: '12px',
                  padding: '16px',
                  border: '1px solid #E5E7EB',
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start',
                }}>
                  <span style={{ fontSize: '24px', flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontSize: '13px', fontWeight: 700, color: '#6017FF', fontFamily: '"Noto Sans JP"', marginBottom: '4px' }}>
                      {item.title}
                    </p>
                    <p style={{ fontSize: '14px', color: '#333', fontFamily: '"Noto Sans JP"', lineHeight: '160%' }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* プランカード */}
            <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, fontFamily: '"Noto Sans JP"', color: '#0F0F0F', textAlign: 'center' }}>
                2つの補助枠
              </h3>
              {plans.map((plan, i) => (
                <div key={i} style={{
                  background: '#fff',
                  borderRadius: '16px',
                  border: plan.isRecommended ? '2px solid #6017FF' : '1px solid #E5E7EB',
                  padding: '20px',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {plan.isRecommended && (
                    <div style={{
                      position: 'absolute',
                      top: '0',
                      right: '0',
                      background: 'linear-gradient(310deg, #6017FF 44.35%, #8249FF 86.86%)',
                      color: '#fff',
                      fontSize: '11px',
                      fontWeight: 700,
                      fontFamily: '"Noto Sans JP"',
                      padding: '4px 12px',
                      borderBottomLeftRadius: '12px',
                    }}>
                      おすすめ
                    </div>
                  )}
                  <p style={{ fontSize: '18px', fontWeight: 700, color: '#0F0F0F', fontFamily: '"Noto Sans JP"', marginBottom: '12px' }}>
                    {plan.name}
                  </p>
                  <div style={{ display: 'flex', gap: '16px', marginBottom: '12px' }}>
                    <div style={{ textAlign: 'center' }}>
                      <p style={{ fontSize: '11px', color: '#888', fontFamily: '"Noto Sans JP"', marginBottom: '2px' }}>{plan.rateLabel}</p>
                      <p style={{ fontSize: '28px', fontWeight: 700, color: '#6017FF', fontFamily: 'var(--font-inter)' }}>{plan.rate}</p>
                    </div>
                    <div style={{ width: '1px', background: '#E5E7EB' }} />
                    <div>
                      <p style={{ fontSize: '11px', color: '#888', fontFamily: '"Noto Sans JP"', marginBottom: '2px' }}>補助額</p>
                      <p style={{ fontSize: '20px', fontWeight: 700, color: '#F59E0B', fontFamily: 'var(--font-inter)' }}>{plan.subsidyAmount}</p>
                    </div>
                    <div style={{ width: '1px', background: '#E5E7EB' }} />
                    <div>
                      <p style={{ fontSize: '11px', color: '#888', fontFamily: '"Noto Sans JP"', marginBottom: '2px' }}>実質負担</p>
                      <p style={{ fontSize: '20px', fontWeight: 700, color: '#6017FF', fontFamily: 'var(--font-inter)' }}>{plan.selfAmount}</p>
                    </div>
                  </div>
                  <p style={{ fontSize: '13px', color: '#555', fontFamily: '"Noto Sans JP"', lineHeight: '160%' }}>
                    {plan.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* PC版 */}
      <section className="hidden md:block w-full bg-gray-50" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <Container>
          <SectionTitle title="IT導入補助金とは" isMobile={false} />
          <div style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '40px', maxWidth: '900px', margin: '48px auto 0' }}>
            <p style={{
              fontSize: '16px',
              lineHeight: '200%',
              color: '#333',
              fontFamily: '"Noto Sans JP"',
              textAlign: 'center',
            }}>
              IT導入補助金は、中小企業・小規模事業者がITツールを導入する際に、導入費用の一部を国が補助する制度です。<br />
              Omakase AIのようなAIシステムも対象となり、<strong style={{ color: '#6017FF' }}>最大170万円の補助</strong>を受けることができます。
            </p>

            {/* ポイント3つ */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
              {[
                { icon: '🏢', title: '対象事業者', body: '中小企業・小規模事業者（法人・個人事業主）' },
                { icon: '💰', title: '補助対象費用', body: 'AIシステム利用料＋初期構築費＋研修・運用保守費' },
                { icon: '⚠️', title: '絶対遵守ルール', body: '交付決定通知が届く前に契約・支払いを行うと補助金が降りません' },
              ].map((item, i) => (
                <div key={i} style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '24px',
                  border: '1px solid #E5E7EB',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}>
                  <span style={{ fontSize: '32px' }}>{item.icon}</span>
                  <p style={{ fontSize: '14px', fontWeight: 700, color: '#6017FF', fontFamily: '"Noto Sans JP"' }}>
                    {item.title}
                  </p>
                  <p style={{ fontSize: '15px', color: '#333', fontFamily: '"Noto Sans JP"', lineHeight: '170%' }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            {/* プランカード */}
            <div>
              <h3 style={{ fontSize: '22px', fontWeight: 700, fontFamily: '"Noto Sans JP"', color: '#0F0F0F', textAlign: 'center', marginBottom: '24px' }}>
                2つの補助枠
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                {plans.map((plan, i) => (
                  <div key={i} style={{
                    background: '#fff',
                    borderRadius: '20px',
                    border: plan.isRecommended ? '2px solid #6017FF' : '1px solid #E5E7EB',
                    padding: '32px',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: plan.isRecommended ? '0 8px 32px rgba(96,23,255,0.15)' : '0 2px 8px rgba(0,0,0,0.04)',
                  }}>
                    {plan.isRecommended && (
                      <div style={{
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        background: 'linear-gradient(310deg, #6017FF 44.35%, #8249FF 86.86%)',
                        color: '#fff',
                        fontSize: '12px',
                        fontWeight: 700,
                        fontFamily: '"Noto Sans JP"',
                        padding: '6px 16px',
                        borderBottomLeftRadius: '12px',
                      }}>
                        おすすめ
                      </div>
                    )}
                    <p style={{ fontSize: '22px', fontWeight: 700, color: '#0F0F0F', fontFamily: '"Noto Sans JP"', marginBottom: '20px' }}>
                      {plan.name}
                    </p>
                    <div style={{ display: 'flex', gap: '24px', marginBottom: '20px', alignItems: 'flex-end' }}>
                      <div>
                        <p style={{ fontSize: '12px', color: '#888', fontFamily: '"Noto Sans JP"', marginBottom: '4px' }}>{plan.rateLabel}</p>
                        <p style={{ fontSize: '40px', fontWeight: 700, color: '#6017FF', fontFamily: 'var(--font-inter)', lineHeight: '1' }}>{plan.rate}</p>
                      </div>
                      <div style={{ paddingBottom: '4px' }}>
                        <p style={{ fontSize: '12px', color: '#888', fontFamily: '"Noto Sans JP"', marginBottom: '4px' }}>補助額</p>
                        <p style={{ fontSize: '24px', fontWeight: 700, color: '#F59E0B', fontFamily: 'var(--font-inter)' }}>{plan.subsidyAmount}</p>
                      </div>
                      <div style={{ paddingBottom: '4px' }}>
                        <p style={{ fontSize: '12px', color: '#888', fontFamily: '"Noto Sans JP"', marginBottom: '4px' }}>実質負担</p>
                        <p style={{ fontSize: '24px', fontWeight: 700, color: '#6017FF', fontFamily: 'var(--font-inter)' }}>{plan.selfAmount}</p>
                      </div>
                    </div>
                    <p style={{ fontSize: '14px', color: '#555', fontFamily: '"Noto Sans JP"', lineHeight: '170%' }}>
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
