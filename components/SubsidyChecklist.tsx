import SectionTitle from './SectionTitle';
import { Container } from './Container';
import { subsidyDesign as D } from './subsidy/designTokens';

const checklistItems = [
  {
    number: '01',
    tag: '認証',
    title: 'GビズIDプライムアカウント',
    subtitle: '発行まで約2週間',
    description:
      '法人代表者のマイナンバーカードとスマートフォンアプリで取得します。発行まで約2週間かかるため、早めに手続きを開始してください。',
    steps: ['GビズIDのWebサイトにアクセス', 'マイナンバーカードで本人確認', '約2週間で発行'],
    note: '第1次締切に間に合わせるには、4月下旬までには取得を開始することを推奨します。',
    noteStyle: 'alert' as const,
  },
  {
    number: '02',
    tag: 'セキュリティ',
    title: 'SECURITY ACTION（一つ星／二つ星）',
    subtitle: '完了まで2〜3日',
    description:
      'IPA（情報処理推進機構）のサイトで自己宣言を行い、ロゴを取得します。',
    steps: ['SECURITY ACTIONのサイトにアクセス', '一つ星または二つ星の宣言を実施', 'ロゴ・宣言IDを取得'],
    note: 'オンラインで申請でき、数日程度で完了します。',
    noteStyle: 'info' as const,
  },
  {
    number: '03',
    tag: '書類',
    title: '添付書類（PDF）',
    subtitle: '事前に準備',
    description: '申請時に提出する公的書類です。発行から3ヶ月以内のものが有効な場合があります。',
    steps: ['履歴事項全部証明書（発行から3ヶ月以内）', '納税証明書（法人税「その1」または「その2」）'],
    caution: '領収書・確定申告書は納税証明書として使用できません。',
    note: '法務局・税務署で取得します。',
    noteStyle: 'muted' as const,
  },
];

