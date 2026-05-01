import { Resend } from "resend";
import { NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
if (!RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY environment variable is not set");
}

const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL ?? "info@orvia.be";
const FROM_EMAIL = process.env.FROM_EMAIL ?? "hallo@orvia.be";

const resend = new Resend(RESEND_API_KEY);

function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Ongeldig verzoekformaat." }, { status: 400 });
    }

    if (typeof body !== "object" || body === null) {
      return NextResponse.json({ error: "Ongeldig verzoekformaat." }, { status: 400 });
    }

    const { name, email, phone, message, website, interests, variant, source } = body as Record<string, unknown>;

    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name || typeof name !== "string" || !email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Naam en e-mailadres zijn verplicht." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || email.length > 254) {
      return NextResponse.json({ error: "Ongeldig e-mailadres." }, { status: 400 });
    }

    if (name.length > 100) {
      return NextResponse.json({ error: "Naam is te lang." }, { status: 400 });
    }

    if (phone && typeof phone === "string" && phone.length > 30) {
      return NextResponse.json({ error: "Telefoonnummer is te lang." }, { status: 400 });
    }

    if (message && typeof message === "string" && message.length > 5000) {
      return NextResponse.json({ error: "Bericht is te lang (max. 5000 tekens)." }, { status: 400 });
    }

    const subjectPrefix =
      variant === "download" ? "Charter download" : "Contactformulier";

    const interestsList =
      Array.isArray(interests) && interests.length > 0
        ? `<ul>${interests.map((i) => `<li>${esc(String(i))}</li>`).join("")}</ul>`
        : "<p>Geen opgegeven</p>";

    const sourceLabel = source && typeof source === "string" ? source : "Onbekend";

    const html = `
      <h2>Nieuw bericht via het Orvia-contactformulier (${subjectPrefix})</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        <tr><td><strong>Naam</strong></td><td>${esc(name)}</td></tr>
        <tr><td><strong>E-mail</strong></td><td>${esc(email)}</td></tr>
        <tr><td><strong>Telefoon</strong></td><td>${phone && typeof phone === "string" ? esc(phone) : "—"}</td></tr>
        <tr><td><strong>Bericht</strong></td><td>${message && typeof message === "string" ? esc(message) : "—"}</td></tr>
        <tr><td><strong>Interesse</strong></td><td>${interestsList}</td></tr>
        <tr><td><strong>Pagina</strong></td><td>${esc(sourceLabel)}</td></tr>
      </table>
    `;

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `[Orvia] ${subjectPrefix} — ${name} (${sourceLabel})`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "E-mail kon niet worden verstuurd." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Er is iets misgegaan." },
      { status: 500 }
    );
  }
}
