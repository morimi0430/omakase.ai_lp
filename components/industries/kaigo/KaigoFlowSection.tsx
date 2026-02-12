"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { KAIGO_COLORS } from "./constants";
import { KaigoSectionTitle } from "./KaigoSectionTitle";

const FLOW_STEPS = [
  {
    step: "1",
    title: "登録",
    body: "フォームまたは電話で登録。連絡方法はお選びいただけます。",
    image: "/images/industries/kaigo/flow_Registration.jpg",
    imageAlt: "登録",
  },
  {
    step: "2",
    title: "ヒアリング・紹介",
    body: "希望エリア・働き方・給与をヒアリングし、条件に合う求人を紹介する流れ（Omakase.ai導入エージェントの事例）。当サイトでは求人紹介は行っておりません。",
    image: "/images/industries/kaigo/flow_hearing.jpg",
    imageAlt: "希望に合わせた紹介",
  },
  {
    step: "3",
    title: "面接・内定",
    body: "面接同行・履歴書添削をサポート。内定後の条件交渉も対応。",
    image: "/images/industries/kaigo/flow_interview.jpg",
    imageAlt: "面接・履歴書添削",
  },
] as const;

function FlowStepImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);
  return (
    <div className="w-14 h-14 md:w-[72px] md:h-[72px] flex-shrink-0 overflow-hidden flex items-center justify-center">
      {!error ? (
        <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={() => setError(true)} />
      ) : (
        <span className="text-2xl md:text-[32px]">📋</span>
      )}
    </div>
  );
}

export function KaigoFlowSection() {
  return (
    <section
      className="w-full md:flex md:justify-center md:pt-[60px] md:pb-20"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
    >
      <Container className="w-full flex flex-col gap-10 md:gap-20 md:max-w-[1440px]">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <KaigoSectionTitle subtitle="登録から転職まで" title="問い合わせの流れ" />
        </div>
        <ul className="list-none p-0 m-0 flex flex-col w-full max-w-full gap-5 md:gap-6">
          {FLOW_STEPS.map((item, i) => (
            <li
              key={i}
              className="flex items-stretch rounded-xl overflow-hidden md:rounded-2xl"
              style={{
                border: "1px solid #e5e0d8",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              }}
            >
              <div
                className="flex-shrink-0 flex flex-col items-center justify-center md:w-24 md:py-5 md:px-3"
                style={{
                  width: "72px",
                  padding: "12px 8px",
                  background: KAIGO_COLORS.primary,
                  fontFamily: '"Helvetica Neue", Helvetica, Roboto, Arial, sans-serif',
                }}
              >
                <span className="text-[10px] md:text-[16px]" style={{ fontWeight: 700, color: "#fff", letterSpacing: "0.05em" }}>STEP</span>
                <span className="text-[24px] md:text-[32px]" style={{ fontWeight: 700, color: "#fff", lineHeight: 1 }}>{item.step}</span>
              </div>
              <div className="flex-1 min-w-0 flex flex-row items-center gap-3 md:gap-6 md:!px-6 md:!py-5" style={{ padding: "14px 16px" }}>
                <div className="flex-1 min-w-0 flex flex-col gap-2 md:!gap-3">
                  <div
                    className="text-[15px] md:text-[22px]"
                    style={{
                      fontFamily: '"Helvetica Neue", Helvetica, Roboto, Arial, sans-serif',
                      fontWeight: 700,
                      color: "#1f2937",
                    }}
                  >
                    {item.title}
                  </div>
                  <p
                    className="text-[13px] md:text-lg"
                    style={{
                      margin: 0,
                      fontFamily: '"Helvetica Neue", Helvetica, Roboto, Arial, sans-serif',
                      lineHeight: 1.5,
                      color: "#374151",
                    }}
                  >
                    {item.body}
                  </p>
                </div>
                <div className="flex-shrink-0 flex items-center justify-center">
                  <FlowStepImage src={item.image} alt={item.imageAlt} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
