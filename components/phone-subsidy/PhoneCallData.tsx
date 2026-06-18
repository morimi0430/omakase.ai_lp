import Image from 'next/image';
import {
  PhoneFigmaInner,
  PhoneFigmaSection,
  PhoneSectionHeader,
  PhoneSectionHeading,
} from './layout';
import { PhoneScreenshot } from './PhoneScreenshot';
import { phoneIcons, phoneImages, phoneScreenshotSizes } from './images';

const features = [
  {
    icon: phoneIcons.callStructured,
    title: '通話内容を自動で構造化',
    desc: '要件、顧客温度感、解約理由、次アクションをAIが自動整理。',
  },
  {
    icon: phoneIcons.callUnified,
    title: 'AI対応と有人対応を一元管理',
    desc: 'AI完了率、転送理由、未対応リスクをチームで確認。',
  },
  {
    icon: phoneIcons.callSummary,
    title: '会話サマリーを自動生成',
    desc: '会話のサマリーをAIが自動生成し可視化。ダウンロードやecforce上の顧客メモ欄にも表記可能。',
  },
] as const;

export default function PhoneCallData() {
  return (
    <PhoneFigmaSection id="features" py="standard" className="bg-gradient-to-b from-white to-[#f8fafb]">
      <PhoneFigmaInner gap="64">
        <PhoneSectionHeader
          leadClassName="max-w-[600px]"
          lead="顧客管理・通話ログ・文字起こし・AIサマリーを一元管理。データドリブンな改善を実現します。"
        >
          <PhoneSectionHeading>
            すべての通話を、
            <br />
            改善データに変える。
          </PhoneSectionHeading>
        </PhoneSectionHeader>

        <div className="phone-grid-gap-12 grid w-full md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="phone-card-pad-21 flex gap-3 rounded-[16px] border border-[#f3f4f6] bg-white"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-[8px] bg-[#f0fdfa]">
                <Image src={f.icon} alt="" width={16} height={16} />
              </div>
              <div className="min-w-0">
                <h3 className="text-[14px] font-bold leading-[20px] text-[#111827]">{f.title}</h3>
                <p className="phone-stack-mt-4 text-[12px] leading-[19.5px] text-[#6b7280]">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="phone-grid-gap-24 phone-screenshot-pair grid w-full md:grid-cols-2">
          <PhoneScreenshot
            variant="screen"
            paired
            label="顧客管理画面"
            src={phoneImages.customerManagement}
            alt="顧客管理画面"
            {...phoneScreenshotSizes.customerManagement}
          />
          <PhoneScreenshot
            variant="screen"
            paired
            label="通話詳細・サマリー"
            src={phoneImages.callDetailSummary}
            alt="通話詳細・サマリー"
            {...phoneScreenshotSizes.callDetailSummary}
          />
        </div>
      </PhoneFigmaInner>
    </PhoneFigmaSection>
  );
}
