import {
  PhoneFigmaInner,
  PhoneFigmaSection,
  PhoneSectionHeader,
  PhoneSectionHeading,
} from './layout';

const steps = [
  { no: '01', title: '要件ヒアリング', desc: ['課題・対応業務・CRM環境を整理', 'し最適プランを提案'] },
  { no: '02', title: 'フロー設計', desc: ['プロンプトベースでコールフロー', 'を構築・チューニング'] },
  { no: '03', title: '連携・テスト', desc: ['CRM連携・電話番号設定・動作検', '証を実施'] },
  { no: '04', title: '本番稼働・改善', desc: ['データドリブンで継続改善。AI完', '了率を最大化'] },
] as const;

export default function PhoneSteps() {
  return (
    <PhoneFigmaSection id="steps" py="standard">
      <PhoneFigmaInner gap="64">
        <PhoneSectionHeader
          leadClassName="max-w-[700px]"
          lead="AIと業界の知識に精通した、ZEALSのAIコンサルタントが初期設定から運用改善まで伴走します。"
        >
          <PhoneSectionHeading>最短1ヶ月で本番稼働。</PhoneSectionHeading>
        </PhoneSectionHeader>

        <div className="phone-steps-track">
          <div className="phone-steps-connector" aria-hidden />

          <div className="phone-steps-grid grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
            {steps.map((s) => (
              <div key={s.no} className="relative flex flex-col items-center text-center">
                <div className="relative z-[1] flex size-[42px] items-center justify-center rounded-full border-2 border-[#14b8a6] bg-white text-[14px] font-bold leading-[20px] text-[#0d9488] shadow-[0px_1px_1px_rgba(20,184,166,0.1)] md:size-[54px]">
                  {s.no}
                </div>
                <h3 className="phone-stack-mt-16 text-[14px] font-bold leading-[20px] text-[#111827]">{s.title}</h3>
                <p className="phone-stack-mt-12 max-w-[200px] text-[13px] leading-[21.13px] text-[#6b7280]">
                  {s.desc[0]}
                  {s.desc[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </PhoneFigmaInner>
    </PhoneFigmaSection>
  );
}
