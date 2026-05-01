import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ContactForm from "@/components/ContactForm";
import HoeWeWerkenHero from "@/components/hoe-we-werken/HoeWeWerkenHero";
import QLabelSection from "@/components/hoe-we-werken/QLabelSection";
import EcosysteemPillars from "@/components/het-ecosysteem/EcosysteemPillars";

export const metadata: Metadata = {
  title: "Hoe we werken — Orvia",
  description:
    "Orvia ontzorgt people management, bewaakt kwaliteit via het Q-label en biedt flexibele talenteninzet. Zo haal jij het beste uit jouw talent.",
};

export default function HoeWeWerkenPage() {
  return (
    <main>
      <div className="relative">
        <Nav theme="light" />
        <HoeWeWerkenHero />
      </div>
      <QLabelSection />
      <EcosysteemPillars headingLevel="h2" compact />
      <ContactForm
        variant="contact"
        heading="Klaar om anders te werken met talent?"
        subtext="Wij ook."
        source="Hoe we werken"
      />
      <Footer />
      <BackToTop />
    </main>
  );
}
