import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/Icons";
import QuoteForm from "@/components/QuoteForm";
import FlGaMap from "@/components/FlGaMap";
import { SectionHeading, StatStrip } from "@/components/Sections";
import { services, floridaCities, georgiaCities, site } from "@/lib/site";

export const metadata = {
  title: "Sprinter Van Delivery & Logistics Across Florida & Georgia | Mosley Prime Logistics",
  description:
    "Delivering what matters — on time, every time. Sprinter van logistics for on-demand routes, B2B supply, medical transport, white glove delivery, reverse logistics, and palletized freight across Florida & Georgia. Get a quote in 1 business hour.",
};

const heroFeatures = [
  { icon: "clock", top: "On-Time", bottom: "Delivery" },
  { icon: "shield", top: "Safe &", bottom: "Secure" },
  { icon: "signal", top: "Real-Time", bottom: "Updates" },
];

const whyCards = [
  {
    img: "/images/card-organized.png",
    title: "Organized & Ready",
    text: "Every delivery starts with a safe, secure, and organized van.",
  },
  {
    img: "/images/card-professional.png",
    title: "Professional Delivery",
    text: "From dock to destination, we handle your freight with care and professionalism.",
  },
  {
    img: "/images/card-pallets.png",
    title: "Large or Small",
    text: "From single boxes to 2,500+ lb pallet shipments, we've got you covered.",
  },
  {
    img: "/images/card-parts.png",
    title: "Parts & Supply Pickups",
    text: "We pick up parts and supplies from dealerships and businesses quickly and reliably.",
  },
];

