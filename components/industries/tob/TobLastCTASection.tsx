"use client";

import Link from "next/link";
import { TOB_COLORS, TOB_INQUIRY_URL } from "./constants";

/** 矢印アイコン：ヘッダーと同じ画像を使用 */
function ArrowBadge({ variant }: { variant: "primary" | "outline" }) {
  return (
    <img
      src={variant === "primary" ? "/images/pc/arrow_white.png" : "/images/pc/arrow_purple.png"}
      alt=""
      style={{ width: 20, height: 20, flexShrink: 0 }}
    />
  );
}

export function TobLastCTASection() {
  return (
    // Figma: bg rgba(96,23,255), padding 66 top/bottom, paddingLeft 120, gap 80, HORIZONTAL, SPACE_BETWEEN
    <section
      className="w-full overflow-hidden"
      style={{ background: TOB_COLORS.primary }}
    >
      {/* PC版 */}
      <div
        className="hidden md:flex"
        style={{
          paddingTop: 66,
          paddingBottom: 0,
          gap: 80,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* 左側テキスト + ボタン（Frame 65, 500x402, gap 40, VERTICAL, CENTER） */}
        <div style={{ marginLeft: 120, width: 500, flexShrink: 0, display: "flex", flexDirection: "column", gap: 40, justifyContent: "center" }}>
          {/* キャッチコピー 40pt fw700 white LEFT */}
          <h2
            style={{
              fontFamily: '"Noto Sans JP"',
              fontSize: 40,
              fontWeight: 700,
              color: "#fff",
              lineHeight: "125%",
              margin: 0,
              textAlign: "left",
            }}
          >
            リストを『作る』時間は、
            <br />
            もう終わりにしましょう。
          </h2>

          {/* ボタン群 */}
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            {/* デモボタン: outline white, white text */}
            <Link
              href={TOB_INQUIRY_URL}
              style={{
                display: "inline-flex",
                height: 48,
                padding: "10px 24px",
                alignItems: "center",
                gap: 10,
                borderRadius: 300,
                border: "1px solid #fff",
                background: "transparent",
                color: "#fff",
                fontFamily: '"Noto Sans JP"',
                fontSize: 14,
                fontWeight: 700,
                lineHeight: "100%",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              お問い合わせ
              <ArrowBadge variant="outline" />
            </Link>
          </div>
        </div>

        {/* 右側: CTA画像（右端まで余白なし・下揃え） */}
        <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "flex-end", overflow: "hidden" }}>
          <img
            src="/images/industries/tob/cta.png"
            alt="Omakase AI"
            style={{ width: "100%", height: "auto", display: "block", objectFit: "contain", objectPosition: "right bottom" }}
          />
        </div>
      </div>

      {/* モバイル版 */}
      <div className="md:hidden">
      <div
        style={{
          padding: "48px 16px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 32,
        }}
      >
        <h2
          style={{
            fontFamily: '"Noto Sans JP"',
            fontSize: 26,
            fontWeight: 700,
            color: "#fff",
            lineHeight: "140%",
            margin: 0,
            textAlign: "center",
          }}
        >
          リストを『作る』時間は、
          <br />
          もう終わりにしましょう。
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%" }}>
          <Link
            href={TOB_INQUIRY_URL}
            style={{
              display: "flex",
              height: 48,
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              borderRadius: 300,
              border: "1px solid #fff",
              background: "transparent",
              color: "#fff",
              fontFamily: '"Noto Sans JP"',
              fontSize: 14,
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            お問い合わせ
            <ArrowBadge variant="outline" />
          </Link>
        </div>

        {/* CTA画像：下端ぴったり */}
        <div style={{ marginRight: -16, alignSelf: "stretch" }}>
          <img
            src="/images/industries/tob/cta.png"
            alt="Omakase AI"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </div>
      </div>
    </section>
  );
}
