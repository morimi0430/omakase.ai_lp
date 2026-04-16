"use client";

import { Container } from "@/components/Container";
import { TOB_COLORS } from "./constants";

const CASES = [
  {
    caseLabel: "CASE 01",
    company: "コムエクスポジアム・ジャパン株式会社　様",
    headline: "お問い合わせ対応工数50％削減！",
    highlight: "50％削減",
    headlineFontWeight: 600,
    body: "イベント開催直前〜開催中に殺到するお問い合わせをOmakase AIが一次受けすることで、問い合わせ件数を約50%削減。（※前年比）し、カスタマーサポート工数を大幅削減に成功。\nまたAIにエンタメ性を持たせることで、イベントに対するエンゲージメントも向上。",
    image: "/images/industries/tob/case01.png",
    imageLeft: true,
  },
  {
    caseLabel: "CASE 02",
    company: "株式会社ZEALS",
    headline: "1日平均5件の新規リード獲得に成功",
    highlight: "平均5件",
    headlineFontWeight: 700,
    body: "会話開始時にメールアドレスを取得し、自動メール配信による継続的な接点づくりを実現。商談前にはユーザーの会話履歴を確認できるため、興味関心や検討状況を可視化し、効果的なアプローチにつなげています。",
    image: "/images/industries/tob/case02.png",
    imageLeft: false,
  },
] as const;

/** ヘッドラインの highlight 部分を紫に着色 */
function HighlightedHeadline({ text, highlight }: { text: string; highlight: string }) {
  const idx = text.indexOf(highlight);
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <span style={{ color: TOB_COLORS.primary }}>{highlight}</span>
      {text.slice(idx + highlight.length)}
    </>
  );
}

export function TobCaseStudiesSection() {
  return (
    // Figma: bg rgba(245,244,255), padding 80/120/80/120, gap 64, VERTICAL
    <section
      className="w-full"
      style={{ background: "rgba(245,244,255,1)", paddingTop: 80, paddingBottom: 80 }}
    >
      {/* PC版 */}
      <div className="hidden md:block">
        <Container>
          {/* タイトル 36pt fw700 black CENTER */}
          <h2
            style={{
              fontFamily: '"Noto Sans JP"',
              fontSize: 36,
              fontWeight: 700,
              color: "#000",
              lineHeight: "125%",
              margin: "0 0 64px",
              textAlign: "center",
            }}
          >
            実績
          </h2>

          {/* 事例カード (gap 64) */}
          <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
            {CASES.map((item, i) => (
              /* Frame 89/94: bg rgba(255,255,255,0.42), 1200x380,
                 padding 40/64/40/64, gap 80, HORIZONTAL, r=16 */
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.42)",
                  borderRadius: 16,
                  border: "1px solid rgba(255,255,255,0.8)",
                  padding: "40px 64px",
                  display: "flex",
                  gap: 80,
                  alignItems: "center",
                  flexDirection: item.imageLeft ? "row" : "row-reverse",
                }}
              >
                {/* 事例画像 (528x300) */}
                <div style={{ width: 528, height: 300, flexShrink: 0, borderRadius: 12, overflow: "hidden" }}>
                  <img
                    src={item.image}
                    alt={item.caseLabel}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                {/* テキスト (464px) */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24 }}>
                  {/* 上部: CASE label + company + headline */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    {/* CASE label: テキスト → 紫の棒（文字幅に合わせる） */}
                    <div style={{ display: "inline-flex", flexDirection: "column", gap: 2, alignSelf: "flex-start" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: 12,
                          fontWeight: 600,
                          lineHeight: "123%",
                          letterSpacing: "0.05em",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <span style={{ color: "#000" }}>CASE </span>
                        <span style={{ color: TOB_COLORS.primary }}>{item.caseLabel.replace("CASE ", "")}</span>
                      </span>
                      <div style={{ width: "100%", height: 2, background: TOB_COLORS.primary, borderRadius: 1 }} />
                    </div>

                    {/* company + headline (gap=8) */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      <p
                        style={{
                          fontFamily: '"Noto Sans JP"',
                          fontSize: 14,
                          fontWeight: 700,
                          color: "#000",
                          lineHeight: "125%",
                          margin: 0,
                        }}
                      >
                        {item.company}
                      </p>
                      <h3
                        style={{
                          fontFamily: '"Noto Sans JP"',
                          fontSize: 24,
                          fontWeight: item.headlineFontWeight,
                          color: "#000",
                          lineHeight: "124%",
                          margin: 0,
                        }}
                      >
                        <HighlightedHeadline text={item.headline} highlight={item.highlight} />
                      </h3>
                    </div>
                  </div>

                  {/* 本文 16pt fw500 rgba(0,0,0,0.55) LEFT lh=125% */}
                  <p
                    style={{
                      fontFamily: '"Noto Sans JP"',
                      fontSize: 16,
                      fontWeight: 500,
                      color: "rgba(0,0,0,0.55)",
                      lineHeight: "125%",
                      margin: 0,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* モバイル版 */}
      <div className="md:hidden" style={{ padding: "0 16px" }}>
        <h2
          style={{
            fontFamily: '"Noto Sans JP"',
            fontSize: 28,
            fontWeight: 700,
            color: "#000",
            lineHeight: "140%",
            margin: "0 0 32px",
            textAlign: "center",
          }}
        >
          実績
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {CASES.map((item, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.7)",
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.8)",
                overflow: "hidden",
              }}
            >
              {/* 画像（padding付き親で余白を確保） */}
              <div style={{ padding: "16px 16px 0" }}>
                <div style={{ width: "100%", aspectRatio: "528/300", borderRadius: 10, overflow: "hidden", lineHeight: 0 }}>
                  <img
                    src={item.image}
                    alt={item.caseLabel}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
              </div>
              {/* テキスト */}
              <div style={{ padding: "24px 20px", display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "inline-flex", flexDirection: "column", gap: 2, alignSelf: "flex-start" }}>
                  <span style={{ fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 600, letterSpacing: "0.05em", whiteSpace: "nowrap" }}>
                    <span style={{ color: "#000" }}>CASE </span>
                    <span style={{ color: TOB_COLORS.primary }}>{item.caseLabel.replace("CASE ", "")}</span>
                  </span>
                  <div style={{ width: "100%", height: 2, background: TOB_COLORS.primary, borderRadius: 1 }} />
                </div>
                <p style={{ fontFamily: '"Noto Sans JP"', fontSize: 13, fontWeight: 700, color: "#000", lineHeight: "125%", margin: 0 }}>
                  {item.company}
                </p>
                <h3 style={{ fontFamily: '"Noto Sans JP"', fontSize: 18, fontWeight: item.headlineFontWeight, color: "#000", lineHeight: "140%", margin: 0 }}>
                  <HighlightedHeadline text={item.headline} highlight={item.highlight} />
                </h3>
                <p style={{ fontFamily: '"Noto Sans JP"', fontSize: 14, fontWeight: 500, color: "rgba(0,0,0,0.55)", lineHeight: "160%", margin: 0, whiteSpace: "pre-line" }}>
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
