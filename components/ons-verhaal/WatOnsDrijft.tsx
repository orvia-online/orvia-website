import Image from "next/image";

const values = [
  {
    id: "impact",
    label: "Impact",
    description: "Impact is geen titel die je krijgt. Het is wat je achterlaat.",
    icon: "/images/icon-impact.svg",
    iconW: 69,
    iconH: 66,
  },
  {
    id: "lef",
    label: "Lef",
    description: "Zeggen wat anderen verzwijgen. Doen wat anderen uitstellen.",
    icon: "/images/icon-lef.svg",
    iconW: 72,
    iconH: 69,
  },
  {
    id: "blijven-groeien",
    label: "Blijven groeien",
    description: "Groeien betekent soms loslaten wat je was om te worden wat je kunt zijn.",
    icon: "/images/icon-blijven-groeien.svg",
    iconW: 71,
    iconH: 71,
  },
  {
    id: "menselijk",
    label: "Menselijk",
    description: "Onder elke rol, elk profiel, elk cijfer zit een mens. Daar beginnen we.",
    icon: "/images/icon-menselijk.svg",
    iconW: 68,
    iconH: 67,
  },
];

export default function WatOnsDrijft() {
  return (
    <section className="bg-[#edf5b8] section-padding pt-12 md:pt-16 lg:pt-[72px] pb-12 md:pb-16 lg:pb-[112px]">
      <div className="max-w-[1290px] mx-auto">
      <h2 className="font-heading font-bold text-orvia-dark text-[28px] md:text-[34px] lg:text-[40px] leading-[1.35] text-center mb-8">
        Wat ons drijft?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        {values.map((value) => (
          <div key={value.id} className="bg-white px-6 pt-10 pb-6 lg:px-[29px] lg:pt-[64px] lg:pb-[29px] flex flex-col">
            {/* Icon — fixed-height container keeps all icon bottoms on the same baseline */}
            <div className="mb-5 lg:h-[71px] lg:flex lg:items-end lg:mb-[55px]">
              <Image
                src={value.icon}
                alt=""
                width={value.iconW}
                height={value.iconH}
              />
            </div>

            {/* Label + divider */}
            <p className="font-display font-black text-orvia-dark text-[15px] lg:text-[16px] tracking-[1.12px] mb-2 lg:mb-[18px]">
              {value.label}
            </p>
            <div className="h-px bg-orvia-dark mb-4 lg:mb-5" />

            {/* Description */}
            <p className="font-display text-orvia-dark text-[13px] lg:text-[14px] leading-[1.6] tracking-[0.28px]">
              {value.description}
            </p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
