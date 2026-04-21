import Image from "next/image";
import Link from "next/link";

export default function OnsVerhaalHero() {
  return (
    <section className="bg-white px-5 md:px-10 lg:px-[75px] pt-[96px] md:pt-[120px] lg:pt-[190px] pb-12 md:pb-16 lg:pb-20">
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 max-w-[1290px] mx-auto">

        {/* Text column */}
        <div className="w-full lg:flex-1">
          <h1 className="font-heading font-bold text-orvia-dark text-[36px] md:text-[48px] lg:text-[62px] leading-[1.2] mb-6 lg:mb-8">
            Tough love for talent.
          </h1>
          <div className="font-display text-orvia-dark text-[15px] lg:text-[16px] tracking-[0.8px] leading-relaxed space-y-4 max-w-[458px] mb-8 lg:mb-10">
            <p>
              Alles begint met liefde voor talent. Echte liefde. Niet de versie die iemand comfortabel houdt terwijl er meer in zit, maar de versie die durft te zeggen waar iemand zijn volle potentieel kan benutten. Die het gesprek voert dat anderen vermijden. Niet om te confronteren, maar omdat stilzwijgen niemand verder brengt.
            </p>
            <p>
              Dat is Tough Love. En het is de enige liefde die telt.
            </p>
          </div>
          <Link href="/hoe-we-werken" className="inline-flex items-center group">
            <span className="h-12 bg-orvia-blue rounded-full flex items-center pl-6 pr-4 -mr-2 font-display font-bold text-[14px] text-orvia-dark group-hover:bg-[#aabff0] transition-colors">
              Benieuwd hoe we werken?
            </span>
            <span className="relative z-10 flex-shrink-0 w-12 h-12 bg-orvia-blue rounded-full flex items-center justify-center text-orvia-dark group-hover:bg-[#aabff0] transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 13L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        </div>

        {/* Photo column */}
        <div className="relative w-full lg:w-[564px] lg:flex-shrink-0">
          <div className="relative w-full aspect-[564/325] overflow-hidden">
            <Image
              src="/images/ons-verhaal-hero.png"
              alt="Tough love for talent"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* "Impact boven perfectie" overlay — sits at bottom-left of the photo */}
          <div className="absolute bottom-0 left-0 lg:-left-[10%] w-[80%] lg:w-[95%] translate-y-[30%] pointer-events-none select-none">
            <Image
              src="/images/ons-verhaal-impact.png"
              alt=""
              width={595}
              height={173}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
