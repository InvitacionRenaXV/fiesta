/* Opción 1: Actual — corpiño con tirantes, falda amplia */
export function DressIcon1(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 60" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 2 C14 8 14 14 16 18 L32 18 C34 14 34 8 32 2 Z" fill="currentColor" fillOpacity="0.1" />
      <line x1="18" y1="2" x2="16" y2="8" />
      <line x1="30" y1="2" x2="32" y2="8" />
      <path d="M16 18 C12 26 8 34 6 54 L42 54 C40 34 36 26 32 18 Z" fill="currentColor" fillOpacity="0.08" />
      <path d="M15 20 Q24 16 33 20" />
      <path d="M10 38 Q24 34 38 38" strokeWidth="1" />
    </svg>
  )
}

/* Opción 2: Ball gown — falda muy amplia tipo princesa, escote recto */
export function DressIcon2(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 60" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* Corpiño escote recto */}
      <path d="M14 2 L34 2 L34 18 L14 18 Z" fill="currentColor" fillOpacity="0.1" />
      {/* Tirantes */}
      <line x1="17" y1="2" x2="17" y2="0" />
      <line x1="31" y1="2" x2="31" y2="0" />
      {/* Falda princesa muy amplia */}
      <path d="M14 18 C8 26 2 36 2 54 L46 54 C46 36 40 26 34 18 Z" fill="currentColor" fillOpacity="0.08" />
      {/* Cintura */}
      <path d="M14 18 Q24 14 34 18" />
      {/* Capas de falda */}
      <path d="M6 36 Q24 30 42 36" strokeWidth="1" />
      <path d="M3 46 Q24 40 45 46" strokeWidth="1" />
    </svg>
  )
}

/* Opción 3: Sirena — ajustada arriba y caderas, abierta abajo */
export function DressIcon3(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 60" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* Cuerpo ajustado */}
      <path d="M17 2 C15 8 15 16 16 22 C17 30 18 36 16 42 C12 48 8 50 6 54 L42 54 C40 50 36 48 32 42 C30 36 31 30 32 22 C33 16 33 8 31 2 Z" fill="currentColor" fillOpacity="0.08" />
      {/* Contorno */}
      <path d="M17 2 Q24 0 31 2" />
      {/* Cintura marcada */}
      <path d="M16 24 Q24 21 32 24" />
      {/* Punto de apertura */}
      <path d="M16 42 Q24 38 32 42" />
      {/* Tirantes */}
      <line x1="19" y1="2" x2="18" y2="7" />
      <line x1="29" y1="2" x2="30" y2="7" />
    </svg>
  )
}

/* Opción 4: A-line simple — líneas limpias, escote V */
export function DressIcon4(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 60" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* Silueta A */}
      <path d="M18 2 L14 8 L24 16 L34 8 L30 2 Z" fill="currentColor" fillOpacity="0.1" />
      {/* V cuello */}
      <path d="M18 2 L24 10 L30 2" />
      {/* Falda A */}
      <path d="M14 8 L6 54 L42 54 L34 8 Z" fill="currentColor" fillOpacity="0.07" />
      {/* Cintura */}
      <line x1="14" y1="18" x2="34" y2="18" strokeWidth="1.2" />
      {/* Costuras falda */}
      <line x1="20" y1="8" x2="14" y2="54" strokeWidth="0.8" strokeDasharray="3,3" />
      <line x1="28" y1="8" x2="34" y2="54" strokeWidth="0.8" strokeDasharray="3,3" />
    </svg>
  )
}

/* Opción 5: Off-shoulder — escote sin tirantes, falda con vuelo */
export function DressIcon5(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 60" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* Corpiño off-shoulder */}
      <path d="M10 6 Q24 2 38 6 L36 18 L12 18 Z" fill="currentColor" fillOpacity="0.1" />
      {/* Línea hombros */}
      <path d="M10 6 Q24 10 38 6" />
      {/* Drapeado */}
      <path d="M12 10 Q24 14 36 10" strokeWidth="1" />
      {/* Falda con vuelo */}
      <path d="M12 18 C10 26 6 36 4 54 L44 54 C42 36 38 26 36 18 Z" fill="currentColor" fillOpacity="0.08" />
      {/* Cintura */}
      <path d="M12 18 Q24 14 36 18" />
      {/* Vuelos */}
      <path d="M8 36 Q24 31 40 36" strokeWidth="1" />
    </svg>
  )
}

