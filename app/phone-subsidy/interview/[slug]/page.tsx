import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PhoneInterviewArticle from "@/components/phone-subsidy/interview/PhoneInterviewArticle";
import {
  getPhoneInterviewBySlug,
  getPhoneInterviewSlugs,
} from "@/lib/phone-interviews";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getPhoneInterviewSlugs().map((slug) => ({ slug }));
}

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://omakase-voice-ai.com"
).replace(/\/$/, "");

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const interview = getPhoneInterviewBySlug(slug);
  if (!interview) {
    return { title: "インタビューが見つかりません | Omakase AI 電話" };
  }
  const title = `${interview.companyName} 導入インタビュー | Omakase AI 電話`;
  const description = interview.subtitle;
  const pageUrl = `${siteUrl}/phone-subsidy/interview/${slug}`;
  const ogImagePath = interview.image
    ? interview.image.startsWith("/")
      ? interview.image
      : `/${interview.image}`
    : "/images/phone-subsidy/logo-header.png";
  const ogImageUrl = `${siteUrl}${ogImagePath}`;

  return {
    title,
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
      url: pageUrl,
      title,
      description,
      type: "article",
      siteName: "Omakase AI 電話",
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

export default async function PhoneInterviewPage({ params }: Props) {
  const { slug } = await params;
  const interview = getPhoneInterviewBySlug(slug);
  if (!interview) notFound();

  return (
    <main
      className="w-full overflow-x-hidden bg-white"
      style={{ fontFamily: '"Noto Sans JP", sans-serif' }}
    >
      <Header phoneLp />

      <div
        className="w-full"
        style={{
          paddingTop: "24px",
          boxSizing: "border-box",
        }}
      >
        {/* パンくず */}
        <nav
          aria-label="パンくず"
          className="phone-interview-breadcrumb w-full mx-auto"
        >
          <ol
            className="flex flex-wrap items-center gap-1 md:gap-2 list-none m-0 p-0"
            style={{ fontFamily: '"Noto Sans JP"', fontSize: "14px" }}
          >
            <li>
              <Link
                href="/phone-subsidy"
                className="no-underline"
                style={{ color: "#6b7280" }}
              >
                Omakase AI 電話
              </Link>
            </li>
            <li style={{ color: "#9ca3af" }} aria-hidden>
              /
            </li>
            <li>
              <Link
                href="/phone-subsidy#interview-section"
                className="no-underline"
                style={{ color: "#6b7280" }}
              >
                導入インタビュー
              </Link>
            </li>
            <li style={{ color: "#9ca3af" }} aria-hidden>
              /
            </li>
            <li style={{ color: "#000", fontWeight: 600 }}>
              {interview.companyName}
            </li>
          </ol>
        </nav>

        <PhoneInterviewArticle interview={interview} />
      </div>

      <Footer />
    </main>
  );
}
