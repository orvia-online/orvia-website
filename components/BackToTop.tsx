"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Terug naar boven"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 bg-orvia-lime text-orvia-dark rounded-full shadow-md hover:bg-[#d4e15c] transition-colors text-xl font-bold"
    >
      ↑
    </button>
  );
}
