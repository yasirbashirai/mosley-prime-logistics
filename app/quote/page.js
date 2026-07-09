import Image from "next/image";
import { Icon } from "@/components/Icons";
import QuoteForm from "@/components/QuoteForm";
import { PageHero } from "@/components/Sections";
import { site } from "@/lib/site";

export const metadata = {
  title: "Get a Quote — Sprinter Van Delivery Priced in 1 Business Hour",
  description:
    "Request a Sprinter van delivery quote for Florida & Georgia. Transparent pricing, no brokered handoffs, response within 1 business hour. Pallets up to 3,500 lbs, medical transport, white glove & more.",
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title="Let's Get Your Delivery Moving."
        sub="Fill out the form and a member of our team will get back to you within 1 business hour with transparent, no-surprise pricing."
      />
      <section className="bg-mist py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div>
            <h2 className="headline text-navy text-2xl sm:text-3xl">What Happens Next</h2>
            <ol className="mt-6 space-y-5">
              {[
                { t: "You submit the form", d: "Takes under 2 minutes. The more detail, the sharper the quote." },
                { t: "We price it within 1 business hour", d: "A real person reviews your lane, weight, and timing — no auto-generated guesswork." },
                { t: "You approve, we dispatch", d: "Your freight is assigned to an equipped Sprinter van and tracked every mile." },
              ].map((s, i) => (
                <li key={s.t} className="flex gap-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gold text-navy font-heading font-extrabold shrink-0">{i + 1}</span>
                  <div>
                    <p className="font-heading font-extrabold uppercase text-navy text-sm tracking-wide">{s.t}</p>
                    <p className="mt-1 text-sm text-steel">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/van-boxes.jpg"
                alt="Mosley Prime Logistics van being loaded with packages"
                width={1600}
                height={1216}
                className="w-full h-52 object-cover"
              />
            </div>
            <div className="mt-6 bg-navy rounded-xl p-6 text-white">
              <p className="font-heading font-extrabold uppercase text-sm tracking-wide text-gold">Prefer to talk it through?</p>
              <a href={site.phoneHref} className="mt-2 flex items-center gap-2 text-lg font-bold hover:text-gold transition-colors">
                <Icon name="phone" className="w-5 h-5 text-gold" /> {site.phone}
              </a>
              <p className="mt-1 text-xs text-navy-100/70">{site.hours}</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-6 sm:p-8">
            <QuoteForm variant="light" />
          </div>
        </div>
      </section>
    </>
  );
}
