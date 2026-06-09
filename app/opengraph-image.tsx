import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Orvia — Tough love for talent";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const svgRaw = await readFile(
    join(process.cwd(), "public/images/logo-dark.svg"),
    "utf8"
  );
  const svgResolved = svgRaw.replace(/var\(--fill-0,\s*#211E1D\)/gi, "#211E1D");
  const svgDataUrl = `data:image/svg+xml;base64,${Buffer.from(svgResolved).toString("base64")}`;

  // Logo viewBox is 119×35 — scale to 560px wide
  const logoWidth = 560;
  const logoHeight = Math.round(logoWidth * (35 / 119));

  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={svgDataUrl} width={logoWidth} height={logoHeight} alt="Orvia" />
      </div>
    ),
    { ...size }
  );
}
