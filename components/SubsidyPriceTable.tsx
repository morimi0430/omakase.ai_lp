import type { ReactNode } from 'react';
import Image from 'next/image';
import { Container } from './Container';
import { subsidyDesign as D } from './subsidy/designTokens';
import SubsidyDeadlineBanner from './SubsidyDeadlineBanner';
import SubsidyOfficialSiteLink from './subsidy/SubsidyOfficialSiteLink';
import SubsidySectionHeading from './subsidy/SubsidySectionHeading';
import SubsidySectionLead from './subsidy/SubsidySectionLead';
import { SUBSIDY_PACKAGE_CALCULATION_NOTE } from './subsidy/subsidyPackageCalcNote';

/** グラフカードの最大幅（同セクション内のパッケージカード等と 1000px で揃える） */
const subsidyGraphFrameW = 1000;

const packageFeatures: { id: string; title: ReactNode; body: string }[] = [
  {
    id: 'pro-onboarding',
    title: (
      <>
        AIのプロフェッショナルによる
        <br />
        導入支援
      </>
    ),
    body: '複雑でわかりづらい設定も、プロのサポートですぐに使える！',
  },
  {
    id: 'maintenance',
    title: '導入後、メンテナンス・運用の支援',
    body: 'カスタマイズの仕方や分析まで、担当者がサポートします。',
  },
  {
    id: 'marketing',
    title: '総合デジタルマーケティングをご提案',
    body: '運用のアドバイスなど集客に関わることを総合的にサポートします。',
  },
];

export default function SubsidyPriceTable() {
  return (
    <section
      className="w-full"
      style={{ paddingTop: 64, paddingBottom: 80, background: '#F8F8FC' }}
    >
      <Container>
        <SubsidySectionHeading title="Omakase AI補助金シミュレーション" oneLineMobile />

        <SubsidySectionLead>
          ZEALSでは、Omakase AIをスムーズに、そして効果的に導入していただくために補助金パッケージをご用意しております。
        </SubsidySectionLead>

        {/* 補助金パッケージカード */}
        <div
          style={{
            background: D.bgWhite,
            borderRadius: D.radiusCard,
            border: `1px solid ${D.border}`,
            padding: 'clamp(20px, 3vw, 36px)',
            maxWidth: 1000,
            margin: '0 auto 0 auto',
          }}
        >
          <h3
            className="text-[15px] md:text-[18px]"
            style={{
              fontWeight: 700,
              color: D.text,
              fontFamily: D.fontNoto,
              margin: '0 0 20px 0',
              textAlign: 'center',
              lineHeight: '150%',
            }}
          >
            中小企業・小規模事業者様向け Omakase AI補助金パッケージ
          </h3>

          {/* フィーチャーカードグリッド: モバイル1列 / PC 3列 */}
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 'clamp(10px, 1.5vw, 16px)' }}>
            {packageFeatures.map((feat) => (
              <div
                key={feat.id}
                style={{
                  background: D.purpleCardGradient,
                  borderRadius: D.radiusSm,
                  padding: 'clamp(14px, 2vw, 20px)',
                }}
              >
                <p
                  className="text-center text-[13px] md:text-[15px]"
                  style={{
                    fontWeight: 700,
                    color: '#fff',
                    fontFamily: D.fontNoto,
                    margin: '0 0 10px 0',
                    lineHeight: '145%',
                  }}
                >
                  {feat.title}
                </p>
                <div
                  aria-hidden
                  style={{
                    width: 'clamp(40px, 22%, 64px)',
                    height: 1,
                    margin: '0 auto 12px auto',
                    background: 'rgba(255,255,255,0.95)',
                    borderRadius: 1,
                  }}
                />
                <p
                  className="text-center"
                  style={{
                    fontSize: 12,
                    color: 'rgba(255,255,255,0.85)',
                    fontFamily: D.fontNoto,
                    margin: 0,
                    lineHeight: '155%',
                  }}
                >
                  {feat.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p
          style={{
            fontSize: 11,
            color: D.textSub,
            fontFamily: D.fontNoto,
            margin: '12px auto 24px auto',
            maxWidth: 1000,
            textAlign: 'left',
          }}
        >
          ※全て税別価格表記です。※契約期間は12ヶ月となります。
        </p>

        {/* グラフカード（外枠 max 1200px、縦は画像の実寸比率＝277/508 に追従） */}
        <div
          style={{
            background: D.bgWhite,
            borderRadius: D.radiusCard,
            border: `1px solid ${D.border}`,
            padding: 'clamp(20px, 3vw, 36px)',
            boxSizing: 'border-box',
            width: '100%',
            maxWidth: subsidyGraphFrameW,
            margin: '0 auto 0 auto',
          }}
        >
          <h3
            className="text-[14px] md:text-[18px]"
            style={{
              fontWeight: 700,
              color: D.text,
              fontFamily: D.fontNoto,
              margin: '0 0 20px 0',
              textAlign: 'center',
            }}
          >
            補助金額適用後の実質負担
          </h3>
          <div
            style={{
              width: '100%',
              maxWidth: subsidyGraphFrameW,
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              src="/images/industries/subsidy/graph.png"
              alt="補助金適用後の実質負担グラフ：申請対象合計約257万円（税抜・目安）に対し50%補助で実質負担・補助額はいずれも約130万円（税抜・目安）"
              width={508}
              height={277}
              sizes="(max-width: 600px) 100vw, 508px"
              style={{
                width: 'min(100%, 508px)',
                height: 'auto',
                borderRadius: 8,
                opacity: 1,
                display: 'block',
              }}
            />
          </div>
          <p
            style={{
              fontWeight: 700,
              fontFamily: D.fontNoto,
              textAlign: 'center',
              margin: '20px 0 4px 0',
              lineHeight: 1.35,
            }}
          >
            <span className="inline-flex items-baseline text-[20px] md:text-[24px]">
              <span
                style={{
                  background: D.purpleTextGradient90,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                約
              </span>
              <span
                style={{
                  background: D.purpleTextGradient90,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  fontSize: 40,
                  lineHeight: 1,
                }}
              >
                130
              </span>
              <span
                style={{
                  background: D.purpleTextGradient90,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                万
              </span>
            </span>
            <span className="text-[20px] md:text-[24px]" style={{ color: D.textBody }}>
              {' '}
              で導入可能！
            </span>
          </p>
          <p
            style={{
              fontSize: 11,
              color: D.textSub,
              fontFamily: D.fontNoto,
              margin: '16px auto 0 auto',
              maxWidth: 920,
              textAlign: 'center',
              lineHeight: 1.65,
              whiteSpace: 'pre-line',
            }}
          >
            {SUBSIDY_PACKAGE_CALCULATION_NOTE}
          </p>
        </div>

        <p
          style={{
            fontSize: 11,
            color: D.textSub,
            fontFamily: D.fontNoto,
            margin: '12px auto 24px auto',
            maxWidth: 1000,
            textAlign: 'left',
          }}
        >
          ※2年目以降の金額は月10万くらいの、年間120万。ベテランプランのみ：59,800円/月の20%オフ
        </p>

        <SubsidyOfficialSiteLink marginBottom={40} />

        <SubsidyDeadlineBanner />
      </Container>
    </section>
  );
}
