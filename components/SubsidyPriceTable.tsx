import SectionTitle from './SectionTitle';
import { Container } from './Container';

const priceItems = [
  {
    item: 'システム利用料（年額）',
    amount: '574,080円',
    detail: '月額59,800円×12ヶ月から20%OFF適用',
  },
  {
    item: '初期構築費',
    amount: '1,000,000円',
    detail: 'プロンプト作成、AI学習設定、サイト埋込支援',
  },
  {
    item: '研修・オンボーディング支援',
    amount: '500,000円',
    detail: '運用マニュアル作成、操作レクチャー（2〜3ヶ月目）',
  },
  {
    item: '運用保守費（年額）',
    amount: '480,000円',
    detail: '月額4万円×12ヶ月分',
  },
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

export default function SubsidyPriceTable() {
  return (
    <>
      {/* モバイル版 */}
      <section className="w-full md:hidden bg-white" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <Container>
          <SectionTitle title="費用内訳と補助金適用後" isMobile />
          <p style={{ textAlign: 'center', fontSize: '13px', color: '#888', fontFamily: '"Noto Sans JP"', marginTop: '8px', marginBottom: '28px' }}>
            ※すべて税抜価格
          </p>

          {/* 費用内訳テーブル */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0F0F0F', fontFamily: '"Noto Sans JP"', marginBottom: '16px' }}>
              Omakase AI 補助金パッケージ（ベテランプラン相当）
            </h3>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '12px', overflow: 'hidden' }}>
              {priceItems.map((row, i) => (
                <div key={i} style={{
                  padding: '14px 16px',
                  borderBottom: i < priceItems.length - 1 ? '1px solid #E5E7EB' : 'none',
                  background: i % 2 === 0 ? '#fff' : '#F9FAFB',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                    <p style={{ fontSize: '13px', fontWeight: 700, color: '#0F0F0F', fontFamily: '"Noto Sans JP"' }}>
                      {row.item}
                    </p>
                    <p style={{ fontSize: '15px', fontWeight: 700, color: '#6017FF', fontFamily: 'var(--font-inter)', flexShrink: 0 }}>
                      {row.amount}
                    </p>
                  </div>
                  <p style={{ fontSize: '12px', color: '#666', fontFamily: '"Noto Sans JP"', marginTop: '4px' }}>
                    {row.detail}
                  </p>
                </div>
              ))}
              {/* 合計行 */}
              <div style={{
                padding: '16px',
                background: 'linear-gradient(135deg, #6017FF 0%, #8249FF 100%)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <p style={{ fontSize: '15px', fontWeight: 700, color: '#fff', fontFamily: '"Noto Sans JP"' }}>合計金額</p>
                <p style={{ fontSize: '20px', fontWeight: 700, color: '#F6FF51', fontFamily: 'var(--font-inter)' }}>2,554,080円</p>
              </div>
            </div>
            <p style={{ fontSize: '11px', color: '#888', fontFamily: '"Noto Sans JP"', marginTop: '6px' }}>
              ※資料内では「約260万円」と表記される場合があります
            </p>
          </div>

          {/* 補助金適用後 */}
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0F0F0F', fontFamily: '"Noto Sans JP"', marginBottom: '16px' }}>
              補助金適用後の実質負担
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {subsidyBreakdown.map((plan, i) => (
                <div key={i} style={{
                  borderRadius: '16px',
                  border: plan.isRecommended ? '2px solid #6017FF' : '1px solid #E5E7EB',
                  padding: '20px',
                  background: '#fff',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {plan.isRecommended && (
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      background: 'linear-gradient(310deg, #6017FF 44.35%, #8249FF 86.86%)',
                      color: '#fff',
                      fontSize: '11px',
                      fontWeight: 700,
                      fontFamily: '"Noto Sans JP"',
                      padding: '4px 12px',
                      borderBottomLeftRadius: '10px',
                    }}>
                      おすすめ
                    </div>
                  )}
                  <p style={{ fontSize: '15px', fontWeight: 700, color: '#0F0F0F', fontFamily: '"Noto Sans JP"', marginBottom: '12px' }}>
                    {plan.label}
                  </p>
                  <div style={{ display: 'flex', gap: '20px', marginBottom: '8px' }}>
                    <div>
                      <p style={{ fontSize: '11px', color: '#888', fontFamily: '"Noto Sans JP"' }}>補助額</p>
                      <p style={{ fontSize: '20px', fontWeight: 700, color: '#F59E0B', fontFamily: 'var(--font-inter)' }}>
                        {plan.supplement}
                      </p>
                    </div>
                    <div style={{ fontSize: '20px', color: '#ccc', display: 'flex', alignItems: 'center' }}>→</div>
                    <div>
                      <p style={{ fontSize: '11px', color: '#888', fontFamily: '"Noto Sans JP"' }}>実質負担額</p>
                      <p style={{ fontSize: '24px', fontWeight: 700, color: '#6017FF', fontFamily: 'var(--font-inter)' }}>
                        {plan.selfPay}
                      </p>
                    </div>
                  </div>
                  <p style={{ fontSize: '12px', color: '#666', fontFamily: '"Noto Sans JP"' }}>
                    {plan.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 必要な準備物 */}
          <div style={{ marginTop: '32px', background: '#F3F4F6', borderRadius: '16px', padding: '20px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0F0F0F', fontFamily: '"Noto Sans JP"', marginBottom: '12px' }}>
              📋 顧客側で必要な準備物
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                '商品データ（CSV）',
                'ブランドガイドライン',
                'FAQ・過去の接客ログ',
                'WebサイトへのタグSetup権限',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontFamily: '"Noto Sans JP"', color: '#333' }}>
                  <span style={{ color: '#6017FF', fontWeight: 700 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* PC版 */}
      <section className="hidden md:block w-full bg-white" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <Container>
          <SectionTitle title="費用内訳と補助金適用後" isMobile={false} />
          <p style={{ textAlign: 'center', fontSize: '13px', color: '#888', fontFamily: '"Noto Sans JP"', marginTop: '8px', marginBottom: '48px' }}>
            ※すべて税抜価格
          </p>

          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {/* 費用内訳テーブル */}
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0F0F0F', fontFamily: '"Noto Sans JP"', marginBottom: '20px' }}>
                Omakase AI 補助金パッケージ（ベテランプラン相当）
              </h3>
              <div style={{ border: '1px solid #E5E7EB', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                {/* ヘッダー行 */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 1fr 3fr',
                  background: '#6017FF',
                  padding: '14px 24px',
                }}>
                  <p style={{ fontSize: '14px', fontWeight: 700, color: '#fff', fontFamily: '"Noto Sans JP"' }}>項目</p>
                  <p style={{ fontSize: '14px', fontWeight: 700, color: '#fff', fontFamily: '"Noto Sans JP"' }}>金額</p>
                  <p style={{ fontSize: '14px', fontWeight: 700, color: '#fff', fontFamily: '"Noto Sans JP"' }}>内容の詳細</p>
                </div>
                {priceItems.map((row, i) => (
                  <div key={i} style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 3fr',
                    padding: '16px 24px',
                    borderBottom: '1px solid #E5E7EB',
                    background: i % 2 === 0 ? '#fff' : '#F9FAFB',
                    alignItems: 'center',
                  }}>
                    <p style={{ fontSize: '15px', fontWeight: 600, color: '#0F0F0F', fontFamily: '"Noto Sans JP"' }}>
                      {row.item}
                    </p>
                    <p style={{ fontSize: '16px', fontWeight: 700, color: '#6017FF', fontFamily: 'var(--font-inter)' }}>
                      {row.amount}
                    </p>
                    <p style={{ fontSize: '14px', color: '#555', fontFamily: '"Noto Sans JP"', lineHeight: '160%' }}>
                      {row.detail}
                    </p>
                  </div>
                ))}
                {/* 合計行 */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 1fr 3fr',
                  padding: '20px 24px',
                  background: 'linear-gradient(135deg, #6017FF 0%, #8249FF 100%)',
                  alignItems: 'center',
                }}>
                  <p style={{ fontSize: '17px', fontWeight: 700, color: '#fff', fontFamily: '"Noto Sans JP"' }}>合計金額</p>
                  <p style={{ fontSize: '22px', fontWeight: 700, color: '#F6FF51', fontFamily: 'var(--font-inter)' }}>2,554,080円</p>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', fontFamily: '"Noto Sans JP"' }}>
                    ※資料内では「約260万円」と表記される場合があります
                  </p>
                </div>
              </div>
            </div>

            {/* 補助金適用後 + 必要な準備物 */}
            <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '32px' }}>
              {/* 補助金適用後 */}
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0F0F0F', fontFamily: '"Noto Sans JP"', marginBottom: '20px' }}>
                  補助金適用後の実質負担
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {subsidyBreakdown.map((plan, i) => (
                    <div key={i} style={{
                      borderRadius: '16px',
                      border: plan.isRecommended ? '2px solid #6017FF' : '1px solid #E5E7EB',
                      padding: '24px',
                      background: '#fff',
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: plan.isRecommended ? '0 4px 20px rgba(96,23,255,0.12)' : '0 2px 8px rgba(0,0,0,0.04)',
                    }}>
                      {plan.isRecommended && (
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
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
                      <p style={{ fontSize: '17px', fontWeight: 700, color: '#0F0F0F', fontFamily: '"Noto Sans JP"', marginBottom: '16px' }}>
                        {plan.label}
                      </p>
                      <div style={{ display: 'flex', gap: '24px', marginBottom: '10px', alignItems: 'flex-end' }}>
                        <div>
                          <p style={{ fontSize: '12px', color: '#888', fontFamily: '"Noto Sans JP"', marginBottom: '4px' }}>補助額</p>
                          <p style={{ fontSize: '26px', fontWeight: 700, color: '#F59E0B', fontFamily: 'var(--font-inter)' }}>
                            {plan.supplement}
                          </p>
                        </div>
                        <div style={{ fontSize: '24px', color: '#ccc', paddingBottom: '4px' }}>→</div>
                        <div>
                          <p style={{ fontSize: '12px', color: '#888', fontFamily: '"Noto Sans JP"', marginBottom: '4px' }}>実質負担額</p>
                          <p style={{ fontSize: '30px', fontWeight: 700, color: '#6017FF', fontFamily: 'var(--font-inter)' }}>
                            {plan.selfPay}
                          </p>
                        </div>
                      </div>
                      <p style={{ fontSize: '13px', color: '#666', fontFamily: '"Noto Sans JP"' }}>
                        {plan.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 必要な準備物 */}
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0F0F0F', fontFamily: '"Noto Sans JP"', marginBottom: '20px' }}>
                  顧客側で必要な準備物
                </h3>
                <div style={{ background: '#F3F4F6', borderRadius: '16px', padding: '28px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {[
                      { icon: '📦', label: '商品データ（CSV）' },
                      { icon: '🎨', label: 'ブランドガイドライン' },
                      { icon: '💬', label: 'FAQ・過去の接客ログ' },
                      { icon: '🏷️', label: 'Webサイトへのタグ設置権限' },
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ fontSize: '22px' }}>{item.icon}</span>
                        <span style={{ fontSize: '15px', fontFamily: '"Noto Sans JP"', color: '#333', fontWeight: 500 }}>
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
