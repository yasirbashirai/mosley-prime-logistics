# Mosley Prime Logistics — Website

Conversion-focused, enterprise-grade marketing site for **Mosley Prime Logistics**, a premier Sprinter van logistics company serving Florida & Georgia. *Every Mile Matters.*

## Stack
- **Next.js 16** (App Router) + **React**
- **Tailwind CSS v4** (brand tokens in `app/globals.css`)
- Fonts: Montserrat (headlines) + Inter (body)
- Brand colors: Navy `#01193e` · Gold `#efad01` (from logo)

## Pages
| Route | Purpose |
|---|---|
| `/` | Home — full conversion funnel (hero → services → why us → areas → quote) |
| `/services` | 6 detailed service blocks + "How It Works" |
| `/service-areas` | FL & GA city coverage + popular lanes |
| `/about` | Asset-based carrier story, values, who we serve |
| `/quote` | Get a Quote — full quote form + process |
| `/become-a-driver` | Driver application |
| `/track` | Track Your Order — status request |
| `/contact` | Contact cards + quote form |

SEO: per-page metadata, `sitemap.xml`, `robots.txt`, LocalBusiness JSON-LD.

## Forms / Leads
All forms POST to `/api/quote`, `/api/driver`, `/api/track` (shared handler in `lib/leads.js`).
Leads are always logged server-side. **To enable email delivery**, set env vars:

```
SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, LEAD_TO (optional, defaults to info@mosleyprime.com)
```

## Develop & Deploy
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
vercel --prod    # deploy (remember: manual deploy needed)
```

## Notes
- Hero/card van photos are cropped from the approved design mockup; replace with real fleet photography in `public/images/` when available.
- Contact info used: (689) 777-6885 · info@mosleyprime.com · Windermere, FL.