export default function SubsidyChecklist() {
  return (
    <>
      <section
        className="w-full md:hidden"
        style={{
          paddingTop: D.sectionPtMobile,
          paddingBottom: D.sectionPbMobile,
          background: D.bgTint,
        }}
      >
        <Container>
          <SectionTitle title="申請に必要な準備（3点）" isMobile />
          <div style={{ height: D.afterTitleMobile }} />
          <p
            style={{
              fontSize: 14,
              color: D.textMuted,
              fontFamily: D.fontNoto,
              lineHeight: '150%',
              margin: '0 0 24px 0',
              fontWeight: 500,
            }}
          >
            申請前に揃えるものです。GビズIDは発行に時間がかかるため、優先して対応してください。
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {checklistItems.map((item) => (
              <div
                key={item.number}
                style={{
                  background: D.bgWhite,
                  border: `1px solid ${D.border}`,
                  borderRadius: D.radiusCard,
                  padding: 20,
                  boxShadow: D.shadowCard,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, flexWrap: 'wrap' }}>
                  <span
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 12,
                      fontWeight: 600,
                      color: D.textSub,
                    }}
                  >
                    {item.number}
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      fontFamily: D.fontNoto,
                      color: D.textSub,
                      background: D.bgGray50,
                      padding: '2px 10px',
                      borderRadius: D.radiusPill,
                      border: `1px solid ${D.border}`,
                    }}
                  >
                    {item.tag}
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      fontFamily: D.fontNoto,
                      color: D.textSub,
                      background: D.bgGray50,
                      padding: '2px 10px',
                      borderRadius: D.radiusPill,
                    }}
                  >
                    {item.subtitle}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: D.text,
                    fontFamily: D.fontNoto,
                    margin: '0 0 10px 0',
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontSize: 13,
                    color: D.textMuted,
                    fontFamily: D.fontNoto,
                    lineHeight: '150%',
                    margin: '0 0 12px 0',
                    fontWeight: 500,
                  }}
                >
                  {item.description}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 12 }}>
                  {item.steps.map((s, j) => (
                    <div key={s} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                          background: D.purple,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        <span style={{ color: '#fff', fontSize: 10, fontWeight: 700 }}>{j + 1}</span>
                      </div>
                      <p style={{ fontSize: 13, color: D.textBody, fontFamily: D.fontNoto, lineHeight: '150%', margin: 0, fontWeight: 500 }}>
                        {s}
                      </p>
                    </div>
                  ))}
                </div>
                {'caution' in item && item.caution && (
                  <div
                    style={{
                      background: '#FEF2F2',
                      border: '1px solid #FECACA',
                      borderRadius: D.radiusSm,
                      padding: '8px 12px',
                      marginBottom: 8,
                      fontSize: 12,
                      fontWeight: 700,
                      color: '#B91C1C',
                      fontFamily: D.fontNoto,
                    }}
                  >
                    {item.caution}
                  </div>
                )}
                <div
                  style={{
                    borderRadius: D.radiusSm,
                    padding: '8px 12px',
                    fontSize: 12,
                    fontWeight: 600,
                    fontFamily: D.fontNoto,
                    background:
                      item.noteStyle === 'alert'
                        ? '#FFFBEB'
                        : item.noteStyle === 'info'
                          ? D.bgGray50
                          : D.bgGray50,
                    color: item.noteStyle === 'alert' ? '#92400E' : D.textMuted,
                    border:
                      item.noteStyle === 'alert' ? '1px solid #FDE68A' : `1px solid ${D.border}`,
                  }}
                >
                  {item.note}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section
        className="hidden md:block w-full"
        style={{
          paddingTop: D.sectionPtPc,
          paddingBottom: D.sectionPbPc,
          background: D.bgTint,
        }}
      >
        <Container>
          <SectionTitle title="申請に必要な準備（3点）" isMobile={false} />
          <div style={{ height: D.afterTitlePc }} />
          <p
            style={{
              textAlign: 'center',
              fontSize: 16,
              color: D.textMuted,
              fontFamily: D.fontNoto,
              margin: '0 0 48px 0',
              lineHeight: '150%',
              fontWeight: 500,
              maxWidth: 640,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            申請前に揃えるものです。GビズIDは発行に時間がかかるため、優先して対応してください。
          </p>
          <div style={{ maxWidth: 1040, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
            {checklistItems.map((item) => (
              <div
                key={item.number}
                style={{
                  background: D.bgWhite,
                  border: `1px solid ${D.border}`,
                  borderRadius: D.radiusCard,
                  padding: 28,
                  boxShadow: D.shadowCard,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 14,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, fontWeight: 600, color: D.textSub }}>
                      {item.number}
                    </span>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        fontFamily: D.fontNoto,
                        color: D.textSub,
                        background: D.bgGray50,
                        padding: '3px 10px',
                        borderRadius: D.radiusPill,
                        border: `1px solid ${D.border}`,
                        alignSelf: 'flex-start',
                      }}
                    >
                      {item.tag}
                    </span>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        fontFamily: D.fontNoto,
                        color: D.textSub,
                        background: D.bgGray50,
                        padding: '3px 10px',
                        borderRadius: D.radiusPill,
                        alignSelf: 'flex-start',
                      }}
                    >
                      {item.subtitle}
                    </span>
                  </div>
                </div>
                <p style={{ fontSize: 18, fontWeight: 700, color: D.text, fontFamily: D.fontNoto, margin: 0, lineHeight: '140%' }}>
                  {item.title}
                </p>
                <p style={{ fontSize: 14, color: D.textMuted, fontFamily: D.fontNoto, lineHeight: '150%', margin: 0, fontWeight: 500 }}>
                  {item.description}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {item.steps.map((s, j) => (
                    <div key={s} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <div
                        style={{
                          width: 22,
                          height: 22,
                          borderRadius: '50%',
                          background: D.purple,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        <span style={{ color: '#fff', fontSize: 11, fontWeight: 700 }}>{j + 1}</span>
                      </div>
                      <p style={{ fontSize: 14, color: D.textBody, fontFamily: D.fontNoto, lineHeight: '150%', margin: 0, fontWeight: 500 }}>
                        {s}
                      </p>
                    </div>
                  ))}
                </div>
                {'caution' in item && item.caution && (
                  <div
                    style={{
                      background: '#FEF2F2',
                      border: '1px solid #FECACA',
                      borderRadius: D.radiusSm,
                      padding: '10px 14px',
                      fontSize: 13,
                      fontWeight: 700,
                      color: '#B91C1C',
                      fontFamily: D.fontNoto,
                    }}
                  >
                    {item.caution}
                  </div>
                )}
                <div
                  style={{
                    marginTop: 'auto',
                    borderRadius: D.radiusSm,
                    padding: '10px 14px',
                    fontSize: 13,
                    fontWeight: 600,
                    fontFamily: D.fontNoto,
                    background: item.noteStyle === 'alert' ? '#FFFBEB' : D.bgGray50,
                    color: item.noteStyle === 'alert' ? '#92400E' : D.textMuted,
                    border: item.noteStyle === 'alert' ? '1px solid #FDE68A' : `1px solid ${D.border}`,
                  }}
                >
                  {item.note}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
