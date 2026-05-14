import type { ReactNode } from 'react';
import { Container } from './Container';
import { subsidyDesign as D } from './subsidy/designTokens';
import SubsidyDeadlineBanner from './SubsidyDeadlineBanner';
import SubsidyOfficialSiteLink from './subsidy/SubsidyOfficialSiteLink';
import SubsidySectionHeading from './subsidy/SubsidySectionHeading';
import SubsidySectionLead from './subsidy/SubsidySectionLead';

const checklistItems: { id: string; tag: string; title: ReactNode; description: string }[] = [
  {
    id: 'gbiz',
    tag: '発行まで約2週間',
    title: (
      <>
        GビズIDプライム
        <br />
        アカウント
      </>
    ),
    description:
      '法人代表者のマイナンバーカードとスマートフォンアプリで取得します。発行まで約2週間かかるため、早めに手続きを開始してください。',
  },
  {
    id: 'security-action',
    tag: '完了まで2〜3日',
    title: (
      <>
        SECURITY ACTION
        <br />
        （一つ星／二つ星）
      </>
    ),
    description:
      'IPA（情報処理推進機構）のサイトで自己宣言を行い、ロゴを取得します。',
  },
  {
    id: 'certificates',
    tag: '発行から3ヶ月以内の発行',
    title: (
      <>
        履歴事項全部証明書、
        <br />
        納税証明書など公的書類
      </>
    ),
    description:
      '申請時に提出する公的書類です。発行から3ヶ月以内のものが有効な場合があります。',
  },
];

export default function SubsidyChecklist() {
  return (
    <section className="w-full" style={{ paddingTop: 64, paddingBottom: 80, background: D.bgWhite }}>
      <Container>
        <SubsidySectionHeading title="申請に必要なもの" />

        <SubsidySectionLead>
          申請にあたり、事業者様側で用意していただくものがございます。
          発行に時間がかかるものもあるため、お早めにご対応ください。
        </SubsidySectionLead>

        {/* Overview「カード列＋公式サイト」と同じ親: 920px 系を items-center で縦に積む */}
        <div className="flex w-full flex-col items-center" style={{ gap: 40 }}>
          <div className="flex w-full justify-center">
            <div
              className="grid w-full min-w-0 max-w-[920px] grid-cols-1 md:grid-cols-3"
              style={{ gap: 40, boxSizing: 'border-box' }}
            >
              {checklistItems.map((item) => (
                <div
                  key={item.id}
                  className="min-w-0 w-full"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                    alignItems: 'stretch',
                    boxSizing: 'border-box',
                    minHeight: 245,
                    background: D.bgWhite,
                    border: `1px solid ${D.border}`,
                    borderRadius: 16,
                    padding: 20,
                    boxShadow: D.shadowCard,
                  }}
                >
                  <div style={{ textAlign: 'center' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 10,
                        boxSizing: 'border-box',
                        width: 'fit-content',
                        maxWidth: 'min(100%, 240px)',
                        height: 29,
                        padding: '4px 12px',
                        borderRadius: 100,
                        border: `1px solid ${D.checklistTagBorder}`,
                        background: D.bgTint,
                        color: D.checklistTagBorder,
                        fontSize: 11,
                        fontWeight: 700,
                        fontFamily: D.fontNoto,
                        lineHeight: 1,
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <p
                    className="text-[16px] md:text-[18px]"
                    style={{
                      fontWeight: 700,
                      color: D.text,
                      fontFamily: D.fontNoto,
                      margin: 0,
                      lineHeight: '145%',
                      textAlign: 'center',
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-[13px] md:text-[14px]"
                    style={{
                      color: D.textMuted,
                      fontFamily: D.fontNoto,
                      lineHeight: '160%',
                      margin: 0,
                      fontWeight: 500,
                      textAlign: 'left',
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <SubsidyOfficialSiteLink marginBottom={36} />
        </div>

        <SubsidyDeadlineBanner />
      </Container>
    </section>
  );
}
