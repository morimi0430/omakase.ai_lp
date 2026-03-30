import SectionTitle from './SectionTitle';
import { Container } from './Container';

const steps = [
  {
    number: '01',
    title: '理解',
    description: '補助金制度のルールをZEALSと一緒に確認します',
    tag: 'ZEALS担当',
    tagColor: '#8249FF',
  },
  {
    number: '02',
    title: '準備',
    description: 'GビズIDの取得・SECURITY ACTIONの宣言を行います（約2〜3週間）',
    tag: '御社対応',
    tagColor: '#059669',
  },
  {
    number: '03',
    title: '招待',
    description: 'ZEALSが申請マイページへお客様を招待します',
    tag: 'ZEALS担当',
    tagColor: '#8249FF',
  },
  {
    number: '04',
    title: '申請',
    description: 'マイページで基本情報・事業計画を入力し、事務局へ提出します',
    tag: '御社対応',
    tagColor: '#059669',
  },
  {
    number: '05',
    title: '審査・交付決定',
    description: '事務局から「交付決定」の通知メールが届きます',
    tag: '事務局',
    tagColor: '#D97706',
    isAlert: true,
    alertText: 'この通知を受け取るまで、契約・支払いは絶対に行わないでください',
  },
  {
    number: '06',
    title: '契約・支払い',
    description: '交付決定後、初めて契約を締結し全額を支払います',
    tag: '御社対応',
    tagColor: '#059669',
  },
  {
    number: '07',
    title: '実績報告',
    description: '領収書・契約書をマイページにアップロードします',
    tag: '御社対応',
    tagColor: '#059669',
  },
  {
    number: '08',
    title: '確定',
    description: '事務局が書類を確認し、補助金額が確定します',
    tag: '事務局',
    tagColor: '#D97706',
  },
  {
    number: '09',
    title: '入金',
    description: '確定から約1ヶ月後に指定口座へ補助金が振り込まれます',
    tag: '完了',
    tagColor: '#6017FF',
  },
];

export default function SubsidySteps() {
  return (
    <>
      {/* モバイル版 */}
      <section className="w-full md:hidden bg-gray-50" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <Container>
          <SectionTitle title="申請〜入金までの流れ" isMobile />
          <p style={{ textAlign: 'center', fontSize: '13px', color: '#555', fontFamily: '"Noto Sans JP"', marginTop: '12px', marginBottom: '32px', lineHeight: '170%' }}>
            全9ステップで補助金入金まで<br />ZEALSが伴走サポートします
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
            {steps.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: '0px' }}>
                {/* 左側：ライン */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '48px', flexShrink: 0 }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: step.number === '05'
                      ? '#DC2626'
                      : 'linear-gradient(310deg, #6017FF 44.35%, #8249FF 86.86%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: step.number === '05' ? '0 4px 12px rgba(220,38,38,0.3)' : '0 4px 12px rgba(96,23,255,0.25)',
                  }}>
                    <span style={{ color: '#fff', fontSize: '13px', fontWeight: 700, fontFamily: 'var(--font-inter)' }}>
                      {step.number}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div style={{ width: '2px', flex: 1, background: '#E5E7EB', minHeight: '24px' }} />
                  )}
                </div>

                {/* 右側：コンテンツ */}
                <div style={{ flex: 1, paddingLeft: '16px', paddingBottom: i < steps.length - 1 ? '24px' : '0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span style={{
                      fontSize: '16px',
                      fontWeight: 700,
                      color: '#0F0F0F',
                      fontFamily: '"Noto Sans JP"',
                    }}>
                      {step.title}
                    </span>
                    <span style={{
                      fontSize: '10px',
                      fontWeight: 700,
                      fontFamily: '"Noto Sans JP"',
                      color: step.tagColor,
                      background: step.tagColor + '18',
                      padding: '2px 8px',
                      borderRadius: '300px',
                      border: `1px solid ${step.tagColor}40`,
                    }}>
                      {step.tag}
                    </span>
                  </div>
                  <p style={{ fontSize: '13px', color: '#555', fontFamily: '"Noto Sans JP"', lineHeight: '170%' }}>
                    {step.description}
                  </p>
                  {step.isAlert && (
                    <div style={{
                      marginTop: '8px',
                      background: '#FEF2F2',
                      border: '1px solid #FECACA',
                      borderRadius: '8px',
                      padding: '10px 12px',
                      display: 'flex',
                      gap: '8px',
                      alignItems: 'flex-start',
                    }}>
                      <span style={{ fontSize: '14px', flexShrink: 0 }}>🚨</span>
                      <p style={{ fontSize: '12px', color: '#DC2626', fontWeight: 700, fontFamily: '"Noto Sans JP"', lineHeight: '160%' }}>
                        {step.alertText}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PC版 */}
      <section className="hidden md:block w-full bg-gray-50" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <Container>
          <SectionTitle title="申請〜入金までの流れ" isMobile={false} />
          <p style={{ textAlign: 'center', fontSize: '15px', color: '#555', fontFamily: '"Noto Sans JP"', marginTop: '16px', marginBottom: '56px', lineHeight: '170%' }}>
            全9ステップで補助金入金まで、ZEALSが伴走サポートします
          </p>

          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0px' }}>
            {steps.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: '0px' }}>
                {/* 左側：ライン */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '64px', flexShrink: 0 }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    background: step.number === '05'
                      ? '#DC2626'
                      : 'linear-gradient(310deg, #6017FF 44.35%, #8249FF 86.86%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: step.number === '05' ? '0 6px 16px rgba(220,38,38,0.35)' : '0 6px 16px rgba(96,23,255,0.30)',
                  }}>
                    <span style={{ color: '#fff', fontSize: '16px', fontWeight: 700, fontFamily: 'var(--font-inter)' }}>
                      {step.number}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div style={{ width: '2px', flex: 1, background: '#E5E7EB', minHeight: '28px' }} />
                  )}
                </div>

                {/* 右側：コンテンツ */}
                <div style={{
                  flex: 1,
                  paddingLeft: '24px',
                  paddingBottom: i < steps.length - 1 ? '28px' : '0',
                  paddingTop: '4px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <span style={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#0F0F0F',
                      fontFamily: '"Noto Sans JP"',
                    }}>
                      {step.title}
                    </span>
                    <span style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      fontFamily: '"Noto Sans JP"',
                      color: step.tagColor,
                      background: step.tagColor + '18',
                      padding: '3px 12px',
                      borderRadius: '300px',
                      border: `1px solid ${step.tagColor}40`,
                    }}>
                      {step.tag}
                    </span>
                  </div>
                  <p style={{ fontSize: '15px', color: '#555', fontFamily: '"Noto Sans JP"', lineHeight: '170%' }}>
                    {step.description}
                  </p>
                  {step.isAlert && (
                    <div style={{
                      marginTop: '10px',
                      background: '#FEF2F2',
                      border: '1px solid #FECACA',
                      borderRadius: '10px',
                      padding: '12px 16px',
                      display: 'flex',
                      gap: '10px',
                      alignItems: 'flex-start',
                      maxWidth: '540px',
                    }}>
                      <span style={{ fontSize: '16px', flexShrink: 0 }}>🚨</span>
                      <p style={{ fontSize: '13px', color: '#DC2626', fontWeight: 700, fontFamily: '"Noto Sans JP"', lineHeight: '160%' }}>
                        {step.alertText}
                      </p>
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
