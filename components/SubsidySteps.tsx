import SectionTitle from './SectionTitle';
import { Container } from './Container';
import { subsidyDesign as D } from './subsidy/designTokens';

const steps = [
  { number: '01', title: '理解', description: '補助金制度のルールをZEALSと確認します', tag: 'ZEALS' },
  { number: '02', title: '準備', description: 'GビズIDの取得・SECURITY ACTIONの宣言（目安2〜3週間）', tag: '御社' },
  { number: '03', title: '招待', description: 'ZEALSが申請マイページへ招待します', tag: 'ZEALS' },
  { number: '04', title: '申請', description: 'マイページで基本情報・事業計画を入力し、事務局へ提出します', tag: '御社' },
  {
    number: '05',
    title: '審査・交付決定',
    description: '事務局から「交付決定」の通知が届きます',
    tag: '事務局',
    isAlert: true,
    alertText: '交付決定の通知を受け取るまで、契約・支払い・発注は行わないでください。',
  },
  { number: '06', title: '契約・支払い', description: '交付決定後、契約を締結し全額を支払います', tag: '御社' },
  { number: '07', title: '実績報告', description: '領収書・契約書をマイページにアップロードします', tag: '御社' },
  { number: '08', title: '確定', description: '事務局が書類を確認し、補助金額が確定します', tag: '事務局' },
  { number: '09', title: '入金', description: '確定から約1ヶ月後に指定口座へ振り込まれます', tag: '完了' },
];

function Tag({ children }: { children: string }) {
  return (
    <span
      style={{
        fontSize: 10,
        fontWeight: 700,
        fontFamily: D.fontNoto,
        color: D.textSub,
        background: D.bgGray50,
        padding: '2px 8px',
        borderRadius: D.radiusPill,
        border: `1px solid ${D.border}`,
      }}
    >
      {children}
    </span>
  );
}

export default function SubsidySteps() {
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
          <SectionTitle title="申請から入金までの流れ" isMobile />
          <div style={{ height: D.afterTitleMobile }} />
          <p
            style={{
              textAlign: 'center',
              fontSize: 14,
              color: D.textMuted,
              fontFamily: D.fontNoto,
              margin: '0 0 28px 0',
              lineHeight: '150%',
              fontWeight: 500,
            }}
          >
            全9ステップ。ZEALSが書類面・スケジュールの目安をご案内します。
          </p>
          <div>
            {steps.map((step, i) => (
              <div key={step.number} style={{ display: 'flex', gap: 0 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 44, flexShrink: 0 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: step.isAlert ? D.bgWhite : D.purple,
                      border: step.isAlert ? '2px solid #DC2626' : 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span
                      style={{
                        color: step.isAlert ? '#DC2626' : '#fff',
                        fontSize: 11,
                        fontWeight: 700,
                        fontFamily: 'var(--font-inter)',
                      }}
                    >
                      {step.number}
                    </span>
                  </div>
                  {i < steps.length - 1 && <div style={{ width: 1, flex: 1, background: D.border, minHeight: 20 }} />}
                </div>
                <div style={{ flex: 1, paddingLeft: 14, paddingBottom: i < steps.length - 1 ? 22 : 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 6 }}>
                    <span style={{ fontSize: 16, fontWeight: 700, color: D.text, fontFamily: D.fontNoto }}>{step.title}</span>
                    <Tag>{step.tag}</Tag>
                  </div>
                  <p style={{ fontSize: 13, color: D.textMuted, fontFamily: D.fontNoto, lineHeight: '150%', margin: 0, fontWeight: 500 }}>
                    {step.description}
                  </p>
                  {step.isAlert && step.alertText && (
                    <div
                      style={{
                        marginTop: 10,
                        padding: '10px 12px',
                        background: '#FEF2F2',
                        border: '1px solid #FECACA',
                        borderRadius: D.radiusSm,
                        fontSize: 12,
                        fontWeight: 700,
                        color: '#B91C1C',
                        fontFamily: D.fontNoto,
                        lineHeight: '150%',
                      }}
                    >
                      {step.alertText}
                    </div>
                  )}
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
          background: D.bgGray50,
        }}
      >
        <Container>
          <SectionTitle title="申請から入金までの流れ" isMobile={false} />
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
            }}
          >
            全9ステップ。ZEALSが書類面・スケジュールの目安をご案内します。
          </p>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            {steps.map((step, i) => (
              <div key={step.number} style={{ display: 'flex', gap: 0 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 56, flexShrink: 0 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: step.isAlert ? D.bgWhite : D.purple,
                      border: step.isAlert ? '2px solid #DC2626' : 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span
                      style={{
                        color: step.isAlert ? '#DC2626' : '#fff',
                        fontSize: 13,
                        fontWeight: 700,
                        fontFamily: 'var(--font-inter)',
                      }}
                    >
                      {step.number}
                    </span>
                  </div>
                  {i < steps.length - 1 && <div style={{ width: 1, flex: 1, background: D.border, minHeight: 24 }} />}
                </div>
                <div style={{ flex: 1, paddingLeft: 20, paddingBottom: i < steps.length - 1 ? 28 : 0, paddingTop: 4 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 8 }}>
                    <span style={{ fontSize: 18, fontWeight: 700, color: D.text, fontFamily: D.fontNoto }}>{step.title}</span>
                    <Tag>{step.tag}</Tag>
                  </div>
                  <p style={{ fontSize: 15, color: D.textMuted, fontFamily: D.fontNoto, lineHeight: '150%', margin: 0, fontWeight: 500 }}>
                    {step.description}
                  </p>
                  {step.isAlert && step.alertText && (
                    <div
                      style={{
                        marginTop: 12,
                        padding: '12px 16px',
                        background: '#FEF2F2',
                        border: '1px solid #FECACA',
                        borderRadius: D.radiusSm,
                        fontSize: 13,
                        fontWeight: 700,
                        color: '#B91C1C',
                        fontFamily: D.fontNoto,
                        lineHeight: '150%',
                        maxWidth: 560,
                      }}
                    >
                      {step.alertText}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
