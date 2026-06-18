import {
  PhoneFigmaInner,
  PhoneFigmaSection,
  PhoneSectionHeader,
  PhoneSectionHeading,
} from './layout';

const cards = [
  {
    useCase: 'USE CASE 01',
    title: '解約防止・引き留め対応',
    desc: '解約理由をヒアリングし、理由に応じたカウンタートークをAIが実施。一時停止・配送サイクル変更などの代替提案まで自動で行います。',
    tags: ['D2C', '通販', 'サブスク', 'CRM連携'],
    videoSrc: '/videos/phone-subsidy/demo-ecforce-cancel.mp4',
  },
  {
    useCase: 'USE CASE 02',
    title: '注文受付・アップセル',
    desc: '商品・配送・支払い情報のヒアリングから仮オーダー発行まで完全自動化。顧客ニーズに応じたアップセル提案で単価向上にも貢献します。',
    tags: ['EC', '食品', '健康食品', 'ecforce'],
    videoSrc: '/videos/phone-subsidy/demo-shopify-order.mp4',
  },
  {
    useCase: 'USE CASE 03',
    title: 'FAQ・カスタマーサポート',
    desc: '商品・配送・手続きに関するよくある質問に24時間自動応答。解決できない場合のみオペレーターへ転送し、CS工数を大幅に削減します。',
    tags: ['全業種', 'コールセンター代替', '時間外対応'],
    videoSrc: '/videos/phone-subsidy/demo-faq-generic.mp4',
  },
  {
    useCase: 'USE CASE 04',
    title: '予約・変更・手続き受付',
    desc: '配送日変更・サイクル変更・住所変更などをAIが代行。SMS誘導でWebへのシームレスな誘導も可能です。',
    tags: ['定期通販', 'Shopify', 'SMS連携'],
    videoSrc: '/videos/phone-subsidy/demo-ecforce-delivery-cycle.mp4',
  },
] as const;

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex h-[24.5px] flex-col items-start rounded-[9999px] bg-[#F0FDFA] px-[10px] pb-[4.5px] pt-[3px] font-[Inter,sans-serif] text-[11px] font-semibold leading-[16.5px] text-[#0d9488]">
      {label}
    </span>
  );
}

function DemoVideo({ src }: { src: string }) {
  return (
    <div className="phone-card-pad-8 flex flex-col items-start gap-[6px] self-stretch rounded-[12px] border border-[#f3f4f6] bg-[#f9fafb]">
      <p className="px-1 font-[Inter,sans-serif] text-[8.8px] font-semibold leading-[15px] text-[#9CA3AF]">
        🎬 デモ動画
      </p>
      <video
        className="h-[140px] w-full self-stretch rounded-[8px] bg-[#111827] object-contain"
        src={src}
        controls
        playsInline
        preload="metadata"
      />
    </div>
  );
}

export default function PhoneFeatures() {
  return (
    <PhoneFigmaSection
      id="use-cases"
      py="standard"
      className="border-y border-[#F3F4F6] bg-[rgba(249,250,251,0.80)]"
    >
      <PhoneFigmaInner gap="48">
        <PhoneSectionHeader
          leadClassName="max-w-[700px]"
          lead="D2C・通販・EC・金融・通信など、600社超の導入知見をもとに最適なフローを構築します。"
        >
          <PhoneSectionHeading>
            あらゆる電話業務を
            <br />
            AIに任せる。
          </PhoneSectionHeading>
        </PhoneSectionHeader>

        <div className="phone-grid-gap-16 grid w-full grid-cols-1 xl:grid-cols-4">
          {cards.map((c) => (
            <div
              key={c.useCase}
              className="phone-card-pad-20 flex flex-col items-start justify-between self-stretch rounded-[16px] border border-[#f3f4f6] bg-white"
            >
              <div className="w-full">
                <p className="font-[Inter,sans-serif] text-[11px] font-bold uppercase leading-[16.5px] tracking-[1.5px] text-[#14B8A6]">
                  {c.useCase}
                </p>
                <h3 className="phone-stack-mt-12 font-[Inter,sans-serif] text-[17px] font-bold leading-[25.5px] text-[#111827]">
                  {c.title}
                </h3>
                <p className="phone-stack-mt-12 font-[Inter,sans-serif] text-[12px] font-normal leading-[20.4px] text-[#6B7280]">
                  {c.desc}
                </p>
                <div className="phone-stack-mt-16 flex flex-wrap gap-1.5">
                  {c.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>
              </div>
              <div className="phone-stack-mt-16 w-full">
                <DemoVideo src={c.videoSrc} />
              </div>
            </div>
          ))}
        </div>
      </PhoneFigmaInner>
    </PhoneFigmaSection>
  );
}
