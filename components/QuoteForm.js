"use client";

import { useState } from "react";
import { services } from "@/lib/site";
import { Icon } from "./Icons";

/**
 * Reusable quote-request form.
 * variant: "dark" (on navy sections) | "light" (on white pages)
 */
export default function QuoteForm({ variant = "dark", compact = false }) {
  const [status, setStatus] = useState("idle"); // idle | sending | done | error
  const input = variant === "dark" ? "input-dark" : "input-light";

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className={`rounded-xl p-8 text-center ${variant === "dark" ? "bg-white/10 text-white" : "bg-mist text-navy"}`}>
        <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold text-navy mb-4">
          <Icon name="check" className="w-7 h-7" />
        </span>
        <h3 className="font-heading font-extrabold uppercase text-xl">Request Received</h3>
        <p className={`mt-2 text-sm ${variant === "dark" ? "text-navy-100/85" : "text-steel"}`}>
          Thank you — a member of our team will get back to you within 1 business hour.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3.5" aria-label="Request a quote">
      <div className="grid sm:grid-cols-2 gap-3.5">
        <input className={input} name="name" placeholder="Full Name" required autoComplete="name" />
        <input className={input} type="email" name="email" placeholder="Email Address" required autoComplete="email" />
      </div>
      <div className="grid sm:grid-cols-2 gap-3.5">
        <input className={input} type="tel" name="phone" placeholder="Phone Number" autoComplete="tel" />
        <select className={input} name="service" required defaultValue="">
          <option value="" disabled>
            Service Needed
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Other">Other / Not Sure</option>
        </select>
      </div>
      <input className={input} name="pickup" placeholder="Pick-Up Address" required />
      <input className={input} name="dropoff" placeholder="Drop-Off Address" required />
      <textarea
        className={input}
        name="details"
        placeholder="Details or Comments (item type, weight, pallets, timing…)"
        rows={compact ? 3 : 4}
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-gold rounded-md px-6 py-3.5 font-heading font-extrabold uppercase tracking-wide text-sm disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Submit Request"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong. Please call us at <a className="underline" href="tel:+16897776885">(689) 777-6885</a>.
        </p>
      )}
      <p className={`text-xs ${variant === "dark" ? "text-navy-100/60" : "text-steel"}`}>
        We respond within 1 business hour, {`Mon–Fri 8AM–5PM`}. No spam — ever.
      </p>
    </form>
  );
}
