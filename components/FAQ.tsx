'use client';

import React from 'react';
import SectionTitle from './SectionTitle';
import FAQItem from './FAQItem';
import { Container } from './Container';

export type FAQEntry = { question: string; answer: string };

const DEFAULT_FAQS: FAQEntry[] = [
  {
    question: 'エンタープライズプランと通常プランの違いは何ですか？',
    answer: `エンタープライズプランは、大規模事業者様や複数サイト運営企業様向けの完全カスタマイズプランです。
・接客数・商品数の大規模対応（内容により無制限も可）
・専任カスタマーサクセス担当が戦略設計から伴走
・専用UI、カスタムAPI、オリジナル音声開発など高度なカスタマイズが可能

通常プラン（アルバイト／ルーキー／ベテラン）は、あらかじめ用意された機能・上限内で、スピーディに始めたい方向けのプランです。`
  },
  {
    question: 'どんな業界で使えますか？',
    answer: `EC、サロン、教育をはじめ、幅広い業界で利用可能です。
業界や商材に合わせて、AIの回答内容や接客スタイルを柔軟に調整できます。`
  },
  {
    question: '料金はいくらですか？',
    answer: `Omakase.aiは月額料金のみのシンプルな料金体系です。初期費用・導入サポート費用は一切かかりません。
月額料金：
・アルバイト：5,980円／月
・ルーキー：19,800円／月
・ベテラン：59,800円／月
・エンタープライズ：要相談
※ 年払いの場合、20%割引が適用されます。`
  },
  {
    question: '設定や導入は難しくありませんか？',
    answer: `Omakase.aiは最短5分で導入可能です。簡単な初期設定だけで、すぐにAI接客を始められます。
また、サポート体制も充実しており、導入から運用まで安心してご利用いただけます。`
  }
];

interface FAQProps {
  /** セクションタイトル。未指定時は「よくある質問」 */
  title?: string;
  /** FAQ一覧。未指定時はメインLP用デフォルト */
  items?: FAQEntry[];
  /** Qラベル・枠のアクセント色 */
  accentColor?: string;
}

export default function FAQ(props?: FAQProps) {
  const { title = 'よくある質問', items: itemsProp, accentColor } = props ?? {};
  const faqs = itemsProp ?? DEFAULT_FAQS;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap');
      `}</style>

      {/* モバイル版 */}
      <section className="w-full md:hidden bg-neutral-100" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <Container>
          <div className="flex flex-col items-center">
            <SectionTitle title={title} isMobile={false} accentColor={accentColor} />

            <div className="w-full flex flex-col items-center gap-5" style={{ marginTop: '24px' }}>
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  accentColor={accentColor}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* PC版 */}
      <section className="hidden md:block w-full bg-neutral-100" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
        <Container>
          <div className="flex flex-col items-center">
            <SectionTitle title={title} isMobile={false} accentColor={accentColor} />

            <div className="w-full flex flex-col items-center gap-5" style={{ marginTop: '80px' }}>
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  accentColor={accentColor}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}