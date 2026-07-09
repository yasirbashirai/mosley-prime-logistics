import Link from "next/link";
import { navLinks, site, services } from "@/lib/site";
import { Icon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* Gold accent line */}
      <div className="h-1 bg-gradient-to-r from-gold-400 via-gold to-gold-600" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <p className="font-heading font-extrabold uppercase leading-tight text-xl">
            Mosley <span className="text-gold">Prime</span>
            <span className="block text-sm tracking-[0.35em] text-navy-100/80 mt-0.5">Logistics</span>
          </p>
          <p className="mt-4 text-sm text-navy-100/80 leading-relaxed">
            Delivering what matters, on time, every time. Sprinter van logistics
            solutions across Florida and Georgia.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-gold font-heading font-bold uppercase text-xs tracking-widest">
            <Icon name="van" className="w-4 h-4" /> Every Mile Matters
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-heading font-bold uppercase text-sm tracking-widest text-gold mb-4">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            {[...navLinks, { href: "/quote", label: "Get a Quote" }, { href: "/become-a-driver", label: "Become a Driver" }].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-navy-100/85 hover:text-gold transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-heading font-bold uppercase text-sm tracking-widest text-gold mb-4">Services</h3>
          <ul className="space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="text-navy-100/85 hover:text-gold transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading font-bold uppercase text-sm tracking-widest text-gold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-navy-100/85">
            <li>
              <a href={site.phoneHref} className="flex items-center gap-2.5 hover:text-gold transition-colors">
                <Icon name="phone" className="w-4 h-4 text-gold shrink-0" /> {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="flex items-center gap-2.5 hover:text-gold transition-colors">
                <Icon name="mail" className="w-4 h-4 text-gold shrink-0" /> {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Icon name="pin" className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <span>
                {site.address.city}, {site.address.state}
                <span className="block text-navy-100/60">Serving Florida &amp; Georgia</span>
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Icon name="clock" className="w-4 h-4 text-gold shrink-0" /> {site.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-navy-100/60">
          <p>© {new Date().getFullYear()} Mosley Prime Logistics. All Rights Reserved.</p>
          <p>
            Sprinter Van Logistics &amp; Delivery —{" "}
            <Link href="/service-areas" className="hover:text-gold transition-colors">
              Florida &amp; Georgia
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
