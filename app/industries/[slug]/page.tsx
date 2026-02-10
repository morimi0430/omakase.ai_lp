import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Container } from "@/components/Container";
import { OmakaseWidgetScript } from "@/components/OmakaseWidgetScript";
import { getIndustryBySlug, getAllIndustrySlugs } from "@/lib/industries";
import { getIndustryLP } from "@/components/industries";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: "事例紹介 | Omakase.ai" };
  return {
    title: industry.title,
    description: industry.description,
    alternates: { canonical: `https://omakase-voice-ai.com/industries/${slug}/` },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const IndustryLP = getIndustryLP(slug);
  if (IndustryLP) {
    return (
      <>
        {slug === "kaigo" && <OmakaseWidgetScript />}
        <IndustryLP industry={industry} />
      </>
    );
  }

  return (
    <main className="overflow-x-hidden">
      <Header />
      <section
        style={{
          paddingTop: "60px",
          paddingBottom: "80px",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        <Container>
          <h1
            style={{
              fontFamily: '"Noto Sans JP"',
              fontSize: "28px",
              fontWeight: 700,
              margin: 0,
            }}
          >
            {industry.name}（準備中）
          </h1>
          <Link href="/industries" style={{ marginTop: "24px", display: "inline-block", fontSize: "16px" }}>
            ← 事例一覧へ
          </Link>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
