import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import UseCases from "@/components/UseCases";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import CaseStudies from "@/components/CaseStudies";
import Message from "@/components/Message";
import Plan from "@/components/Plan";
import FAQ from "@/components/FAQ";
import Form from "@/components/Form";
import Footer from "@/components/Footer";

// モバイル専用CTAコンポーネント
function MobileCTA() {
  return (
    <div className="md:hidden">
      <CTA />
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <MobileCTA />
      <UseCases />
      <CTA />
      <Features />
      <MobileCTA />
      <CaseStudies />
      <Message />
      <CTA />
      <Plan />
      <MobileCTA />
      <FAQ />
      <Form />
      <Footer/>
    </main>
  );
}