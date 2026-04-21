import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WarForTalent from "@/components/WarForTalent";
import Marquee from "@/components/Marquee";
import RoleCards from "@/components/RoleCards";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function HomePage() {
  return (
    <main>
      <div className="relative">
        <Nav theme="dark" />
        <Hero />
      </div>
      <WarForTalent />
      <Marquee />
      <RoleCards />
      <ContactForm variant="download" />
      <Footer />
      <BackToTop />
    </main>
  );
}
