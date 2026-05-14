"use client";

import Link from "next/link";
import CTAButton from "./CTAButton";

/** インタビューページ用：モバイルで横並びのCTA（元のCTA buttonsOnlyと同じスタイル、onClickでgtag送信するためClient Component） */
export default function InterviewCTAButtons() {
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
          iconSrc="/images/pc/arrow_white.png"
          iconFixed={true}
          style={{ width: "100%" }}
        />
      </Link>
    </div>
  );
}
