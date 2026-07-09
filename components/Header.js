"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks, site } from "@/lib/site";
import { Icon } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">
      {/* Top utility bar */}
      <div className="bg-navy text-white text-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-8">
          <p className="tracking-wide">
            <span className="text-gold font-semibold">Every Mile Matters</span>
            <span className="mx-2 text-navy-100/50">|</span>
            Sprinter van logistics across Florida &amp; Georgia
          </p>
          <div className="flex items-center gap-5">
            <a href={site.phoneHref} className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Icon name="phone" className="w-3.5 h-3.5" /> {site.phone}
            </a>
            <a href={site.emailHref} className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Icon name="mail" className="w-3.5 h-3.5" /> {site.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-18">
        <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Mosley Prime Logistics — Home">
          <Image
            src="/images/logo.jpg"
            alt="Mosley Prime Logistics logo"
            width={150}
            height={166}
            priority
            className="h-14 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[13px] font-heading font-bold uppercase tracking-wide transition-colors ${
                pathname === l.href ? "text-gold-600" : "text-navy hover:text-gold-600"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/quote"
            className="btn-gold hidden sm:inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-[13px] font-heading font-extrabold uppercase tracking-wide"
          >
            Request a Quote
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-navy"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden border-t border-gray-200 bg-white px-4 py-4 space-y-1" aria-label="Mobile navigation">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block rounded-md px-3 py-2.5 font-heading font-bold uppercase text-sm tracking-wide ${
                pathname === l.href ? "bg-mist text-gold-600" : "text-navy hover:bg-mist"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/quote"
            onClick={() => setOpen(false)}
            className="btn-gold block text-center rounded-md px-4 py-3 font-heading font-extrabold uppercase text-sm tracking-wide"
          >
            Request a Quote
          </Link>
        </nav>
      )}
    </header>
  );
}
