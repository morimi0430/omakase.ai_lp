import Image from 'next/image';
import {
  PhoneFigmaInner,
  PhoneFigmaSection,
  PhoneSectionHeader,
  PhoneSectionHeading,
} from './layout';
import { phoneIcons } from './images';

const features = [
  {
    icon: phoneIcons.ivrVoice,
    title: '自然な音声対話',
    desc: '「1番を押してください」は過去のもの。自由発話を理解し、文脈を読んで応答します。専門用語も辞書登録で精度向上。',
  },
  {
    icon: phoneIcons.ivrAuth,
    title: '本人確認・認証',
    desc: '電話番号・氏名・注文番号による本人確認をAIが自動実施。情報取得後にCRMへ即時連携します。',
  },
  {
    icon: phoneIcons.ivrTransfer,
    title: 'スムーズな有人転送',
    desc: 'AIが解決できない場合は、会話要約をリアルタイムで引き継ぎながらオペレーターへ転送。二度手間ゼロ。',
  },
  {
    icon: phoneIcons.ivrSms,
    title: 'リアルタイムSMS送信',
    desc: '通話中に案内URLをSMSでお客様のスマホへ即送信。電話対話を継続しながらWeb手続きへ誘導できます。',
  },
  {
    icon: phoneIcons.ivrPrompt,
    title: 'プロンプトベースの設定',
    desc: 'コールフローは自然言語で入力するだけで自動生成。エンジニア不要で、週単位の改善サイクルを実現。',
  },
  {
    icon: phoneIcons.ivrAfterhours,
    title: '営業時間外・話し中対応',
    desc: 'オペレーターが不在でも折り返し受付・FAQ回答・SMS誘導を自動実施。着信機会損失をゼロに近づけます。',
  },
] as const;

export default function PhoneIvr() {
  return (
    <PhoneFigmaSection py="standard">
      <PhoneFigmaInner gap="64">
        <PhoneSectionHeader lead="シナリオ設計不要。自然言語で対話し、状況に応じてフローを自律判断します。">
          <PhoneSectionHeading>従来のIVRとは、根本から違う。</PhoneSectionHeading>
        </PhoneSectionHeader>

        <div className="phone-grid-gap-16 grid w-full grid-cols-1 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="phone-card-pad-25 flex flex-col gap-4 rounded-[16px] border border-[#f3f4f6] bg-white"
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex size-10 shrink-0 items-center justify-center rounded-[12px]"
                  style={{
                    background:
                      'linear-gradient(135deg, rgb(240, 253, 250) 0%, rgba(204, 251, 241, 0.5) 100%)',
                  }}
                >
                  <Image src={f.icon} alt="" width={20} height={20} />
                </div>
                <h3 className="text-[15px] font-bold leading-[22.5px] text-[#111827]">{f.title}</h3>
              </div>
              <p className="text-[13px] leading-[22.1px] text-[#6b7280]">{f.desc}</p>
            </div>
          ))}
        </div>
      </PhoneFigmaInner>
    </PhoneFigmaSection>
  );
}
