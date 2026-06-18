import type { Metadata, Viewport } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhoneHero from '@/components/phone-subsidy/PhoneHero';
import PhoneLogos from '@/components/phone-subsidy/PhoneLogos';
import PhoneFeatures from '@/components/phone-subsidy/PhoneFeatures';
import PhoneCallData from '@/components/phone-subsidy/PhoneCallData';
import PhoneIvr from '@/components/phone-subsidy/PhoneIvr';
import PhoneIntegrations from '@/components/phone-subsidy/PhoneIntegrations';
import PhoneLearning from '@/components/phone-subsidy/PhoneLearning';
import PhoneSteps from '@/components/phone-subsidy/PhoneSteps';
import PhoneFinalCta from '@/components/phone-subsidy/PhoneFinalCta';

export const viewport: Viewport = {
  colorScheme: 'light',
};

export const metadata: Metadata = {
  title: 'まるでオペレーターのように自然な音声で24時間365日対応 | Omakase AI 電話AI',
  description:
    '電話対応の課題をAIが解決。あらゆる電話業務を任せられる音声AIエージェント。主要CRM・ECプラットフォームと連携し、最短1ヶ月で本格導入。',
};

export default function PhoneSubsidyPage() {
  return (
    <main className="overflow-x-hidden bg-white font-[Inter,'Noto_Sans_JP',sans-serif]">
      <Header phoneLp />
      <PhoneHero />
      <PhoneLogos />
      <PhoneFeatures />
      <PhoneCallData />
      <PhoneIvr />
      <PhoneIntegrations />
      <PhoneLearning />
      <PhoneSteps />
      <PhoneFinalCta />
      <Footer />
    </main>
  );
}
