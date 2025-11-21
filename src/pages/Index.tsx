import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Features from "@/components/Features";
import ComingSoon from "@/components/ComingSoon";
import HowItWorks from "@/components/HowItWorks";
import BeforeAfter from "@/components/BeforeAfter";
import BetaAccess from "@/components/BetaAccess";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <main className="min-h-screen">
      <div className="pt-20">
      <SEO 
        title="Lovable to WordPress — Convert Lovable Projects in Minutes"
        description="Convert any Lovable project into a real WordPress website in under 5 minutes. Free beta access for 10 users. No code. One-click export."
      />
      <Header />
      <Hero />
      <ValueProposition />
      <Features />
      <ComingSoon />
      <HowItWorks />
      <BeforeAfter />
      <BetaAccess />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      </div>
    </main>
  );
};

export default Index;
