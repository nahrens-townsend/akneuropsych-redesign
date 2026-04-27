import PageHero from "../components/PageHero";
import CTABanner from "../components/CTABanner";
import ResourcesSection from "../components/ResourcesSection";
import PageMeta from "../components/PageMeta";

export default function ResourcesPage() {
  return (
    <main>
      <PageMeta
        title="Neuropsychological Resources | AK Neuropsych Calgary"
        description="Curated resources on neuropsychological assessment, brain health, TBI, ADHD, cognitive decline, and psychological wellbeing from AK Neuropsych."
        canonical="/resources"
      />
      <PageHero title="Resources" subtitle="Learn & Explore" />
      <ResourcesSection />
      <CTABanner />
    </main>
  );
}
