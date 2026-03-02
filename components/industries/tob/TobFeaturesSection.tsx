"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { TOB_COLORS } from "./constants";

const FEATURES = [
  {
    title: "ハイブリッドAI",
    body: "音声とチャット、顧客の好みに合わせた接客で離脱を防ぐ。",
    image: "/images/industries/tob/feature01.png",
    showIntegrations: false,
    // 下端にピン固定: width固定・height:auto・bottom:0
    pcImageStyle: { position: "absolute" as const, left: 32, right: 32, bottom: 0, width: "calc(100% - 64px)", height: "auto", display: "block" },
  },
  {
    title: "リアルタイム通知",
    body: "メールアドレス獲得の瞬間、即座に担当者へ通知。鉄は熱いうちに打てる。",
    image: "/images/industries/tob/feature02.png",
    showIntegrations: false,
  },
  {
    title: "ログ管理画面",
    body: "AIとの全会話履歴を可視化。顧客の熱量や悩みも一目で把握。",
    image: "/images/industries/tob/feature03.png",
    showIntegrations: false,
    // 右端にピン固定: height固定・width:auto・right:0
    pcImageStyle: { position: "absolute" as const, top: 32, bottom: 32, right: 0, height: "calc(100% - 64px)", width: "auto", display: "block" },
  },
  {
    title: "ツール連携",
    body: "獲得リードを自動でMAへ。即座にステップメール配信などの追客が可能。",
    image: "",
    showIntegrations: true,
  },
];

const INTEGRATIONS = [
  {
    name: "HubSpot",
    category: "CRMプラットフォーム",
    logo: "/images/industries/tob/logo-hubspot.png",
    comingSoon: false,
  },
  {
    name: "Zendesk",
    category: "サポートプラットフォーム",
    logo: "/images/industries/tob/logo-zendesk.png",
    comingSoon: false,
  },
  {
    name: "Gorgias",
    category: "サポートプラットフォーム",
    logo: "/images/industries/tob/logo-gorgias.png",
    comingSoon: false,
  },
  {
    name: "Hacomono",
    category: "電話予約・予約管理",
    logo: "/images/industries/tob/logo-hacomono.png",
    comingSoon: false,
  },
  {
    name: "Salesforce",
    category: "CRMプラットフォーム",
    logo: "/images/industries/tob/logo-salesforce.png",
    comingSoon: true,
  },
  {
    name: "Zapier",
    category: "自動化プラットフォーム",
    logo: "/images/industries/tob/logo-zapier.png",
    comingSoon: true,
  },
  {
    name: "EC Force",
    category: "ECプラットフォーム",
    logo: "/images/industries/tob/logo-ecforce.webp",
    comingSoon: true,
  },
];

function IntegrationCard({
  name,
  logo,
  comingSoon,
}: (typeof INTEGRATIONS)[number]) {
  return (
    <div
      style={{
        position: "relative",
        background: "#fff",
        borderRadius: 16,
        border: "1px solid #E5E5E5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 0,
        minWidth: 0,
        overflow: "visible",
      }}
    >
      {/* ステータスバッジ（ボーダーに重なる右上） */}
      <span
        style={{
          position: "absolute",
          top: -6,
          right: -6,
          background: comingSoon ? "#FF7A00" : TOB_COLORS.primary,
          color: "#fff",
          fontSize: 9,
          fontWeight: 700,
          fontFamily: '"Noto Sans JP"',
          borderRadius: 100,
          padding: "3px 7px",
          whiteSpace: "nowrap",
          zIndex: 1,
        }}
      >
        {comingSoon ? "近日公開" : "利用可能"}
      </span>

      {/* ロゴ */}
      <img
        src={logo}
        alt={name}
        style={{ width: "85%", height: "70%", objectFit: "contain" }}
      />
    </div>
  );
}

function IntegrationGrid() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        gap: 10,
        padding: 16,
        boxSizing: "border-box",
        overflow: "visible",
      }}
    >
      {INTEGRATIONS.map((item) => (
        <IntegrationCard key={item.name} {...item} />
      ))}
    </div>
  );
}

