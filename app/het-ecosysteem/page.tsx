import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ContactForm from "@/components/ContactForm";
import OrviaRolesSection from "@/components/OrviaRolesSection";
import CommunitySection from "@/components/het-ecosysteem/CommunitySection";

export const metadata: Metadata = {
  title: "Het ecosysteem — Orvia",
  description:
    "Het Orvia-ecosysteem verbindt Guides, Talent, Clients en Drivers in een beweging van 100+ consultants, 2.000+ alumni en 50+ bedrijven.",
};

export default function HetEcosysteemPage() {
  return (
    <main>
      <div className="relative">
        <Nav theme="light" />
        <OrviaRolesSection />
      </div>
      <CommunitySection />
      <div id="contact">
        <ContactForm
          variant="contact"
          heading="Wil je deel uitmaken van deze beweging?"
          subtext="Jouw bijdrage telt."
          source="Het ecosysteem"
        />
      </div>
      <Footer />
      <BackToTop />
    </main>
  );
}
