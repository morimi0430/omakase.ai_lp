"use client";

import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import type { PhoneInterviewListItem } from "@/lib/phone-interviews";
import { phoneDesign } from "../tokens";

function CardImage({ image }: { image?: string }) {
  return (
    <div
      className="w-full flex-shrink-0 overflow-hidden rounded-lg"
      style={{ aspectRatio: "16/10", background: "#e5e7eb" }}
    >
      {image ? (
        <img
          src={image}
          alt=""
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <div
          className="w-full h-full flex items-center justify-center"
          aria-hidden
        >
          <span
            style={{
              fontFamily: '"Noto Sans JP"',
              fontSize: "12px",
              fontWeight: 500,
              color: "#9ca3af",
            }}
          >
            Image
          </span>
        </div>
      )}
    </div>
  );
}

function PhoneInterviewCard({ item }: { item: PhoneInterviewListItem }) {
  return (
    <Link
      href={`/phone-subsidy/interview/${item.slug}`}
      className="w-full flex flex-col no-underline text-inherit hover:opacity-90 transition-opacity"
    >
      <CardImage image={item.image} />
      <div className="flex flex-col gap-2" style={{ paddingTop: "16px" }}>
        <h3
          className="md:text-[22px]"
          style={{
            margin: 0,
            fontFamily: '"Noto Sans JP"',
            fontSize: "18px",
            fontWeight: 700,
            lineHeight: 1.5,
            color: "#000",
          }}
        >
          {item.title}
        </h3>
        <p
          style={{
            margin: 0,
            fontFamily: '"Noto Sans JP"',
            fontSize: "12px",
            fontWeight: 500,
            color: "#6b7280",
          }}
        >
          {item.companyName}
        </p>
      </div>
    </Link>
  );
}

/** 電話LP用：導入インタビュー一覧 */
export default function PhoneInterviewSection({
  items,
}: {
  items: PhoneInterviewListItem[];
}) {
  return (
    <div id="interview-section">
      <section
        className="w-full md:hidden bg-white"
        style={{
          paddingTop: "60px",
          paddingBottom: "60px",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        <div className="flex flex-col items-center" style={{ marginBottom: "40px" }}>
          <SectionTitle
            title="導入インタビュー"
            isMobile={false}
            accentColor={phoneDesign.primary}
          />
        </div>
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
        >
          {items.map((item) => (
            <PhoneInterviewCard key={item.slug} item={item} />
          ))}
        </div>
      </section>

      <section
        className="hidden md:block w-full bg-white"
        style={{ paddingTop: "60px", paddingBottom: "80px" }}
      >
        <div className="flex justify-center w-full">
          <div
            className="w-full"
            style={{
              maxWidth: "1440px",
              paddingLeft: "120px",
              paddingRight: "120px",
            }}
          >
            <div
              className="flex flex-col items-center"
              style={{ marginBottom: "60px" }}
            >
              <SectionTitle
                title="導入インタビュー"
                isMobile={false}
                accentColor={phoneDesign.primary}
              />
            </div>
            <div
              className="grid gap-6 md:gap-8"
              style={{
                gridTemplateColumns:
                  items.length === 1 ? "minmax(0, 360px)" : "repeat(4, 1fr)",
                justifyContent: items.length === 1 ? "center" : undefined,
              }}
            >
              {items.map((item) => (
                <PhoneInterviewCard key={item.slug} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
