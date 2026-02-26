"use client";

import { TOB_COLORS } from "./constants";

export function TobAboutSection() {
  return (
    <section
      className="w-full"
      style={{
        paddingTop: 80,
        paddingBottom: 80,
        backgroundImage: "url('/images/tob/about-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* PC版（Figma: padding 80/120/80/120, gap 160, HORIZONTAL） */}
      <div
        className="hidden md:flex"
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 120px",
          gap: 160,
          alignItems: "flex-start",
        }}
      >
        {/* 左側テキスト (555x465) */}
        <div style={{ width: 555, flexShrink: 0, display: "flex", flexDirection: "column", gap: 34 }}>
          {/* Frame 2609394: gap 20 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Frame 2609385: logo + "なら、" */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {/* ヘッダーと同じロゴ（ファビコンなし） */}
              <img
                src="/images/pc/header_logo.png"
                alt="Omakase.ai"
                style={{ width: 160, height: 22, objectFit: "contain" }}
              />
              <span
                style={{
                  fontFamily: '"Noto Sans JP"',
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#000",
                  lineHeight: "83%",
                }}
              >
                なら、
              </span>
            </div>

            {/* メインタイトル 44pt fw700 black LEFT */}
            <h2
              style={{
                fontFamily: '"Noto Sans JP"',
                fontSize: 44,
                fontWeight: 700,
                color: "#000",
                lineHeight: "124%",
                margin: 0,
                textAlign: "left",
              }}
            >
              自然な会話の中で
              <br />
              リード情報を自動取得！
            </h2>

            {/* 下線 (59px wide, 3px purple) */}
            <div
              style={{
                width: 59,
                height: 3,
                background: TOB_COLORS.primary,
                borderRadius: 2,
              }}
            />
          </div>

          {/* Frame 2609390: 説明文 16pt fw500 rgba(0,0,0,0.55) */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <p
              style={{
                fontFamily: '"Noto Sans JP"',
                fontSize: 16,
                fontWeight: 500,
                color: "rgba(0,0,0,0.55)",
                lineHeight: "125%",
                margin: 0,
                textAlign: "left",
              }}
            >
              音声とチャットのハイブリッド対応で、
              <br />
              ユーザーが最も話しやすい方法を選択可能。
              <br />
              「いかにもフォーム」な体験を排除。世間話のような自然な流れで、
              <br />
              電話番号やメールアドレスを聞き出します。
            </p>
          </div>
        </div>

        {/* 右側: about 画像 (434x465) */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img
            src="/images/tob/about.png"
            alt="Omakase.ai 会話デモ"
            style={{ width: "100%", maxWidth: 434, height: 465, objectFit: "contain" }}
          />
        </div>
      </div>

      {/* モバイル版 */}
      <div className="md:hidden">
      <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 32 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <img
              src="/images/pc/header_logo.png"
              alt="Omakase.ai"
              style={{ height: 18, width: "auto", objectFit: "contain" }}
            />
            <span style={{ fontFamily: '"Noto Sans JP"', fontSize: 16, fontWeight: 700, color: "#000" }}>なら、</span>
          </div>
          <h2
            style={{
              fontFamily: '"Noto Sans JP"',
              fontSize: 28,
              fontWeight: 700,
              color: "#000",
              lineHeight: "140%",
              margin: 0,
            }}
          >
            自然な会話の中で
            <br />
            リード情報を自動取得！
          </h2>
          <div style={{ width: 48, height: 3, background: TOB_COLORS.primary, borderRadius: 2 }} />
          <p
            style={{
              fontFamily: '"Noto Sans JP"',
              fontSize: 14,
              fontWeight: 500,
              color: "rgba(0,0,0,0.55)",
              lineHeight: "170%",
              margin: 0,
            }}
          >
            音声とチャットのハイブリッド対応で、ユーザーが最も話しやすい方法を選択可能。「いかにもフォーム」な体験を排除。世間話のような自然な流れで、電話番号やメールアドレスを聞き出します。
          </p>
        </div>

        <img
          src="/images/tob/about.png"
          alt="Omakase.ai 会話デモ"
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
        />
      </div>
      </div>
    </section>
  );
}
