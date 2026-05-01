import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const conso = localFont({
  src: "./fonts/ConsoBoldfont.woff2",
  variable: "--font-conso",
  weight: "700",
});

const agrandir = localFont({
  src: [
    {
      path: "./fonts/PPAgrandir-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/PPAgrandir-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/PPAgrandir-GrandHeavy.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-agrandir",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://orvia.be"),
  title: {
    default: "Orvia — Tough love for talent",
    template: "%s — Orvia",
  },
  description:
    "Orvia brengt mensen en organisaties samen die wendbaar zijn of willen worden.",
  openGraph: {
    type: "website",
    locale: "nl_BE",
    siteName: "Orvia",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Orvia — Tough love for talent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-default.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${conso.variable} ${agrandir.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
