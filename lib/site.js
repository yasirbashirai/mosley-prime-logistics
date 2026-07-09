// Central site config + content data for Mosley Prime Logistics

export const site = {
  name: "Mosley Prime Logistics",
  tagline: "Every Mile Matters",
  phone: "(689) 777-6885",
  phoneHref: "tel:+16897776885",
  email: "info@mosleyprime.com",
  emailHref: "mailto:info@mosleyprime.com",
  url: "https://www.mosleyprime.com",
  address: {
    street: "13342 Bonica Way",
    city: "Windermere",
    state: "FL",
    zip: "34786",
  },
  hours: "Mon–Fri, 8:00 AM – 5:00 PM",
  serviceRegion: "Florida & Georgia",
  contactPerson: "Shawn Mosley",
};

export const services = [
  {
    slug: "on-demand-scheduled-routes",
    icon: "calendar",
    title: "On-Demand & Scheduled Routes",
    short:
      "Dedicated daily, weekly, or as-needed deliveries such as facility-to-facility transfers or vendor-to-customer supply drops.",
    long: "Whether you need a one-time rush delivery or a dedicated recurring route, we build the schedule around your operation. Our Sprinter vans run facility-to-facility transfers, vendor-to-customer supply drops, and standing daily or weekly routes with the consistency your business depends on.",
    bullets: [
      "Same-day and next-day on-demand dispatch",
      "Dedicated daily, weekly, or custom recurring routes",
      "Facility-to-facility and vendor-to-customer transfers",
      "Route-level reporting and proof of delivery",
    ],
  },
  {
    slug: "trade-b2b-supply-logistics",
    icon: "tools",
    title: "Trade & B2B Supply Logistics",
    short:
      "Transporting equipment, electrical components, plumbing materials, and HVAC parts directly to construction or job sites.",
    long: "We keep trade crews working by getting equipment and materials where they need to be — fast. From electrical components and plumbing materials to HVAC parts, we deliver directly to construction sites, job sites, and shops across Florida and Georgia.",
    bullets: [
      "Direct-to-job-site delivery for trade contractors",
      "Electrical, plumbing, and HVAC parts and materials",
      "Equipment and tooling transfers between shops and sites",
      "Time-window deliveries that keep crews productive",
    ],
  },
  {
    slug: "white-glove-service",
    icon: "glove",
    title: "White Glove Service",
    short:
      "Inside delivery, unpacking, and assembly of bulky goods (like furniture or appliances) directly into homes or commercial spaces.",
    long: "Some deliveries need more than a drop at the door. Our white glove service covers inside delivery, careful unpacking, debris removal, and assembly of bulky goods — furniture, appliances, fixtures — placed exactly where your customer wants them, in homes or commercial spaces.",
    bullets: [
      "Inside delivery to room of choice",
      "Unpacking, assembly, and placement",
      "Furniture, appliances, and fixtures handled with care",
      "Residential and commercial spaces",
    ],
  },
  {
    slug: "medical-pharmaceutical-transport",
    icon: "medical",
    title: "Medical & Pharmaceutical Transport",
    short:
      "Secure handling of medical supplies, lab specimens, and sensitive equipment needing to be moved between hospitals or clinics.",
    long: "Healthcare logistics demands discipline. We provide secure, professional transport of medical supplies, lab specimens, pharmaceuticals, and sensitive equipment between hospitals, clinics, labs, and pharmacies — with chain-of-custody handling on every run.",
    bullets: [
      "Hospital, clinic, lab, and pharmacy routes",
      "Secure chain-of-custody handling",
      "Lab specimens, supplies, and sensitive equipment",
      "STAT, scheduled, and recurring medical runs",
    ],
  },
  {
    slug: "reverse-logistics",
    icon: "reverse",
    title: "Reverse Logistics",
    short:
      "Handling item returns, picking up damaged products from consumers or returning wholesale merchandise to a warehouse.",
    long: "Returns are logistics too. We handle item returns, pick up damaged products from consumers, and move wholesale merchandise back to warehouses or distribution centers — closing the loop cleanly so your inventory and your customers stay squared away.",
    bullets: [
      "Consumer returns and damaged-product pickups",
      "Wholesale merchandise returned to warehouse",
      "Scheduled return sweeps for retailers",
      "Documentation and condition reporting",
    ],
  },
  {
    slug: "palletized-freight-bulk-orders",
    icon: "pallet",
    title: "Palletized & Freight Bulk Orders",
    short:
      "Moving smaller palletized shipments (usually 1 to 4 pallets) or large boxes that weigh up to approximately 2,500–3,500 lbs.",
    long: "Not every pallet needs a 53-foot trailer. We move smaller palletized shipments — typically 1 to 4 pallets — and oversized boxes weighing up to approximately 2,500–3,500 lbs. Faster than LTL, direct to the destination, with no cross-dock handling in between.",
    bullets: [
      "1–4 pallet shipments moved direct",
      "Up to ~2,500–3,500 lbs total payload",
      "No cross-docking — freight rides straight through",
      "Faster and safer than traditional LTL for small loads",
    ],
  },
];

export const floridaCities = [
  "Miami",
  "Orlando",
  "Tampa",
  "Jacksonville",
  "St. Petersburg",
  "Hialeah",
  "Port St. Lucie",
  "Cape Coral",
  "Fort Lauderdale",
  "Fort Myers",
  "West Palm Beach",
  "Lakeland",
  "Gainesville",
  "Boca Raton",
  "Daytona Beach",
  "Tallahassee",
  "Sarasota",
  "Hollywood",
  "Palm Bay",
];

export const georgiaCities = [
  "Atlanta",
  "Augusta",
  "Columbus",
  "Savannah",
  "Athens",
  "Sandy Springs",
  "Alpharetta",
  "Macon",
  "Roswell",
  "Johns Creek",
  "Warner Robins",
  "Duluth",
  "Marietta",
  "Albany",
  "Valdosta",
  "Smyrna",
  "Rome",
  "Peachtree City",
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/about", label: "About Us" },
  { href: "/track", label: "Track Your Order" },
  { href: "/contact", label: "Contact" },
];
