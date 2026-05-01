import Image from "next/image";

const dimensions = [
  {
    id: "skillset",
    icon: "/images/icon-qlabel-skillset.svg",
    title: "Skillset:",
    subtitle: "wat je kan",
    items: [
      "Diploma",
      "Leervermogen",
      "Technische of inhoudelijke expertise",
    ],
    footnote: "Per expertisedomein",
  },
  {
    id: "mindset",
    icon: "/images/icon-qlabel-mindset.svg",
    title: "Mindset:",
    subtitle: "hoe je (samen)werkt",
    items: [
      "Professionaliteit",
      "Sociale vaardigheden",
      "Drive & ambitie",
      "Coachability",
    ],
    footnote: "Voor alle medewerkers van Planet Talent",
  },
  {
    id: "ecosystem",
    icon: "/images/icon-qlabel-ecosystem.svg",
    title: "Ecosystem fit:",
    subtitle: "bijdrage aan het grotere geheel",
    items: [
      "Rolbreedte",
      "Flexibiliteit",
      "Community engagement",
    ],
    footnote: "Voor alle medewerkers van Planet Talent",
  },
];

export default function QLabelSection() {
  return (
    <section className="bg-white section-padding pt-16 md:pt-20 lg:pt-[98px] pb-0">
      <div className="max-w-[1290px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-10 lg:mb-12">
          <h2 className="font-heading font-bold text-orvia-dark text-[28px] md:text-[34px] lg:text-[40px] leading-[1.35] mb-3">
            Kwaliteit die je kunt aantonen.
          </h2>
          <p className="font-display font-bold text-orvia-dark text-[16px] lg:text-[18px]">
            Een Q-label met drie dimensies.
          </p>
        </div>

        {/* Dimension cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-y-0 lg:gap-x-5 md:grid-rows-[auto_auto_auto_1fr_auto] md:min-h-[440px] lg:min-h-[440px]">
          {dimensions.map((dim) => (
            <div key={dim.id} className="bg-[#edf5b8] pt-12 px-6 pb-6 md:pt-16 lg:pt-[93px] lg:px-7 lg:pb-7 flex flex-col min-h-[300px] md:grid md:grid-rows-subgrid md:row-span-5">
              {/* Row 1: Icon */}
              <div className="pb-4">
                <Image
                  src={dim.icon}
                  alt=""
                  width={55}
                  height={57}
                />
              </div>

              {/* Row 2: Label */}
              <p className="font-display font-black text-orvia-dark text-[14px] lg:text-[16px] leading-[1.4] tracking-[1.12px]">
                {dim.title}
                <br />
                {dim.subtitle}
              </p>

              {/* Row 3: Divider */}
              <div className="h-px bg-orvia-dark my-4" />

              {/* Row 4: Bullet list */}
              <ul className="space-y-0.5">
                {dim.items.map((item) => (
                  <li
                    key={item}
                    className="font-display font-bold text-orvia-dark text-[13px] lg:text-[14px] leading-[1.55] flex items-start gap-2"
                  >
                    <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-orvia-dark flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Row 5: Footer */}
              <div className="mt-6">
                <p className="font-display font-bold text-orvia-dark text-[10px] leading-[1.6] tracking-[0.2px]">
                  {dim.footnote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
