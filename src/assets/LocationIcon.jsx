export default function LocationIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Mapa con pliegues — 3 columnas */}
      <polygon points="3,4 8,2 16,4 21,2 21,20 16,22 8,20 3,22" />
      {/* Pliegues verticales */}
      <line x1="8" y1="2" x2="8" y2="20" />
      <line x1="16" y1="4" x2="16" y2="22" />
      {/* Ruta curva horizontal */}
      <path d="M4 10 C6 8, 10 12, 13 10" strokeWidth="1.2" />
      {/* Ruta corta diagonal */}
      <path d="M13 10 C15 8.5, 17 9, 19 8" strokeWidth="1.2" />
      {/* Carretera vertical */}
      <line x1="10" y1="14" x2="10" y2="19" strokeWidth="1.2" />
      {/* Pin de ubicación */}
      <circle cx="13" cy="10" r="1.3" fill="currentColor" fillOpacity="0.4" />
      <circle cx="13" cy="10" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}
