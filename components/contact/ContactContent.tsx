import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { partnerUrl } from "@/lib/partners";

function PartnerButton({
  href,
  label,
  bg,
  className,
}: {
  href: string;
  label: string;
  bg: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center hover:opacity-90 transition-opacity${className ? ` ${className}` : ""}`}
    >
      <span className={`h-12 ${bg} rounded-full flex items-center pl-6 pr-4 -mr-2 font-display font-bold text-[14px] text-orvia-dark`}>
        {label}
      </span>
      <span className={`relative z-10 flex-shrink-0 w-12 h-12 ${bg} rounded-full flex items-center justify-center text-orvia-dark`}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 13L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </a>
  );
}

export default function ContactContent() {
  return (
    <section
      id="contact-form"
      className="bg-orvia-cream px-5 md:px-10 lg:px-[75px] py-12 md:py-16 lg:py-20"
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 max-w-[1290px] mx-auto">
        {/* Left column — direct contact + partner blocks */}
        <div className="w-full lg:w-[42%] lg:flex-shrink-0 flex flex-col gap-10 lg:gap-12">
          {/* Direct contact */}
          <div>
            <p className="font-display font-bold text-orvia-dark text-[16px] tracking-[1.12px] leading-[1.4] uppercase mb-4">
              Direct contact
            </p>
            <div className="font-display text-orvia-dark text-[16px] tracking-[0.8px] leading-[1.7]">
              <p>hallo@orvia.be</p>
              <p>03 226 48 28</p>
              <p>Frank van Dyckelaan 7b,</p>
              <p>9140 Temse</p>
            </div>
          </div>

          {/* Planet Talent + Fin Forward — side by side */}
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col items-start">
              <p className="font-display font-bold text-orvia-dark text-[16px] tracking-[1.12px] leading-[1.4] uppercase mb-3">
                Planet Talent
              </p>
              <p className="font-display text-orvia-dark text-[16px] tracking-[0.8px] leading-[1.7] mb-5">
                Hooggeschoold digitaal talent voor transformatie en verjonging.
              </p>
              <PartnerButton href={partnerUrl("planet-talent", "contact-partner-cta")} label="Planet Talent" bg="bg-[#f8cd41]" className="mt-auto" />
            </div>

            <div className="flex flex-col items-start">
              <p className="font-display font-bold text-orvia-dark text-[16px] tracking-[1.12px] leading-[1.4] uppercase mb-3">
                Fin Forward
              </p>
              <p className="font-display text-orvia-dark text-[16px] tracking-[0.8px] leading-[1.7] mb-5">
                Financiële expertise voor continuïteit en versterking.
              </p>
              <PartnerButton href={partnerUrl("fin-forward", "contact-partner-cta")} label="Fin Forward" bg="bg-[#ec612c]" className="mt-auto" />
            </div>
          </div>
        </div>

        {/* Right column — contact form */}
        <div className="w-full lg:flex-1">
          <ContactForm variant="contact" inline />
        </div>
      </div>
    </section>
  );
}
