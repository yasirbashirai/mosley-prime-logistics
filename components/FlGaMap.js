/* Florida + Georgia coverage map — real state outlines (US Census 20m
   cartographic boundaries, projected into this viewBox), brand styled. */

const GEORGIA_D =
  "M230.4 20L221.4 30.4L220.7 35.4L234.8 45.8L239.1 45L245.6 55.7L247 61.2L253.7 71.4L263.3 77.5L268.9 86.5L280.1 94.8L279.7 100.4L287 109.4L298.3 116.9L301.1 124.8L301.6 135.2L307.3 138.7L314 151.7L314.2 160L323.9 164.2L313.5 180.7L311.7 189.2L307.3 196.7L306.9 204.4L302.2 207.8L300.4 228.6L288.9 226.7L279.2 222.7L275.3 226.5L276.9 235.5L275.1 245.4L270 245.6L267.9 235.3L214 231.5L156.5 228.3L150.7 214.2L146.1 200.9L149.1 188.2L145 173.5L148.6 165.3L148.4 159.2L155.6 153L150.7 150.1L152.6 145.3L148 137.6L143.1 124L132.8 62.6L125.4 20.8L179.5 20.5L209 20.8L230.4 20Z";

const FLORIDA_D =
  "M130 214.5L150.7 214.2L156.5 228.3L214 231.5L267.9 235.3L270 245.6L275.1 245.4L276.9 235.5L275.3 226.5L279.2 222.7L288.9 226.7L300.4 228.6L302.9 249.6L308.2 273.3L320.4 304.4L339.1 337.7L336.3 340.1L337.3 355.5L345.1 372.8L357.3 407.7L359.8 418.6L359.6 429.8L355 469.9L351.1 470.7L346.9 483.2L348.3 487.2L340.2 496.3L337 494.1L329.2 497.9L315.8 500L311.9 494.9L313.8 487.5L304.3 465.9L297 462L290.5 464.9L285.4 452.9L284.1 443.1L275.3 432.2L273.2 425L274.6 414.6L269.8 412.7L270.9 418.8L266.6 420.4L253.2 394.1L247.9 387.5L260.6 368L252.3 369.1L246.7 375.2L241.2 365.6L248.6 339L250 316.9L244.9 311.6L243.3 304.4L235.2 302.8L225.8 291.1L218.2 286.3L217.7 279.2L212.4 276.5L208.1 268.5L191.9 257.9L177.9 260.3L178.6 267.7L174 266.4L156.5 275.4L137.8 277.6L138.3 272.2L133.9 265.9L112 251.5L96.4 245.4L82.3 243.8L70.6 244.8L45 249.4L51.2 242.2L48 238.2L49.6 230.2L40.2 220.9L41.6 214.5L130 214.5Z";

export default function FlGaMap({ className = "" }) {
  return (
    <svg viewBox="0 0 400 520" className={className} role="img" aria-label="Map of Florida and Georgia service area">
      <defs>
        <linearGradient id="stateFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0a3468" />
          <stop offset="100%" stopColor="#01193e" />
        </linearGradient>
        <filter id="mapShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#01193e" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* Georgia */}
      <path
        d={GEORGIA_D}
        fill="url(#stateFill)"
        stroke="#efad01"
        strokeWidth="2"
        strokeLinejoin="round"
        filter="url(#mapShadow)"
      />
      {/* Florida */}
      <path
        d={FLORIDA_D}
        fill="url(#stateFill)"
        stroke="#efad01"
        strokeWidth="2"
        strokeLinejoin="round"
        filter="url(#mapShadow)"
      />
      {/* Florida Keys */}
      <g fill="#0a3468" stroke="#efad01" strokeWidth="1.4">
        <circle cx="322" cy="508" r="3.6" />
        <circle cx="306" cy="512" r="3" />
        <circle cx="291" cy="514" r="2.4" />
      </g>

      {/* Route line: Atlanta → Orlando */}
      <path
        d="M176.6 92 C 220 170, 280 250, 303 320"
        fill="none"
        stroke="#efad01"
        strokeWidth="2.5"
        strokeDasharray="2 8"
        strokeLinecap="round"
      />

      {/* GA pin (Atlanta) */}
      <g transform="translate(176.6 80.8)">
        <path d="M0 30 C -13 14, -13 -2, 0 -10 C 13 -2, 13 14, 0 30 Z" fill="#efad01" transform="translate(0 -14) scale(1.05)" />
        <circle cx="0" cy="-18" r="5.5" fill="#01193e" />
        <text x="22" y="-12" fill="#ffffff" fontFamily="var(--font-montserrat), sans-serif" fontWeight="800" fontSize="26">
          GA
        </text>
      </g>

      {/* FL pin (Orlando) */}
      <g transform="translate(303.1 334)">
        <path d="M0 30 C -13 14, -13 -2, 0 -10 C 13 -2, 13 14, 0 30 Z" fill="#efad01" transform="translate(0 -14) scale(1.05)" />
        <circle cx="0" cy="-18" r="5.5" fill="#01193e" />
        <text x="-60" y="-10" fill="#ffffff" fontFamily="var(--font-montserrat), sans-serif" fontWeight="800" fontSize="26">
          FL
        </text>
      </g>
    </svg>
  );
}
