import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ContactForm from "@/components/ContactForm";
import HoeWeWerkenHero from "@/components/hoe-we-werken/HoeWeWerkenHero";
import QLabelSection from "@/components/hoe-we-werken/QLabelSection";

export const metadata: Metadata = {
  title: "Hoe we werken — Orvia",
};

export default function HoeWeWerkenPage() {
  return (
    <main>
      <div className="relative">
        <Nav theme="light" />
        <HoeWeWerkenHero />
      </div>
      <QLabelSection />
      <ContactForm
        variant="contact"
        heading="Wil je deel uitmaken van deze beweging?"
        subtext="Jouw bijdrage telt."
      />
      <Footer />
      <BackToTop />
    </main>
  );
}
