import Image from "next/image";

const roles = [
  {
    id: "guide",
    name: "Orvia Guide",
    bg: "bg-orvia-lime",
    textColor: "text-orvia-dark",
    dividerColor: "bg-orvia-dark",
    image: "/images/ecosysteem-guide.png",
    quoteImage: "/images/ecosysteem-quote-guide.svg",
    tagline: "Een expert die zijn kennis, visie en netwerk inbrengt in de beweging.",
    description:
      "Je stelt de vragen die anderen vermijden. Je geeft feedback die iemand vooruit helpt, ook als dat ongemakkelijk voelt. Niet als mentor die bevestigt, maar als gids die durft.",
  },
  {
    id: "talent",
    name: "Orvia Talent",
    bg: "bg-orvia-blue",
    textColor: "text-orvia-dark",
    dividerColor: "bg-orvia-dark",
    image: "/images/ecosysteem-talent.png",
    quoteImage: "/images/ecosysteem-quote-talent.svg",
    tagline: "Een professional die zijn carrière uitbouwt op basis van impact, groei en slimme inzetbaarheid.",
    description:
      "Je kiest bewust voor beweging. Je werkt waar je het meeste bijdraagt en wordt scherper door elke context. Orvia begeleidt die keuzes: eerlijk, direct en met oog voor wie je wil worden.",
  },
  {
    id: "client",
    name: "Orvia Client",
    bg: "bg-orvia-dark",
    textColor: "text-white",
    dividerColor: "bg-white",
    image: "/images/ecosysteem-client.png",
    quoteImage: "/images/ecosysteem-quote-client.svg",
    tagline: "Een organisatie die bewust kiest voor gekwalificeerd Orvia-talent om wendbaarheid waar te maken.",
    description:
      "Je krijgt toegang tot professionals die al geselecteerd, begeleid en gegroeid zijn. Wij denken mee over inzetbaarheid, niet alleen over invulling. En we spreken je aan op performance, niet op tevredenheid.",
  },
  {
    id: "driver",
    name: "Orvia Driver",
    bg: "bg-orvia-cream",
    textColor: "text-orvia-dark",
    dividerColor: "bg-orvia-dark",
    image: "/images/ecosysteem-driver.png",
    quoteImage: "/images/ecosysteem-quote-driver.svg",
    tagline: "Een medewerker van Orvia of één van haar dochters die de beweging vanuit overtuiging in de wereld brengt.",
    description:
      "Je bent geen uitvoerder van een strategie. Je bent mede-eigenaar van een beweging. Je verbindt talent met organisaties en bouwt mee aan iets wat nog volop in ontwikkeling is.",
  },
];

function RoleCard({ role }: { role: (typeof roles)[0] }) {
  return (
    <div id={role.id} className={`${role.bg} flex flex-col group`}>
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
          {/* Quote overlay — revealed on hover */}
          <div className="absolute inset-0 flex items-center justify-center px-8 backdrop-blur-md bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={role.quoteImage} alt="" className="w-full max-w-[85%]" />
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="p-6 lg:p-[29px] flex-1 flex flex-col">
        <p className={`font-display font-black text-[15px] lg:text-[16px] tracking-[1.12px] ${role.textColor} mb-2`}>
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

interface OrviaRolesSectionProps {
  heading?: string;
}

export default function OrviaRolesSection({ heading = "Welkom in de beweging." }: OrviaRolesSectionProps) {
  return (
    <section className="bg-white section-padding pt-[96px] md:pt-[120px] lg:pt-[191px] pb-10 md:pb-14 lg:pb-[76px]">
      <h1 className="font-heading font-bold text-orvia-dark text-[28px] md:text-[34px] lg:text-[40px] leading-[1.35] mb-6 md:mb-8 lg:mb-10 max-w-[1290px] mx-auto">
        {heading}
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
