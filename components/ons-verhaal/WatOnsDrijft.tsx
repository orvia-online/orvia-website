import Image from "next/image";

const values = [
  {
    id: "goesting",
    label: "Goesting",
    description: "Energie, positiviteit, dynamiek.",
    icon: "/images/icon-goesting.svg",
    iconW: 69,
    iconH: 66,
  },
  {
    id: "daadkracht",
    label: "Daadkracht",
    description: "Ownership, actie, resultaat.",
    icon: "/images/icon-daadkracht.svg",
    iconW: 72,
    iconH: 69,
  },
  {
    id: "always-learning",
    label: "Always learning",
    description: "Groeimindset, experiment.",
    icon: "/images/icon-always-learning.svg",
    iconW: 72,
    iconH: 69,
  },
  {
    id: "verbonden",
    label: "Verbonden",
    description: "Connectie, warmte, cocreatie.",
    icon: "/images/icon-verbonden.svg",
    iconW: 72,
    iconH: 69,
  },
];

export default function WatOnsDrijft() {
  return (
    <section className="bg-[#edf5b8] px-5 md:px-10 lg:px-[75px] pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16 lg:pb-20">
      <div className="max-w-[1290px] mx-auto">
      <h2 className="font-heading font-bold text-orvia-dark text-[28px] md:text-[34px] lg:text-[40px] leading-[1.35] text-center mb-8 lg:mb-10">
        Wat ons drijft?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        {values.map((value) => (
          <div key={value.id} className="bg-white p-6 lg:p-[29px] flex flex-col">
            {/* Icon */}
            <div className="mb-5">
              <Image
                src={value.icon}
                alt=""
                width={value.iconW}
                height={value.iconH}
              />
            </div>

            {/* Label + divider */}
            <p className="font-display font-bold text-orvia-dark text-[15px] lg:text-[16px] tracking-[1.12px] mb-2">
              {value.label}
            </p>
            <div className="h-px bg-orvia-dark mb-4" />

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
