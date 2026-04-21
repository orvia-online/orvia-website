import Image from "next/image";
import Link from "next/link";
import { partnerUrl } from "@/lib/partners";

export default function WijMakenTalent() {
  return (
    <section className="bg-orvia-cream px-5 md:px-10 lg:px-[75px] pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16 lg:pb-20">
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 max-w-[1290px] mx-auto">

        {/* Text column */}
        <div className="w-full lg:flex-1">
          <h2 className="font-heading font-bold text-orvia-dark text-[28px] md:text-[34px] lg:text-[40px] leading-[1.35] mb-4">
            Wij maken talent &amp;<br />organisaties wendbaar.
          </h2>
          <p className="font-display font-bold text-orvia-dark text-[18px] leading-snug mb-6 lg:mb-8">
            En dat zal soms schuren.
          </p>
          <p className="font-display text-orvia-dark text-[15px] lg:text-[16px] tracking-[0.8px] leading-relaxed max-w-[578px]">
            <span className="font-bold">Orvia is de beweging boven </span>
            <a href={partnerUrl("planet-talent", "ons-verhaal-inline")} target="_blank" rel="noopener noreferrer" className="font-bold hover:opacity-70 transition-opacity">
              Planet Talent
            </a>
            <span className="font-bold"> en </span>
            <a href={partnerUrl("fin-forward", "ons-verhaal-inline")} target="_blank" rel="noopener noreferrer" className="font-bold hover:opacity-70 transition-opacity">
              Fin Forward
            </a>
            <span className="font-bold">.</span>
            {" "}Samen vormen we een{" "}
            <Link href="/het-ecosysteem" className="text-[#ec612c] underline hover:opacity-70 transition-opacity">
              ecosysteem
            </Link>
            {" "}waar talent en ambitieuze organisaties elkaar vinden, versterken en verder bewegen.{" "}
            <a href={partnerUrl("planet-talent", "ons-verhaal-inline")} target="_blank" rel="noopener noreferrer" className="text-[#ec612c] underline hover:opacity-70 transition-opacity">
              Planet Talent
            </a>
            {" "}brengt digitaal talent voor transformatie en verjonging.{" "}
            <a href={partnerUrl("fin-forward", "ons-verhaal-inline")} target="_blank" rel="noopener noreferrer" className="text-[#ec612c] underline hover:opacity-70 transition-opacity">
              Fin Forward
            </a>
            {" "}levert financiële expertise voor continuïteit en versterking. Beiden delen dezelfde overtuiging: dat het anders en beter kan.
          </p>
        </div>

        {/* Logos + CTAs column */}
        <div className="w-full lg:w-auto lg:flex-shrink-0 flex flex-col gap-8 lg:gap-10 lg:pt-4">
          {/* Planet Talent */}
          <div className="flex items-center gap-5">
            <div className="relative w-[180px] md:w-[220px] lg:w-[236px] h-[60px] md:h-[70px] lg:h-[82px] flex-shrink-0">
              <Image
                src="/images/logo-planet-talent.svg"
                alt="Planet Talent"
                fill
                className="object-contain object-left"
              />
            </div>
            <a href={partnerUrl("planet-talent", "ons-verhaal-partner-cta")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:opacity-80 transition-opacity whitespace-nowrap">
              <span className="h-12 bg-[#f8cd41] rounded-full flex items-center pl-5 pr-4 -mr-2 font-display font-bold text-[14px] text-orvia-dark">
                Planet Talent
              </span>
              <span className="relative z-10 flex-shrink-0 w-12 h-12 bg-[#f8cd41] rounded-full flex items-center justify-center text-orvia-dark">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 13L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>

          {/* Fin Forward */}
          <div className="flex items-center gap-5">
            <div className="relative w-[180px] md:w-[220px] lg:w-[236px] h-[60px] md:h-[70px] lg:h-[82px] flex-shrink-0">
              <Image
                src="/images/logo-fin-forward.svg"
                alt="Fin Forward"
                fill
                className="object-contain object-left"
              />
            </div>
            <a href={partnerUrl("fin-forward", "ons-verhaal-partner-cta")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:opacity-80 transition-opacity whitespace-nowrap">
              <span className="h-12 bg-[#ec612c] rounded-full flex items-center pl-5 pr-4 -mr-2 font-display font-bold text-[14px] text-orvia-dark">
                Fin Forward
              </span>
              <span className="relative z-10 flex-shrink-0 w-12 h-12 bg-[#ec612c] rounded-full flex items-center justify-center text-orvia-dark">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 13L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
