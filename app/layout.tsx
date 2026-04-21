import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans, Montserrat } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Orvia — Tough love for talent",
  description:
    "Orvia brengt mensen en organisaties samen die wendbaar zijn of willen worden.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${syne.variable} ${jakarta.variable} ${montserrat.variable}`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
