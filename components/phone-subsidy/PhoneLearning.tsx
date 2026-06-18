import {
  PhoneFigmaInner,
  PhoneFigmaSection,
  PhoneSectionHeader,
  PhoneSectionHeading,
} from './layout';
import { PhoneScreenshot } from './PhoneScreenshot';
import { phoneImages, phoneScreenshotSizes } from './images';

const infoCards = [
  {
    title: '音声認識キーワード登録',
    desc: 'ブランド名、商品名、専門用語を登録するだけで、音声認識の精度が飛躍的に向上。最大50件まで登録可能。',
  },
  {
    title: 'リアルタイム文字起こし',
    desc: '通話内容をリアルタイムで文字起こし。発信者とAIオペレーターの会話を時系列で確認でき、品質管理に活用できます。',
  },
] as const;

const screens = [
  {
    label: 'エージェント設定 - 音声認識キーワード',
    key: 'agentKeywordsSettings' as const,
    alt: '音声認識キーワード設定',
  },
  {
    label: '文字起こし・会話ログ',
    key: 'transcriptionLog' as const,
    alt: '文字起こし画面',
  },
] as const;

export default function PhoneLearning() {
  return (
    <PhoneFigmaSection
      py="learning"
      className="border-y border-[#f3f4f6] bg-[rgba(249,250,251,0.8)]"
    >
      <PhoneFigmaInner gap="40">
        <PhoneSectionHeader
          leadClassName="max-w-[700px]"
          lead="医療・化粧品・不動産・金融など、専門用語や商品名を辞書登録することで音声認識と回答精度を向上できます。"
        >
          <PhoneSectionHeading>業界用語も学習。専門商材でも高精度対応。</PhoneSectionHeading>
        </PhoneSectionHeader>

        <div className="phone-grid-gap-24 grid w-full grid-cols-1 pt-2 md:grid-cols-2">
          {infoCards.map((card) => (
            <div key={card.title} className="phone-card-pad-21 rounded-[12px] border border-[#f3f4f6] bg-white">
              <h3 className="text-[14px] font-bold leading-[20px] text-[#111827]">{card.title}</h3>
              <p className="phone-stack-mt-12 text-[12px] leading-[19.5px] text-[#6b7280]">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="phone-grid-gap-24 phone-screenshot-pair grid w-full md:grid-cols-2">
          {screens.map((s) => (
            <PhoneScreenshot
              key={s.key}
              variant="screen"
              paired
              label={s.label}
              src={phoneImages[s.key]}
              alt={s.alt}
              {...phoneScreenshotSizes[s.key]}
            />
          ))}
        </div>
      </PhoneFigmaInner>
    </PhoneFigmaSection>
  );
}
