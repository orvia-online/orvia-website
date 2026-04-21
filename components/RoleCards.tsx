import Image from "next/image";
import Link from "next/link";

const roles = [
  {
    id: "guide",
    name: "Orvia Guide",
    bg: "bg-orvia-lime",
    textColor: "text-orvia-dark",
    dividerColor: "bg-orvia-dark",
    image: "/images/role-guide.png",
    description:
      "Een expert die zijn kennis, visie en netwerk inbrengt in de beweging en zo bijdraagt aan de groei van talent en organisaties.",
    hoverQuote: "«Placeholder quote voor Orvia Guide»",
  },
  {
    id: "talent",
    name: "Orvia Talent",
    bg: "bg-orvia-blue",
    textColor: "text-orvia-dark",
    dividerColor: "bg-orvia-dark",
    image: "/images/role-talent.png",
    description:
      "Een professional die navigeert binnen het Orvia-ecosysteem en zijn carrière uitbouwt op basis van impact, groei en slimme inzetbaarheid.",
    hoverQuote: "«Placeholder quote voor Orvia Talent»",
  },
  {
    id: "client",
    name: "Orvia Client",
    bg: "bg-orvia-dark",
    textColor: "text-white",
    dividerColor: "bg-white",
    image: "/images/role-client.png",
    description:
      "Een organisatie die gelooft in wendbaarheid en bewust kiest voor gekwalificeerd Orvia-talent om die wendbaarheid waar te maken.",
    hoverQuote: "«Placeholder quote voor Orvia Client»",
  },
  {
    id: "driver",
    name: "Orvia Driver",
    bg: "bg-orvia-cream",
    textColor: "text-orvia-dark",
    dividerColor: "bg-orvia-dark",
    image: "/images/role-driver.png",
    description:
      "Een medewerker van Orvia of één van haar dochters die de beweging mee in de wereld brengt, met daadkracht en vanuit overtuiging.",
    hoverQuote: "«Placeholder quote voor Orvia Driver»",
  },
];

function RoleCard({ role }: { role: (typeof roles)[0] }) {
  return (
    <div className={`${role.bg} flex flex-col p-6 lg:p-[29px] group`}>
      {/* Role label + divider */}
      <p className={`font-display font-bold text-[15px] lg:text-[16px] tracking-[1.12px] ${role.textColor} mb-2`}>
        {role.name}
      </p>
      <div className={`h-px ${role.dividerColor} mb-4`} />

      {/* Description */}
      <p className={`font-display text-[13px] lg:text-[14px] leading-[1.6] tracking-[0.28px] ${role.textColor} mb-5`}>
        {role.description}
      </p>

      {/* Image with hover overlay */}
      <div className="relative w-full aspect-[242/248] overflow-hidden mt-auto">
        <Image
          src={role.image}
          alt={role.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center p-4 backdrop-blur-md bg-white/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="font-display font-semibold text-white text-[14px] lg:text-[15px] leading-snug text-center drop-shadow-md">
            {role.hoverQuote}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function RoleCards() {
  return (
    <section className="bg-white px-5 md:px-10 lg:px-[75px] pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16 lg:pb-20">
      <div className="max-w-[1290px] mx-auto">
        <h2 className="font-heading font-bold text-orvia-dark text-[28px] md:text-[34px] lg:text-[40px] leading-[1.35] mb-8 lg:mb-10">
          Welkom in de beweging.
        </h2>

        {/* 1 col on mobile, 2 on md, 4 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {roles.map((role) => (
            <RoleCard key={role.id} role={role} />
          ))}
        </div>

        <div className="mt-8 lg:mt-10">
          <Link href="/hoe-we-werken" className="inline-flex items-center group">
            <span className="h-12 bg-orvia-dark rounded-full flex items-center pl-6 pr-4 -mr-2 font-display font-bold text-[14px] text-white group-hover:bg-[#3a3533] transition-colors">
              Ontdek hoe we werken
            </span>
            <span className="relative z-10 flex-shrink-0 w-12 h-12 bg-orvia-dark rounded-full flex items-center justify-center text-white group-hover:bg-[#3a3533] transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 13L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
