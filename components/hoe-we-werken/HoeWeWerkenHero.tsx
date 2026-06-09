import Image from "next/image";

const blocks = [
  {
    id: "continu",
    imageRight: true,
    image: "/images/hww-ontzorging.png",
    icon: "/images/icon-card-continu.svg",
    iconW: 64,
    iconH: 61,
    heading: "Continu aligneren.",
    body: (
      <>
        <p className="mb-6">
          Anderen beginnen bij een profiel.{" "}
          <strong>Wij beginnen bij wat er moet gebeuren.</strong> Wat moet er
          beter, sneller, anders? Pas dan kijken we wie daarvoor nodig is.
        </p>
        <p className="mb-6">
          <strong>
            We aligneren profiel, taken en verwachtingen doorlopend
          </strong>{" "}
          en niet eenmalig bij de start. Opschalen, afschalen, vervangen: het
          gaat zonder drama omdat{" "}
          <strong>impact de enige maatstaf</strong> is.
        </p>
        <p>
          <strong>Impact stuurt. De rest volgt.</strong>
        </p>
      </>
    ),
  },
  {
    id: "kwaliteit",
    imageRight: false,
    image: "/images/hww-qlabel.png",
    icon: "/images/icon-card-kwaliteit.svg",
    iconW: 74,
    iconH: 70,
    heading: "Kwaliteit is geen belofte.",
    body: (
      <>
        <p className="mb-6">
          <strong>Kwaliteit is een traject.</strong> Iedereen claimt
          kwaliteit. Wij leggen het vast. Op drie assen die er echt toe doen:
          wat iemand kan, hoe iemand werkt en of iemand bijdraagt aan het
          grotere geheel.
        </p>
        <p className="mb-6">
          <strong>
            Geen momentopname bij aanvang, maar een doorlopende meting.
          </strong>{" "}
          Zo weet jij niet alleen wie je binnenkrijgt, maar ook wie diegene
          over zes maanden is.
        </p>
        <p>
          <strong>Groei voorspelbaar maken. Dat is het Q-label.</strong>
        </p>
      </>
    ),
  },
  {
    id: "klant",
    imageRight: true,
    image: "/images/hww-flexibiliteit.png",
    icon: "/images/icon-card-klant.svg",
    iconW: 75,
    iconH: 73,
    heading: "Jij bent de klant.",
    body: (
      <>
        <p className="mb-6">
          <strong>Wij zijn de werkgever.</strong> In elke samenwerking zijn
          er drie partijen. Wij laten die driehoek niet voor wat hij is, wij
          managen hem.
        </p>
        <p className="mb-6">
          <strong>
            Van verwachtingen stellen tot feedback geven, van bijsturen tot
            loslaten
          </strong>{" "}
          wanneer dat nodig is. Zodat jij klant blijft, en wij de werkgever.
        </p>
        <p>
          <strong>Geen gedoe. Wel resultaat.</strong>
        </p>
      </>
    ),
  },
];

export default function HoeWeWerkenHero() {
  return (
    <section className="bg-white section-padding pt-[96px] md:pt-[120px] lg:pt-[180px] pb-0">
      <div className="max-w-[1290px] mx-auto space-y-10 md:space-y-12 lg:space-y-[56px]">
        {blocks.map((block) => (
          <div
            key={block.id}
            className={`flex flex-col gap-8 lg:gap-10 lg:items-start ${
              block.imageRight ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* Text */}
            <div className="lg:flex-1">
              <div className="mb-4 lg:h-[70px] lg:flex lg:items-end lg:mb-6">
                <Image src={block.icon} alt="" width={block.iconW} height={block.iconH} className="max-w-[70px]" />
              </div>
              <h1 className="font-heading font-bold text-orvia-dark text-[28px] md:text-[34px] lg:text-[40px] leading-[1.35] mb-6">
                {block.heading}
              </h1>
              <div className="font-display text-orvia-dark text-[15px] lg:text-[16px] leading-[1.5] tracking-[0.8px] [&_strong]:font-bold">
                {block.body}
              </div>
            </div>

            {/* Image */}
            <div className="lg:flex-1 relative aspect-[565/325] overflow-hidden">
              <Image
                src={block.image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={block.id === "ontzorging"}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
