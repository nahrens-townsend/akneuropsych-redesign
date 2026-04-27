import PageHero from "../components/PageHero";
import CTABanner from "../components/CTABanner";
import FAQSection from "../components/FAQSection";

export default function FAQPage() {
  return (
    <main>
      <PageHero title="Frequently Asked Questions" subtitle="Support" />
      <FAQSection />
      <CTABanner />
    </main>
  );
}
