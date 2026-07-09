"use client";

import { useState } from "react";
import { Icon } from "@/components/Icons";
import { PageHero } from "@/components/Sections";
import { site } from "@/lib/site";

export default function TrackPage() {
  const [status, setStatus] = useState("idle");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/track", {
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
        eyebrow="Track Your Order"
        title="Where's My Delivery?"
        sub="Enter your order reference and we'll send you a live status update — or call dispatch for an immediate answer."
      />
      <section className="bg-mist py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-6 sm:p-10">
            {status === "done" ? (
              <div className="text-center py-8">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold text-navy mb-4">
                  <Icon name="check" className="w-7 h-7" />
                </span>
                <h2 className="headline text-navy text-xl">Tracking Request Received</h2>
                <p className="mt-2 text-sm text-steel">
                  We&apos;re pulling your order status now — you&apos;ll hear back shortly by email or phone.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-3.5" aria-label="Track your order">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-navy text-gold">
                    <Icon name="search" className="w-6 h-6" />
                  </span>
                  <h2 className="headline text-navy text-xl">Track Your Order</h2>
                </div>
                <input className="input-light" name="reference" placeholder="Order / Reference Number" required />
                <div className="grid sm:grid-cols-2 gap-3.5">
                  <input className="input-light" type="email" name="email" placeholder="Email Address" required autoComplete="email" />
                  <input className="input-light" type="tel" name="phone" placeholder="Phone Number (optional)" autoComplete="tel" />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-gold rounded-md px-6 py-3.5 font-heading font-extrabold uppercase tracking-wide text-sm disabled:opacity-60"
                >
                  {status === "sending" ? "Checking…" : "Get Status Update"}
                </button>
                {status === "error" && (
                  <p className="text-sm text-red-500">
                    Something went wrong — call <a className="underline" href={site.phoneHref}>{site.phone}</a> for an immediate update.
                  </p>
                )}
              </form>
            )}
          </div>

          <div className="mt-8 bg-navy rounded-xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-heading font-extrabold uppercase text-sm tracking-wide text-gold">Need an answer right now?</p>
              <p className="text-sm text-navy-100/80 mt-1">Dispatch has live visibility on every van, {site.hours}.</p>
            </div>
            <a href={site.phoneHref} className="btn-gold rounded-md px-6 py-3 font-heading font-extrabold uppercase tracking-wide text-sm whitespace-nowrap">
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
