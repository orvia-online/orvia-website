const SEPARATOR = "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0";

function buildItems(text: string) {
  return Array(8).fill(`${text}${SEPARATOR}`).join("");
}

interface MarqueeProps {
  text?: string;
  bg?: string;
}

export default function Marquee({
  text = '"De beste versie van jezelf bereik je niet door te blijven waar je zit."',
  bg = "#e0ed6f",
}: MarqueeProps) {
  const items = buildItems(text);
  return (
    <div className="overflow-hidden py-[14px]" style={{ backgroundColor: bg }}>
      <div
        className="flex whitespace-nowrap animate-marquee"
        style={{ willChange: "transform" }}
      >
        <span className="font-display font-black text-orvia-dark text-[18px] tracking-[1.26px]">
          {items}
        </span>
        <span
          className="font-display font-black text-orvia-dark text-[18px] tracking-[1.26px]"
          aria-hidden
        >
          {items}
        </span>
      </div>
    </div>
  );
}
