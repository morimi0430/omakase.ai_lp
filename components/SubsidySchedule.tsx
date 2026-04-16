import Link from 'next/link';
import SectionTitle from './SectionTitle';
import { Container } from './Container';
import { subsidyDesign as D } from './subsidy/designTokens';

const timeline = [
  {
    period: '今すぐ〜4月下旬',
    label: '準備',
    tasks: ['GビズIDプライムの取得開始（約2週間）', 'SECURITY ACTIONの宣言', '添付書類の準備'],
  },
  {
    period: '4月下旬〜5月上旬',
    label: '申請',
    tasks: ['ZEALSによるマイページ招待', '申請情報・事業計画の入力', '事務局への提出'],
  },
  {
    period: '2026年5月12日（火）17:00',
    label: '第1次締切',
    tasks: ['この日時までに申請を提出'],
    isDeadline: true,
  },
  {
    period: '6月以降',
    label: '交付決定・実績・入金',
    tasks: ['交付決定の通知', '契約・支払い（交付決定後）', '実績報告・補助金の入金'],
  },
];

export default function SubsidySchedule() {
  return (
    <>
      <section
        className="w-full md:hidden"
        style={{
          paddingTop: D.sectionPtMobile,
          paddingBottom: D.sectionPbMobile,
          background: '#F5F5F5',
        }}
      >
        <Container>
          <SectionTitle title="スケジュールの目安" isMobile />
          <div style={{ height: D.afterTitleMobile }} />
          <div
            style={{
              border: `1px solid ${D.border}`,
              borderRadius: D.radiusSm,
              background: '#FFFBEB',
              padding: 16,
              marginBottom: 24,
            }}
          >
            <p style={{ margin: '0 0 6px 0', fontSize: 12, fontWeight: 700, color: '#92400E', fontFamily: D.fontNoto }}>
              第1次締切
            </p>
            <p style={{ margin: 0, fontSize: 20, fontWeight: 700, color: D.text, fontFamily: D.fontNoto }}>2026年5月12日（火）17:00</p>
            <p style={{ margin: '10px 0 0 0', fontSize: 12, color: D.textMuted, fontFamily: D.fontNoto, lineHeight: '150%', fontWeight: 500 }}>
              GビズIDは発行まで約2週間かかります。4月下旬までには取得を開始することを推奨します。
            </p>
          </div>
          <div>
            {timeline.map((item, i) => (
              <div key={item.label} style={{ display: 'flex', gap: 0 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 40, flexShrink: 0 }}>
                  <div
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: '50%',
                      background: item.isDeadline ? '#DC2626' : D.purple,
                      flexShrink: 0,
                    }}
                  />
                  {i < timeline.length - 1 && <div style={{ width: 1, flex: 1, background: D.border, minHeight: 16 }} />}
                </div>
                <div style={{ flex: 1, paddingLeft: 14, paddingBottom: i < timeline.length - 1 ? 20 : 0 }}>
                  <div
                    style={{
                      border: `1px solid ${item.isDeadline ? '#FCA5A5' : D.border}`,
                      borderRadius: D.radiusSm,
                      padding: 14,
                      background: D.bgWhite,
                      boxShadow: D.shadowCard,
                    }}
                  >
                    <p style={{ fontSize: 11, fontWeight: 700, color: D.textSub, fontFamily: D.fontNoto, margin: '0 0 4px 0' }}>
                      {item.period}
                    </p>
                    <p style={{ fontSize: 15, fontWeight: 700, color: D.text, fontFamily: D.fontNoto, margin: '0 0 8px 0' }}>
                      {item.label}
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {item.tasks.map((task) => (
                        <li key={task} style={{ fontSize: 13, color: D.textMuted, fontFamily: D.fontNoto, lineHeight: '150%', fontWeight: 500 }}>
                          ・{task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <Link
              href="/document-request"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
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
              相談・お問い合わせ
            </Link>
          </div>
        </Container>
      </section>

      <section
        className="hidden md:block w-full"
        style={{
          paddingTop: D.sectionPtPc,
          paddingBottom: D.sectionPbPc,
          background: '#F5F5F5',
        }}
      >
        <Container>
          <SectionTitle title="スケジュールの目安" isMobile={false} />
          <div style={{ height: D.afterTitlePc }} />
          <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 40, alignItems: 'start' }}>
            <div
              style={{
                border: `1px solid ${D.border}`,
                borderRadius: D.radiusCard,
                background: '#FFFBEB',
                padding: 28,
                boxShadow: D.shadowCard,
              }}
            >
              <p style={{ margin: '0 0 8px 0', fontSize: 13, fontWeight: 700, color: '#92400E', fontFamily: D.fontNoto }}>
                第1次締切
              </p>
              <p style={{ margin: '0 0 4px 0', fontSize: 24, fontWeight: 700, color: D.text, fontFamily: D.fontNoto }}>2026年5月12日（火）</p>
              <p style={{ margin: '0 0 16px 0', fontSize: 28, fontWeight: 700, color: D.purple, fontFamily: 'var(--font-inter)' }}>17:00</p>
              <p style={{ margin: '0 0 20px 0', fontSize: 14, color: D.textMuted, fontFamily: D.fontNoto, lineHeight: '150%', fontWeight: 500 }}>
                GビズIDは発行まで約2週間かかります。4月下旬までには取得を開始することを推奨します。
              </p>
              <Link
                href="/document-request"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '14px 28px',
                  borderRadius: D.radiusPill,
                  background: 'linear-gradient(310deg, #6017FF 44.35%, #8249FF 86.86%)',
                  border: '1px solid #EF96FF',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 15,
                  fontFamily: D.fontNoto,
                  textDecoration: 'none',
                }}
              >
                相談・お問い合わせ
              </Link>
            </div>
            <div>
              {timeline.map((item, i) => (
                <div key={item.label} style={{ display: 'flex', gap: 0 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 48, flexShrink: 0 }}>
                    <div
                      style={{
                        width: 16,
                        height: 16,
                        borderRadius: '50%',
                        background: item.isDeadline ? '#DC2626' : D.purple,
                      }}
                    />
                    {i < timeline.length - 1 && <div style={{ width: 1, flex: 1, background: D.border, minHeight: 20 }} />}
                  </div>
                  <div style={{ flex: 1, paddingLeft: 18, paddingBottom: i < timeline.length - 1 ? 24 : 0 }}>
                    <div
                      style={{
                        border: `1px solid ${item.isDeadline ? '#FCA5A5' : D.border}`,
                        borderRadius: D.radiusCard,
                        padding: 20,
                        background: D.bgWhite,
                        boxShadow: D.shadowCard,
                      }}
                    >
                      <p style={{ fontSize: 12, fontWeight: 700, color: D.textSub, fontFamily: D.fontNoto, margin: '0 0 4px 0' }}>
                        {item.period}
                      </p>
                      <p style={{ fontSize: 18, fontWeight: 700, color: D.text, fontFamily: D.fontNoto, margin: '0 0 10px 0' }}>
                        {item.label}
                      </p>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                        {item.tasks.map((task) => (
                          <li key={task} style={{ fontSize: 14, color: D.textMuted, fontFamily: D.fontNoto, lineHeight: '150%', fontWeight: 500 }}>
                            ・{task}
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
