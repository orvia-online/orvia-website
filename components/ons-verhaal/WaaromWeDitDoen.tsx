import Image from "next/image";
import Link from "next/link";

export default function WaaromWeDitDoen() {
  return (
    <section className="bg-white px-5 md:px-10 lg:px-[75px] pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16 lg:pb-20">
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 max-w-[1290px] mx-auto">

        {/* Photo + caption column */}
        <div className="w-full lg:w-[564px] lg:flex-shrink-0">
          <div className="relative w-full aspect-[564/325] overflow-hidden">
            <Image
              src="/images/ons-verhaal-founders.png"
              alt="Oprichters Kristel Seymus en Sophie Buysse"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-display text-orvia-dark text-[14px] tracking-[0.7px] leading-relaxed mt-3">
            Oprichters Kristel Seymus (Planet Talent) &amp; Sophie Buysse (Fin Forward)
          </p>
        </div>

        {/* Text column */}
        <div className="w-full lg:flex-1">
          <h2 className="font-heading font-bold text-orvia-dark text-[28px] md:text-[34px] lg:text-[40px] leading-[1.35] mb-6 lg:mb-8">
            Waarom we dit doen?
          </h2>
          <div className="font-display text-orvia-dark text-[15px] lg:text-[16px] tracking-[0.8px] leading-relaxed space-y-4 max-w-[582px] mb-8 lg:mb-10">
            <p>
              Omdat we zagen wat er misloopt. Professionals die vastzitten op plekken waar ze krimpen in plaats van groeien. Organisaties die talent vasthouden uit angst in plaats van het te laten renderen. Een systeem dat iedereen belooft te helpen, maar steeds minder levert.
            </p>
            <p>
              Orvia bestaat omdat we geloven dat het anders kan. Dat talent stroomt wanneer je het ruimte geeft. Dat eerlijkheid méér oplevert dan comfort. Dat de beste samenwerking begint met de moed om de juiste vragen te stellen.
            </p>
          </div>
          <Link href="/het-ecosysteem" className="inline-flex items-center group">
            <span className="h-12 bg-orvia-blue rounded-full flex items-center pl-6 pr-4 -mr-2 font-display font-bold text-[14px] text-orvia-dark group-hover:bg-[#aabff0] transition-colors">
              Ons ecosysteem
            </span>
            <span className="relative z-10 flex-shrink-0 w-12 h-12 bg-orvia-blue rounded-full flex items-center justify-center text-orvia-dark group-hover:bg-[#aabff0] transition-colors">
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
