import Image from 'next/image';
import { PhoneFigmaInner, PhoneFigmaSection } from './layout';
import { PhoneScreenshot } from './PhoneScreenshot';
import { phoneIcons, phoneImages, phoneIntegrationLogos, phoneScreenshotSizes } from './images';

const bullets = [
  '通話後にCRM顧客情報を自動更新',
  '注文・解約ステータスをリアルタイム反映',
  'APIベースで柔軟にカスタマイズ可能',
] as const;

export default function PhoneIntegrations() {
  return (
    <PhoneFigmaSection py="standard">
      <PhoneFigmaInner gap="64">
        <div className="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-[64px]">
          <div className="flex flex-col items-start gap-6 text-left">
            <h2 className="text-left font-[Inter,sans-serif] text-[36px] font-extrabold leading-[54px] tracking-[-1px] text-[#111827]">
              主要CRM・ECプラットフォームとすぐに連携。
            </h2>
            <p className="font-[Inter,sans-serif] text-[16px] leading-[28.8px] text-[#6b7280]">
              要件定義から連携実装・運用保守まで、最短1ヶ月以内に対応。貴社の既存システムをそのまま活かせます。
            </p>

            <div className="phone-integration-logos">
              {phoneIntegrationLogos.map((logo) => (
                <div key={logo.alt} className="phone-integration-logo-card">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.intrinsic.width}
                    height={logo.intrinsic.height}
                    className={`block object-contain ${logo.logoClassName}`}
                  />
                </div>
              ))}
            </div>

            <ul className="flex w-full flex-col items-start gap-3" style={{ paddingTop: 17 }}>
              {bullets.map((text) => (
                <li key={text} className="flex items-center gap-3">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#f0fdfa]">
                    <Image src={phoneIcons.checkTeal} alt="" width={12} height={12} />
                  </span>
                  <span className="text-[14px] leading-[20px] text-[#4b5563]">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <PhoneScreenshot
            variant="screen"
            src={phoneImages.crmEcIntegration}
            alt="CRM・EC連携フロー図"
            {...phoneScreenshotSizes.crmEcIntegration}
          />
        </div>
      </PhoneFigmaInner>
    </PhoneFigmaSection>
  );
}
