"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// ─── Community photo ─────────────────────────────────────────────────────────
// Save the photo from Figma node 2011:720 to public/images/ecosysteem-community.png
const COMMUNITY_PHOTO = "/images/ecosysteem-community.png";

// ─── Stats data ───────────────────────────────────────────────────────────────
const stats = [
  { target: 100, suffix: "",  label: "Consultants" },
  { target: 100, suffix: "",  label: "Gescreende freelancers" },
  { target: 2000, suffix: "+", label: "Alumni" },
  { target: 50,  suffix: "+", label: "Geëngageerde bedrijven" },
];

// ─── Count-up hook ────────────────────────────────────────────────────────────
function useCountUp(target: number, duration: number, started: boolean): number {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!started) return;
    setCount(0);
    let startTime: number | null = null;

    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    }

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [started, target, duration]);

  return count;
}

// Format with Dutch thousands separator (period) + optional suffix
function formatCount(n: number, suffix: string): string {
  if (n >= 1000) {
    const thousands = Math.floor(n / 1000);
    const remainder = String(n % 1000).padStart(3, "0");
    return `${thousands}.${remainder}${suffix}`;
  }
  return `${n}${suffix}`;
}

// ─── Stat item ────────────────────────────────────────────────────────────────
function StatItem({
  target,
  suffix,
  label,
  started,
  duration,
}: {
  target: number;
  suffix: string;
  label: string;
  started: boolean;
  duration: number;
}) {
  const count = useCountUp(target, duration, started);
  return (
    <div>
      <p className="font-display font-black text-orvia-dark text-[28px] md:text-[32px] leading-[1.4] tracking-[2.24px] tabular-nums">
        {formatCount(count, suffix)}
      </p>
      <p className="font-display text-orvia-dark text-[15px] lg:text-[16px] leading-[1.5] tracking-[0.8px]">
        {label}
      </p>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function CommunitySection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-orvia-cream section-padding pt-12 md:pt-16 lg:pt-[113px] pb-12 md:pb-16 lg:pb-20">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start max-w-[1290px] mx-auto">

        {/* ── Left column ── */}
        <div className="w-full lg:flex-1">
          <h2 className="font-heading font-bold text-orvia-dark text-[28px] md:text-[34px] lg:text-[40px] leading-[1.35] mb-4">
            Je moet er niet bij horen.
            <br />
            Je moet iets bijdragen.
          </h2>
          <p className="font-display text-orvia-dark text-[15px] lg:text-[16px] leading-[1.5] tracking-[0.8px] mb-8 lg:mb-12 max-w-[468px]">
            We bouwen geen netwerk om het netwerk. We bouwen een community van
            mensen die ergens voor gaan.{" "}
            <br className="hidden lg:block" />
            Via kennisdeling, events en academy-programma&apos;s.
          </p>

          {/* Stats grid */}
          <div ref={statsRef} className="grid grid-cols-2 gap-x-8 gap-y-6 mb-10 lg:mb-12">
            <StatItem target={stats[0].target} suffix={stats[0].suffix} label={stats[0].label} started={hasStarted} duration={1500} />
            <StatItem target={stats[1].target} suffix={stats[1].suffix} label={stats[1].label} started={hasStarted} duration={1500} />
            <StatItem target={stats[2].target} suffix={stats[2].suffix} label={stats[2].label} started={hasStarted} duration={1800} />
            <StatItem target={stats[3].target} suffix={stats[3].suffix} label={stats[3].label} started={hasStarted} duration={1200} />
          </div>

          {/* CTA */}
          <a href="#contact" className="inline-flex items-center group">
            <span className="h-12 bg-orvia-lime rounded-full flex items-center pl-6 pr-4 -mr-2 font-display font-bold text-[14px] text-orvia-dark group-hover:bg-[#d4e15c] transition-colors">
              Ik wil iets bijdragen
            </span>
            <span className="relative z-10 flex-shrink-0 w-12 h-12 bg-orvia-lime rounded-full flex items-center justify-center text-orvia-dark group-hover:bg-[#d4e15c] transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 13L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </div>

        {/* ── Right column: photo ── */}
        <div className="w-full lg:w-[595px] lg:flex-shrink-0 aspect-[595/622] relative">
          <Image
            src={COMMUNITY_PHOTO}
            alt="Persoon in beweging"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 595px"
          />
        </div>

      </div>
    </section>
  );
}
