"use client";

import { useState } from "react";
import { TOB_COLORS } from "./constants";

const FAQ_ITEMS = [
  {
    question: "エンタープライズプランと通常プランの違いは何ですか？",
    answer:
      "エンタープライズプランは、大規模事業者様や複数サイト運営企業様向けの完全カスタマイズプランです。\n・接客数・商品数の大規模対応（内容により無制限も可）\n・専任カスタマーサクセス担当が戦略設計から伴走\n・専用UI、カスタムAPI、オリジナル音声開発など高度なカスタマイズが可能\n\n通常プラン（アルバイト／ルーキー／ベテラン）は、あらかじめ用意された機能・上限内で、スピーディに始めたい方向けのプランです。",
  },
  {
    question: "料金はいくらですか？",
    answer:
      "Omakase AIは月額料金のみのシンプルな料金体系です。初期費用・導入サポート費用は一切かかりません。\n月額料金：\n・アルバイト：5,980円／月\n・ルーキー：19,800円／月\n・ベテラン：59,800円／月\n・エンタープライズ：要相談\n※ 年払いの場合、20%割引が適用されます。",
  },
  {
    question: "連携できるツールは？",
    answer: "HubSpotとメールです。要望あればヒアリングさせてください。",
  },
  {
    question: "設定や導入は難しくありませんか？",
    answer:
      "Omakase AIは最短5分で導入可能です。簡単な初期設定だけで、すぐにAI接客を始められます。\nまた、サポート体制も充実しており、導入から運用まで安心してご利用いただけます。",
  },
] as const;

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    /* Frame 74/72/46/73: bg white, padding 16/20, HORIZONTAL, SPACE_BETWEEN, r=16 */
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        border: "1px solid rgba(255,255,255,0.8)",
        overflow: "hidden",
      }}
    >
      {/* 質問行 */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          padding: "16px 20px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        {/* Frame 2609304: "Q" + question text */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, flex: 1 }}>
          <span
            style={{
              fontFamily: '"Noto Sans JP"',
              fontSize: 20,
              fontWeight: 700,
              color: TOB_COLORS.primary,
              lineHeight: "125%",
              flexShrink: 0,
            }}
          >
            Q
          </span>
          <span
            style={{
              fontFamily: '"Noto Sans JP"',
              fontSize: 16,
              fontWeight: 500,
              color: "#000",
              lineHeight: "125%",
            }}
          >
            {question}
          </span>
        </div>

        {/* ＋/× アイコン（24x24, vector cross） */}
        <div
          style={{
            width: 24,
            height: 24,
            flexShrink: 0,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* 横線 */}
          <div style={{ position: "absolute", width: 14, height: 2, background: "#000", borderRadius: 1 }} />
          {/* 縦線 (open時は消す) */}
          <div
            style={{
              position: "absolute",
              width: 2,
              height: 14,
              background: "#000",
              borderRadius: 1,
              transition: "opacity 0.2s",
              opacity: open ? 0 : 1,
            }}
          />
        </div>
      </button>

      {/* 回答 */}
      {open && (
        <div style={{ padding: "0 20px 16px 56px" }}>
          <p
            style={{
              fontFamily: '"Noto Sans JP"',
              fontSize: 14,
              fontWeight: 400,
              color: "rgba(0,0,0,0.7)",
              lineHeight: "170%",
              margin: 0,
              whiteSpace: "pre-line",
            }}
          >
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export function TobFaqSection() {
  return (
    // Figma: bg rgba(246,247,249), padding 80 top/bottom, gap 80, VERTICAL, CENTER
    <section
      className="w-full"
      style={{ background: "rgba(246,247,249,1)", paddingTop: 80, paddingBottom: 80 }}
    >
      {/* PC版 */}
      <div className="hidden md:flex flex-col items-center" style={{ gap: 80 }}>
        {/* Frame 65: タイトル "よくある質問" 36pt fw700 black LEFT */}
        <div>
          <h2
            style={{
              fontFamily: '"Noto Sans JP"',
              fontSize: 36,
              fontWeight: 700,
              color: "#000",
              lineHeight: "100%",
              margin: 0,
              textAlign: "left",
            }}
          >
            よくある質問
          </h2>
        </div>

        {/* Frame 72: FAQ一覧 (1440px, padding 0 220px, gap 20) */}
        <div
          style={{
            width: "100%",
            maxWidth: 1440,
            padding: "0 220px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            boxSizing: "border-box",
          }}
        >
          {FAQ_ITEMS.map((item, i) => (
            <FaqItem key={i} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>

      {/* モバイル版 */}
      <div className="md:hidden">
        <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 32 }}>
          <h2
            style={{
              fontFamily: '"Noto Sans JP"',
              fontSize: 28,
              fontWeight: 700,
              color: "#000",
              lineHeight: "140%",
              margin: 0,
              textAlign: "center",
            }}
          >
            よくある質問
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {FAQ_ITEMS.map((item, i) => (
              <FaqItem key={i} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
