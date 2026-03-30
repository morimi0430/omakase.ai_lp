import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SubsidyHero from '@/components/SubsidyHero';
import SubsidyOverview from '@/components/SubsidyOverview';
import SubsidyPriceTable from '@/components/SubsidyPriceTable';
import SubsidySteps from '@/components/SubsidySteps';
import SubsidyChecklist from '@/components/SubsidyChecklist';
import SubsidySchedule from '@/components/SubsidySchedule';
import FAQ from '@/components/FAQ';
import type { FAQEntry } from '@/components/FAQ';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IT導入補助金でOmakase AIを導入 | Omakase.ai',
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
];

function SubsidyCTASection() {
  return (
    <>
      {/* モバイル版 */}
      <section
        className="md:hidden w-full"
        style={{
          backgroundColor: '#4900EE',
          paddingTop: '60px',
          paddingBottom: '60px',
          paddingLeft: '16px',
          paddingRight: '16px',
        }}
      >
        <div style={{ maxWidth: '343px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <h2 style={{
            color: '#fff',
            textAlign: 'center',
            fontSize: '24px',
            fontWeight: 700,
            fontFamily: '"Noto Sans JP"',
            lineHeight: '150%',
            textShadow: '0 2px 10px #6836D5',
          }}>
            補助金申請の相談は<br />無料で受け付けています
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            textAlign: 'center',
            fontSize: '14px',
            fontFamily: '"Noto Sans JP"',
            lineHeight: '170%',
          }}>
            締切まで時間がありません。<br />今すぐお問い合わせください。
          </p>
          <Link
            href="/document-request"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '18px 24px',
              borderRadius: '300px',
              background: '#fff',
              boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
              color: '#6017FF',
              fontWeight: 700,
              fontSize: '16px',
              fontFamily: '"Noto Sans JP"',
              textDecoration: 'none',
              width: '100%',
            }}
          >
            補助金申請の相談をする
          </Link>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', fontFamily: '"Noto Sans JP"' }}>
            ⚠️ 第1次締切：2026年5月12日（火）17:00
          </p>
        </div>
      </section>

      {/* PC版 */}
      <section
        className="hidden md:flex"
        style={{
          position: 'relative',
          width: '100%',
          padding: '60px 0',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '24px',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #4900EE 0%, #8249FF 100%)',
        }}
      >
        {/* 背景装飾 */}
        <div style={{
          position: 'absolute',
          top: '-80px',
          right: '80px',
          width: '400px',
          height: '400px',
          background: '#8249FF',
          opacity: 0.3,
          filter: 'blur(100px)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <h2 style={{
            color: '#fff',
            textAlign: 'center',
            textShadow: '0 2px 10px #6836D5',
            fontFamily: '"Noto Sans JP"',
            fontSize: '32px',
            fontWeight: 700,
            lineHeight: '150%',
          }}>
            補助金申請の相談は無料で受け付けています
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.85)',
            fontSize: '16px',
            fontFamily: '"Noto Sans JP"',
            textAlign: 'center',
          }}>
            締切まで時間がありません。今すぐお問い合わせください。
          </p>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Link
              href="/document-request"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '20px 40px',
                borderRadius: '300px',
                background: '#fff',
                boxShadow: '0 6px 24px rgba(0,0,0,0.2)',
                color: '#6017FF',
                fontWeight: 700,
                fontSize: '18px',
                fontFamily: '"Noto Sans JP"',
                textDecoration: 'none',
              }}
            >
              補助金申請の相談をする
              <span style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: 'rgba(96,23,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '13px',
              }}>▶</span>
            </Link>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', fontFamily: '"Noto Sans JP"' }}>
            ⚠️ 第1次締切：2026年5月12日（火）17:00
          </p>
        </div>
      </section>
    </>
  );
}

// ページの公開フラグ。true → 表示、false → 404非表示
const PAGE_ENABLED = false;

export default function SubsidyPage() {
  if (!PAGE_ENABLED) notFound();

  return (
    <main className="overflow-x-hidden">
      <Header documentRequestFirst />
      <SubsidyHero />
      <SubsidyOverview />
      <SubsidyPriceTable />
      <SubsidyChecklist />
      <SubsidySteps />
      <SubsidySchedule />
      <FAQ
        title="よくある質問"
        items={subsidyFAQs}
      />
      <SubsidyCTASection />
      <Footer />
    </main>
  );
}
