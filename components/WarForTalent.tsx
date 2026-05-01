import Image from "next/image";

export default function WarForTalent() {
  return (
    <section className="bg-orvia-cream pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[55px] section-padding">
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
              Lonen liggen hoger dan ooit. Welzijnsbudgetten gaan door het dak.
              En toch zien we meer uitval, minder productiviteit en een dalende
              betrokkenheid. De oorzaak ligt niet bij de mensen. Die ligt in het
              denken.
            </p>
            <p>
              <strong className="font-bold">
                Wie zijn hele HR-beleid bouwt rond talent vinden én houden,
                verliest vroeg of laat het zicht op performance.{" "}
              </strong>
              Het gevolg? Managers die geen verwachtingen meer durven uitspreken
              en moeilijke gesprekken die niet worden aangegaan.
            </p>
            <p>
              Wie niet bereid is iemand te verliezen, krijgt nooit het beste
              van diezelfde persoon.{" "}
              <strong className="font-bold">
                Bij Orvia stellen we de economische realiteit centraal. Impact
                voor profiel en performance voor retentie.{" "}
              </strong>
              Wil je betere performance van je mensen? Stop dan eerst met
              vasthouden.
            </p>
          </div>
        </div>

        {/* Photo */}
        <div className="relative w-full h-[260px] md:h-[360px] lg:w-[475px] lg:h-[496px] lg:flex-shrink-0 rounded-lg overflow-hidden">
          <Image
            src="/images/content-photo.png"
            alt="Orvia in actie"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
