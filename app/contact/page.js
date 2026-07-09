import { Icon } from "@/components/Icons";
import { PageHero, QuoteSection } from "@/components/Sections";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact Us — Talk to a Real Dispatcher",
  description:
    "Contact Mosley Prime Logistics: call (689) 777-6885 or email info@mosleyprime.com. Mon–Fri 8AM–5PM. Sprinter van delivery across Florida & Georgia — quotes answered within 1 business hour.",
};

const cards = [
  { icon: "phone", title: "Call Us", line1: site.phone, href: site.phoneHref, sub: "Fastest way to reach dispatch" },
  { icon: "mail", title: "Email Us", line1: site.email, href: site.emailHref, sub: "Quotes, bookings & general inquiries" },
  { icon: "clock", title: "Business Hours", line1: "Mon–Fri, 8AM–5PM", sub: "After-hours pickups by arrangement" },
  { icon: "pin", title: "Based In", line1: "Windermere, FL", sub: "Serving all of Florida & Georgia" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Talk to a Real Person. Fast."
        sub="No phone trees, no ticket queues. Reach our team directly and get answers within 1 business hour."
      />
      <section className="bg-mist py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c) => (
            <div key={c.title} className="card-rule bg-white rounded-xl p-7 text-center border border-gray-100 shadow-sm">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-navy text-gold">
                <Icon name={c.icon} className="w-7 h-7" />
              </span>
              <h2 className="mt-4 font-heading font-extrabold uppercase text-navy tracking-wide text-sm">{c.title}</h2>
              {c.href ? (
                <a href={c.href} className="mt-2 block text-gold-600 font-bold hover:underline">{c.line1}</a>
              ) : (
                <p className="mt-2 font-bold text-navy">{c.line1}</p>
              )}
              <p className="mt-1.5 text-xs text-steel">{c.sub}</p>
            </div>
          ))}
        </div>
      </section>
      <QuoteSection />
    </>
  );
}
