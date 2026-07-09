import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { PageHero, QuoteSection, CtaBand, SectionHeading, StatStrip } from "@/components/Sections";
import { site } from "@/lib/site";

export const metadata = {
  title: "About Us — Asset-Based Sprinter Van Carrier, Not a Broker",
  description:
    "Mosley Prime Logistics is an asset-based Sprinter van carrier headquartered in Central Florida. Our vans, our team, your freight — delivering across Florida & Georgia with discipline, transparency, and care. Every mile matters.",
};

const values = [
  {
    icon: "clock",
    title: "Operational Discipline",
    text: "Routes planned, vans staged, freight secured. On-time isn't a goal — it's the standard we build every run around.",
  },
  {
    icon: "shield",
    title: "Asset-Based Accountability",
    text: "We're a carrier, not a broker. When you book with us, our van and our people handle your freight — no handoffs, no surprises.",
  },
  {
    icon: "signal",
    title: "Radical Transparency",
    text: "Clear quotes, real-time updates, and proof of delivery on every shipment. You always know where your freight stands.",
  },
  {
    icon: "users",
    title: "Partner Mentality",
    text: "From Fortune-scale companies to upcoming independent businesses, we treat every customer's freight like our reputation rides on it — because it does.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Mosley Prime Logistics"
        title="An Asset-Based Carrier. Not a Generic Broker."
        sub="We own the vans, we train the team, and we answer for every mile. That's the difference between a logistics partner and a middleman."
      />

      {/* Story */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Built on One Promise: Every Mile Matters"
              align="left"
            />
            <div className="mt-6 space-y-4 text-steel leading-relaxed">
              <p>
                Mosley Prime Logistics was founded by <strong className="text-navy">Shawn Mosley</strong> in
                Central Florida with a simple conviction: commercial shippers deserve a delivery partner
                that shows up equipped, communicates clearly, and delivers on time — every time.
              </p>
              <p>
                We&apos;re a dedicated Sprinter van logistics company serving major companies and upcoming
                independent businesses across Florida and Georgia. From single-box parts runs to 3,500-lb
                palletized shipments, from scheduled B2B routes to secure medical transport, our vans run
                direct — no cross-docking, no consolidation delays, no brokered handoffs.
              </p>
              <p>
                And we&apos;re building for scale: box trucks are next, expanding the same disciplined,
                asset-based service to larger freight — regional today, wider tomorrow.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/quote" className="btn-gold inline-flex items-center gap-2 rounded-md px-6 py-3.5 font-heading font-extrabold uppercase tracking-wide text-sm">
                Work With Us <Icon name="arrow" className="w-4 h-4" />
              </Link>
              <Link href="/services" className="btn-navy inline-flex items-center gap-2 rounded-md px-6 py-3.5 font-heading font-extrabold uppercase tracking-wide text-sm">
                Our Services
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/van-branded.png"
                alt="Mosley Prime Logistics branded Sprinter van"
                width={470}
                height={300}
                className="w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/card-organized.png" alt="Organized Sprinter van cargo area" width={410} height={350} className="w-full h-40 object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/card-professional.png" alt="Professional freight handoff at the dock" width={410} height={350} className="w-full h-40 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy-gradient py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="What We Stand For"
            title="The Standards Behind Every Delivery"
            light
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-white/[0.05] border border-white/10 rounded-xl p-6 hover:border-gold/50 transition-colors">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold text-navy">
                  <Icon name={v.icon} className="w-6 h-6" />
                </span>
                <h3 className="mt-4 font-heading font-extrabold uppercase text-white tracking-wide text-sm">{v.title}</h3>
                <p className="mt-2 text-[13px] text-navy-100/80 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <StatStrip />
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="bg-mist py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="Who We Serve"
            title="From Major Companies to Growing Businesses"
            sub="If your business moves product, parts, equipment, or supplies in Florida or Georgia, we're built for you."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "building", title: "Distributors & Wholesalers", text: "Recurring supply routes, vendor drops, and warehouse transfers." },
              { icon: "tools", title: "Trade Contractors", text: "Electrical, plumbing, and HVAC parts delivered straight to the job site." },
              { icon: "medical", title: "Healthcare & Labs", text: "Secure medical, pharmaceutical, and specimen transport between facilities." },
              { icon: "box", title: "Retail & E-Commerce", text: "Final-mile, white glove, and reverse logistics that protect your brand." },
              { icon: "van", title: "Dealerships & Parts Suppliers", text: "Fast parts and supply pickups that keep service bays moving." },
              { icon: "bolt", title: "Anyone With Urgent Freight", text: "Same-day, direct-drive delivery when it absolutely can't wait." },
            ].map((c) => (
              <div key={c.title} className="card-rule bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-navy text-gold">
                  <Icon name={c.icon} className="w-6 h-6" />
                </span>
                <h3 className="mt-4 font-heading font-extrabold uppercase text-navy tracking-wide text-sm">{c.title}</h3>
                <p className="mt-2 text-sm text-steel leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Let's move your business forward." sub={`Call ${site.phone} or request a quote — response within 1 business hour.`} />
      <QuoteSection />
    </>
  );
}
