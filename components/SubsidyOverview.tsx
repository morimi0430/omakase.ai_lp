import type { ReactNode } from 'react';
import { Container } from './Container';
import { subsidyDesign as D } from './subsidy/designTokens';
import SubsidyOfficialSiteLink from './subsidy/SubsidyOfficialSiteLink';
import SubsidySectionHeading from './subsidy/SubsidySectionHeading';
import SubsidySectionLead from './subsidy/SubsidySectionLead';
import { SUBSIDY_PACKAGE_CALCULATION_NOTE } from './subsidy/subsidyPackageCalcNote';

type InfoCard = {
  heading: string;
  title: ReactNode;
  note?: string;
};

const infoCards: InfoCard[] = [
  {
    heading: '対象事業者',
    title: '中小企業・小規模事業者（法人・個人事業主）',
    note:
      '※ 日本国内で法人登記（法人番号が指定され国税庁が管理する法人番号公表サイトにて公表されている）され、日本国内で事業を営む法人または個人である生産性向上に資するITツールを導入する中小企業・小規模事業者等を指します。',
  },
  {
    heading: '補助対象費用',
    title: (
      <>
        AIシステム利用料
        <br className="md:hidden" aria-hidden />
        ＋初期構築費＋研修・運用保守費
      </>
    ),
    note: '※ 交付決定通知が届く前の契約・支払いは補助の対象になりません。',
  },
];

export default function SubsidyOverview() {
  return (
    <section className="w-full" style={{ paddingTop: 40, paddingBottom: 72, background: D.bgWhite }}>
      <Container>
        <SubsidySectionHeading title="デジタル化・AI導入補助金（旧IT導入補助金）とは" />

        <h3
          className="text-[18px] md:text-[22px]"
          style={{
            fontWeight: 700,
            color: D.text,
            fontFamily: D.fontNoto,
            textAlign: 'center',
            margin: '0 0 16px 0',
            lineHeight: '150%',
          }}
        >
          ITツールの導入により
          <br className="md:hidden" aria-hidden />
          生産性の向上を目指す制度
        </h3>

        <SubsidySectionLead>
          デジタル化・AI導入補助金（旧IT導入補助金）は、中小企業・小規模事業者がITツールを導入する際に、導入費用の一部を国が補助する制度です。
          <br />
          条件に応じて<strong style={{ color: D.purple }}>最大約130万円</strong>の補助を
          <br className="md:hidden" aria-hidden />
          受けられる場合があります。
          <br />
          Omakase AI は IT 導入補助金の対象となりうる
          <br className="md:hidden" aria-hidden />
          ソフトウェア・サービスです。
          <br />
          申請可能な枠・金額は事業者様の条件により異なります。
        </SubsidySectionLead>

        <p
          style={{
            fontSize: 11,
            color: D.textSub,
            fontFamily: D.fontNoto,
            margin: '0 auto 24px auto',
            maxWidth: 1000,
            textAlign: 'center',
            lineHeight: 1.65,
            boxSizing: 'border-box',
            whiteSpace: 'pre-line',
          }}
        >
          {SUBSIDY_PACKAGE_CALCULATION_NOTE}
        </p>

        {/* カード列と公式サイトボタンの間は margin 相殺されないよう flex gap で確保 */}
        <div className="flex w-full flex-col items-center" style={{ gap: 40 }}>
          {/* 920px 幅・gap 40px → 各カード (920-40)/2 = 440px。高さは本文に合わせて可変（スクロールで隠さない） */}
          <div className="flex w-full justify-center">
            <div
              className="flex w-full max-w-[920px] flex-col gap-4 md:flex-row md:items-stretch md:gap-10"
              style={{ boxSizing: 'border-box' }}
            >
              {infoCards.map((card) => (
                <div
                  key={card.heading}
                  className="flex w-full min-w-0 flex-col md:h-full md:min-w-0 md:flex-1 md:basis-0"
                  style={{
                    borderRadius: 18,
                    overflow: 'hidden',
                    background: D.bgWhite,
                    boxShadow: '0 2px 16px rgba(0, 0, 0, 0.06)',
                    fontFamily: D.fontNoto,
                  }}
                >
                  <div
                    style={{
                      background: '#222222',
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: 14,
                      textAlign: 'center',
                      padding: '10px 12px',
                      letterSpacing: '0.02em',
                      flexShrink: 0,
                    }}
                  >
                    {card.heading}
                  </div>
                  <div
                    className="flex min-h-0 w-full flex-1 flex-col md:min-h-0"
                    style={{
                      boxSizing: 'border-box',
                      padding: '16px 14px 14px',
                      gap: 16,
                    }}
                  >
                    <p
                      style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: D.text,
                        lineHeight: 1.5,
                        margin: 0,
                        textAlign: 'center',
                      }}
                    >
                      {card.title}
                    </p>
                    {card.note ? (
                      <p
                        style={{
                          fontSize: 12,
                          color: D.text,
                          fontWeight: 500,
                          lineHeight: 1.65,
                          margin: 0,
                        }}
                      >
                        {card.note}
                      </p>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <SubsidyOfficialSiteLink />
        </div>
      </Container>
    </section>
  );
}
