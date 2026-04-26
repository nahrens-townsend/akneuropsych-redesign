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
import ContactSection from "../components/ContactSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ValueSection />
      <AboutSection />
      <CTABanner />
      <ProblemGrid />
      <ServicesSection />
      <QuoteSection />
      <VirtualCareSection />
      <ProcessSection />
      <TrustSection />
      <ContactSection />
    </main>
  );
}
