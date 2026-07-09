// Inline SVG icon set — single source so every icon shares stroke style
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function Icon({ name, className = "w-6 h-6" }) {
  const paths = {
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
    signal: (
      <>
        <circle cx="12" cy="12" r="2.4" />
        <path d="M7.5 7.5a6.4 6.4 0 000 9M16.5 7.5a6.4 6.4 0 010 9" />
        <path d="M4.8 4.8a10.2 10.2 0 000 14.4M19.2 4.8a10.2 10.2 0 010 14.4" />
      </>
    ),
    calendar: (
      <>
        <rect x="3.5" y="5" width="17" height="16" rx="2" />
        <path d="M3.5 10h17M8 2.5V6M16 2.5V6" />
        <circle cx="12" cy="15.5" r="2.2" />
        <path d="M12 14v1.5l1 1" />
      </>
    ),
    tools: (
      <>
        <path d="M14.5 6.5a4 4 0 015 5L9 22l-3.5.5L6 19 16.5 8.5" />
        <path d="M3 7l4-4 3 3-4 4-3-3zM17.5 14.5L21 18l-3 3-3.5-3.5" />
      </>
    ),
    glove: (
      <>
        <path d="M7 11V5.5a1.5 1.5 0 013 0V10m0-5.5v-1a1.5 1.5 0 013 0V10m0-5a1.5 1.5 0 013 0V11m0-3.5a1.5 1.5 0 013 0V15a7 7 0 01-7 7h-1a7 7 0 01-7-7v-2.5a1.5 1.5 0 013 0" />
      </>
    ),
    medical: (
      <>
        <rect x="3.5" y="7" width="17" height="14" rx="2" />
        <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M12 11v6M9 14h6" />
      </>
    ),
    reverse: (
      <>
        <path d="M4 9h11a5 5 0 010 10H9" />
        <path d="M8 5L4 9l4 4" />
      </>
    ),
    pallet: (
      <>
        <rect x="4" y="4" width="7" height="6" rx="0.8" />
        <rect x="13" y="4" width="7" height="6" rx="0.8" />
        <rect x="8.5" y="12" width="7" height="6" rx="0.8" />
        <path d="M3 21h18M5 18.5V21M19 18.5V21M12 18.5V21" />
      </>
    ),
    van: (
      <>
        <path d="M2.5 16V7.5A1.5 1.5 0 014 6h10.5a1.5 1.5 0 011.5 1.5V16" />
        <path d="M16 9h3l2.5 3.5V16H16" />
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
        <path d="M9 17h6M2.5 16H5" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s-7-5.5-7-11a7 7 0 0114 0c0 5.5-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.6" />
      </>
    ),
    phone: (
      <>
        <path d="M5 4h4l1.5 4.5L8 10a13 13 0 006 6l1.5-2.5L20 15v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5.5" width="18" height="13" rx="2" />
        <path d="M3.5 7l8.5 6 8.5-6" />
      </>
    ),
    check: <path d="M4.5 12.5l5 5 10-11" />,
    arrow: <path d="M4 12h16m-6-6l6 6-6 6" />,
    quote: (
      <>
        <path d="M8 4h9a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V7l3-3z" />
        <path d="M8 4v3H5M9 12h7M9 15.5h5M9 8.5h4" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="6.5" />
        <path d="M20 20l-4.3-4.3" />
      </>
    ),
    steering: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="2.5" />
        <path d="M3.2 10.5c3-1.3 14.6-1.3 17.6 0M12 14.5V21M9.8 13.8L4.5 18M14.2 13.8L19.5 18" />
      </>
    ),
    building: (
      <>
        <path d="M4 21V5a2 2 0 012-2h7a2 2 0 012 2v16M15 9h3a2 2 0 012 2v10M3 21h19" />
        <path d="M7.5 7h2M7.5 11h2M7.5 15h2" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3.5 20a5.5 5.5 0 0111 0" />
        <circle cx="17" cy="9.5" r="2.5" />
        <path d="M16 15.5a4.5 4.5 0 014.5 4.5" />
      </>
    ),
    bolt: <path d="M13 2L4.5 13.5H11L9.5 22 19 10h-6.5L13 2z" />,
    box: (
      <>
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
        <path d="M4 7.5l8 4.5 8-4.5M12 12v9" />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      {paths[name] || paths.box}
    </svg>
  );
}
