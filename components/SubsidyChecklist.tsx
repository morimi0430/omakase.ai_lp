import SectionTitle from './SectionTitle';
import { Container } from './Container';

const checklistItems = [
  {
    number: '01',
    icon: '🏛️',
    title: 'GビズIDプライムアカウント',
    subtitle: '発行まで約2週間',
    description: '法人代表者のマイナンバーカードとスマホアプリで取得。申請から発行まで約2週間かかるため、早めに準備を始めてください。',
    steps: [
      'GビズIDのWebサイトにアクセス',
      'マイナンバーカードで本人確認',
      '約2週間で発行される',
    ],
    urgency: '⚠️ 4月下旬には取得開始が必要',
    urgencyColor: '#DC2626',
    urgencyBg: '#FEF2F2',
  },
  {
    number: '02',
    icon: '🔒',
    title: 'SECURITY ACTION（一つ星/二つ星）',
    subtitle: '完了まで2〜3日',
    description: 'IPA（情報処理推進機構）のサイトで自己宣言を行い、セキュリティロゴを取得します。無料で簡単に行えます。',
    steps: [
      'IPAのSECURITY ACTIONサイトにアクセス',
      '一つ星または二つ星の宣言を実施',
      'ロゴ画像・宣言IDを取得（2〜3日）',
    ],
    urgency: '✓ オンラインで簡単に完了',
    urgencyColor: '#059669',
    urgencyBg: '#F0FDF4',
  },
  {
    number: '03',
    icon: '📄',
    title: '添付書類（PDF）',
    subtitle: '事前に準備が必要',
    description: '申請時に必要な公的書類です。発行から3ヶ月以内のものが有効です。',
    steps: [
      '履歴事項全部証明書（発行から3ヶ月以内）',
      '納税証明書（法人税「その1」または「その2」）',
    ],
    caution: '❌ 領収書・確定申告書は不可',
    urgency: '📌 法務局・税務署で取得',
    urgencyColor: '#6017FF',
    urgencyBg: '#F5F3FF',
  },
];

