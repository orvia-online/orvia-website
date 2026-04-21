import Image from "next/image";

// ─── Update quotes here ───────────────────────────────────────────────────────
const roles = [
  {
    id: "guide",
    name: "Orvia Guide",
    bg: "bg-orvia-lime",
    textColor: "text-orvia-dark",
    dividerColor: "bg-orvia-dark",
    image: "/images/hww-guide.png",
    tagline: "Een expert die zijn kennis, visie en netwerk inbrengt in de beweging.",
    description:
      "Je stelt de vragen die anderen vermijden. Je geeft feedback die iemand vooruit helpt, ook als dat ongemakkelijk voelt. Niet als mentor die bevestigt, maar als gids die durft.",
    quote: "«Placeholder quote voor Orvia Guide»",
  },
  {
    id: "talent",
    name: "Orvia Talent",
    bg: "bg-orvia-blue",
    textColor: "text-orvia-dark",
    dividerColor: "bg-orvia-dark",
    image: "/images/hww-talent.png",
    tagline: "Een professional die zijn carrière uitbouwt op basis van impact, groei en slimme inzetbaarheid.",
    description:
      "Je kiest bewust voor beweging. Je werkt waar je het meeste bijdraagt en wordt scherper door elke context. Orvia begeleidt die keuzes: eerlijk, direct en met oog voor wie je wil worden.",
    quote: "Je moet er niet bij horen, je moet iets bijdragen.",
  },
  {
    id: "client",
    name: "Orvia Client",
    bg: "bg-orvia-dark",
    textColor: "text-white",
    dividerColor: "bg-white",
    image: "/images/hww-client.png",
    tagline: "Een organisatie die bewust kiest voor gekwalificeerd Orvia-talent om wendbaarheid waar te maken.",
    description:
      "Je krijgt toegang tot professionals die al geselecteerd, begeleid en gegroeid zijn. Wij denken mee over inzetbaarheid, niet alleen over invulling. En we spreken je aan op performance, niet op tevredenheid.",
    quote: "«Placeholder quote voor Orvia Client»",
  },
  {
    id: "driver",
    name: "Orvia Driver",
    bg: "bg-orvia-cream",
    textColor: "text-orvia-dark",
    dividerColor: "bg-orvia-dark",
    image: "/images/hww-driver.png",
    tagline: "Een medewerker van Orvia of één van haar dochters die de beweging vanuit overtuiging in de wereld brengt.",
    description:
      "Je bent geen uitvoerder van een strategie. Je bent mede-eigenaar van een beweging. Je verbindt talent met organisaties en bouwt mee aan iets wat nog volop in ontwikkeling is.",
    quote: "«Placeholder quote voor Orvia Driver»",
  },
];
// ─────────────────────────────────────────────────────────────────────────────

function RoleCard({ role }: { role: (typeof roles)[0] }) {
  return (
    // `group` enables CSS-only hover — no client directive needed
    <div className={`${role.bg} flex flex-col group`}>
      {/* Photo — inset from card edges so the bg colour shows as a frame */}
      <div className="mx-7 mt-7 lg:mx-[35px] lg:mt-[30px]">
        <div className="relative w-full aspect-[565/377] overflow-hidden">
          <Image
            src={role.image}
            alt={role.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
          {/* Hover overlay — glass/blur effect, appears on card hover */}
          <div className="absolute inset-0 flex items-center justify-center px-8 backdrop-blur-md bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="font-heading font-bold text-white text-[18px] md:text-[22px] lg:text-[26px] leading-[1.25] text-center drop-shadow-sm">
              {role.quote}
            </p>
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="p-6 lg:p-[29px] flex-1 flex flex-col">
        <p className={`font-display font-bold text-[15px] lg:text-[16px] tracking-[1.12px] ${role.textColor} mb-2`}>
          {role.name}
        </p>
        <div className={`h-px ${role.dividerColor} mb-4`} />
        <p className={`font-display font-bold text-[13px] lg:text-[14px] leading-[1.6] tracking-[0.28px] ${role.textColor} mb-2`}>
          {role.tagline}
        </p>
        <p className={`font-display text-[13px] lg:text-[14px] leading-[1.6] tracking-[0.28px] ${role.textColor}`}>
          {role.description}
        </p>
      </div>
    </div>
  );
}

export default function HoeWeWerkenHero() {
  return (
    <section className="bg-white px-5 md:px-10 lg:px-[75px] pt-[96px] md:pt-[120px] lg:pt-[160px] pb-0">
      <h1 className="font-heading font-bold text-orvia-dark text-[28px] md:text-[34px] lg:text-[40px] leading-[1.35] mb-6 md:mb-8 lg:mb-10 max-w-[1290px] mx-auto">
        Welkom in de beweging.
      </h1>

      {/* gap-6 = 24px — matches Figma's ~24–25px inter-card spacing */}
      <div className="max-w-[1290px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {roles.map((role) => (
          <RoleCard key={role.id} role={role} />
        ))}
      </div>
    </section>
  );
}
