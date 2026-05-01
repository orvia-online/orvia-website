"use client";

import { useState } from "react";
import Image from "next/image";

const INTERESTS = [
  { id: "kennis", label: "om mijn kennis te delen" },
  { id: "werken", label: "voor Orvia te werken" },
  { id: "samenwerking", label: "in een samenwerking" },
  { id: "diensten", label: "in jullie diensten" },
];

type FormState = "idle" | "loading" | "success" | "error";

interface ContactFormProps {
  variant: "download" | "contact";
  heading?: string;
  subtext?: string;
  /** Render only the form fields with no section wrapper or heading column */
  inline?: boolean;
  source?: string;
}

export default function ContactForm({ variant, heading, subtext, inline = false, source }: ContactFormProps) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [interests, setInterests] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  function toggleInterest(id: string) {
    setInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
      interests,
      variant,
      source,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || "Er is iets misgegaan.");
      }

      setFormState("success");
      form.reset();
      setInterests([]);
    } catch (err) {
      setFormState("error");
      setErrorMessage(err instanceof Error ? err.message : "Er is iets misgegaan.");
    }
  }

  const formMarkup = formState === "success" ? (
    <div className="bg-white rounded-lg p-8 text-center">
      <p className="font-display font-bold text-orvia-dark text-[18px] mb-2">
        Bedankt!
      </p>
      <p className="font-display text-orvia-dark text-[16px]">
        {variant === "download"
          ? "Je ontvangt het charter binnenkort in je mailbox."
          : "We nemen zo snel mogelijk contact met je op."}
      </p>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot — verborgen voor mensen, ingevuld door bots */}
      <div style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }} aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input name="website" id="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Name */}
      <div>
        <label className="block font-display font-bold text-orvia-dark text-[10px] tracking-[0.8px] uppercase mb-1">
          Naam &amp; Voornaam
        </label>
        <input
          name="name"
          type="text"
          required
          placeholder="Jan Janssens"
          className="w-full h-[52px] bg-white px-4 font-display text-[14px] text-[#999] placeholder:text-[#ccc] focus:outline-none focus:ring-2 focus:ring-orvia-dark/20"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block font-display font-bold text-orvia-dark text-[10px] tracking-[0.8px] uppercase mb-1">
          E-mailadres
        </label>
        <input
          name="email"
          type="email"
          required
          placeholder="jan@ikwilbewegen.be"
          className="w-full h-[52px] bg-white px-4 font-display text-[14px] text-[#999] placeholder:text-[#ccc] focus:outline-none focus:ring-2 focus:ring-orvia-dark/20"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block font-display font-bold text-orvia-dark text-[10px] tracking-[0.8px] uppercase mb-1">
          Telefoonnummer
        </label>
        <input
          name="phone"
          type="tel"
          placeholder="+32 477 77 88 55"
          className="w-full h-[52px] bg-white px-4 font-display text-[14px] text-[#999] placeholder:text-[#ccc] focus:outline-none focus:ring-2 focus:ring-orvia-dark/20"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block font-display font-bold text-orvia-dark text-[10px] tracking-[0.8px] uppercase mb-1">
          Berichtje
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Hallo, ik neem contact op om ..."
          className="w-full bg-white px-4 py-3 font-display text-[14px] text-[#999] placeholder:text-[#ccc] focus:outline-none focus:ring-2 focus:ring-orvia-dark/20 resize-none"
        />
      </div>

      {/* Interests */}
      <div>
        <p className="font-display font-bold text-orvia-dark text-[10px] tracking-[0.2px] mb-3">
          Ik heb interesse:
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-3">
          {INTERESTS.map((item) => (
            <label key={item.id} className="flex items-center gap-2 cursor-pointer">
              <button
                type="button"
                onClick={() => toggleInterest(item.id)}
                className={`w-[8px] h-[8px] border-[1.5px] border-[#211e1d] flex-shrink-0 transition-colors ${
                  interests.includes(item.id) ? "bg-orvia-dark" : "bg-transparent"
                }`}
                aria-pressed={interests.includes(item.id)}
                aria-label={item.label}
              />
              <span className="font-display font-bold text-orvia-dark text-[10px] tracking-[0.2px]">
                {item.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Privacy note */}
      <p className="font-display font-bold text-orvia-dark text-[10px] tracking-[0.2px] leading-relaxed">
        We gebruiken je gegevens alleen om{" "}
        {variant === "download" ? "het charter te bezorgen" : "contact met jou op te nemen"}. Geen spam.
      </p>

      {/* Error */}
      {formState === "error" && (
        <p className="font-display text-red-600 text-[12px]">
          {errorMessage}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={formState === "loading"}
        className="inline-flex items-center group disabled:opacity-60"
      >
        <span className="h-12 bg-orvia-dark rounded-full flex items-center pl-6 pr-4 -mr-2 font-display font-bold text-[14px] text-white group-hover:bg-[#3a3533] transition-colors">
          {formState === "loading"
            ? "Bezig..."
            : variant === "download"
            ? "Download het charter"
            : "Verstuur"}
        </span>
        <span className="relative z-10 flex-shrink-0 w-12 h-12 bg-orvia-dark rounded-full flex items-center justify-center text-white group-hover:bg-[#3a3533] transition-colors">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 13L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
    </form>
  );

  if (inline) {
    return formMarkup;
  }

  return (
    <section id="contact-form" className="bg-orvia-blue relative overflow-hidden pt-12 md:pt-16 lg:pt-[59px] pb-12 md:pb-16 lg:pb-20 section-padding">
      {/* Decorative plant — hidden on mobile to avoid clutter */}
      <div className="hidden lg:block absolute -left-[30px] bottom-0 w-[412px] h-[449px] pointer-events-none select-none opacity-60">
        <Image src="/images/deco-plant.svg" alt="" fill sizes="412px" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-16 max-w-[1290px] mx-auto">
        {/* Heading + subtext */}
        <div className="w-full lg:flex-1 lg:max-w-[400px]">
          <h2 className="font-heading font-bold text-orvia-dark text-[28px] md:text-[34px] lg:text-[40px] leading-[1.35] mb-4">
            {heading ?? "Klaar om de boel in beweging te zetten?"}
          </h2>
          <p className="font-display font-bold text-orvia-dark text-[16px] lg:text-[18px] leading-snug">
            {subtext ?? (variant === "download"
              ? "Download hier het charter of neem contact op."
              : "Neem contact op.")}
          </p>
        </div>

        {/* Form */}
        <div className="w-full lg:flex-1 lg:max-w-[632px]">
          {formMarkup}
        </div>
      </div>
    </section>
  );
}
