"use client";

import { KAIGO_COLORS } from "./constants";

/** Container と同じ左右余白: SP 16px / PC 120px */
const CONTAINER_PADDING = "px-4 md:px-[120px]";

/** 吹き出し型セクションタイトル（画面幅・緑枠・上角丸・下中央に三角ポインター）。Container の外で使い、内部で同じ余白を考慮。 */
export function KaigoSectionTitle({
  subtitle,
  title,
  className = "",
  backgroundColor = KAIGO_COLORS.primary,
}: {
  /** 上段テキスト（白・小）省略時はメインタイトルのみ表示 */
  subtitle?: string;
  /** メインタイトル（黄・大） */
  title: string;
  className?: string;
  /** タイトル枠・吹き出しの背景色（未指定時は primary） */
  backgroundColor?: string;
}) {
  return (
    <div
      className={`w-full ${className}`}
    >
      <div
        className={`${CONTAINER_PADDING} md:!pt-5 md:!pb-6 md:!px-[120px]`}
        style={{
          width: "100%",
          background: backgroundColor,
          borderRadius: "12px 12px 0 0",
          padding: "12px 16px",
          fontFamily: '"Helvetica Neue", Helvetica, Roboto, Arial, sans-serif',
          textAlign: "center",
        }}
      >
        {subtitle ? (
          <div
            className="text-[13px] md:text-[19px]"
            style={{
              fontWeight: 600,
              color: "#fff",
              marginBottom: "12px",
            }}
          >
            {subtitle}
          </div>
        ) : null}
        <div
          className={subtitle ? "text-[18px] md:text-[30px]" : "text-[20px] md:text-[32px]"}
          style={{
            fontWeight: 700,
            color: "#fef08a",
          }}
        >
          {title}
        </div>
      </div>
      {/* 下向き吹き出しポインター（中央） */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: "10px solid transparent",
            borderRight: "10px solid transparent",
            borderTop: `10px solid ${backgroundColor}`,
            marginTop: "-1px",
          }}
        />
      </div>
    </div>
  );
}
