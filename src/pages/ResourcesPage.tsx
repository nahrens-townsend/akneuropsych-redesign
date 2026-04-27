import PageHero from "../components/PageHero";
import CTABanner from "../components/CTABanner";
import ResourcesSection from "../components/ResourcesSection";

export default function ResourcesPage() {
  return (
    <main>
      <PageHero title="Resources" subtitle="Learn & Explore" />
      <ResourcesSection />
      <CTABanner />
    </main>
  );
}
