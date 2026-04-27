import PageHero from "../components/PageHero";
import ContactSection from "../components/ContactSection";
import PageMeta from "../components/PageMeta";

export default function ContactPage() {
  return (
    <main>
      <PageMeta
        title="Contact AK Neuropsych | Book a Neuropsychological Assessment"
        description="Contact Dr. Andrea Kilgour to book a neuropsychological or psychological assessment in Calgary, AB or Winnipeg, MB. Virtual and in-person appointments available."
        canonical="/contact"
      />
      <PageHero
        title="Contact Us"
        subtitle="Neuropsychologist · Alberta, Canada"
      />
      <ContactSection />
    </main>
  );
}
