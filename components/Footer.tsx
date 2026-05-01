import Image from "next/image";
import Link from "next/link";
import { partnerUrl } from "@/lib/partners";

const sitemapLinks = [
  { label: "Home", href: "/" },
  { label: "Ons verhaal", href: "/ons-verhaal" },
  { label: "Hoe we werken", href: "/hoe-we-werken" },
  { label: "Ons ecosysteem", href: "/het-ecosysteem" },
];

const roleLinks = [
  { label: "Orvia Guide", href: "/het-ecosysteem#guide" },
  { label: "Orvia Talent", href: "/het-ecosysteem#talent" },
  { label: "Orvia Client", href: "/het-ecosysteem#client" },
  { label: "Orvia Driver", href: "/het-ecosysteem#driver" },
];

export default function Footer({ bgColor = "var(--color-orvia-blue)" }: { bgColor?: string }) {
  return (
    <footer className="section-padding pt-8 lg:pt-10 pb-8" style={{ backgroundColor: bgColor }}>
      <div className="max-w-[1290px] mx-auto">
      {/* Top rule */}
      <div className="h-px bg-orvia-dark mb-8" />

      {/* Main footer grid:
          mobile  — 2 cols (logo + CTA / sitemap + roles)
          lg      — 5 cols (logo / sitemap / roles / address / CTA) */}
      <div className="grid grid-cols-2 lg:grid-cols-[auto_1fr_1fr_1fr_auto] gap-x-8 gap-y-8 lg:gap-x-10 lg:gap-y-10 items-start">
        {/* Logo — row 1, col 1 */}
        <div className="col-span-1 lg:row-start-1 lg:col-start-1">
          <Image
            src="/images/logo-dark.svg"
            alt="Orvia"
            width={100}
            height={30}
            className="lg:w-[119px] lg:h-[35px]"
          />
        </div>

        {/* Powered by — desktop row 1 col 5 only */}
        <p className="hidden lg:block lg:row-start-1 lg:col-start-5 font-display font-bold text-orvia-dark text-[12px] text-right">
          Powered by{" "}
          <a href={partnerUrl("fin-forward", "footer-powered-by")} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">Fin Forward</a>
          {" "}and{" "}
          <a href={partnerUrl("planet-talent", "footer-powered-by")} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">PlanetTalent</a>
        </p>

        {/* Contacteer — top-right on mobile, row 2 col 5 on desktop */}
        <div className="col-span-1 flex justify-end lg:flex lg:justify-end lg:row-start-2 lg:col-start-5">
          <Link href="/contact" className="inline-flex items-center group">
            <span className="h-[37px] bg-orvia-lime rounded-full flex items-center pl-5 pr-4 -mr-[3px] font-display font-bold text-[14px] text-orvia-dark group-hover:bg-[#d4e15c] transition-colors">
              Contacteer
            </span>
            <span className="relative z-10 flex-shrink-0 w-[37px] h-[37px] bg-orvia-lime rounded-full flex items-center justify-center text-orvia-dark group-hover:bg-[#d4e15c] transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 13L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        </div>

        {/* Sitemap — row 2, col 1 */}
        <div className="col-span-1 lg:row-start-2 lg:col-start-1">
          <p className="font-display font-bold text-orvia-dark text-[14px] lg:text-[16px] leading-[22px] mb-1">
            Sitemap
          </p>
          <ul>
            {sitemapLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-display text-orvia-dark text-[14px] lg:text-[16px] leading-[22px] hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Onze rollen — row 2, col 2 */}
        <div className="col-span-1 lg:row-start-2 lg:col-start-2">
          <p className="font-display font-bold text-orvia-dark text-[14px] lg:text-[16px] leading-[22px] mb-1">
            Onze rollen
          </p>
          <ul>
            {roleLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-display text-orvia-dark text-[14px] lg:text-[16px] leading-[22px] hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Address — full-width on mobile, col 4 on desktop (gap at col 3) */}
        <div className="col-span-2 lg:col-span-1 lg:row-start-2 lg:col-start-4">
          <p className="font-display font-bold text-orvia-dark text-[14px] lg:text-[16px] leading-[22px] mb-1">
            Orvia
          </p>
          <p className="font-display text-orvia-dark text-[14px] lg:text-[16px] leading-[22px] whitespace-nowrap">
            Frank van Dyckelaan 7b
          </p>
          <p className="font-display text-orvia-dark text-[14px] lg:text-[16px] leading-[22px]">
            9140 Temse
          </p>
          <p className="font-display text-orvia-dark text-[14px] lg:text-[16px] leading-[22px]">
            België
          </p>
        </div>
      </div>

      {/* Legal links */}
      <div className="mt-10 lg:mt-16 flex flex-wrap items-center gap-5 lg:gap-8">
        <Link
          href="/privacyverklaring"
          className="font-body text-orvia-dark text-[12px] underline hover:opacity-70"
        >
          Privacyverklaring
        </Link>
        <Link
          href="/cookieverklaring"
          className="font-body text-orvia-dark text-[12px] underline hover:opacity-70"
        >
          Cookieverklaring
        </Link>
        <Link
          href="/algemene-voorwaarden"
          className="sr-only"
          tabIndex={-1}
          aria-hidden="true"
        >
          Algemene voorwaarden
        </Link>
      </div>
      </div>
    </footer>
  );
}
