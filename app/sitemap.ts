import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://orvia.be";
  const lastModified = new Date();

  return [
    { url: base, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/ons-verhaal`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/hoe-we-werken`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/het-ecosysteem`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];
}