export default function SubsidyChecklist() {
  return (
    <>
      {/* モバイル版 */}
      <section className="w-full md:hidden bg-white" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <Container>
          <SectionTitle title="申請に必要な3つの神器" isMobile />
          <p style={{ textAlign: 'center', fontSize: '13px', color: '#555', fontFamily: '"Noto Sans JP"', marginTop: '12px', marginBottom: '32px', lineHeight: '170%' }}>
            申請前に必ず準備が必要なものです。<br />特にGビズIDは時間がかかるため早めに！
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {checklistItems.map((item, i) => (
              <div key={i} style={{
                background: '#fff',
                border: '1px solid #E5E7EB',
                borderRadius: '16px',
                padding: '20px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              }}>
                {/* ヘッダー */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #6017FF 0%, #8249FF 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '22px',
                  }}>
                    {item.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: '#6017FF', fontFamily: 'var(--font-inter)' }}>
                        STEP {item.number}
                      </span>
                      <span style={{
                        fontSize: '10px',
                        fontWeight: 700,
                        fontFamily: '"Noto Sans JP"',
                        color: '#888',
                        background: '#F3F4F6',
                        padding: '2px 8px',
                        borderRadius: '300px',
                      }}>
                        {item.subtitle}
                      </span>
                    </div>
                    <p style={{ fontSize: '16px', fontWeight: 700, color: '#0F0F0F', fontFamily: '"Noto Sans JP"', marginTop: '4px' }}>
                      {item.title}
                    </p>
                  </div>
                </div>

                {/* 説明 */}
                <p style={{ fontSize: '13px', color: '#555', fontFamily: '"Noto Sans JP"', lineHeight: '170%', marginBottom: '12px' }}>
                  {item.description}
                </p>

                {/* ステップ */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '12px' }}>
                  {item.steps.map((s, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: '#6017FF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}>
                        <span style={{ color: '#fff', fontSize: '10px', fontWeight: 700 }}>{j + 1}</span>
                      </div>
                      <p style={{ fontSize: '13px', color: '#333', fontFamily: '"Noto Sans JP"', lineHeight: '160%' }}>{s}</p>
                    </div>
                  ))}
                </div>

                {/* 注意事項 */}
                {item.caution && (
                  <div style={{
                    background: '#FEF2F2',
                    border: '1px solid #FECACA',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    marginBottom: '8px',
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#DC2626',
                    fontFamily: '"Noto Sans JP"',
                  }}>
                    {item.caution}
                  </div>
                )}

                {/* 緊急度 */}
                <div style={{
                  background: item.urgencyBg,
                  borderRadius: '8px',
                  padding: '8px 12px',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: item.urgencyColor,
                  fontFamily: '"Noto Sans JP"',
                }}>
                  {item.urgency}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PC版 */}
      <section className="hidden md:block w-full bg-white" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <Container>
          <SectionTitle title="申請に必要な3つの神器" isMobile={false} />
          <p style={{ textAlign: 'center', fontSize: '15px', color: '#555', fontFamily: '"Noto Sans JP"', marginTop: '16px', marginBottom: '56px', lineHeight: '170%' }}>
            申請前に必ず準備が必要なものです。特にGビズIDは取得に2週間かかるため、早急に手続きを始めてください。
          </p>

          <div style={{ maxWidth: '1040px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
            {checklistItems.map((item, i) => (
              <div key={i} style={{
                background: '#fff',
                border: '1px solid #E5E7EB',
                borderRadius: '20px',
                padding: '28px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}>
                {/* ヘッダー */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: 'linear-gradient(135deg, #6017FF 0%, #8249FF 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '26px',
                    }}>
                      {item.icon}
                    </div>
                    <span style={{
                      fontSize: '28px',
                      fontWeight: 700,
                      fontFamily: 'var(--font-inter)',
                      color: '#E5E7EB',
                    }}>
                      {item.number}
                    </span>
                  </div>
                  <div>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      fontFamily: '"Noto Sans JP"',
                      color: '#888',
                      background: '#F3F4F6',
                      padding: '3px 10px',
                      borderRadius: '300px',
                      display: 'inline-block',
                      marginBottom: '8px',
                    }}>
                      {item.subtitle}
                    </span>
                    <p style={{ fontSize: '18px', fontWeight: 700, color: '#0F0F0F', fontFamily: '"Noto Sans JP"', lineHeight: '140%' }}>
                      {item.title}
                    </p>
                  </div>
                </div>

                {/* 説明 */}
                <p style={{ fontSize: '14px', color: '#555', fontFamily: '"Noto Sans JP"', lineHeight: '175%' }}>
                  {item.description}
                </p>

                {/* ステップ */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {item.steps.map((s, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <div style={{
                        width: '22px',
                        height: '22px',
                        borderRadius: '50%',
                        background: 'linear-gradient(310deg, #6017FF 44.35%, #8249FF 86.86%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}>
                        <span style={{ color: '#fff', fontSize: '11px', fontWeight: 700 }}>{j + 1}</span>
                      </div>
                      <p style={{ fontSize: '14px', color: '#333', fontFamily: '"Noto Sans JP"', lineHeight: '160%' }}>{s}</p>
                    </div>
                  ))}
                </div>

                {/* 注意事項 */}
                {item.caution && (
                  <div style={{
                    background: '#FEF2F2',
                    border: '1px solid #FECACA',
                    borderRadius: '8px',
                    padding: '10px 14px',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#DC2626',
                    fontFamily: '"Noto Sans JP"',
                  }}>
                    {item.caution}
                  </div>
                )}

                {/* 緊急度 */}
                <div style={{
                  background: item.urgencyBg,
                  borderRadius: '10px',
                  padding: '10px 14px',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: item.urgencyColor,
                  fontFamily: '"Noto Sans JP"',
                  marginTop: 'auto',
                }}>
                  {item.urgency}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
