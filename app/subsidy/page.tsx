import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SUBSIDY_LP_ENABLED } from '@/lib/featureFlags';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SubsidyHero from '@/components/SubsidyHero';
import SubsidyCTASection from '@/components/SubsidyCTASection';
import SubsidyOverview from '@/components/SubsidyOverview';
import SubsidyPriceTable from '@/components/SubsidyPriceTable';
import SubsidyChecklist from '@/components/SubsidyChecklist';
import SubsidySteps from '@/components/SubsidySteps';
import FAQ from '@/components/FAQ';
import type { FAQEntry } from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'デジタル化・AI導入補助金（旧IT導入補助金）でOmakase AIを最大50%OFFで導入 | Omakase AI',
  description:
    'Omakase AIはデジタル化・AI導入補助金の対象サービスです。ZEALSが申請から入金まで伴走サポート。第1次締切2026年5月12日。',
};

const subsidyFAQs: FAQEntry[] = [
  {
    question: 'Omakase AIはデジタル化・AI導入補助金（旧IT導入補助金）の対象ですか？',
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
    question: '申請はZEALSが全部やってくれますか？',
    answer: `補助金の申請については、申請サポート会社に委託しております。
準備〜交付申請までを伴走支援を実施する形になりますので、ご安心ください。

ZEALSが申請の準備・マイページへの招待・書類確認まで伴走サポートします。ただし、GビズID取得やマイページへの情報入力など、一部お客様に対応いただく必要がある作業もあります。`,
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

export default function SubsidyPage() {
  if (!SUBSIDY_LP_ENABLED) notFound();

  return (
    <main className="overflow-x-hidden">
      <Header documentRequestFirst />
      <SubsidyHero />
      <SubsidyCTASection />
      <SubsidyOverview />
      <SubsidyPriceTable />
      <SubsidyChecklist />
      <SubsidySteps />
      <FAQ
        title="よくある質問（FAQ）"
        items={subsidyFAQs}
      />
      <SubsidyCTASection />
      <Footer />
    </main>
  );
}
