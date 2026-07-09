import Link from "next/link";
import Image from "next/image";
import { Icon } from "./Icons";
import QuoteForm from "./QuoteForm";
import { site } from "@/lib/site";

/* Eyebrow + headline + subline used across all sections */
export function SectionHeading({ eyebrow, title, sub, light = false, align = "center" }) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {eyebrow && (
        <p className="font-heading font-bold uppercase tracking-[0.25em] text-gold text-xs sm:text-sm">
          {eyebrow}
        </p>
      )}
      <h2 className={`headline mt-3 text-3xl sm:text-4xl ${light ? "text-white" : "text-navy"}`}>{title}</h2>
      {sub && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${light ? "text-navy-100/85" : "text-steel"}`}>
          {sub}
        </p>
      )}
    </div>
  );
}

/* Interior page hero — navy band with title + breadcrumb-style eyebrow */
export function PageHero({ eyebrow, title, sub, children }) {
  return (
    <section className="bg-navy-gradient relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #fff 1px, transparent 1px), linear-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-16 sm:py-20 text-center">
        <p className="font-heading font-bold uppercase tracking-[0.3em] text-gold text-xs sm:text-sm fade-up">
          {eyebrow}
        </p>
        <h1 className="headline text-white text-4xl sm:text-5xl mt-4 fade-up-delay-1">{title}</h1>
        {sub && (
          <p className="mt-5 max-w-2xl mx-auto text-navy-100/85 text-base sm:text-lg leading-relaxed fade-up-delay-2">
            {sub}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

/* Navy quote band with van image — dropped onto every major page */
export function QuoteSection({ id = "quote" }) {
  return (
    <section id={id} className="bg-navy-gradient relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-heading font-bold uppercase tracking-[0.25em] text-gold text-xs sm:text-sm">
            Request a Quote
          </p>
          <h2 className="headline text-white text-3xl sm:text-4xl mt-3">
            Let&apos;s Get Your <span className="text-gold">Delivery Moving.</span>
          </h2>
          <p className="mt-4 text-navy-100/85 leading-relaxed">
            Fill out the form and a member of our team will get back to you within 1 business hour.
          </p>
          <div className="mt-8 relative rounded-xl overflow-hidden border border-white/10 shadow-2xl max-w-md">
            <Image
              src="/images/van-quote.png"
              alt="Mosley Prime Logistics branded Sprinter van"
              width={470}
              height={400}
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/90 to-transparent p-4">
              <p className="text-white font-heading font-bold uppercase text-sm tracking-wide flex items-center gap-2">
                <Icon name="clock" className="w-4 h-4 text-gold" /> 1-hour response, {site.hours}
              </p>
            </div>
          </div>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-navy-100/85">
            {["No brokered handoffs — our vans, our team", "Direct routes across FL & GA", "Transparent, fast quotes", "Licensed & insured"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Icon name="check" className="w-4 h-4 text-gold shrink-0" /> {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur">
          <QuoteForm variant="dark" />
        </div>
      </div>
    </section>
  );
}

/* Gold call-to-action band */
export function CtaBand({ title = "Need it moved today?", sub = "Call us now or request a quote — we answer fast.", }) {
  return (
    <section className="bg-gradient-to-r from-gold-400 via-gold to-gold-600">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="headline text-navy text-2xl sm:text-3xl">{title}</h2>
          <p className="text-navy/80 mt-1 font-medium">{sub}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={site.phoneHref}
            className="btn-navy inline-flex items-center gap-2 rounded-md px-6 py-3.5 font-heading font-extrabold uppercase tracking-wide text-sm"
          >
            <Icon name="phone" className="w-4 h-4" /> {site.phone}
          </a>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 rounded-md px-6 py-3.5 font-heading font-extrabold uppercase tracking-wide text-sm bg-navy-950 text-white hover:bg-navy-800 transition-colors"
          >
            Request a Quote <Icon name="arrow" className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* Stat strip — asset-based credibility numbers */
export function StatStrip({ light = false }) {
  const stats = [
    { value: "98%+", label: "On-Time Delivery Target" },
    { value: "1 hr", label: "Quote Response Time" },
    { value: "37+", label: "Major Cities Served" },
    { value: "3,500", label: "Lbs Max Payload" },
  ];
  return (
    <div className={`grid grid-cols-2 lg:grid-cols-4 gap-px rounded-xl overflow-hidden ${light ? "bg-gray-200" : "bg-white/10"}`}>
      {stats.map((s) => (
        <div key={s.label} className={`p-6 text-center ${light ? "bg-white" : "bg-white/[0.04]"}`}>
          <p className="headline text-3xl sm:text-4xl text-gold">{s.value}</p>
          <p className={`mt-1.5 text-xs font-heading font-bold uppercase tracking-wider ${light ? "text-steel" : "text-navy-100/70"}`}>
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}
