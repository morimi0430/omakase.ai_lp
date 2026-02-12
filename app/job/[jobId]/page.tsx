import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getKaigoJobById, KAIGO_JOB_LISTINGS } from "@/lib/kaigo-jobs";
import { KAIGO_COLORS } from "@/components/industries/kaigo/constants";
import { getIndustryBySlug } from "@/lib/industries";

type Props = { params: Promise<{ jobId: string }> };

export async function generateStaticParams() {
  return KAIGO_JOB_LISTINGS.map((j) => ({ jobId: j.jobId }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { jobId } = await params;
  const job = getKaigoJobById(jobId);
  if (!job) return { title: "求人が見つかりません | Omakase.ai" };
  return {
    title: `${job.title}（架空の求人） | Omakase.ai`,
    description: job.point,
  };
}

export default async function JobPage({ params }: Props) {
  const { jobId } = await params;
  const job = getKaigoJobById(jobId);
  if (!job) notFound();

  const industry = getIndustryBySlug("kaigo");

  return (
    <main className="min-h-full w-full overflow-x-hidden" style={{ fontFamily: '"Noto Sans JP", sans-serif' }}>
      <Header
        imageOverrides={industry?.headerImages}
        rightTitle={industry?.headerTitle}
        buttonTheme="green"
      />

      <div className="lp-container w-full flex flex-col items-center" style={{ paddingTop: "32px", paddingBottom: "80px", boxSizing: "border-box" }}>
        <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center">
          {/* 架空の求人である旨 */}
          <div
            role="status"
            aria-label="架空の求人票である旨の告知"
            className="w-full max-w-[720px] rounded-lg border-2 border-amber-400 bg-amber-50 text-center box-border"
            style={{ padding: "16px 24px", marginBottom: "24px" }}
          >
<p className="text-sm font-bold text-amber-800 m-0">
            この求人票は架空のものです。当サイトはOmakase.aiの介護エージェント業界向け導入事例であり、求人紹介は行っておりません。
          </p>
          </div>

          <div className="w-full max-w-[720px] flex flex-col items-center" style={{ marginBottom: "24px" }}>
            <Link
              href="/industries/kaigo"
              className="text-sm font-medium self-start"
              style={{ color: KAIGO_COLORS.primary }}
            >
              ← 介護の求人一覧へ戻る
            </Link>
          </div>

          <article
            className="w-full max-w-[720px] rounded-xl border border-[#E5E5E5] bg-white overflow-hidden box-border"
            style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
          >
            <div className="w-full aspect-[16/9] max-h-[320px] bg-[#e5e7eb] relative">
              <Image
                src={job.image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 720px"
              />
            </div>
            <div className="box-border w-full" style={{ padding: "24px 24px 32px" }}>
              <span
                className="inline-block text-xs md:text-base font-bold rounded px-2 py-1 mb-3"
                style={{ color: KAIGO_COLORS.primary, background: "rgba(11,125,108,0.12)" }}
              >
                {job.category}
              </span>
              <h1 className="text-lg md:text-2xl font-bold m-0 mb-5 text-center" style={{ color: "#1f2937", lineHeight: 1.4 }}>
                {job.title}
              </h1>
              <dl className="grid gap-4 m-0 w-full" style={{ paddingLeft: 0, paddingRight: 0 }}>
                <div className="w-full box-border" style={{ padding: "12px 0", borderBottom: "1px solid #E5E5E5" }}>
                  <dt className="text-xs md:text-sm font-bold m-0 mb-1 text-center" style={{ color: "#6b7280" }}>給与</dt>
                  <dd className="text-sm md:text-xl font-semibold m-0 text-center" style={{ color: KAIGO_COLORS.primary }}>{job.salary}</dd>
                </div>
                <div className="w-full box-border" style={{ padding: "12px 0", borderBottom: "1px solid #E5E5E5" }}>
                  <dt className="text-xs md:text-sm font-bold m-0 mb-1 text-center" style={{ color: "#6b7280" }}>アクセス</dt>
                  <dd className="text-sm md:text-lg m-0 text-center">{job.station}</dd>
                </div>
                <div className="w-full box-border" style={{ padding: "12px 0", borderBottom: "1px solid #E5E5E5" }}>
                  <dt className="text-xs md:text-sm font-bold m-0 mb-1 text-center" style={{ color: "#6b7280" }}>住所</dt>
                  <dd className="text-sm md:text-lg m-0 text-center">{job.address}</dd>
                </div>
                <div className="w-full box-border" style={{ padding: "12px 0", borderBottom: "1px solid #E5E5E5" }}>
                  <dt className="text-xs md:text-sm font-bold m-0 mb-1 text-center" style={{ color: "#6b7280" }}>ポイント</dt>
                  <dd className="text-sm md:text-lg m-0 text-center">{job.point}</dd>
                </div>
              </dl>
              <ul className="flex flex-wrap justify-center gap-2 list-none p-0 m-0 w-full box-border" style={{ marginTop: "24px", paddingTop: "20px" }}>
                {job.tags.map((tag, i) => (
                  <li
                    key={i}
                    className="text-xs md:text-base rounded px-2 py-1"
                    style={{ color: KAIGO_COLORS.primary, background: "rgba(11,125,108,0.08)" }}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#6b7280] m-0 text-center w-full" style={{ marginTop: "20px" }}>更新日: {job.updatedAt}</p>

              <div className="flex flex-col sm:flex-row justify-center gap-3 w-full box-border" style={{ marginTop: "32px", paddingTop: "24px" }}>
                <Link
                  href="/industries/kaigo"
                  className="inline-flex justify-center items-center rounded-lg font-bold border no-underline"
                  style={{ borderColor: KAIGO_COLORS.primary, color: KAIGO_COLORS.primary, padding: "16px 24px" }}
                >
                  他の求人を見る
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>

      <Footer />
    </main>
  );
}
