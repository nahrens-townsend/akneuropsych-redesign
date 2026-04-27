import PageHero from "../components/PageHero";
import CTABanner from "../components/CTABanner";
import FAQSection from "../components/FAQSection";
import WhatToExpectFAQ from "../components/WhatToExpectFAQ";
import PageMeta from "../components/PageMeta";

export default function FAQPage() {
  return (
    <main>
      <PageMeta
        title="FAQ | Neuropsychological Assessment Questions | AK Neuropsych"
        description="Answers to common questions about neuropsychological evaluations, psychological assessments, the assessment process, costs, and what to expect."
        canonical="/faq"
      />
      <PageHero title="Frequently Asked Questions" subtitle="Support" />
      <FAQSection />
      <WhatToExpectFAQ />
      <CTABanner />
    </main>
  );
}
