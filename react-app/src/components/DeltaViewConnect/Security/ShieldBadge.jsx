/** Floating shield. The icon inside (lock / eye / check) is chosen by CSS from the card's data-mode. */
export default function ShieldBadge() {
  return (
    <>
      <div className="ring" />
      <div className="shield" aria-hidden="true">
        <svg viewBox="0 0 90 110">
          <defs>
            <linearGradient id="shield-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#7aa2ff" /><stop offset="1" stopColor="#2c55d6" />
            </linearGradient>
          </defs>
          <path className="shackle" d="M28 36V24a17 17 0 0 1 34 0v12" fill="none" stroke="#f5b301" strokeWidth="8" strokeLinecap="round" />
          <path d="M45 30 80 42v26c0 21-15 33-35 40C25 101 10 89 10 68V42z" fill="url(#shield-g)" stroke="#fff" strokeWidth="3" />
          <g className="ico i-lock" fill="#fff">
            <rect x="33" y="60" width="24" height="18" rx="4" />
            <path d="M38 60v-5a7 7 0 0 1 14 0v5" fill="none" stroke="#fff" strokeWidth="4" />
          </g>
          <g className="ico i-eye" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round">
            <path d="M28 66c9-12 25-12 34 0-9 12-25 12-34 0z" /><circle cx="45" cy="66" r="4" fill="#fff" /><path d="M32 78 58 54" />
          </g>
          <g className="ico i-ok"><path d="M32 66l9 9 18-20" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" /></g>
        </svg>
      </div>
    </>
  );
}
