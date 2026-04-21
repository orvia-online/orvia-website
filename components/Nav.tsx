"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Ons verhaal", href: "/ons-verhaal" },
  { label: "Hoe we werken", href: "/hoe-we-werken" },
  { label: "Het ecosysteem", href: "/het-ecosysteem" },
];

export default function Nav({ theme = "dark" }: { theme?: "dark" | "light" }) {
  const pathname = usePathname();
  const isLight = theme === "light";
  const [menuOpen, setMenuOpen] = useState(false);
  const [ctaHovered, setCtaHovered] = useState(false);

  const textColor = isLight ? "text-orvia-dark" : "text-white";
  const borderColor = isLight ? "border-orvia-dark/20" : "border-white/20";
  const drawerBg = isLight ? "bg-orvia-cream" : "bg-orvia-dark";

  const isLimePage = pathname === "/" || pathname === "/contact";
  const ctaBg = isLimePage ? "#e0ed6f" : "#bfd1f9";
  const ctaHover = isLimePage ? "#d4e15c" : "#afc0e8";

  return (
    <nav className={`absolute top-0 left-0 right-0 z-50 ${isLight ? "bg-white" : "bg-transparent"}`}>
      {/* Main bar */}
      <div className="flex items-center justify-between px-5 md:px-10 lg:px-[75px] h-[64px] md:h-[72px] lg:h-[80px]">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src={isLight ? "/images/logo-dark.svg" : "/images/logo-light.svg"}
            alt="Orvia"
            width={90}
            height={26}
            className="md:w-[100px] lg:w-[112px]"
            priority
          />
        </Link>

        {/* Desktop nav links — hidden below lg */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-display font-semibold text-[15px] tracking-[0.48px] transition-opacity hover:opacity-70 ${isActive ? "text-[#ec612c] underline underline-offset-2" : textColor}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA — hidden below lg */}
        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center"
          onMouseEnter={() => setCtaHovered(true)}
          onMouseLeave={() => setCtaHovered(false)}
        >
          <span className="h-[37px] rounded-full flex items-center pl-5 pr-4 -mr-[3px] font-display font-bold text-[14px] text-orvia-dark transition-colors" style={{ backgroundColor: ctaHovered ? ctaHover : ctaBg }}>
            Contacteer
          </span>
          <span className="relative z-10 flex-shrink-0 w-[37px] h-[37px] rounded-full flex items-center justify-center text-orvia-dark transition-colors" style={{ backgroundColor: ctaHovered ? ctaHover : ctaBg }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 13L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </Link>

        {/* Hamburger — visible below lg */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
          aria-expanded={menuOpen}
          className={`lg:hidden flex flex-col justify-center gap-[5px] w-8 h-8 ${textColor}`}
        >
          <span className={`block h-[2px] w-full bg-current transition-transform duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block h-[2px] w-full bg-current transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-full bg-current transition-transform duration-200 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer — visible below lg when open */}
      {menuOpen && (
        <div className={`lg:hidden border-t ${borderColor} ${drawerBg} px-5 md:px-10 pt-5 pb-7`}>
          <ul className="flex flex-col gap-5 mb-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`font-display font-semibold text-[17px] tracking-[0.48px] ${isActive ? "text-[#ec612c] underline underline-offset-2" : textColor}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center"
            onMouseEnter={() => setCtaHovered(true)}
            onMouseLeave={() => setCtaHovered(false)}
          >
            <span className="h-[37px] rounded-full flex items-center pl-5 pr-4 -mr-[3px] font-display font-bold text-[14px] text-orvia-dark transition-colors" style={{ backgroundColor: ctaHovered ? ctaHover : ctaBg }}>
              Contacteer
            </span>
            <span className="relative z-10 flex-shrink-0 w-[37px] h-[37px] rounded-full flex items-center justify-center text-orvia-dark transition-colors" style={{ backgroundColor: ctaHovered ? ctaHover : ctaBg }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 13L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
}
