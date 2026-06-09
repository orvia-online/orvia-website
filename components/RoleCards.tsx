import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    id: "continu",
    icon: "/images/icon-card-continu.svg",
    iconW: 64,
    iconH: 61,
    title: "Continu aligneren.",
    body: "Anderen beginnen bij een profiel. Wij beginnen bij wat er moet gebeuren. Wat moet er beter, sneller, anders? Pas dan kijken we wie daarvoor nodig is.",
  },
  {
    id: "kwaliteit",
    icon: "/images/icon-card-kwaliteit.svg",
    iconW: 74,
    iconH: 70,
    title: "Kwaliteit is geen belofte. Het is een traject.",
    body: "Iedereen claimt kwaliteit. Wij leggen het vast. Op drie assen die er echt toe doen: wat iemand kan, hoe iemand werkt en of iemand bijdraagt aan het grotere geheel.",
  },
  {
    id: "klant",
    icon: "/images/icon-card-klant.svg",
    iconW: 75,
    iconH: 73,
    title: "Jij bent de klant, wij de werkgever.",
    body: "In elke samenwerking zijn er drie partijen. Wij laten die driehoek niet voor wat hij is, wij managen hem. Van verwachtingen stellen tot feedback geven.",
  },
];

function ServiceCard({ card }: { card: (typeof cards)[0] }) {
  return (
    <div className="bg-[#edf5b8] flex flex-col p-8 lg:p-10 lg:[grid-row:span_4] lg:grid lg:[grid-template-rows:subgrid]">
      <div className="mb-4 lg:h-[80px] lg:flex lg:items-end lg:mb-6">
        <Image src={card.icon} alt="" width={card.iconW} height={card.iconH} className="max-w-[80px]" />
      </div>
      <p className="font-display font-black text-[15px] lg:text-[16px] tracking-[1.12px] text-orvia-dark mb-2 leading-[1.4]">
        {card.title}
      </p>
      <div className="h-px bg-orvia-dark mb-5" />
      <p className="font-display text-orvia-dark text-[13px] lg:text-[14px] leading-[1.6] tracking-[0.28px]">
        {card.body}
      </p>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-x-5 lg:gap-y-0">
          {cards.map((card) => (
            <ServiceCard key={card.id} card={card} />
          ))}
        </div>

        <div className="mt-8 lg:mt-10">
          <Link href="/hoe-we-werken" className="inline-flex items-center group">
            <span className="h-12 bg-orvia-dark rounded-full flex items-center pl-6 pr-4 -mr-2 font-display font-bold text-[14px] text-white group-hover:bg-[#5c5956] transition-colors">
              Ontdek hoe we werken
            </span>
            <span className="relative z-10 flex-shrink-0 w-12 h-12 bg-orvia-dark rounded-full flex items-center justify-center text-white group-hover:bg-[#5c5956] transition-colors">
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
