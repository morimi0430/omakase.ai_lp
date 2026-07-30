"use client";

import Link from "next/link";
import CTAButton from "./CTAButton";

type InterviewCTAButtonsProps = {
  /** アクセント色（電話LPなど）。未指定時は紫 */
  accentColor?: string;
};

/** インタビューページ用：モバイルで横並びのCTA（元のCTA buttonsOnlyと同じスタイル、onClickでgtag送信するためClient Component） */
export default function InterviewCTAButtons({ accentColor }: InterviewCTAButtonsProps) {
  const isTeal = Boolean(accentColor);
  const from = accentColor ?? "#6017FF";
  const to = accentColor ? "#0D9488" : "#8249FF";
  const border = accentColor ? "#5EEAD4" : "#EF96FF";

  return (
    <div className="w-full flex flex-col gap-6 md:hidden" style={{ maxWidth: "343px", margin: "0 auto" }}>
      <Link
        href="/document-request"
        onClick={() => {
          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "button_click_inquiry_cta", {
              button_location: "cta_buttons_only_mobile",
              button_text: "お問い合わせ",
            });
          }
        }}
      >
        <CTAButton
          text="お問い合わせ"
          backgroundColor="#FFF"
          textGradientFrom={from}
          textGradientTo={to}
          borderColor={border}
          iconTriangle={isTeal}
          iconCircleColor={isTeal ? accentColor : undefined}
          iconStyle={isTeal ? { color: "#FFF" } : undefined}
          iconSrc={isTeal ? undefined : "/images/pc/arrow_white.png"}
          iconFixed={true}
          style={{ width: "100%" }}
        />
      </Link>
    </div>
  );
}
