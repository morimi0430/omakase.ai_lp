import Link from 'next/link';
import { Container } from './Container';

const timeline = [
  {
    period: '今すぐ〜4月下旬',
    label: '準備フェーズ',
    tasks: [
      'GビズIDプライムの取得開始（約2週間）',
      'SECURITY ACTIONの宣言',
      '添付書類の準備（履歴事項全部証明書・納税証明書）',
    ],
    isUrgent: true,
  },
  {
    period: '4月下旬〜5月上旬',
    label: '申請フェーズ',
    tasks: [
      'ZEALSによるマイページ招待',
      '申請情報・事業計画の入力',
      '事務局への申請提出',
    ],
    isUrgent: false,
  },
  {
    period: '5月12日（火）17:00',
    label: '⚠️ 第1次締切',
    tasks: [
      '申請の締切（この日時までに提出が必要）',
    ],
    isDeadline: true,
    isUrgent: false,
  },
  {
    period: '〜6月以降',
    label: '交付決定・導入フェーズ',
    tasks: [
      '事務局から交付決定の通知',
      '契約・支払い（交付決定後のみ）',
      '実績報告・補助金入金',
    ],
    isUrgent: false,
  },
];

export default function SubsidySchedule() {
  return (
    <>
      {/* モバイル版 */}
      <section
        className="w-full md:hidden"
        style={{
          paddingTop: '60px',
          paddingBottom: '60px',
          background: 'linear-gradient(180deg, #1a0140 0%, #0a0020 100%)',
        }}
      >
        <Container>
          {/* セクションタイトル */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 style={{
              color: '#fff',
              fontSize: '28px',
              fontWeight: 700,
              fontFamily: '"Noto Sans JP"',
              lineHeight: 'normal',
              marginBottom: '24px',
            }}>
              スケジュール
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '44px', height: '4px', background: 'linear-gradient(103deg, #735AFF 8.54%, #BA78FB 90.69%)' }} />
            </div>
          </div>

          {/* 締切カウント */}
          <div style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(246,255,81,0.4)',
            borderRadius: '16px',
            padding: '20px',
            marginBottom: '28px',
            textAlign: 'center',
          }}>
            <p style={{ color: '#F6FF51', fontSize: '12px', fontWeight: 700, fontFamily: '"Noto Sans JP"', marginBottom: '8px' }}>
              ⚠️ 第1次締切まであとわずか
            </p>
            <p style={{ color: '#fff', fontSize: '22px', fontWeight: 700, fontFamily: '"Noto Sans JP"', lineHeight: '140%' }}>
              2026年5月12日（火）
            </p>
            <p style={{ color: '#F6FF51', fontSize: '18px', fontWeight: 700, fontFamily: 'var(--font-inter)' }}>
              17:00
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', fontFamily: '"Noto Sans JP"', marginTop: '8px' }}>
              GビズID取得に2週間かかるため<br />今すぐ準備を始めてください
            </p>
          </div>

          {/* タイムライン */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {timeline.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '0' }}>
                {/* 左：ライン */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40px', flexShrink: 0 }}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: item.isDeadline ? '#DC2626' : '#6017FF',
                    border: item.isDeadline ? '3px solid #FEF2F2' : '3px solid rgba(96,23,255,0.3)',
                    flexShrink: 0,
                    boxShadow: item.isDeadline ? '0 0 12px rgba(220,38,38,0.6)' : 'none',
                  }} />
                  {i < timeline.length - 1 && (
                    <div style={{ width: '2px', flex: 1, background: 'rgba(255,255,255,0.15)', minHeight: '20px' }} />
                  )}
                </div>

                {/* 右：コンテンツ */}
                <div style={{
                  flex: 1,
                  paddingLeft: '16px',
                  paddingBottom: i < timeline.length - 1 ? '24px' : '0',
                }}>
                  <div style={{
                    background: item.isDeadline ? '#DC2626' : 'rgba(255,255,255,0.06)',
                    border: item.isDeadline ? 'none' : '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '12px',
                    padding: '14px 16px',
                  }}>
                    <p style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: item.isDeadline ? 'rgba(255,255,255,0.9)' : '#8249FF',
                      fontFamily: '"Noto Sans JP"',
                      marginBottom: '4px',
                    }}>
                      {item.period}
                    </p>
                    <p style={{
                      fontSize: '15px',
                      fontWeight: 700,
                      color: '#fff',
                      fontFamily: '"Noto Sans JP"',
                      marginBottom: '8px',
                    }}>
                      {item.label}
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {item.tasks.map((task, j) => (
                        <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                          <span style={{ color: item.isDeadline ? '#fff' : '#8249FF', fontSize: '12px', flexShrink: 0, marginTop: '2px' }}>•</span>
                          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', fontFamily: '"Noto Sans JP"', lineHeight: '160%' }}>
                            {task}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: '36px' }}>
            <Link
              href="/document-request"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '18px 24px',
                borderRadius: '300px',
                background: 'linear-gradient(310deg, #6017FF 44.35%, #8249FF 86.86%)',
                border: '1px solid rgba(239,150,255,0.5)',
                boxShadow: '0 6px 24px rgba(96,23,255,0.5)',
                color: '#F6FF51',
                fontWeight: 700,
                fontSize: '16px',
                fontFamily: '"Noto Sans JP"',
                textDecoration: 'none',
              }}
            >
              今すぐ補助金相談を申し込む
              <span style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: 'rgba(246,255,81,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
              }}>▶</span>
            </Link>
            <p style={{ textAlign: 'center', fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginTop: '10px', fontFamily: '"Noto Sans JP"' }}>
              無料相談・資料請求はこちら
            </p>
          </div>
        </Container>
      </section>

      {/* PC版 */}
      <section
        className="hidden md:block w-full"
        style={{
          paddingTop: '80px',
          paddingBottom: '80px',
          background: 'linear-gradient(180deg, #1a0140 0%, #0a0020 100%)',
        }}
      >
        <Container>
          {/* タイトル */}
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{
              color: '#fff',
              fontSize: '36px',
              fontWeight: 700,
              fontFamily: '"Noto Sans JP"',
              lineHeight: 'normal',
              marginBottom: '24px',
            }}>
              スケジュール
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '44px', height: '4px', background: 'linear-gradient(103deg, #735AFF 8.54%, #BA78FB 90.69%)' }} />
            </div>
          </div>

          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '48px', alignItems: 'start' }}>
            {/* 左：締切カウント */}
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(246,255,81,0.35)',
              borderRadius: '24px',
              padding: '36px 28px',
              textAlign: 'center',
            }}>
              <p style={{ color: '#F6FF51', fontSize: '14px', fontWeight: 700, fontFamily: '"Noto Sans JP"', marginBottom: '16px' }}>
                ⚠️ 第1次締切まであとわずか
              </p>
              <p style={{ color: '#fff', fontSize: '26px', fontWeight: 700, fontFamily: '"Noto Sans JP"', lineHeight: '140%', marginBottom: '4px' }}>
                2026年5月12日（火）
              </p>
              <p style={{ color: '#F6FF51', fontSize: '32px', fontWeight: 700, fontFamily: 'var(--font-inter)', marginBottom: '20px' }}>
                17:00
              </p>
              <div style={{
                background: 'rgba(220,38,38,0.15)',
                border: '1px solid rgba(220,38,38,0.4)',
                borderRadius: '12px',
                padding: '12px 16px',
                marginBottom: '24px',
              }}>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '13px', fontFamily: '"Noto Sans JP"', lineHeight: '170%' }}>
                  GビズID取得に<strong style={{ color: '#F6FF51' }}>約2週間</strong>かかるため、<br />
                  <strong style={{ color: '#F6FF51' }}>4月下旬には取得を開始</strong>してください
                </p>
              </div>
              <Link
                href="/document-request"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '16px 24px',
                  borderRadius: '300px',
                  background: 'linear-gradient(310deg, #6017FF 44.35%, #8249FF 86.86%)',
                  border: '1px solid rgba(239,150,255,0.5)',
                  boxShadow: '0 6px 24px rgba(96,23,255,0.4)',
                  color: '#F6FF51',
                  fontWeight: 700,
                  fontSize: '15px',
                  fontFamily: '"Noto Sans JP"',
                  textDecoration: 'none',
                }}
              >
                今すぐ補助金相談
                <span style={{ fontSize: '16px' }}>▶</span>
              </Link>
            </div>

            {/* 右：タイムライン */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {timeline.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '0' }}>
                  {/* 左：ライン */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '52px', flexShrink: 0 }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: item.isDeadline ? '#DC2626' : '#6017FF',
                      border: item.isDeadline ? '3px solid rgba(220,38,38,0.3)' : '3px solid rgba(96,23,255,0.3)',
                      flexShrink: 0,
                      boxShadow: item.isDeadline ? '0 0 16px rgba(220,38,38,0.7)' : '0 0 8px rgba(96,23,255,0.4)',
                    }} />
                    {i < timeline.length - 1 && (
                      <div style={{ width: '2px', flex: 1, background: 'rgba(255,255,255,0.12)', minHeight: '24px' }} />
                    )}
                  </div>

                  {/* 右：コンテンツ */}
                  <div style={{
                    flex: 1,
                    paddingLeft: '20px',
                    paddingBottom: i < timeline.length - 1 ? '28px' : '0',
                    paddingTop: '0px',
                  }}>
                    <div style={{
                      background: item.isDeadline ? 'rgba(220,38,38,0.2)' : 'rgba(255,255,255,0.05)',
                      border: item.isDeadline ? '1px solid rgba(220,38,38,0.5)' : '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '14px',
                      padding: '18px 20px',
                    }}>
                      <p style={{
                        fontSize: '12px',
                        fontWeight: 700,
                        color: item.isDeadline ? '#FECACA' : '#8249FF',
                        fontFamily: '"Noto Sans JP"',
                        marginBottom: '4px',
                      }}>
                        {item.period}
                      </p>
                      <p style={{
                        fontSize: '18px',
                        fontWeight: 700,
                        color: item.isDeadline ? '#FCA5A5' : '#fff',
                        fontFamily: '"Noto Sans JP"',
                        marginBottom: '10px',
                      }}>
                        {item.label}
                      </p>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {item.tasks.map((task, j) => (
                          <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                            <span style={{ color: item.isDeadline ? '#FECACA' : '#8249FF', fontSize: '14px', flexShrink: 0, marginTop: '2px' }}>•</span>
                            <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', fontFamily: '"Noto Sans JP"', lineHeight: '160%' }}>
                              {task}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
