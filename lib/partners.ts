const UTM_BASE = {
  utm_source: "orvia",
  utm_medium: "website",
  utm_campaign: "partner-referral",
};

const BASES = {
  "planet-talent": "https://www.planet-talent.com/voor-bedrijven",
  "fin-forward": "https://finforward.be",
};

export type Partner = keyof typeof BASES;

export function partnerUrl(partner: Partner, content: string): string {
  const params = new URLSearchParams({ ...UTM_BASE, utm_content: content });
  return `${BASES[partner]}?${params.toString()}`;
}
