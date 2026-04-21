const pillars = [
  {
    id: "technologie",
    number: "01",
    title: "Technologie",
    description:
      "De wereld verandert sneller dan ooit door technologie. Wie begrijpt hoe AI en digitale tools zijn professionele waarde vergroten, staat sterker. Binnen deze pijler ontdekken we samen hoe we technologie laten werken voor ons in plaats van tegen ons.",
  },
  {
    id: "mens",
    number: "02",
    title: "Mens",
    description:
      "Wendbaar zijn begint van binnen. Wie zichzelf kent, staat steviger in een wereld die voortdurend beweegt. Geen therapie, geen quick fixes. Filosofie, reflectie en de moed om naar binnen te kijken.",
  },
  {
    id: "wereld",
    number: "03",
    title: "Wereld",
    description:
      "Een professional zonder context is een professional zonder kompas. Economie, politiek, cultuur, klimaat, maatschappelijke verschuivingen. Niet als oppervlakkige nieuwsconsumptie maar als kritisch denken, nuance en debat.",
  },
];

export default function EcosysteemPillars() {
  return (
    <section className="bg-white px-5 md:px-10 lg:px-[75px] pt-[96px] md:pt-[120px] lg:pt-[160px] pb-12 md:pb-16 lg:pb-0">
      {/* Section header */}
      <div className="max-w-[1290px] mx-auto text-center mb-10 md:mb-12 lg:mb-10">
        <h1 className="font-heading font-bold text-orvia-dark text-[26px] md:text-[34px] lg:text-[40px] leading-[1.35] mb-4 max-w-[762px] mx-auto">
          Drie contentpijlers voor een wendbaar ecosysteem.
        </h1>
        <p className="font-display text-orvia-dark text-[15px] lg:text-[16px] leading-[1.5] tracking-[0.8px] max-w-[810px] mx-auto">
          Binnen het Orvia-ecosysteem inspireren en ontwikkelen we elkaar op drie
          domeinen. Samen vormen ze de voedingsbodem voor wendbare organisaties
          en wendbaar, inzetzeker talent.
        </p>
      </div>

      {/* Pillars */}
      <div className="max-w-[700px] mx-auto">
        {pillars.map((pillar, idx) => (
          <div key={pillar.id}>
            {/* Row: number (left) + content (right) */}
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_7fr] lg:items-start py-8 lg:py-10">
              {/* Decorative number */}
              <div className="flex items-start mb-3 lg:mb-0">
                <span
                  aria-hidden="true"
                  className="font-heading font-bold text-orvia-blue text-[72px] lg:text-[120px] leading-none select-none"
                >
                  {pillar.number}
                </span>
              </div>

              {/* Content */}
              <div className="lg:pl-10">
                <p className="font-display font-bold text-orvia-dark text-[16px] leading-[1.4] tracking-[1.12px] mb-3">
                  {pillar.title}
                </p>
                <p className="font-display text-orvia-dark text-[15px] lg:text-[16px] leading-[1.5] tracking-[0.8px]">
                  {pillar.description}
                </p>
              </div>
            </div>

            {/* Between-pillar divider */}
            {idx < pillars.length - 1 && <div className="h-px bg-orvia-dark" />}
          </div>
        ))}
      </div>
    </section>
  );
}
