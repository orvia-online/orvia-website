import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WarForTalent from "@/components/WarForTalent";
import Marquee from "@/components/Marquee";
import WijMakenTalent from "@/components/ons-verhaal/WijMakenTalent";
import RoleCards from "@/components/RoleCards";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Orvia — Tough love for talent",
  description:
    "Tough love for talent. Orvia ontzorgt people management, garandeert kwaliteit via het Q-label en biedt flexibele talenteninzet voor organisaties die durven bewegen.",
};

export default function HomePage() {
  return (
    <main>
      <div className="relative">
        <Nav theme="dark" />
        <Hero />
      </div>
      <WarForTalent />
      <Marquee text="Wil je betere performance van je mensen? Stop dan eerst met vasthouden." />
      <WijMakenTalent bg="bg-white" source="home" />
      <RoleCards />
      <ContactForm variant="contact" source="Homepage" />
      <Footer />
      <BackToTop />
    </main>
  );
}
