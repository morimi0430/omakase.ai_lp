"use client";

import Link from "next/link";
import { useState } from "react";
import UseCases from "@/components/UseCases";
import SectionTitle from "@/components/SectionTitle";
import { KAIGO_COLORS } from "./constants";

export type JobListingItem = {
  jobId: string;
  category: string;
  image: string;
  title: string;
  salary: string;
  address: string;
  station: string;
  tags: string[];
  point: string;
  updatedAt: string;
};

const JOB_LISTINGS: JobListingItem[] = [
  { jobId: "555064", category: "特養・老健", image: "/images/industries/kaigo/offer_SpecialNursingCare.jpg", title: "特別養護老人ホーム あおぞら苑の介護職・介護スタッフ(正社員)求人(東京都江戸川区)", salary: "【月給】280,000円〜320,000円", address: "東京都江戸川区西葛西3-5-1", station: "西葛西、葛西", tags: ["特養・老健", "介護福祉士", "未経験OK", "日勤のみ", "社会保険完備", "研修充実"], point: "駅徒歩5分で通勤に便利。未経験者も研修制度が充実しており、資格取得支援あり。チームで働きやすい環境です。", updatedAt: "2026/02/05" },
  { jobId: "555065", category: "訪問介護", image: "/images/industries/kaigo/offer_VisitinN%20ursingCare.jpg", title: "訪問介護 ほのぼのケアの訪問介護員・ヘルパー(正社員)求人(神奈川県川崎市)", salary: "【月給】260,000円〜300,000円", address: "神奈川県川崎市川崎区駅前本町22-1", station: "川崎、京急川崎", tags: ["訪問介護", "ヘルパー", "資格取得支援", "週休2日", "車通勤可"], point: "地域に根ざした訪問介護。車通勤可で移動支援あり。資格がなくても研修でサポート。", updatedAt: "2026/02/04" },
  { jobId: "555066", category: "デイサービス・デイケア", image: "/images/industries/kaigo/offer_DayCare.jpg", title: "デイサービス ふれあいの里の介護職(正社員・パート)求人(埼玉県さいたま市)", salary: "【時給】1,200円〜1,400円（パート） / 月給28万円〜（正社員）", address: "埼玉県さいたま市大宮区桜木町1-1", station: "大宮、西大宮", tags: ["デイサービス", "パート歓迎", "ママさん歓迎", "日勤のみ", "短時間勤務可"], point: "子育て中の方も活躍中。短時間・日勤のみのシフト対応。未経験OKで一緒に働きませんか。", updatedAt: "2026/02/04" },
  { jobId: "555067", category: "グループホーム", image: "/images/industries/kaigo/offer_GroupHome.jpg", title: "グループホーム ひだまりの介護職・生活相談員(正社員)求人(千葉県船橋市)", salary: "【月給】290,000円〜330,000円", address: "千葉県船橋市本町2-1-1", station: "船橋、東船橋", tags: ["グループホーム", "生活相談員", "介護福祉士", "夜勤手当あり", "寮完備"], point: "少人数でアットホームな施設。夜勤手当・寮完備で安心。キャリアアップ制度あり。", updatedAt: "2026/02/03" },
];

function JobCard({ job, primaryColor }: { job: JobListingItem; primaryColor: string }) {
  const [imgError, setImgError] = useState(false);
  const jobUrl = `/job/${job.jobId}`;
  const listenUrl = `/#form`;
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
        <Link href={listenUrl} className="text-[11px] md:text-[19px] hover:opacity-90" style={{ display: "block", marginTop: "auto", padding: "10px 12px", textAlign: "center", fontWeight: 700, borderRadius: "6px", textDecoration: "none", color: "#fff", background: primaryColor, flexShrink: 0 }}>話を聞く</Link>
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
        {JOB_LISTINGS.map((job) => (
          <JobCard key={job.jobId} job={job} primaryColor={KAIGO_COLORS.primary} />
        ))}
      </div>
    </UseCases>
  );
}
