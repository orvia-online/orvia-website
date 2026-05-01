import Image from "next/image";

const blocks = [
  {
    id: "ontzorging",
    imageRight: true,
    image: "/images/hww-ontzorging.png",
    heading: "Ontzorging geeft performance.",
    body: (
      <>
        <p className="mb-6">
          People management vreet energie die je nodig hebt voor strategie en
          groei. Coaching, ontwikkeling, moeilijke gesprekken: wij nemen het
          over. Maar ontzorging betekent voor ons niet dat we problemen
          wegstoppen.{" "}
          <strong>
            We voeren de gesprekken die jij niet altijd kan of wil voeren. We
            stellen verwachtingen waar anderen dat niet durven.
          </strong>
        </p>
        <p>
          Het resultaat? Een team dat presteert omdat het weet waar het aan
          toe is.
        </p>
      </>
    ),
  },
  {
    id: "qlabel",
    imageRight: false,
    image: "/images/hww-qlabel.png",
    heading: "Het Q-label geeft zekerheid.",
    body: (
      <>
        <p className="mb-6">
          Elk Orvia-talent doorloopt ons Quality Label en wordt continu
          begeleid op skillset, mindset en ecosysteemfit. Ze groeien binnen
          een sterk programma en een actieve community.
        </p>
        <p>
          <strong>
            Het Q-label is geen sticker na een intakegesprek, het is een
            doorlopend proces.
          </strong>{" "}
          Talent dat bij jou binnenkomt, heeft al bewezen dat het beweegt,
          leert en impact maakt. Je weet wat je krijgt. Niet op basis van een
          cv, maar op basis van bewezen groei.
        </p>
      </>
    ),
  },
  {
    id: "flexibiliteit",
    imageRight: true,
    image: "/images/hww-flexibiliteit.png",
    heading: "Flexibiliteit geeft vrijheid.",
    body: (
      <>
        <p className="mb-6">
          Meer talent nodig? We schalen op. Minder? We schalen af. Ander
          profiel nodig? We vervangen. Geen ontslagtrauma, geen slepende
          gesprekken.{" "}
          <strong>
            Wie niet flexibel kan schakelen met talent, zit gevangen in zijn
            eigen structuur. Wie dat wel kan, beweegt mee met wat de business
            vraagt.
          </strong>
        </p>
        <p>Jij schakelt wanneer de business dat vraagt.</p>
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
              <h1 className="font-heading font-bold text-orvia-dark text-[28px] md:text-[34px] lg:text-[40px] leading-[1.35] mb-6 lg:max-w-[440px]">
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
