import { Resend } from "resend";
import { NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
if (!RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY environment variable is not set");
}

const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL ?? "info@orvia.be";
const FROM_EMAIL = process.env.FROM_EMAIL ?? "noreply@orvia.be";

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

    const { name, email, phone, message, interests, variant } = body as Record<string, unknown>;

    if (!name || typeof name !== "string" || !email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Naam en e-mailadres zijn verplicht." },
        { status: 400 }
      );
    }

    const subjectPrefix =
      variant === "download" ? "Charter download" : "Contactformulier";

    const interestsList =
      Array.isArray(interests) && interests.length > 0
        ? `<ul>${interests.map((i) => `<li>${esc(String(i))}</li>`).join("")}</ul>`
        : "<p>Geen opgegeven</p>";

    const html = `
      <h2>Nieuw bericht via het Orvia-contactformulier (${subjectPrefix})</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        <tr><td><strong>Naam</strong></td><td>${esc(name)}</td></tr>
        <tr><td><strong>E-mail</strong></td><td>${esc(email)}</td></tr>
        <tr><td><strong>Telefoon</strong></td><td>${phone && typeof phone === "string" ? esc(phone) : "—"}</td></tr>
        <tr><td><strong>Bericht</strong></td><td>${message && typeof message === "string" ? esc(message) : "—"}</td></tr>
        <tr><td><strong>Interesse</strong></td><td>${interestsList}</td></tr>
      </table>
    `;

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `[Orvia] ${subjectPrefix} — ${name}`,
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
