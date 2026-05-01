import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ContactForm from "@/components/ContactForm";
import Marquee from "@/components/Marquee";
import OnsVerhaalHero from "@/components/ons-verhaal/OnsVerhaalHero";
import WaaromWeDitDoen from "@/components/ons-verhaal/WaaromWeDitDoen";
import WatOnsDrijft from "@/components/ons-verhaal/WatOnsDrijft";

export const metadata: Metadata = {
  title: "Ons verhaal — Orvia",
  description:
    "Orvia ontstond uit de overtuiging dat talent pas écht groeit met eerlijkheid, niet met comfort. Lees het verhaal van Kristel Seymus en Sophie Buysse.",
};

export default function OnsVerhaalPage() {
  return (
    <main>
      <div className="relative">
        <Nav theme="light" />
        <OnsVerhaalHero />
      </div>
      <Marquee
        text="Tough love is de enige liefde die telt."
        bg="var(--color-orvia-blue)"
      />
      <WaaromWeDitDoen />
      <WatOnsDrijft />
      <ContactForm
        variant="contact"
        heading="Herken jij jezelf in dit verhaal?"
        subtext="Dan weet je waar je moet zijn."
        source="Ons verhaal"
      />
      <Footer />
      <BackToTop />
    </main>
  );
}