export function TobFeaturesSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mobileOpenIndex, setMobileOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="w-full bg-white"
      style={{ paddingTop: 80, paddingBottom: 80 }}
    >
      {/* PC版 */}
      <div className="hidden md:block">
        <Container>
          {/* タイトル */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, marginBottom: 60 }}>
            <p style={{ fontFamily: '"Noto Sans JP"', fontSize: 20, fontWeight: 700, color: TOB_COLORS.primary, lineHeight: "125%", margin: 0, textAlign: "center" }}>
              開発不要で今すぐ使える！
            </p>
            <h2 style={{ fontFamily: '"Noto Sans JP"', fontSize: 32, fontWeight: 700, color: "#000", lineHeight: "125%", margin: 0, textAlign: "center" }}>
              ユーザーが得られるメリット
            </h2>
          </div>

          {/* コンテンツ（左: カードリスト / 右: 選択中の画像） */}
          <div style={{ display: "flex", justifyContent: "space-between", gap: 32, alignItems: "flex-start" }}>
            {/* 左: 機能カード（クリックで選択） */}
            <div style={{ width: 584, display: "flex", flexDirection: "column", gap: 16 }}>
              {FEATURES.map((item, i) => {
                const isSelected = selectedIndex === i;
                return (
                  <div
                    key={i}
                    role="button"
                    tabIndex={0}
                    onClick={() => setSelectedIndex(i)}
                    onKeyDown={(e) => e.key === "Enter" && setSelectedIndex(i)}
                    style={{
                      height: 116,
                      borderRadius: 12,
                      background: isSelected ? "rgba(96,23,255,0.04)" : "#fff",
                      border: isSelected ? "none" : "1px solid #E5E5E5",
                      display: "flex",
                      overflow: "hidden",
                      cursor: "pointer",
                      outline: "none",
                      transition: "background 0.2s, border 0.2s",
                    }}
                  >
                    {/* 左端紫ライン */}
                    <div
                      style={{
                        width: 2,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        background: isSelected ? TOB_COLORS.primary : "rgba(96,23,255,0.2)",
                        transition: "background 0.2s",
                      }}
                    />
                    {/* テキスト */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 32,
                        padding: "24px 24px 24px 24px",
                        width: "100%",
                      }}
                    >
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <h3
                          style={{
                            fontFamily: '"Noto Sans JP"',
                            fontSize: 24,
                            fontWeight: 600,
                            color: "#000",
                            lineHeight: "125%",
                            margin: 0,
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
                          }}
                        >
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 右: 選択中機能の画像 or 統合グリッド */}
            <div
              style={{
                width: 547,
                height: 514,
                borderRadius: 12,
                background: "rgba(247,247,247,1)",
                flexShrink: 0,
                overflow: "hidden",
                position: "relative",
              }}
            >
              {FEATURES.map((item, i) =>
                item.showIntegrations ? (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      inset: 0,
                      opacity: selectedIndex === i ? 1 : 0,
                      transition: "opacity 0.3s ease",
                      pointerEvents: selectedIndex === i ? "auto" : "none",
                    }}
                  >
                    <IntegrationGrid />
                  </div>
                ) : (
                  <img
                    key={i}
                    src={item.image}
                    alt={item.title}
                    style={{
                      ...(item.pcImageStyle ?? {
                        position: "absolute",
                        inset: 32,
                        width: "calc(100% - 64px)",
                        height: "calc(100% - 64px)",
                        objectFit: "contain",
                        objectPosition: "center",
                      }),
                      opacity: selectedIndex === i ? 1 : 0,
                      transition: "opacity 0.3s ease",
                    }}
                  />
                )
              )}
            </div>
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
          <h2 style={{ fontFamily: '"Noto Sans JP"', fontSize: 22, fontWeight: 700, color: "#000", lineHeight: "140%", margin: 0, textAlign: "center" }}>
            ユーザーが得られるメリット
          </h2>
        </div>

        {/* アコーディオン形式の機能カード */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {FEATURES.map((item, i) => {
            const isOpen = mobileOpenIndex === i;
            return (
              <div
                key={i}
                style={{
                  borderRadius: 12,
                  border: `1px solid ${isOpen ? "rgba(96,23,255,0.3)" : "#E5E5E5"}`,
                  overflow: "hidden",
                  background: isOpen ? "rgba(96,23,255,0.04)" : "#fff",
                  transition: "background 0.2s, border-color 0.2s",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {/* 左端縦バー（カード全体の高さに伸びる） */}
                <div style={{ width: 2, flexShrink: 0, background: isOpen ? TOB_COLORS.primary : "rgba(96,23,255,0.2)", transition: "background 0.2s" }} />

                {/* 右側コンテンツ */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  {/* カードヘッダー（タップで開閉） */}
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setMobileOpenIndex(isOpen ? null : i)}
                    onKeyDown={(e) => e.key === "Enter" && setMobileOpenIndex(isOpen ? null : i)}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 8,
                      padding: "16px 16px 16px 14px",
                      minHeight: 80,
                      cursor: "pointer",
                      outline: "none",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      <h3 style={{ fontFamily: '"Noto Sans JP"', fontSize: 18, fontWeight: 700, color: "#000", lineHeight: "140%", margin: 0 }}>
                        {item.title}
                      </h3>
                      <p style={{ fontFamily: '"Noto Sans JP"', fontSize: 14, fontWeight: 500, color: "rgba(0,0,0,0.55)", lineHeight: "150%", margin: 0 }}>
                        {item.body}
                      </p>
                    </div>
                    {/* 開閉矢印 */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      style={{ flexShrink: 0, transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}
                    >
                      <path d="M5 7.5L10 12.5L15 7.5" stroke={TOB_COLORS.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* 開閉する画像エリア */}
                  <div
                    style={{
                      maxHeight: isOpen ? 260 : 0,
                      overflow: "hidden",
                      transition: "max-height 0.35s ease",
                    }}
                  >
                    <div
                      style={{
                        margin: "0 12px 12px",
                        borderRadius: 10,
                        position: "relative",
                        height: 210,
                        overflow: "visible",
                      }}
                    >
                      {item.showIntegrations ? (
                        <IntegrationGrid />
                      ) : (
                        <img
                          src={item.image}
                          alt={item.title}
                          style={{
                            position: "absolute",
                            inset: 20,
                            width: "calc(100% - 40px)",
                            height: "calc(100% - 40px)",
                            objectFit: "contain",
                            objectPosition: "center",
                          }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
