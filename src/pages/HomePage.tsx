import HeroSection from "../components/HeroSection";
import ValueSection from "../components/ValueSection";
import AboutSection from "../components/AboutSection";
import CTABanner from "../components/CTABanner";
import ProblemGrid from "../components/ProblemGrid";
import ServicesSection from "../components/ServicesSection";
import QuoteSection from "../components/QuoteSection";
import VirtualCareSection from "../components/VirtualCareSection";
import ProcessSection from "../components/ProcessSection";
import TrustSection from "../components/TrustSection";
import PageMeta from "../components/PageMeta";

export default function HomePage() {
  return (
    <main>
      <PageMeta
        title="AK Neuropsych | Neuropsychological Assessments in Calgary & Winnipeg"
        description="Evidence-based neuropsychological evaluations and cognitive assessments with Dr. Andrea Kilgour — serving Calgary, Alberta and Winnipeg, Manitoba."
        canonical="/"
      />
      <HeroSection />
      <ValueSection />
      <AboutSection />
      <ProblemGrid />
      <ServicesSection />
      <QuoteSection />
      <VirtualCareSection />
      <ProcessSection />
      <TrustSection />
      <CTABanner />
    </main>
  );
}
