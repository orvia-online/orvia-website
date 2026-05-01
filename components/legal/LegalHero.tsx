interface LegalHeroProps {
  title: string;
  intro?: string;
  lastUpdated?: string;
}

export default function LegalHero({ title, intro, lastUpdated }: LegalHeroProps) {
  return (
    <section className="bg-white section-padding pt-[96px] md:pt-[120px] lg:pt-[160px] pb-12 md:pb-16 lg:pb-20">
      <div className="max-w-[780px] mx-auto">
        {lastUpdated && (
          <p className="font-display text-[13px] tracking-[1px] uppercase text-orvia-dark opacity-50 mb-4">
            Laatste update: {lastUpdated}
          </p>
        )}
        <h1 className="font-heading font-bold text-orvia-dark text-[32px] md:text-[42px] lg:text-[54px] leading-[1.15] mb-6">
          {title}
        </h1>
        {intro && (
          <p className="font-display text-orvia-dark text-[15px] lg:text-[16px] tracking-[0.8px] leading-relaxed max-w-[600px]">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
