"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { TOB_COLORS, TOB_DEMO_URL } from "./constants";

/** 無限スクロールロゴマーキー */
function LogoMarquee() {
  return (
    <div style={{ marginTop: 48, background: "#fff", overflow: "hidden", padding: "20px 0" }}>
      <style>{`
        @keyframes tob-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .tob-marquee-track {
          display: flex;
          width: max-content;
          animation: tob-marquee 18s linear infinite;
        }
        .tob-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="tob-marquee-track">
        {/* logos.png を2枚並べてシームレスにループ */}
        <img src="/images/tob/logos.png" alt="導入企業ロゴ" style={{ width: "100vw", height: "auto", display: "block", flexShrink: 0 }} />
        <img src="/images/tob/logos.png" alt="" aria-hidden style={{ width: "100vw", height: "auto", display: "block", flexShrink: 0 }} />
      </div>
    </div>
  );
}

/** 24x24 チェックアイコン（Figma: Frame 24x24 with checkmark） */
function CheckIcon() {
  return (
    <div
      style={{
        width: 24,
        height: 24,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        background: TOB_COLORS.primary,
      }}
    >
      <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
        <path d="M1 5L4.5 8.5L11 1.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

/** 矢印アイコン */
function ArrowIcon({ onPurple }: { onPurple?: boolean }) {
  return (
    <img
      src={onPurple ? "/images/pc/arrow_white.png" : "/images/pc/arrow_purple.png"}
      alt=""
      style={{ width: 20, height: 20, flexShrink: 0 }}
    />
  );
}

export function TobFirstView() {
  return (
    <section
      className="w-full"
      style={{ background: "linear-gradient(180deg, #DCDFFF 0%, #FFF 68.82%)" }}
    >
      {/* ── PC版 ── */}
      <div className="hidden md:block" style={{ paddingTop: 120, paddingBottom: 0 }}>
        {/* 左120px余白維持・右は画像を端まで伸ばすためContainerを使わず直接指定 */}
        <div style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 120 }}>
          {/* HORIZONTAL: left title (671px) + right image（右端まで） */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 32, overflow: "hidden" }}>
            {/* 左側 title frame（671px） */}
            <div style={{ width: 671, flexShrink: 0, display: "flex", flexDirection: "column", gap: 32 }}>
              {/* メインタイトル 44pt fw700 black LEFT */}
              <h1
                style={{
                  fontFamily: '"Noto Sans JP"',
                  fontSize: 44,
                  fontWeight: 700,
                  color: "#000",
                  lineHeight: "125%",
                  margin: 0,
                  textAlign: "left",
                }}
              >
                営業リスト作成は、{" "}
                <br />
                AIに『おまかせ』する時代へ。
              </h1>

              {/* 説明文 2行（Frame 2609381, gap 16px） */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {/* bullet 1 */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                  <CheckIcon />
                  <p style={{ fontFamily: '"Noto Sans JP"', fontSize: 20, fontWeight: 700, color: "#000", lineHeight: "125%", margin: 0 }}>
                    音声とチャットのハイブリッドAIが、
                    <br />
                    24時間365日あなたに代わってリードを獲得！
                  </p>
                </div>
                {/* bullet 2 */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                  <CheckIcon />
                  <p style={{ fontFamily: '"Noto Sans JP"', fontSize: 20, fontWeight: 700, color: "#000", lineHeight: "125%", margin: 0 }}>
                    お問い合わせ工数を50%削減。
                    <br />
                    1日平均5件の有効リードを自動供給！
                  </p>
                </div>
              </div>

              {/* CTAボタン */}
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                {/* デモボタン: purple fill, white stroke, white text */}
                <Link
                  href={TOB_DEMO_URL}
                  style={{
                    display: "flex",
                    height: 48,
                    padding: "10px 24px",
                    alignItems: "center",
                    gap: 10,
                    borderRadius: 300,
                    border: "1px solid #fff",
                    background: `linear-gradient(310deg, ${TOB_COLORS.primaryDark} 44%, ${TOB_COLORS.primaryLight} 87%)`,
                    color: "#fff",
                    fontFamily: '"Noto Sans JP"',
                    fontSize: 14,
                    fontWeight: 700,
                    lineHeight: "100%",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  デモをリクエストする
                  <ArrowIcon />
                </Link>
              </div>
            </div>

            {/* 右側 hero 画像：右端まで余白なし */}
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "flex-end" }}>
              <img
                src="/images/tob/hero.png"
                alt="Omakase.ai デモ画面"
                style={{ width: "100%", height: "auto", display: "block", objectFit: "contain", objectPosition: "right bottom" }}
              />
            </div>
          </div>
        </div>

        {/* ロゴスクロール */}
        <LogoMarquee />
      </div>

      {/* ── モバイル版 ── */}
      <div className="flex md:hidden flex-col" style={{ paddingTop: 40, paddingBottom: 0 }}>
        <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 24 }}>
          {/* メインタイトル */}
          <h1
            style={{
              fontFamily: '"Noto Sans JP"',
              fontSize: 26,
              fontWeight: 700,
              color: "#000",
              lineHeight: "125%",
              margin: 0,
              textAlign: "center",
            }}
          >
            営業リスト作成は、
            <br />
            AIに『おまかせ』する時代へ。
          </h1>

          {/* 説明文 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <CheckIcon />
              <p style={{ fontFamily: '"Noto Sans JP"', fontSize: 14, fontWeight: 700, color: "#000", lineHeight: "150%", margin: 0 }}>
                音声とチャットのハイブリッドAIが、24時間365日あなたに代わってリードを獲得！
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <CheckIcon />
              <p style={{ fontFamily: '"Noto Sans JP"', fontSize: 14, fontWeight: 700, color: "#000", lineHeight: "150%", margin: 0 }}>
                お問い合わせ工数を50%削減。1日平均5件の有効リードを自動供給！
              </p>
            </div>
          </div>

          {/* hero 画像 */}
          <img
            src="/images/tob/hero.png"
            alt="Omakase.ai デモ画面"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />

          {/* CTAボタン */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Link
              href={TOB_DEMO_URL}
              style={{
                display: "flex",
                height: 48,
                padding: "10px 24px",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                borderRadius: 300,
                border: "1px solid rgba(255,255,255,0.6)",
                background: `linear-gradient(310deg, ${TOB_COLORS.primaryDark} 44%, ${TOB_COLORS.primaryLight} 87%)`,
                color: "#fff",
                fontFamily: '"Noto Sans JP"',
                fontSize: 14,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              デモをリクエストする
              <ArrowIcon />
            </Link>
          </div>
        </div>

        {/* ロゴスクロール */}
        <LogoMarquee />
      </div>
    </section>
  );
}
