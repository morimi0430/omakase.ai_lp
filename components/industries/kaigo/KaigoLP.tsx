"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { IndustryMeta } from "@/lib/industries";
import { KaigoFirstView } from "./KaigoFirstView";
import { KaigoJobSection } from "./KaigoJobSection";
import { KaigoCaseVoiceSection } from "./KaigoCaseVoiceSection";
import { KaigoFlowSection } from "./KaigoFlowSection";
import { KaigoFaqSection } from "./KaigoFaqSection";

export default function KaigoLP({ industry }: { industry: IndustryMeta }) {
  return (
    <article id="article" className="min-h-full w-full max-w-[100vw] overflow-x-hidden" style={{ fontFamily: '"Helvetica Neue", Helvetica, Roboto, Arial, sans-serif' }}>
      <Header
        imageOverrides={industry.headerImages}
        rightTitle={industry.headerTitle}
        buttonTheme={industry.headerButtonTheme}
      />
      <KaigoFirstView />
      <KaigoJobSection />
      <KaigoCaseVoiceSection />
      <KaigoFlowSection />
      <KaigoFaqSection />

      <Footer />
    </article>
  );
}
