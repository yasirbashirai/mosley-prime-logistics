/* Stylized Florida + Georgia coverage map (simplified silhouettes) */
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
        d="M158 18 L278 28 L293 72 L322 132 L336 176 L150 176 L143 82 Z"
        fill="url(#stateFill)"
        stroke="#efad01"
        strokeWidth="2"
        strokeLinejoin="round"
        filter="url(#mapShadow)"
      />
      {/* Florida */}
      <path
        d="M42 190 L336 186 L352 232 L358 292 L348 362 L328 422 L303 466 L283 470 L278 432 L263 372 L243 312 L223 266 L203 242 L180 234 L46 230 Z"
        fill="url(#stateFill)"
        stroke="#efad01"
        strokeWidth="2"
        strokeLinejoin="round"
        filter="url(#mapShadow)"
      />
      {/* Keys */}
      <g fill="#0a3468" stroke="#efad01" strokeWidth="1.4">
        <circle cx="272" cy="486" r="4" />
        <circle cx="256" cy="493" r="3.4" />
        <circle cx="240" cy="497" r="2.8" />
      </g>

      {/* Route line between pins */}
      <path
        d="M235 108 C 275 170, 292 240, 296 320"
        fill="none"
        stroke="#efad01"
        strokeWidth="2.5"
        strokeDasharray="2 8"
        strokeLinecap="round"
      />

      {/* GA pin */}
      <g transform="translate(235 78)">
        <path d="M0 30 C -13 14, -13 -2, 0 -10 C 13 -2, 13 14, 0 30 Z" fill="#efad01" transform="translate(0 -14) scale(1.05)" />
        <circle cx="0" cy="-18" r="5.5" fill="#01193e" />
        <text x="20" y="-12" fill="#ffffff" fontFamily="var(--font-montserrat), sans-serif" fontWeight="800" fontSize="26">
          GA
        </text>
      </g>

      {/* FL pin */}
      <g transform="translate(296 336)">
        <path d="M0 30 C -13 14, -13 -2, 0 -10 C 13 -2, 13 14, 0 30 Z" fill="#efad01" transform="translate(0 -14) scale(1.05)" />
        <circle cx="0" cy="-18" r="5.5" fill="#01193e" />
        <text x="-58" y="-10" fill="#ffffff" fontFamily="var(--font-montserrat), sans-serif" fontWeight="800" fontSize="26">
          FL
        </text>
      </g>
    </svg>
  );
}