/* Opción 6: Halter neck — tiras al cuello, escote corazón */
export function DressIcon6(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 60" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="20" y1="2" x2="16" y2="10" />
      <line x1="28" y1="2" x2="32" y2="10" />
      <path d="M20 2 Q24 0 28 2" />
      <path d="M16 10 L32 10 L32 20 L16 20 Z" fill="currentColor" fillOpacity="0.1" />
      <path d="M16 10 Q20 6 24 10 Q28 6 32 10" strokeWidth="1.2" />
      <path d="M16 20 C12 30 8 40 7 54 L41 54 C40 40 36 30 32 20 Z" fill="currentColor" fillOpacity="0.08" />
      <path d="M16 20 Q24 16 32 20" />
    </svg>
  )
}

/* Opción 7: Vestido camisero — tipo blazer dress, solapa */
export function DressIcon7(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 60" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 4 C12 2 18 1 24 1 C30 1 36 2 36 4 L36 54 L12 54 Z" />
      <path d="M24 1 L18 12 L24 18" />
      <path d="M24 1 L30 12 L24 18" />
      <rect x="12" y="26" width="24" height="4" rx="1" fill="currentColor" fillOpacity="0.2" />
      <circle cx="24" cy="28" r="1.5" fill="currentColor" stroke="none" />
      <rect x="13" y="32" width="7" height="6" rx="1" strokeWidth="1.2" />
      <rect x="28" y="32" width="7" height="6" rx="1" strokeWidth="1.2" />
    </svg>
  )
}

/* Opción 8: Vestido con capa — drapeado elegante */
export function DressIcon8(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 60" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M17 2 C15 8 15 14 17 20 C14 28 10 40 8 54 L40 54 C38 40 34 28 31 20 C33 14 33 8 31 2 Z" fill="currentColor" fillOpacity="0.07" />
      <path d="M17 2 Q24 5 31 2" />
      <path d="M14 14 C8 22 6 36 8 54" strokeWidth="1.2" />
      <path d="M34 14 C40 22 42 36 40 54" strokeWidth="1.2" />
      <path d="M17 20 Q24 17 31 20" />
    </svg>
  )
}

/* Opción 9: Mini vestido — corto, moderno */
export function DressIcon9(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 60" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 2 L33 2 L33 20 L15 20 Z" fill="currentColor" fillOpacity="0.1" />
      <path d="M15 2 L24 12 L33 2" />
      <line x1="18" y1="2" x2="18" y2="0" />
      <line x1="30" y1="2" x2="30" y2="0" />
      <path d="M15 20 C12 28 10 36 10 42 L38 42 C38 36 36 28 33 20 Z" fill="currentColor" fillOpacity="0.08" />
      <path d="M15 20 Q24 16 33 20" />
      <path d="M10 34 Q24 30 38 34" strokeWidth="1" />
    </svg>
  )
}

/* Opción 10: Vestido asimétrico — un tirante, falda diagonal */
export function DressIcon10(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 60" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="19" y1="2" x2="17" y2="8" />
      <path d="M17 8 L33 4 L33 18 L15 18 Z" fill="currentColor" fillOpacity="0.1" />
      <path d="M17 8 Q25 5 33 4" />
      <path d="M15 18 C10 28 6 40 8 54 L40 54 C42 40 38 28 33 18 Z" fill="currentColor" fillOpacity="0.08" />
      <path d="M15 18 Q24 14 33 18" />
      <path d="M8 40 Q26 34 40 42" strokeWidth="1" />
    </svg>
  )
}
