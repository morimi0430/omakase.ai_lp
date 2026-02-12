"use client";

import { Container } from "@/components/Container";
import { KAIGO_COLORS } from "./constants";

const FV_BENEFIT_ITEMS = [
  { text: "未経験・無資格でもOK", accent: "OK" },
  { text: "面接対策・同行フォロー", accent: "フォロー" },
  { text: "事例として求人イメージを掲載", accent: "求人イメージ" },
  { text: "週休2日・残業少なめ", accent: "週休2日" },
] as const;

const FV_IMAGE_URL = "/images/industries/kaigo/FV_main.jpg";

export function KaigoFirstView() {
  return (
    <section className="md:pb-20" style={{ paddingBottom: "60px" }}>
      {/* FV画像：PCで画面中央に配置（About・Form と同じ） */}
      <div className="w-full md:flex md:justify-center">
        <Container className="w-full md:max-w-[1440px]">
          <div className="w-full">
          <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden", background: "#fff" }}>
            <img
              src={FV_IMAGE_URL}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            {/* 外側を白にフェードするオーバーレイ（上下左右） */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
              <div className="absolute left-0 top-0 bottom-0 w-[15%] min-w-[48px] max-w-[120px] bg-gradient-to-r from-white to-transparent" />
              <div className="absolute right-0 top-0 bottom-0 w-[15%] min-w-[48px] max-w-[120px] bg-gradient-to-l from-white to-transparent" />
              <div className="absolute left-0 right-0 top-0 h-[20%] min-h-[40px] max-h-[100px] bg-gradient-to-b from-white to-transparent" />
              <div className="absolute left-0 right-0 bottom-0 h-[20%] min-h-[40px] max-h-[100px] bg-gradient-to-t from-white to-transparent" />
            </div>
            <div className="absolute left-4 top-1/2 -translate-y-1/2 md:left-[120px] max-w-[90%] z-[1]">
          <h1
            className="text-base md:text-[40px]"
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Roboto, Arial, sans-serif',
              fontWeight: 700,
              margin: 0,
              lineHeight: 1.35,
              textShadow: "0 1px 2px rgba(255,255,255,0.9), 0 0 20px rgba(255,255,255,0.6)",
            }}
          >
            <span style={{ color: KAIGO_COLORS.primary }}>プロのサポートで</span>
            <br />
            <span style={{ color: "#1f2937" }}>後悔しない転職を。</span>
          </h1>
            </div>
          </div>
        </div>
        </Container>
      </div>

      {/* メリット枠：PCで画面中央 */}
      <div style={{ paddingTop: "48px" }} className="w-full md:flex md:justify-center">
        <Container className="w-full md:max-w-[1440px]">
        <div
          className="md:!p-6"
          style={{
            padding: "20px 24px",
            background: "#FFF",
            border: `2px dashed ${KAIGO_COLORS.primaryLight}`,
          }}
        >
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {FV_BENEFIT_ITEMS.map((item, i) => {
              const parts = item.text.split(item.accent);
              return (
                <li key={i} className="text-[15px] md:text-[21px]" style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: i < FV_BENEFIT_ITEMS.length - 1 ? "12px" : 0, fontFamily: '"Helvetica Neue", Helvetica, Roboto, Arial, sans-serif', fontWeight: 600, color: "#374151", lineHeight: 1.5 }}>
                  <span style={{ color: "#1f2937" }}>★</span>
                  {parts[0]}
                  <span style={{ color: KAIGO_COLORS.primary }}>{item.accent}</span>
                  {parts[1]}
                </li>
              );
            })}
          </ul>
        </div>
        </Container>
      </div>
    </section>
  );
}
