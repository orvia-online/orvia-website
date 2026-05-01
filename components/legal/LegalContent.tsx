import type { ReactNode } from "react";

export default function LegalContent({ children }: { children: ReactNode }) {
  return (
    <section className="bg-orvia-cream section-padding pt-12 md:pt-16 lg:pt-20 pb-20 md:pb-24 lg:pb-32">
      <div className="max-w-[780px] mx-auto legal-prose">
        {children}
      </div>
    </section>
  );
}
