"use client";

import SectionTitle from "./SectionTitle";
import InterviewCard from "./InterviewCard";
import {
  getInterviewList,
  getInterviewBySlug,
  type InterviewListItem,
} from "@/lib/interviews";

interface InterviewSectionProps {
  title?: string;
  items?: InterviewListItem[];
}

export default function InterviewSection({
  title = "導入インタビュー",
  items: itemsProp,
}: InterviewSectionProps) {
  const items = itemsProp ?? getInterviewList();

  return (
    <div id="interview-section">
      {/* モバイル */}
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
          <SectionTitle title={title} isMobile={false} />
        </div>
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
        >
          {items.map((item) => (
            <InterviewCard
              key={item.slug}
              slug={getInterviewBySlug(item.slug) ? item.slug : undefined}
              image={item.image}
              title={item.title}
              companyName={item.companyName}
            />
          ))}
        </div>
      </section>

      {/* PC：max-width 1440px, padding 120px、4列グリッド */}
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
              <SectionTitle title={title} isMobile={false} />
            </div>
            <div
              className="grid gap-6 md:gap-8"
              style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
            >
              {items.map((item) => (
                <InterviewCard
                  key={item.slug}
                  slug={getInterviewBySlug(item.slug) ? item.slug : undefined}
                  image={item.image}
                  title={item.title}
                  companyName={item.companyName}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
