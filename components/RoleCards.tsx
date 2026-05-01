import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    id: "ontzorging",
    icon: "/images/icon-card-ontzorging.svg",
    title: "Ontzorging geeft performance",
    body: "People management vreet energie die je nodig hebt voor strategie en groei. Coaching, ontwikkeling, moeilijke gesprekken: wij nemen het over. Jij geeft richting en boekt resultaten.",
    boldLine: "Wij het peoplemanagement. Jij de performance.",
  },
  {
    id: "qlabel",
    icon: "/images/icon-card-qlabel.svg",
    title: "Het Q-label geeft zekerheid",
    body: "Elk Orvia-talent doorloopt ons Quality Label en wordt continu begeleid op skillset, mindset en ecosysteemfit. Ze groeien binnen een sterk programma en een actieve community.",
    boldLine: "Jij weet wat je krijgt. Altijd.",
  },
  {
    id: "flexibiliteit",
    icon: "/images/icon-card-flexibiliteit.svg",
    title: "Flexibiliteit geeft vrijheid",
    body: "Meer talent nodig? We schalen op. Minder? We schalen af. Ander profiel nodig? We vervangen. Geen ontslagtrauma, geen slepende gesprekken.",
    boldLine: "Jij schakelt wanneer de business dat vraagt.",
  },
];

function ServiceCard({ card }: { card: (typeof cards)[0] }) {
  return (
    <div className="bg-[#edf5b8] flex flex-col p-6 lg:p-[29px]">
      <div className="mb-4 w-[80px] h-[80px] relative flex-shrink-0">
        <Image src={card.icon} alt="" fill sizes="80px" className="object-contain object-left" />
      </div>
      <p className="font-display font-black text-[15px] lg:text-[16px] tracking-[1.12px] text-orvia-dark mb-2 leading-[1.4] min-h-[2.8em]">
        {card.title}
      </p>
      <div className="h-px bg-orvia-dark mb-4" />
      <div className="font-display text-orvia-dark text-[13px] lg:text-[14px] leading-[1.6] tracking-[0.28px]">
        <p className="mb-4">{card.body}</p>
        <p className="font-bold">{card.boldLine}</p>
      </div>
    </div>
  );
}

export default function RoleCards() {
  return (
    <section className="bg-white section-padding pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16 lg:pb-[102px]">
      <div className="max-w-[1290px] mx-auto">
        <h2 className="font-heading font-bold text-orvia-dark text-[28px] md:text-[34px] lg:text-[40px] leading-[1.35] mb-2 text-center">
          We brengen wendbaarheid.
        </h2>
        <p className="font-display font-bold text-orvia-dark text-[16px] lg:text-[18px] mb-8 lg:mb-10 text-center">
          Dit is hoe we dat aanpakken.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {cards.map((card) => (
            <ServiceCard key={card.id} card={card} />
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