function CityColumn({ title, cities }) {
  return (
    <div>
      <h3 className="font-heading font-extrabold uppercase text-navy tracking-wide text-lg mb-4 flex items-center gap-2">
        <Icon name="pin" className="w-5 h-5 text-gold" /> {title}
      </h3>
      <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-steel">
        {cities.map((c) => (
          <li key={c} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" /> {c}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy">
        {/* Full-bleed branded van + Miami skyline background */}
        <Image
          src="/images/hero-bg.jpg"
          alt="Mosley Prime Logistics branded Sprinter van on the Florida waterfront"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center]"
        />
        {/* Legibility overlay — dark navy on the left, van stays visible right */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/75 to-navy-900/15"
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-950/80 to-transparent" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-32 grid lg:grid-cols-2 gap-12 items-center min-h-[560px]">
          <div>
            <h1 className="headline text-white text-4xl sm:text-5xl xl:text-[3.4rem] fade-up">
              Delivering What Matters.
              <span className="block text-gold mt-1.5">On Time. Every Time.</span>
            </h1>
            <p className="mt-6 text-navy-100/90 text-base sm:text-lg leading-relaxed max-w-xl fade-up-delay-1">
              Mosley Prime Logistics is a premier Sprinter van logistics company providing
              fast, reliable, and secure delivery solutions across Florida and Georgia.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 fade-up-delay-1">
              {heroFeatures.map((f) => (
                <div key={f.top} className="flex items-center gap-2.5 text-white">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gold/60 text-gold">
                    <Icon name={f.icon} className="w-5 h-5" />
                  </span>
                  <span className="font-heading font-bold uppercase text-xs tracking-wider leading-tight">
                    {f.top}
                    <br />
                    {f.bottom}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-4 fade-up-delay-2">
              <Link
                href="/quote"
                className="btn-gold inline-flex items-center gap-2 rounded-md px-7 py-4 font-heading font-extrabold uppercase tracking-wide text-sm"
              >
                Request a Quote <Icon name="arrow" className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-md px-7 py-4 font-heading font-extrabold uppercase tracking-wide text-sm border-2 border-white/25 text-white hover:border-gold hover:text-gold transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right column intentionally open — the branded van in the background photo owns this space */}
          <div className="hidden lg:flex items-end justify-end self-end fade-up-delay-2">
            <div className="bg-white/95 backdrop-blur rounded-xl shadow-2xl px-5 py-3.5 flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-navy text-gold shrink-0">
                <Icon name="van" className="w-5 h-5" />
              </span>
              <div>
                <p className="font-heading font-extrabold uppercase text-navy text-sm leading-tight">
                  Asset-Based Carrier
                </p>
                <p className="text-xs text-steel">Our vans. Our team. Your freight.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────── */}
      <section className="bg-mist py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="Logistics Solutions Built for Your Business"
            sub="From small packages to specialized freight, our Sprinter vans deliver flexible, secure, and on-time solutions tailored to your needs."
          />
          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services#${s.slug}`}
                className="card-rule group bg-white rounded-xl p-6 sm:p-7 flex gap-5 shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
              >
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-navy text-gold shrink-0 group-hover:bg-gold group-hover:text-navy transition-colors">
                  <Icon name={s.icon} className="w-7 h-7" />
                </span>
                <div>
                  <h3 className="font-heading font-extrabold uppercase text-navy tracking-wide text-[15px]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-steel leading-relaxed">{s.short}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-gold-600 font-heading font-bold uppercase text-xs tracking-wider">
                    Learn more <Icon name="arrow" className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────── */}
      <section className="bg-navy-gradient py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="Why Choose Us"
            title={<span className="text-gold">Equipped. Prepared. Professional.</span>}
            sub="Our vans are organized, our team is trained, and your freight is handled with care every mile of the way."
            light
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyCards.map((c) => (
              <div
                key={c.title}
                className="group bg-white/[0.05] border border-white/10 rounded-xl overflow-hidden hover:border-gold/50 transition-colors"
              >
                <div className="overflow-hidden">
                  <Image
                    src={c.img}
                    alt={c.title}
                    width={410}
                    height={350}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-heading font-extrabold uppercase text-white tracking-wide text-sm">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[13px] text-navy-100/80 leading-relaxed">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <StatStrip />
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ─────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="Service Areas"
            title="Serving Florida & Georgia"
            sub="We proudly serve all major cities and surrounding areas."
          />
          <div className="mt-12 grid lg:grid-cols-[1fr_auto_1fr] gap-10 items-center">
            <CityColumn title="Florida Cities" cities={floridaCities} />
            <FlGaMap className="w-64 sm:w-72 mx-auto" />
            <CityColumn title="Georgia Cities" cities={georgiaCities} />
          </div>
          <p className="mt-10 text-center text-sm text-steel">
            Don&apos;t see your city?{" "}
            <Link href="/service-areas" className="text-gold-600 font-semibold hover:underline">
              View full coverage
            </Link>{" "}
            or{" "}
            <a href={site.phoneHref} className="text-gold-600 font-semibold hover:underline">
              call {site.phone}
            </a>{" "}
            — if it&apos;s in Florida or Georgia, we run it.
          </p>
        </div>
      </section>

      {/* ── QUOTE ─────────────────────────────────────────────── */}
      <section id="quote" className="bg-navy-gradient relative overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-heading font-bold uppercase tracking-[0.25em] text-gold text-xs sm:text-sm">
              Request a Quote
            </p>
            <h2 className="headline text-white text-3xl sm:text-4xl mt-3">
              Let&apos;s Get Your <span className="text-gold">Delivery Moving.</span>
            </h2>
            <p className="mt-4 text-navy-100/85 leading-relaxed max-w-md">
              Fill out the form and a member of our team will get back to you within 1 business hour.
            </p>
            <div className="mt-8 relative rounded-xl overflow-hidden border border-white/10 shadow-2xl max-w-md">
              <Image
                src="/images/van-moving.jpg"
                alt="Mosley Prime Logistics Sprinter van in motion on the highway"
                width={1600}
                height={1216}
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="mt-6 flex flex-wrap gap-6 text-sm text-navy-100/85">
              <a href={site.phoneHref} className="flex items-center gap-2 hover:text-gold transition-colors">
                <Icon name="phone" className="w-4 h-4 text-gold" /> {site.phone}
              </a>
              <a href={site.emailHref} className="flex items-center gap-2 hover:text-gold transition-colors">
                <Icon name="mail" className="w-4 h-4 text-gold" /> {site.email}
              </a>
            </div>
          </div>
          <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur">
            <QuoteForm variant="dark" />
          </div>
        </div>
      </section>
    </>
  );
}
