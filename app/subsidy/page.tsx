import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SubsidyHero from '@/components/SubsidyHero';
import SubsidyMerits from '@/components/SubsidyMerits';
import SubsidyManualStrip from '@/components/SubsidyManualStrip';
import SubsidyOverview from '@/components/SubsidyOverview';
import SubsidyPriceTable from '@/components/SubsidyPriceTable';
import SubsidySteps from '@/components/SubsidySteps';
import SubsidyChecklist from '@/components/SubsidyChecklist';
import SubsidySchedule from '@/components/SubsidySchedule';
import SubsidyCTASection from '@/components/SubsidyCTASection';
import LogoSlider from '@/components/LogoSlider';
import FAQ from '@/components/FAQ';
import type { FAQEntry } from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'IT導入補助金でOmakase AIを導入 | Omakase AI',
  description:
    '通常254万円のOmakase AI導入パッケージがIT導入補助金で実質85万円から。ZEALSが申請から入金まで伴走サポート。第1次締切2026年5月12日。',
};

const subsidyFAQs: FAQEntry[] = [
  {
    question: 'Omakase AIはIT導入補助金の対象ですか？',
    answer:
      'はい、対象です。Omakase AIはITツールとして認定されており、システム利用料・初期構築費・研修・運用保守費がまとめて補助対象となります。',
  },
  {
    question: '補助金はいつ振り込まれますか？',
    answer:
      '実績報告が確定してから約1ヶ月後に、指定の口座に補助金が振り込まれます。申請から入金まで数ヶ月かかる場合があります。',
  },
  {
    question: '交付決定前に契約してしまったらどうなりますか？',
    answer:
      '交付決定の通知が届く前に契約・発注・支払いを行った場合、補助金は一切支給されません。これは補助金制度の絶対ルールです。ZEALSがタイミングを管理してサポートするのでご安心ください。',
  },
  {
    question: 'GビズIDはどこで取得できますか？',
    answer:
      'GビズIDの公式サイト（gbiz-id.go.jp）から取得できます。法人代表者のマイナンバーカードとスマートフォンアプリが必要です。発行まで約2週間かかります。',
  },
  {
    question: '賃金引上枠の条件を教えてください。',
    answer:
      '地域別最低賃金＋30円以上の賃上げを実施する事業者が対象です。補助率が2/3となり、通常枠（1/2）よりもお得に導入できます。詳しくはZEALSにご相談ください。',
  },
  {
    question: '申請はZEALSが全部やってくれますか？',
    answer:
      'ZEALSが申請の準備・マイページへの招待・書類確認まで伴走サポートします。ただし、GビズID取得やマイページへの情報入力など、一部お客様に対応いただく必要がある作業もあります。',
  },
  {
    question: '用意する資金は、補助金適用後の金額だけでよいですか？',
    answer:
      '事業実施の際は、一旦事業費（導入費用）の全額をお支払いいただく必要があります。交付決定後、所定の手続きを経て事務局から補助金が指定口座に振り込まれます。',
  },
  {
    question: 'どんな会社が補助金の対象になりますか？',
    answer:
      '中小企業・小規模事業者の定義に該当する事業者が対象です。資本金・従業員数などの要件は制度・年度で定められています。個別の可否はお問い合わせください。',
  },
];

// ページの公開フラグ。true → 表示、false → 404非表示
const PAGE_ENABLED = true;

export default function SubsidyPage() {
  if (!PAGE_ENABLED) notFound();

  return (
    <main className="overflow-x-hidden">
      <Header documentRequestFirst />
      <SubsidyHero />
      <LogoSlider />
      <SubsidyMerits />
      <SubsidyOverview />
      <SubsidyPriceTable />
      <SubsidyChecklist />
      <SubsidySteps />
      <SubsidySchedule />
      <SubsidyManualStrip variant="inline" />
      <FAQ
        title="よくある質問"
        items={subsidyFAQs}
      />
      <SubsidyCTASection />
      <Footer />
    </main>
  );
}
