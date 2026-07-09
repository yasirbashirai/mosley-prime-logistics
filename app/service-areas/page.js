import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import FlGaMap from "@/components/FlGaMap";
import { PageHero, QuoteSection, CtaBand, SectionHeading } from "@/components/Sections";
import { floridaCities, georgiaCities, site } from "@/lib/site";

export const metadata = {
  title: "Service Areas — Sprinter Van Delivery in Florida & Georgia",
  description:
    "Mosley Prime Logistics serves 37+ major cities across Florida and Georgia — Miami, Orlando, Tampa, Jacksonville, Atlanta, Savannah, Augusta and more. Same-day and scheduled Sprinter van delivery throughout the Southeast.",
};

const corridors = [
  { route: "Orlando ⇄ Tampa", time: "~1.5 hrs direct" },
  { route: "Orlando ⇄ Miami", time: "~3.5 hrs direct" },
  { route: "Orlando ⇄ Jacksonville", time: "~2.5 hrs direct" },
  { route: "Jacksonville ⇄ Savannah", time: "~2 hrs direct" },
  { route: "Atlanta ⇄ Macon", time: "~1.5 hrs direct" },
  { route: "Tampa ⇄ Fort Myers", time: "~2 hrs direct" },
];

function CityGrid({ state, cities, blurb }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 sm:p-9">
      <h2 className="headline text-navy text-2xl flex items-center gap-2.5">
        <Icon name="pin" className="w-6 h-6 text-gold" /> {state}
      </h2>
      <p className="mt-3 text-sm text-steel leading-relaxed">{blurb}</p>
      <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2.5 text-sm text-ink">
        {cities.map((c) => (
          <li key={c} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" /> {c}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-xs text-steel">
        …plus surrounding towns and suburbs. If it&apos;s in {state.replace(" Cities", "")}, we cover it.
      </p>
    </div>
  );
}

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Serving Florida & Georgia"
        sub="We proudly serve all major cities and surrounding areas — with direct Sprinter van routes, no cross-docking, and no brokered handoffs."
      />

      <section className="bg-mist py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-start">
            <div className="grid md:grid-cols-2 gap-6 order-2 lg:order-1">
              <CityGrid
                state="Florida Cities"
                cities={floridaCities}
                blurb="Headquartered in Central Florida, we run the entire state daily — from the Panhandle to South Florida."
              />
              <CityGrid
                state="Georgia Cities"
                cities={georgiaCities}
                blurb="Full Georgia coverage, anchored by metro Atlanta and the Savannah logistics corridor."
              />
            </div>
            <div className="order-1 lg:order-2 mx-auto lg:sticky lg:top-28">
              <FlGaMap className="w-72 sm:w-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Corridors */}
      <section className="bg-navy-gradient py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="Popular Lanes"
            title="Direct Corridors We Run Every Week"
            sub="Point-to-point Sprinter van runs on the Southeast's busiest commercial lanes — your freight never waits on a consolidation schedule."
            light
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {corridors.map((c) => (
              <div key={c.route} className="bg-white/[0.05] border border-white/10 rounded-xl p-6 flex items-center gap-4 hover:border-gold/50 transition-colors">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-gold text-navy shrink-0">
                  <Icon name="van" className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-heading font-extrabold uppercase text-white tracking-wide text-sm">{c.route}</p>
                  <p className="text-xs text-navy-100/70 mt-0.5">{c.time}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-navy-100/75">
            Need a lane that isn&apos;t listed? Cross-state and custom routes quoted on request —{" "}
            <a href={site.phoneHref} className="text-gold hover:underline">call {site.phone}</a>.
          </p>
        </div>
      </section>

      <CtaBand title="Shipping in Florida or Georgia?" sub="Get a transparent quote for your lane within 1 business hour." />
      <QuoteSection />
    </>
  );
}
