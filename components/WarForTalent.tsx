import Image from "next/image";

export default function WarForTalent() {
  return (
    <section className="bg-orvia-cream py-12 md:py-16 lg:py-20 px-5 md:px-10 lg:px-[75px]">
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 max-w-[1290px] mx-auto">
        {/* Text */}
        <div className="w-full lg:flex-1">
          <h2 className="font-heading font-bold text-orvia-dark text-[28px] md:text-[34px] lg:text-[40px] leading-[1.35] mb-6 lg:mb-8">
            De war for talent
            <br />
            werkt niet langer.
          </h2>

          <div className="font-display text-orvia-dark text-[15px] lg:text-[16px] tracking-[0.8px] leading-relaxed space-y-4 max-w-[598px]">
            <p>
              Lonen hoger dan ooit. Welzijnsbudgetten gaan door het dak. En
              toch zien we meer uitval, minder productiviteit en een dalende
              betrokkenheid.
            </p>
            <p>
              <strong className="font-semibold">
                Het systeem werkt niet meer, voor niemand.{" "}
              </strong>
              Niet voor de organisatie die talent vasthoudt uit angst en
              ondertussen performance verliest. Niet voor de professional die
              blijft omdat het comfortabel is, maar langzaam krimpt in plaats
              van groeit.
            </p>
            <p>
              <strong className="font-semibold">
                Wendbaarheid is het antwoord.{" "}
              </strong>
              Voor organisaties die scherp willen blijven. Voor professionals
              die willen groeien op basis van impact, niet op basis van hoe
              lang ze ergens zitten.
            </p>
            <p>
              <strong className="font-semibold">
                Bij Orvia stellen we de economische realiteit centraal voor
                beide kanten.{" "}
              </strong>
              Impact voor profiel en performance voor retentie.
            </p>
          </div>
        </div>

        {/* Photo */}
        <div className="relative w-full h-[260px] md:h-[360px] lg:w-[475px] lg:h-[496px] lg:flex-shrink-0 rounded-lg overflow-hidden">
          <Image
            src="/images/content-photo.png"
            alt="Orvia in actie"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
