import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ContactForm from "@/components/ContactForm";
import EcosysteemPillars from "@/components/het-ecosysteem/EcosysteemPillars";
import CommunitySection from "@/components/het-ecosysteem/CommunitySection";

export const metadata: Metadata = {
  title: "Het ecosysteem — Orvia",
};

export default function HetEcosysteemPage() {
  return (
    <main>
      <div className="relative">
        <Nav theme="light" />
        <EcosysteemPillars />
      </div>
      <CommunitySection />
      <div id="contact">
        <ContactForm
          variant="contact"
          heading="Wil je deel uitmaken van deze beweging?"
          subtext="Jouw bijdrage telt."
        />
      </div>
      <Footer />
      <BackToTop />
    </main>
  );
}
