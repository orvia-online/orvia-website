import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ContactForm from "@/components/ContactForm";
import Marquee from "@/components/Marquee";
import OnsVerhaalHero from "@/components/ons-verhaal/OnsVerhaalHero";
import WaaromWeDitDoen from "@/components/ons-verhaal/WaaromWeDitDoen";
import WatOnsDrijft from "@/components/ons-verhaal/WatOnsDrijft";
import WijMakenTalent from "@/components/ons-verhaal/WijMakenTalent";

export const metadata: Metadata = {
  title: "Ons verhaal — Orvia",
};

export default function OnsVerhaalPage() {
  return (
    <main>
      <div className="relative">
        <Nav theme="light" />
        <OnsVerhaalHero />
      </div>
      <Marquee
        text={`\u201cTough love is de enige liefde die telt.\u201d`}
        bg="var(--color-orvia-blue)"
      />
      <WaaromWeDitDoen />
      <WatOnsDrijft />
      <WijMakenTalent />
      <ContactForm
        variant="contact"
        heading="Herken jij jezelf in dit verhaal?"
        subtext="Dan weet je waar je moet zijn."
      />
      <Footer />
      <BackToTop />
    </main>
  );
}
