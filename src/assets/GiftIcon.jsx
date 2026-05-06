export default function GiftIcon({ lidClass, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 72"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ overflow: 'visible' }}
      {...props}
    >
      {/* Caja */}
      <rect x="6" y="22" width="36" height="28" rx="1" />
      {/* Tapa + moño como grupo */}
      <g className={lidClass}>
        <rect x="4" y="14" width="40" height="8" rx="1" />
        <line x1="4" y1="18" x2="44" y2="18" strokeWidth="1" />
        <line x1="24" y1="14" x2="24" y2="22" />
        <path d="M24 14 Q18 8 14 10 Q10 12 14 16 Q18 18 24 14" fill="currentColor" fillOpacity="0.08" />
        <path d="M24 14 Q30 8 34 10 Q38 12 34 16 Q30 18 24 14" fill="currentColor" fillOpacity="0.08" />
      </g>
      {/* Cinta vertical en la caja */}
      <line x1="24" y1="22" x2="24" y2="50" />
    </svg>
  )
}
