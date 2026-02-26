"use client";

import { TOB_COLORS } from "./constants";

const PROBLEMS = [
  {
    title: "資料請求フォーム離脱",
    body: "入力項目が多く、面倒に感じた見込み客が離脱している。",
    image: "/images/tob/problem01.png",
  },
  {
    title: "対応のタイムロス",
    body: "夜間や休日のお問い合わせ対応が漏れ、商談機会を逃している。",
    image: "/images/tob/problem02.png",
  },
  {
    title: "リソースの枯渇",
    body: "質の低い問い合わせへの対応に追われ、本来注力すべき商談の準備ができていない。",
    image: "/images/tob/problem03.png",
  },
] as const;

export function TobProblemSection() {
  return (
    <section
      className="w-full bg-white"
      style={{ paddingTop: 80, paddingBottom: 80 }}
    >
      {/* PC版: 64px padding left/right (Figmaより)。Containerは120pxなので直接指定 */}
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 64px" }} className="hidden md:block">
        {/* タイトルエリア（Frame 2609372, gap 16, VERTICAL, CENTER） */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, marginBottom: 60 }}>
          <p style={{ fontFamily: '"Noto Sans JP"', fontSize: 20, fontWeight: 700, color: TOB_COLORS.primary, lineHeight: "125%", margin: 0, textAlign: "center" }}>
            現場営業が抱える3つの限界
          </p>
          <h2 style={{ fontFamily: '"Noto Sans JP"', fontSize: 32, fontWeight: 700, color: "#000", lineHeight: "125%", margin: 0, textAlign: "center" }}>
            今の営業スタイルに課題を感じていませんか？
          </h2>
        </div>

        {/* カード列（Frame 2609373, 1152px, HORIZONTAL, gap 32） */}
        <div style={{ display: "flex", gap: 32 }}>
          {PROBLEMS.map((item, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                background: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* 上部: イラスト (188x188, 円形エリア内) */}
              <div style={{ padding: "40px 0 0", display: "flex", justifyContent: "center" }}>
                <div style={{ width: 188, height: 188, borderRadius: "50%", background: "rgba(96,23,255,0.04)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                  <img src={item.image} alt={item.title} style={{ width: 188, height: 188, objectFit: "contain" }} />
                </div>
              </div>

              {/* 下部: Body (padding 24, gap 16, CENTER) */}
              <div style={{ padding: 24, display: "flex", flexDirection: "column", alignItems: "center", gap: 16, width: "100%" }}>
                <h3 style={{ fontFamily: '"Noto Sans JP"', fontSize: 24, fontWeight: 700, color: "#000", lineHeight: "121%", margin: 0, textAlign: "center" }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: '"Noto Sans JP"', fontSize: 16, fontWeight: 500, color: "rgba(0,0,0,0.55)", lineHeight: "125%", margin: 0, textAlign: "center" }}>
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* モバイル版 */}
      <div className="md:hidden" style={{ padding: "0 16px" }}>
        {/* タイトル */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, marginBottom: 40 }}>
          <p style={{ fontFamily: '"Noto Sans JP"', fontSize: 14, fontWeight: 700, color: TOB_COLORS.primary, lineHeight: "125%", margin: 0, textAlign: "center" }}>
            現場営業が抱える3つの限界
          </p>
          <h2 style={{ fontFamily: '"Noto Sans JP"', fontSize: 22, fontWeight: 700, color: "#000", lineHeight: "140%", margin: 0, textAlign: "center" }}>
            今の営業スタイルに課題を
            <br />
            感じていませんか？
          </h2>
        </div>

        {/* カード（縦並び） */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {PROBLEMS.map((item, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                border: "1px solid #E5E5E5",
                borderRadius: 12,
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div style={{ width: 80, height: 80, borderRadius: "50%", background: "rgba(96,23,255,0.04)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                <img src={item.image} alt={item.title} style={{ width: 80, height: 80, objectFit: "contain" }} />
              </div>
              <h3 style={{ fontFamily: '"Noto Sans JP"', fontSize: 18, fontWeight: 700, color: "#000", lineHeight: "140%", margin: 0, textAlign: "center" }}>
                {item.title}
              </h3>
              <p style={{ fontFamily: '"Noto Sans JP"', fontSize: 14, fontWeight: 500, color: "rgba(0,0,0,0.55)", lineHeight: "150%", margin: 0, textAlign: "center" }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
