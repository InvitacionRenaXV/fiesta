export default function DiscoBallIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 60"
      fill="none"
      {...props}
    >
      {/* Hilo */}
      <line x1="24" y1="0" x2="24" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

      {/* Esfera base */}
      <circle cx="24" cy="30" r="18" fill="#2a2a2a" stroke="currentColor" strokeWidth="1.2" />

      {/* Líneas de cuadrícula horizontales (recortadas al círculo) */}
      <clipPath id="ballClip">
        <circle cx="24" cy="30" r="18" />
      </clipPath>
      <g clipPath="url(#ballClip)" stroke="currentColor" strokeWidth="0.6" opacity="0.4">
        <line x1="6" y1="18" x2="42" y2="18" />
        <line x1="6" y1="24" x2="42" y2="24" />
        <line x1="6" y1="30" x2="42" y2="30" />
        <line x1="6" y1="36" x2="42" y2="36" />
        <line x1="6" y1="42" x2="42" y2="42" />
        <line x1="18" y1="12" x2="18" y2="48" />
        <line x1="24" y1="12" x2="24" y2="48" />
        <line x1="30" y1="12" x2="30" y2="48" />
      </g>

      {/* Destellos en los azulejos */}
      <g clipPath="url(#ballClip)">
        <rect x="15" y="17" width="5" height="4" rx="0.5" fill="white" opacity="0.7" />
        <rect x="27" y="23" width="5" height="4" rx="0.5" fill="white" opacity="0.5" />
        <rect x="21" y="29" width="5" height="4" rx="0.5" fill="#d0e8ff" opacity="0.6" />
        <rect x="9" y="23" width="5" height="4" rx="0.5" fill="white" opacity="0.4" />
        <rect x="33" y="29" width="5" height="4" rx="0.5" fill="#ffe0f0" opacity="0.5" />
        <rect x="15" y="35" width="5" height="4" rx="0.5" fill="white" opacity="0.35" />
        <rect x="27" y="35" width="5" height="4" rx="0.5" fill="#d0e8ff" opacity="0.4" />
        <rect x="21" y="17" width="5" height="4" rx="0.5" fill="#ffe0f0" opacity="0.5" />
        <rect x="33" y="17" width="5" height="4" rx="0.5" fill="white" opacity="0.3" />
      </g>

      {/* Brillo principal */}
      <circle cx="18" cy="22" r="3" fill="white" opacity="0.25" />
    </svg>
  )
}
