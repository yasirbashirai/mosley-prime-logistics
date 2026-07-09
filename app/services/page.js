import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/Icons";
import { PageHero, QuoteSection, CtaBand, SectionHeading } from "@/components/Sections";
import { services, site } from "@/lib/site";

export const metadata = {
  title: "Sprinter Van Delivery Services — On-Demand, Medical, B2B, White Glove & Pallet Freight",
  description:
    "Six specialized Sprinter van logistics services across Florida & Georgia: on-demand & scheduled routes, trade & B2B supply, white glove delivery, medical & pharmaceutical transport, reverse logistics, and palletized freight up to 3,500 lbs.",
};

const processSteps = [
  { icon: "quote", title: "Request a Quote", text: "Tell us what's moving, where, and when. We respond within 1 business hour with transparent pricing." },
  { icon: "calendar", title: "We Schedule & Dispatch", text: "Your delivery is assigned to an organized, equipped Sprinter van and a trained professional." },
  { icon: "signal", title: "Track Every Mile", text: "Real-time updates from pickup to drop-off, so you always know where your freight is." },
  { icon: "check", title: "Delivered & Confirmed", text: "On-time delivery with proof of delivery documentation. Every mile matters." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Logistics Solutions Built for Your Business"
        sub="From small packages to specialized freight, our Sprinter vans deliver flexible, secure, and on-time solutions tailored to your needs — across Florida and Georgia."
      >
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {services.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="rounded-full border border-white/25 px-4 py-2 text-xs font-heading font-bold uppercase tracking-wide text-white hover:border-gold hover:text-gold transition-colors"
            >
              {s.title}
            </a>
          ))}
        </div>
      </PageHero>

      {/* Service detail blocks */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 space-y-14">
          {services.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className="scroll-mt-28 grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 bg-mist rounded-2xl p-7 sm:p-10 border border-gray-100"
            >
              <div className="flex md:flex-col items-center md:items-start gap-4">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-navy text-gold shrink-0">
                  <Icon name={s.icon} className="w-8 h-8" />
                </span>
                <span className="headline text-5xl text-navy/10 hidden md:block">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div>
                <h2 className="headline text-navy text-2xl sm:text-3xl">{s.title}</h2>
                <p className="mt-4 text-steel leading-relaxed">{s.long}</p>
                <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-ink">
                      <Icon name="check" className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" /> {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/quote"
                    className="btn-gold inline-flex items-center gap-2 rounded-md px-5 py-3 font-heading font-extrabold uppercase tracking-wide text-xs"
                  >
                    Get a Quote for This Service <Icon name="arrow" className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href={site.phoneHref}
                    className="btn-navy inline-flex items-center gap-2 rounded-md px-5 py-3 font-heading font-extrabold uppercase tracking-wide text-xs"
                  >
                    <Icon name="phone" className="w-3.5 h-3.5" /> {site.phone}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-navy-gradient py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title="From Quote to Delivered — Fast"
            sub="A simple, disciplined process designed to get your freight moving without friction."
            light
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((p, i) => (
              <div key={p.title} className="relative bg-white/[0.05] border border-white/10 rounded-xl p-6">
                <span className="headline text-gold/25 text-5xl absolute top-4 right-5">{i + 1}</span>
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold text-navy">
                  <Icon name={p.icon} className="w-6 h-6" />
                </span>
                <h3 className="mt-4 font-heading font-extrabold uppercase text-white tracking-wide text-sm">{p.title}</h3>
                <p className="mt-2 text-[13px] text-navy-100/80 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Not sure which service fits?" sub="Describe your shipment and we'll route it the right way — first time." />
      <QuoteSection />
    </>
  );
}
