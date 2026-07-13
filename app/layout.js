import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Mosley Prime Logistics | Sprinter Van Delivery Across Florida & Georgia",
    template: "%s | Mosley Prime Logistics",
  },
  description:
    "Mosley Prime Logistics is a premier Sprinter van logistics company providing fast, reliable, and secure delivery solutions across Florida and Georgia. On time. Every time.",
  keywords: [
    "sprinter van delivery",
    "courier service Florida",
    "courier service Georgia",
    "same-day delivery",
    "medical courier",
    "pallet delivery",
    "final mile delivery",
    "B2B logistics",
    "white glove delivery",
    "Mosley Prime Logistics",
  ],
  applicationName: site.name,
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    title: "Mosley Prime Logistics | Delivering What Matters. On Time. Every Time.",
    description:
      "Premier Sprinter van logistics across Florida & Georgia — on-demand routes, B2B supply, medical transport, white glove, reverse logistics, and palletized freight.",
    images: [
      {
        url: "/images/og-share.jpg",
        width: 1200,
        height: 630,
        alt: "Mosley Prime Logistics — Every Mile Matters",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mosley Prime Logistics | Sprinter Van Delivery Across Florida & Georgia",
    description:
      "Fast, reliable, secure Sprinter van delivery across Florida & Georgia. On time. Every time.",
    images: ["/images/og-share.jpg"],
  },
};

// LocalBusiness structured data for local SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: site.name,
  slogan: site.tagline,
  url: site.url,
  telephone: "+1-689-777-6885",
  email: site.email,
  image: `${site.url}/images/og-share.jpg`,
  logo: `${site.url}/images/logo.jpg`,
  areaServed: [
    { "@type": "State", name: "Florida" },
    { "@type": "State", name: "Georgia" },
  ],
  openingHours: "Mo-Fr 08:00-17:00",
  description:
    "Premier Sprinter van logistics company providing fast, reliable, and secure delivery solutions across Florida and Georgia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
