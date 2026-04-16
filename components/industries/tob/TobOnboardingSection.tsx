"use client";

import { Fragment } from "react";
import { Container } from "@/components/Container";
import { TOB_COLORS } from "./constants";

const STEPS = [
  {
    step: "STEP 01",
    title: "Omakase AIに\nURLをペースト",
    body: "Omakase AIを導入したいサイトのURLを入力します。",
    image: "/images/industries/tob/step01.png",
  },
  {
    step: "STEP 02",
    title: "AIが学習し、\n即座に接客AIを作成",
    body: "AIが自動でサイトの内容を理解し、接客エージェントを自動で作成します。",
    image: "/images/industries/tob/step02.png",
  },
  {
    step: "STEP 03",
    title: "リードはメール通知&\nデータ連携",
    body: "リードが獲得できたら、即座に担当者へメールを通知。追客が可能です。",
    image: "/images/industries/tob/step03.png",
  },
] as const;

/** Figma: Polygon 3/5 (24x28 purple triangle arrow) */
function PolygonArrow() {
  return (
    <svg
      width="24"
      height="28"
      viewBox="0 0 24 28"
      fill="none"
      style={{ flexShrink: 0 }}
    >
      <path d="M0 0L24 14L0 28V0Z" fill={TOB_COLORS.primary} rx="2" />
    </svg>
  );
}

export function TobOnboardingSection() {
  return (
    <section
      className="w-full bg-white"
      style={{ paddingTop: 80, paddingBottom: 80 }}
    >
      {/* PC版 */}
      <div className="hidden md:block">
        <Container>
          {/* タイトル（Frame 2609388, gap 16, VERTICAL, CENTER） */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, marginBottom: 60 }}>
            <p style={{ fontFamily: '"Noto Sans JP"', fontSize: 20, fontWeight: 700, color: TOB_COLORS.primary, lineHeight: "125%", margin: 0, textAlign: "center" }}>
              開発不要で今すぐ使える！
            </p>
            <h2 style={{ fontFamily: '"Noto Sans JP"', fontSize: 36, fontWeight: 700, color: "#000", lineHeight: "125%", margin: 0, textAlign: "center" }}>
              導入の流れ
            </h2>
          </div>

          {/* カード列（Frame 2609376, 1200x454, HORIZONTAL, CENTER both, gap 32） */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 32 }}>
            {STEPS.map((item, i) => (
              <Fragment key={i}>
                {/* Card (341x454, VERTICAL, gap 32, r=8) */}
                <div
                  style={{
                    width: 341,
                    height: 454,
                    display: "flex",
                    flexDirection: "column",
                    gap: 32,
                    borderRadius: 8,
                    flexShrink: 0,
                  }}
                >
                  {/* 上部: ステップ画像（341x294, r=16）
                      Figma: 内部画像は304x176、上余白59px・左右18px */}
                  <div
                    style={{
                      width: "100%",
                      height: 294,
                      background: "rgba(96,23,255,0.04)",
                      borderRadius: 16,
                      position: "relative",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "59px 18px 59px",
                      boxSizing: "border-box",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.step}
                      style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    />
                    {/* STEP label (bg purple, r=300, 12pt fw600 white) */}
                    <div
                      style={{
                        position: "absolute",
                        top: 11,
                        left: 12,
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "0 12px",
                        height: 20,
                        background: TOB_COLORS.primary,
                        borderRadius: 300,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: 12,
                          fontWeight: 600,
                          color: "#fff",
                          lineHeight: "137%",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {item.step}
                      </span>
                    </div>
                  </div>

                  {/* 下部: テキスト（gap 8, CENTER） */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <h3
                      style={{
                        fontFamily: '"Noto Sans JP"',
                        fontSize: 24,
                        fontWeight: 700,
                        color: "#000",
                        lineHeight: "125%",
                        margin: 0,
                        textAlign: "center",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: '"Noto Sans JP"',
                        fontSize: 16,
                        fontWeight: 500,
                        color: "rgba(0,0,0,0.55)",
                        lineHeight: "125%",
                        margin: 0,
                        textAlign: "center",
                      }}
                    >
                      {item.body}
                    </p>
                  </div>
                </div>

                {/* 矢印（Polygon 3/5, 最後のカード以外） */}
                {i < STEPS.length - 1 && <PolygonArrow />}
              </Fragment>
            ))}
          </div>
        </Container>
      </div>

      {/* モバイル版 */}
      <div className="md:hidden" style={{ padding: "0 16px" }}>
        {/* タイトル */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, marginBottom: 32 }}>
          <p style={{ fontFamily: '"Noto Sans JP"', fontSize: 14, fontWeight: 700, color: TOB_COLORS.primary, lineHeight: "125%", margin: 0, textAlign: "center" }}>
            開発不要で今すぐ使える！
          </p>
          <h2 style={{ fontFamily: '"Noto Sans JP"', fontSize: 28, fontWeight: 700, color: "#000", lineHeight: "140%", margin: 0, textAlign: "center" }}>
            導入の流れ
          </h2>
        </div>

        {/* ステップ（縦並び） */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {STEPS.map((item, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                border: "1px solid #E5E5E5",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              {/* ステップ画像 */}
              <div style={{ height: 180, position: "relative", overflow: "hidden", background: "rgba(96,23,255,0.04)" }}>
                <img src={item.image} alt={item.step} style={{ width: "100%", height: "100%", objectFit: "contain", padding: "16px 20px", boxSizing: "border-box" }} />
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "0 10px",
                    height: 20,
                    background: TOB_COLORS.primary,
                    borderRadius: 300,
                  }}
                >
                  <span style={{ fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 600, color: "#fff" }}>
                    {item.step}
                  </span>
                </div>
              </div>
              {/* テキスト */}
              <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: 8 }}>
                <h3 style={{ fontFamily: '"Noto Sans JP"', fontSize: 18, fontWeight: 700, color: "#000", lineHeight: "140%", margin: 0, textAlign: "center", whiteSpace: "pre-line" }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: '"Noto Sans JP"', fontSize: 14, fontWeight: 500, color: "rgba(0,0,0,0.55)", lineHeight: "150%", margin: 0, textAlign: "center" }}>
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
