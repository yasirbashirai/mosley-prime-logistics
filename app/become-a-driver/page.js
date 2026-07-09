"use client";

import { useState } from "react";
import { Icon } from "@/components/Icons";
import { PageHero } from "@/components/Sections";
import { site } from "@/lib/site";

const perks = [
  { icon: "van", title: "Quality Equipment", text: "Drive well-maintained, organized Sprinter vans." },
  { icon: "pin", title: "Regional Routes", text: "Florida & Georgia lanes — home, not out for weeks." },
  { icon: "bolt", title: "Growing Company", text: "Box trucks are next. Grow as we grow." },
  { icon: "users", title: "Respect & Support", text: "Small team, real communication, no run-around." },
];

export default function BecomeADriverPage() {
  const [status, setStatus] = useState("idle");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/driver", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Become a Driver"
        sub="Join a professional, growing Sprinter van logistics team serving Florida & Georgia. No CDL required — just discipline, care, and pride in the work."
      />

      <section className="bg-mist py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div>
            <h2 className="headline text-navy text-2xl sm:text-3xl">Why Drive With Mosley Prime</h2>
            <div className="mt-7 grid sm:grid-cols-2 gap-4">
              {perks.map((p) => (
                <div key={p.title} className="card-rule bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-navy text-gold">
                    <Icon name={p.icon} className="w-5 h-5" />
                  </span>
                  <h3 className="mt-3 font-heading font-extrabold uppercase text-navy text-[13px] tracking-wide">{p.title}</h3>
                  <p className="mt-1.5 text-[13px] text-steel leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-navy rounded-xl p-6 text-white text-sm leading-relaxed">
              <p className="font-heading font-extrabold uppercase tracking-wide text-gold text-xs">What we look for</p>
              <ul className="mt-3 space-y-2">
                {["Clean driving record & valid driver's license", "Reliable, professional, customer-facing attitude", "Able to lift and handle freight safely", "Based in or near a Florida or Georgia metro"].map((r) => (
                  <li key={r} className="flex items-start gap-2">
                    <Icon name="check" className="w-4 h-4 text-gold shrink-0 mt-0.5" /> {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-6 sm:p-8">
            {status === "done" ? (
              <div className="text-center py-10">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold text-navy mb-4">
                  <Icon name="check" className="w-7 h-7" />
                </span>
                <h3 className="headline text-navy text-xl">Application Received</h3>
                <p className="mt-2 text-sm text-steel">Thanks for your interest — we&apos;ll reach out if there&apos;s a fit.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-3.5" aria-label="Driver application">
                <h2 className="headline text-navy text-xl">Driver Application</h2>
                <div className="grid sm:grid-cols-2 gap-3.5">
                  <input className="input-light" name="name" placeholder="Full Name" required autoComplete="name" />
                  <input className="input-light" type="email" name="email" placeholder="Email Address" required autoComplete="email" />
                </div>
                <div className="grid sm:grid-cols-2 gap-3.5">
                  <input className="input-light" type="tel" name="phone" placeholder="Phone Number" required autoComplete="tel" />
                  <input className="input-light" name="city" placeholder="City & State" required />
                </div>
                <select className="input-light" name="experience" required defaultValue="">
                  <option value="" disabled>Delivery / Driving Experience</option>
                  <option>No professional experience</option>
                  <option>1–2 years</option>
                  <option>3–5 years</option>
                  <option>5+ years</option>
                </select>
                <textarea className="input-light" name="message" rows={4} placeholder="Tell us about yourself (availability, experience, vehicle types driven…)" />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-gold rounded-md px-6 py-3.5 font-heading font-extrabold uppercase tracking-wide text-sm disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Submit Application"}
                </button>
                {status === "error" && (
                  <p className="text-sm text-red-500">
                    Something went wrong — email us at <a className="underline" href={site.emailHref}>{site.email}</a>.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
