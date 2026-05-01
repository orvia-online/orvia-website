import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ContactHero from "@/components/contact/ContactHero";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact — Orvia",
  description:
    "Klaar voor een eerlijk gesprek? Neem contact op met Orvia in Temse voor advies over talent, people management en flexibele inzet.",
};

export default function ContactPage() {
  return (
    <main>
      <div className="relative">
        <Nav theme="dark" />
        <ContactHero />
      </div>
      <ContactContent />
      <Footer bgColor="var(--color-orvia-cream)" />
      <BackToTop />
    </main>
  );
}
