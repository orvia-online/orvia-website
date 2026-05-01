import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative min-h-[500px] md:min-h-[580px] lg:h-[643px] bg-orvia-dark overflow-hidden">
      {/* Background photo with dark overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/contact-hero-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-35"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end section-padding pt-[80px]">
        <div className="max-w-[1290px] mx-auto w-full pb-12 md:pb-16 lg:pb-[100px]">
          <h1 className="font-heading font-bold text-white text-[36px] md:text-[48px] lg:text-[62px] leading-[1.2] mb-5 lg:mb-6 max-w-[662px]">
            Laten we het gesprek aangaan.
          </h1>
          <p className="font-display font-bold text-white text-[18px] lg:text-[22px] tracking-[0.66px] mb-3 lg:mb-4">
            Schud af wat niet meer werkt, en ga verder.
          </p>
          <p className="font-display text-white text-[15px] lg:text-[16px] tracking-[0.8px] leading-relaxed max-w-[481px] mb-8 lg:mb-10">
            Een goed gesprek begint met eerlijkheid over waar je staat. Niet met
            wat je hoopt te horen. Als je daar klaar voor bent, dan staan wij
            klaar.
          </p>

          {/* CTA — smooth-scrolls to the form */}
          <div>
            <a href="#contact-form" className="inline-flex items-center group">
              <span className="h-12 bg-orvia-blue rounded-full flex items-center pl-6 pr-4 -mr-2 font-display font-bold text-[14px] text-orvia-dark group-hover:bg-[#aabff0] transition-colors">
                Ik ben klaar om te bewegen
              </span>
              <span className="relative z-10 flex-shrink-0 w-12 h-12 bg-orvia-blue rounded-full flex items-center justify-center text-orvia-dark group-hover:bg-[#aabff0] transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 13L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
