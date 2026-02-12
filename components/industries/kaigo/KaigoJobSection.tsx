"use client";

import Link from "next/link";
import { useState } from "react";
import UseCases from "@/components/UseCases";
import SectionTitle from "@/components/SectionTitle";
import { KAIGO_JOB_LISTINGS } from "@/lib/kaigo-jobs";
import type { JobListingItem } from "@/lib/kaigo-jobs";
import { KAIGO_COLORS } from "./constants";

export type { JobListingItem } from "@/lib/kaigo-jobs";

function JobCard({ job, primaryColor }: { job: JobListingItem; primaryColor: string }) {
  const [imgError, setImgError] = useState(false);
  const jobUrl = `/job/${job.jobId}`;
  return (
    <article
      data-jobid={job.jobId}
      className="job-list-card w-full h-full rounded-lg bg-white border border-[#E5E5E5] flex flex-col overflow-hidden min-h-0"
      style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.06)" }}
    >
      {/* 画像：カード上部・PCでは縦幅を広く */}
      <div className="h-[140px] md:h-[220px] w-full flex-shrink-0 overflow-hidden" style={{ background: "#e5e7eb" }}>
        {!imgError ? (
          <img src={job.image} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={() => setImgError(true)} />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[32px] md:text-[48px]" style={{ background: "#d4e8d4" }}>🏠</div>
        )}
      </div>
      <div className="flex flex-col flex-1 min-h-0 gap-1.5 md:!p-5 md:!gap-2" style={{ padding: "12px 16px" }}>
        <span className="text-[9px] md:text-[18px]" style={{ display: "inline-block", alignSelf: "flex-start", borderRadius: "2px", padding: "2px 8px", fontWeight: 700, color: primaryColor, background: "rgba(11,125,108,0.12)" }}>{job.category}</span>
        <h3 className="text-[11px] md:text-[20px]" style={{ margin: 0, fontWeight: 700, lineHeight: 1.35, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", minHeight: "2.7em" }}>
          <Link href={jobUrl} style={{ color: "#1f2937", textDecoration: "none" }} className="hover:underline">{job.title}</Link>
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
          <p className="text-[10px] md:text-[18px]" style={{ margin: 0, fontWeight: 600, color: primaryColor }}>{job.salary}</p>
          <p className="text-[9px] md:text-[17px]" style={{ margin: 0, color: "#6b7280" }}>{job.station}</p>
        </div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexWrap: "wrap", gap: "3px" }}>
          {job.tags.slice(0, 3).map((tag, i) => (
            <li key={i} className="text-[9px] md:text-[17px]" style={{ borderRadius: "2px", padding: "2px 6px", color: primaryColor, background: "rgba(11,125,108,0.08)" }}>{tag}</li>
          ))}
        </ul>
        <Link
          href={jobUrl}
          className="text-[11px] md:text-[19px] hover:opacity-90"
          style={{ display: "block", marginTop: "auto", padding: "10px 12px", textAlign: "center", fontWeight: 700, borderRadius: "6px", textDecoration: "none", color: "#fff", background: primaryColor, flexShrink: 0 }}
        >
          求人票を見る
        </Link>
      </div>
    </article>
  );
}

export function KaigoJobSection() {
  return (
    <UseCases
      sectionClassName="md:!pt-[60px] md:!pb-20"
      sectionStyle={{
        background: "#ecfdf5",
        paddingTop: "60px",
        paddingBottom: "60px",
        paddingLeft: "16px",
        paddingRight: "16px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
          <SectionTitle title="求人一覧" isMobile={false} accentColor={KAIGO_COLORS.primary} />
        </div>
      </div>
      <div
        className="grid grid-cols-2 gap-3 md:gap-10 items-stretch"
        style={{ width: "100%", alignSelf: "stretch" }}
      >
        {KAIGO_JOB_LISTINGS.map((job) => (
          <JobCard key={job.jobId} job={job} primaryColor={KAIGO_COLORS.primary} />
        ))}
      </div>
    </UseCases>
  );
}
