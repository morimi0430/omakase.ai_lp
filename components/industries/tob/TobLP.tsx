"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TobPlan from "./TobPlan";
import type { IndustryMeta } from "@/lib/industries";
import { TobFirstView } from "./TobFirstView";
import { TobProblemSection } from "./TobProblemSection";
import { TobAboutSection } from "./TobAboutSection";
import { TobFeaturesSection } from "./TobFeaturesSection";
import { TobOnboardingSection } from "./TobOnboardingSection";
import { TobCaseStudiesSection } from "./TobCaseStudiesSection";
import { TobFaqSection } from "./TobFaqSection";
import { TobLastCTASection } from "./TobLastCTASection";

export default function TobLP({ industry }: { industry: IndustryMeta }) {
  return (
    <article
      id="article"
      className="min-h-full w-full max-w-[100vw] overflow-x-hidden"
      style={{ fontFamily: '"Helvetica Neue", Helvetica, Roboto, Arial, sans-serif' }}
    >
      <Header
        imageOverrides={industry.headerImages}
        rightTitle={industry.headerTitle}
        buttonTheme={industry.headerButtonTheme}
        documentRequestFirst={industry.headerDocumentRequestFirst}
      />
      <TobFirstView />
      <TobProblemSection />
      <TobAboutSection />
      <TobFeaturesSection />
      <TobOnboardingSection />
      <TobCaseStudiesSection />
      <TobPlan />
      <TobFaqSection />
      <TobLastCTASection />
      <Footer />
    </article>
  );
}
