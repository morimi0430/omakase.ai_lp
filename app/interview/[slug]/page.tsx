import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import InterviewCTAButtons from "@/components/InterviewCTAButtons";
import {
  getInterviewBySlug,
  getInterviewList,
  getInterviewSlugs,
} from "@/lib/interviews";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getInterviewSlugs().map((slug) => ({ slug }));
}

// 本番・OG/Twitter用の絶対URL（末尾スラッシュなしに正規化）
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://omakase-voice-ai.com").replace(/\/$/, "");

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const interview = getInterviewBySlug(slug);
  if (!interview)
    return { title: "インタビューが見つかりません | Omakase.ai" };
  const title = `${interview.companyName} 導入インタビュー | Omakase.ai`;
  const description = interview.title.replace(/\n/g, " ");
  // OGP・Twitter Card 用：絶対URL必須（SNSクローラーは相対URLを解決しないことがある）
  const ogImagePath = interview.image.startsWith("/") ? interview.image : `/${interview.image}`;
  const ogImageUrl = `${siteUrl}${ogImagePath}`;
  const pageUrl = `${siteUrl}/interview/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
      url: pageUrl,
      title,
      description,
      type: "article",
      siteName: "Omakase.ai",
      images: [{ url: ogImageUrl, alt: interview.companyName }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: ogImageUrl }],
    },
  };
}

export default async function InterviewPage({ params }: Props) {
  const { slug } = await params;
  const interview = getInterviewBySlug(slug);
  if (!interview) notFound();

  const allInterviews = getInterviewList();
  const otherInterviews = allInterviews.filter((item) => item.slug !== slug);

  return (
    <main
      className="w-full"
      style={{ fontFamily: '"Noto Sans JP", sans-serif' }}
    >
      <Header />

      <div
        className="w-full flex justify-center"
        style={{ paddingTop: "32px", paddingBottom: "80px", boxSizing: "border-box" }}
      >
        {/* 他セクションと同じ：max-w 1440px + 左右余白（lp-container）で開始地点を左に揃える */}
        <div className="w-full md:max-w-[1440px] md:mx-auto lp-container pr-0 flex flex-col">
        {/* パンくず */}
        <nav aria-label="パンくず" className="w-full" style={{ marginBottom: "24px" }}>
          <ol
            className="flex flex-wrap items-center gap-1 md:gap-2 list-none m-0 p-0 justify-start"
            style={{ fontFamily: '"Noto Sans JP"', fontSize: "14px" }}
          >
            <li>
              <Link href="/" className="no-underline" style={{ color: "#6b7280" }}>
                Omakase.ai
              </Link>
            </li>
            <li style={{ color: "#9ca3af" }} aria-hidden>/</li>
            <li>
              <Link href="/#interview-section" className="no-underline" style={{ color: "#6b7280" }}>
                導入インタビュー
              </Link>
            </li>
            <li style={{ color: "#9ca3af" }} aria-hidden>/</li>
            <li style={{ color: "#000", fontWeight: 600 }}>{interview.companyNameShort ?? interview.companyName}</li>
          </ol>
        </nav>

        {/* 2カラム：メイン + サイドバー（右カラムは固定 sticky） */}
        <div className="w-full flex flex-col md:flex-row md:items-start md:gap-10 lg:gap-12">
          {/* メインカラム（記事） */}
          <div className="w-full md:min-w-0 md:flex-1">
          <article className="w-full flex flex-col">
            {/* タイトル（装飾：左アクセント線） */}
            <h1
              className="w-full m-0"
              style={{
                fontFamily: '"Noto Sans JP"',
                fontSize: "clamp(22px, 5vw, 32px)",
                fontWeight: 700,
                lineHeight: 1.5,
                color: "#000",
                marginBottom: "20px",
                paddingLeft: "16px",
                borderLeft: "4px solid #6017FF",
              }}
            >
              {(() => {
              const lines = interview.title.split("\n");
              return lines.map((line, i) => (
                <span key={i}>{line}{i < lines.length - 1 && <br />}</span>
              ));
            })()}
            </h1>

            {/* 1枚目・2枚目の画像（最初のセクション画像をタイトル下に配置） */}
            {(() => {
              const firstImageSectionIndex = interview.sections.findIndex((s) => s.image);
              const firstSection = firstImageSectionIndex >= 0 ? interview.sections[firstImageSectionIndex] : undefined;
              const firstImage = firstSection?.image;
              const secondImage = firstSection?.imageAfterHeading;
              return firstImage || secondImage ? (
                <>
                  {firstImage && (
                    <figure className="w-full m-0" style={{ marginBottom: "20px" }}>
                      <img
                        src={firstImage}
                        alt=""
                        className="w-full rounded-lg block"
                        style={{ height: "auto", maxWidth: "100%", verticalAlign: "middle" }}
                      />
                    </figure>
                  )}
                  {secondImage && (
                    <figure className="w-full m-0" style={{ marginBottom: "20px" }}>
                      <img
                        src={secondImage}
                        alt=""
                        className="w-full rounded-lg block"
                        style={{ height: "auto", maxWidth: "100%", verticalAlign: "middle" }}
                      />
                    </figure>
                  )}
                </>
              ) : null;
            })()}

            {/* リード文（企業名・肩書き・事業内容/業種） */}
            <div
              className="w-full flex flex-col"
              style={{
                marginBottom: "20px",
                paddingBottom: "20px",
                ...(!["maguro-no-takumi", "5strands-japan"].includes(interview.slug) ? { borderBottom: "1px solid #E5E5E5" } : {}),
                gap: "20px",
              }}
            >
              {interview.businessDescription && (
                <p
                  className="m-0"
                  style={{
                    fontFamily: '"Noto Sans JP"',
                    fontSize: "16px",
                    lineHeight: 2,
                    color: "#374151",
                  }}
                >
                  {interview.slug === "5strands-japan" ? (
                    <>
                      企業名： {interview.companyName}
                      {interview.companySub ? `（${interview.companySub}）` : ""}
                      <br />
                      事業内容： {interview.businessDescription}
                    </>
                  ) : interview.slug === "maguro-no-takumi" ? (
                    <>
                      企業名： {interview.companyNameShort || interview.companyName}
                      {interview.companySub ? `（${interview.companySub}）` : ""}
                      <br />
                      業種： {interview.businessDescription}
                    </>
                  ) : (
                    <>
                      {interview.companyName}
                      {interview.companySub ? `（${interview.companySub}）` : ""}は、{interview.businessDescription}。
                    </>
                  )}
                </p>
              )}
            </div>

            {/* 鮪匠・5Strands：リード文下の横線の代わりにCTAを配置（モバイルは横並び） */}
            {["maguro-no-takumi", "5strands-japan"].includes(interview.slug) && (
              <div className="w-full" style={{ marginBottom: "20px" }}>
                <InterviewCTAButtons />
                {/* PC：既存のCTAコンポーネント */}
                <div className="hidden md:block">
                  <CTA buttonsOnly />
                </div>
              </div>
            )}

            {/* セクション群：画像→質問(h3)→本文 */}
            {(() => {
              const firstImageSectionIndex = interview.sections.findIndex((s) => s.image);
              const firstImageAfterHeadingSectionIndex = interview.sections.findIndex((s) => s.imageAfterHeading);
              return (
            <div className="w-full flex flex-col" style={{ gap: "20px" }}>
              {interview.sections.map((section, idx) => {
                const isFirstImageSection = firstImageSectionIndex >= 0 && idx === firstImageSectionIndex;
                const isFirstImageAfterHeadingSection = firstImageAfterHeadingSectionIndex >= 0 && idx === firstImageAfterHeadingSectionIndex;
                const questionText = section.question
                  ? (section.question.startsWith("ー") ? section.question : `ー ${section.question}`)
                  : (() => {
                      const themeText = section.heading.replace(/^\d+\.\s*/, "");
                      const naturalQuestions: Record<string, string> = {
                        "検討〜導入まで": "ー では、検討から導入に至るまでの経緯を教えていただけますか？",
                        "実際に使ってみて": "ー では、実際に使ってみた感想を教えていただけますか？",
                        "導入してみての効果": "ー では、導入後の効果について教えていただけますか？",
                        "今後の展望や期待": "ー では、今後の展望について教えていただけますか？",
                      };
                      return naturalQuestions[themeText] ?? `ー では、${themeText}について教えていただけますか？`;
                    })();
                return (
                  <span key={idx}>
                    <section className="w-full">
                      {/* セクション画像（1枚目はタイトル下に表示済みのためスキップ） */}
                      {section.image && !isFirstImageSection && (
                        <figure className="w-full m-0" style={{ marginBottom: "20px" }}>
                          <img
                            src={section.image}
                            alt=""
                            className="w-full rounded-lg block"
                            style={{ height: "auto", maxWidth: "100%", verticalAlign: "middle" }}
                          />
                        </figure>
                      )}
                      <h3
                        className="m-0 font-bold"
                        style={{
                          fontFamily: '"Noto Sans JP"',
                          fontSize: "17px",
                          lineHeight: 1.6,
                          color: "#333",
                          fontWeight: 700,
                          marginTop: "12px",
                          marginBottom: "20px",
                          borderTop: "4px solid #6017FF",
                          backgroundColor: "#F5F2FF",
                          padding: "16px 20px",
                          borderRadius: "4px",
                        }}
                      >
                        {questionText}
                      </h3>
                      {section.imageAfterHeading && (
                        <figure className="w-full m-0" style={{ marginBottom: "20px" }}>
                          <img
                            src={section.imageAfterHeading}
                            alt=""
                            className="w-full rounded-lg block"
                            style={{ height: "auto", maxWidth: "100%", verticalAlign: "middle" }}
                          />
                        </figure>
                      )}
                      <div className="w-full flex flex-col" style={{ gap: "20px" }}>
                        {section.paragraphs.map((para, pidx) => {
                          const textWithoutBullets = para.replace(/^[•・]\s*/gm, "").replace(/\n[•・]\s*/g, "\n").trim();
                          return (
                          <span key={pidx}>
                            <p
                              className="m-0 whitespace-pre-line"
                              style={{
                                fontFamily: '"Noto Sans JP"',
                                fontSize: "16px",
                                lineHeight: 2,
                                color: "#374151",
                              }}
                            >
                              {textWithoutBullets}
                            </p>
                            {section.imageAfterParagraph?.map(
                              (img) =>
                                img.afterIndex === pidx && (
                                  <figure
                                    key={`${pidx}-${img.src}`}
                                    className="w-full m-0"
                                    style={{ marginTop: "20px", marginBottom: "20px" }}
                                  >
                                    <img
                                      src={img.src}
                                      alt=""
                                      className="w-full rounded-lg block"
                                      style={{ height: "auto", maxWidth: "100%", verticalAlign: "middle" }}
                                    />
                                  </figure>
                                )
                            )}
                          </span>
                          );
                        })}
                      </div>
                    </section>
                    {/* CTA② 2セクション目の直後（ボタンのみ・上下余白、モバイルは横並び） */}
                    {idx === 1 && (
                      <div className="w-full" style={{ marginTop: "20px", marginBottom: "20px" }}>
                        <InterviewCTAButtons />
                        {/* PC：既存のCTAコンポーネント */}
                        <div className="hidden md:block">
                          <CTA buttonsOnly />
                        </div>
                      </div>
                    )}
                  </span>
                );
              })}
            </div>
              );
            })()}

            {/* CTA③ 記事末尾（ボタンのみ・上下余白、モバイルは横並び） */}
            <div className="w-full" style={{ marginTop: "20px", marginBottom: "20px" }}>
              <InterviewCTAButtons />
              {/* PC：既存のCTAコンポーネント */}
              <div className="hidden md:block">
                <CTA buttonsOnly />
              </div>
            </div>

          </article>
          </div>

          {/* サイドバー（右カラム：sticky で記事エリア内のみ固定、フッターには被らない） */}
          <aside
            className="w-full md:w-[320px] lg:w-[360px] md:flex-shrink-0 md:self-start md:sticky flex flex-col gap-8"
            style={{ marginTop: 0, top: "104px" }}
          >
            {/* CTAカード（PCのみ表示、モバイルでは非表示） */}
            <div
              className="hidden md:flex w-full rounded-xl border border-[#E5E5E5] bg-white flex-col box-border"
              style={{
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                padding: "28px 24px",
              }}
            >
              {/* ヘッダーのロゴ画像 */}
              <div className="flex items-center gap-2" style={{ marginBottom: "12px" }}>
                <img
                  src="/images/pc/favicon.png"
                  alt="Omakase Icon"
                  width={32}
                  height={32}
                  style={{ flexShrink: 0 }}
                />
                <img
                  src="/images/pc/header_logo.png"
                  alt="Omakase Logo"
                  width={160}
                  height={22}
                  style={{ flexShrink: 0 }}
                />
              </div>
              <p className="m-0 text-[15px]" style={{ fontFamily: '"Noto Sans JP"', color: "#374151", lineHeight: 1.6, marginTop: "4px" }}>
                音声・チャットで接客を自動化。初期費用0円、最短5分で始められます。
              </p>
              <div className="flex flex-row flex-nowrap gap-3" style={{ marginTop: "24px" }}>
                <Link
                  href="/document-request"
                  className="inline-flex items-center justify-center flex-1 min-w-[100px] rounded-full font-bold no-underline px-4 text-center text-[14px] transition-opacity hover:opacity-90"
                  style={{
                    fontFamily: '"Noto Sans JP"',
                    height: "48px",
                    background: "#FFF",
                    border: "1px solid #6017FF",
                    color: "#6017FF",
                  }}
                >
                  資料請求
                </Link>
                <Link
                  href="https://www.omakase.ai/jp/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center flex-1 min-w-[100px] rounded-full font-bold no-underline px-4 text-white transition-opacity hover:opacity-90 text-center text-[14px]"
                  style={{
                    fontFamily: '"Noto Sans JP"',
                    height: "48px",
                    background: "linear-gradient(310deg, #6017FF 44.35%, #8249FF 86.86%)",
                  }}
                >
                  無料で始める
                </Link>
              </div>
            </div>

            {/* その他のインタビュー事例 */}
            {otherInterviews.length > 0 && (
              <div className="w-full md:mt-0" style={{ marginTop: "32px" }}>
                <h2
                  className="m-0"
                  style={{
                    fontFamily: '"Noto Sans JP"',
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#000",
                    marginBottom: "20px",
                    lineHeight: 1.5,
                  }}
                >
                  その他のインタビュー事例
                </h2>
                <ul className="list-none m-0 p-0 flex flex-col gap-4">
                  {otherInterviews.map((item) => {
                    const hasDetail = !!getInterviewBySlug(item.slug);
                    return (
                      <li key={item.slug}>
                        {hasDetail ? (
                          <Link
                            href={`/interview/${item.slug}`}
                            className="flex gap-3 no-underline text-inherit hover:opacity-90 transition-opacity"
                          >
                            <div
                              className="w-20 h-14 flex-shrink-0 overflow-hidden rounded"
                              style={{ background: "#e5e7eb" }}
                            >
                              <img src={item.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p
                                className="m-0 font-bold text-[14px]"
                                style={{
                                  fontFamily: '"Noto Sans JP"',
                                  color: "#000",
                                  display: "-webkit-box",
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: "vertical",
                                  overflow: "hidden",
                                }}
                              >
                                {item.title}
                              </p>
                              <p className="m-0 text-[12px]" style={{ fontFamily: '"Noto Sans JP"', color: "#6b7280", marginTop: "2px" }}>
                                {item.companyName}
                              </p>
                            </div>
                          </Link>
                        ) : (
                          <div className="flex gap-3 opacity-90">
                            <div
                              className="w-20 h-14 flex-shrink-0 overflow-hidden rounded"
                              style={{ background: "#e5e7eb" }}
                            >
                              <img src={item.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p
                                className="m-0 font-bold text-[14px]"
                                style={{
                                  fontFamily: '"Noto Sans JP"',
                                  color: "#000",
                                  display: "-webkit-box",
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: "vertical",
                                  overflow: "hidden",
                                }}
                              >
                                {item.title}
                              </p>
                              <p className="m-0 text-[12px]" style={{ fontFamily: '"Noto Sans JP"', color: "#6b7280", marginTop: "2px" }}>
                                {item.companyName}
                              </p>
                            </div>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </aside>
        </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
