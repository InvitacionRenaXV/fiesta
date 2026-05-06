/* 1 — Silueta corazón sólida con línea central */
export function HeartHands1(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 52" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M24 46 C24 46 4 34 4 20 C4 12 10 7 16 9 C19 10 22 13 24 17 C26 13 29 10 32 9 C38 7 44 12 44 20 C44 34 24 46 24 46 Z" fill="currentColor" fillOpacity="0.12" />
      <line x1="24" y1="17" x2="24" y2="46" strokeWidth="1" />
      <path d="M8 46 L16 46 M32 46 L40 46" strokeWidth="1.4" />
    </svg>
  )
}

/* 2 — Dos manos simétricas con pulgares curvados formando arco */
export function HeartHands2(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* Palma izquierda */}
      <path d="M4 48 L4 28 Q4 22 10 20 L20 48 Z" fill="currentColor" fillOpacity="0.08" />
      <path d="M4 48 L4 28 Q4 22 10 20 L20 48" />
      {/* Pulgar izquierdo curvado hacia arriba */}
      <path d="M10 20 Q8 12 12 8 Q17 4 20 10 Q22 14 26 14" strokeWidth="1.6" />
      {/* Palma derecha */}
      <path d="M48 48 L48 28 Q48 22 42 20 L32 48 Z" fill="currentColor" fillOpacity="0.08" />
      <path d="M48 48 L48 28 Q48 22 42 20 L32 48" />
      {/* Pulgar derecho curvado hacia arriba */}
      <path d="M42 20 Q44 12 40 8 Q35 4 32 10 Q30 14 26 14" strokeWidth="1.6" />
    </svg>
  )
}

/* 3 — Vista frontal: palmas abiertas, pulgares se tocan arriba formando corazón */
export function HeartHands3(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* Mano izquierda: 4 dedos + palma */}
      <rect x="5" y="20" width="5" height="14" rx="2.5" />
      <rect x="11" y="16" width="5" height="18" rx="2.5" />
      <rect x="17" y="15" width="5" height="19" rx="2.5" />
      <rect x="23" y="16" width="4" height="18" rx="2" />
      <path d="M5 32 Q5 42 14 44 L26 44" />
      {/* Pulgar izquierdo curvando al corazón */}
      <path d="M5 24 Q2 18 5 13 Q9 8 13 11 Q17 14 26 14" />
      {/* Mano derecha: espejo */}
      <rect x="42" y="20" width="5" height="14" rx="2.5" />
      <rect x="36" y="16" width="5" height="18" rx="2.5" />
      <rect x="30" y="15" width="5" height="19" rx="2.5" />
      <rect x="25" y="16" width="4" height="18" rx="2" />
      <path d="M47 32 Q47 42 38 44 L26 44" />
      {/* Pulgar derecho */}
      <path d="M47 24 Q50 18 47 13 Q43 8 39 11 Q35 14 26 14" />
      {/* Corazón arriba */}
      <path d="M26 14 Q26 8 26 14" strokeWidth="0" />
      <path d="M19 11 Q22 5 26 8 Q30 5 33 11" strokeWidth="1.4" fill="currentColor" fillOpacity="0.15" />
    </svg>
  )
}

/* 4 — Minimalista: solo el contorno exterior de las dos manos formando corazón */
export function HeartHands4(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 50" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* Contorno completo: empieza muñeca izq, sube por dedos, arco corazón, baja derecha */}
      <path d="
        M6 48
        L6 30 Q6 24 10 22
        L10 16 Q10 12 13 12 Q16 12 16 16 L16 20
        L16 14 Q16 10 19 10 Q22 10 22 14 L22 20
        L22 15 Q22 11 24 11 Q26 11 26 15 L26 20
        L26 14 Q26 10 29 10 Q32 10 32 14 L32 20
        Q34 16 34 12 Q38 8 40 11 Q44 14 42 22
        Q40 30 32 38 L24 48
      " />
      <path d="
        M42 48
        L42 30 Q42 24 38 22
      " />
      <line x1="24" y1="20" x2="24" y2="48" strokeWidth="0.8" strokeDasharray="2 3" />
      <path d="M6 48 Q15 50 24 48 Q33 50 42 48" />
    </svg>
  )
}

/* 5 — Dos puños cerrados con pulgares hacia arriba formando corazón */
export function HeartHands5(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* Puño izquierdo */}
      <rect x="4" y="24" width="18" height="20" rx="4" fill="currentColor" fillOpacity="0.08" />
      <rect x="4" y="24" width="18" height="20" rx="4" />
      <line x1="4" y1="30" x2="22" y2="30" strokeWidth="1" />
      <line x1="4" y1="36" x2="22" y2="36" strokeWidth="1" />
      {/* Pulgar izquierdo curvando hacia el centro */}
      <path d="M7 24 Q6 16 10 11 Q14 7 18 10 Q22 13 26 12" strokeWidth="1.6" />
      {/* Puño derecho */}
      <rect x="30" y="24" width="18" height="20" rx="4" fill="currentColor" fillOpacity="0.08" />
      <rect x="30" y="24" width="18" height="20" rx="4" />
      <line x1="30" y1="30" x2="48" y2="30" strokeWidth="1" />
      <line x1="30" y1="36" x2="48" y2="36" strokeWidth="1" />
      {/* Pulgar derecho */}
      <path d="M45 24 Q46 16 42 11 Q38 7 34 10 Q30 13 26 12" strokeWidth="1.6" />
      {/* Corazón formado por los pulgares */}
      <path d="M18 10 Q22 4 26 8 Q30 4 34 10" fill="currentColor" fillOpacity="0.1" strokeWidth="1.4" />
    </svg>
  )
}

/* 6 — Enfoque emoji-fiel: corazón completo formado por la silueta de ambas manos unidas */
export function HeartHands6(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 54" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* Silueta mano izquierda */}
      <path d="M4 50 Q4 38 6 30 Q8 24 12 22 Q11 18 12 15 Q13 11 16 11 Q19 11 19 15 L19 20 Q20 16 20 13 Q21 9 24 9 Q27 9 27 13 L27 20" fill="currentColor" fillOpacity="0.07" />
      <path d="M4 50 Q4 38 6 30 Q8 24 12 22 Q11 18 12 15 Q13 11 16 11 Q19 11 19 15 L19 20 Q20 16 20 13 Q21 9 24 9 Q27 9 27 13 L27 20" />
      {/* Pulgar izquierdo al corazón */}
      <path d="M12 22 Q9 14 12 9 Q16 4 20 7 Q23 10 26 9" strokeWidth="1.5" />
      {/* Silueta mano derecha (espejo) */}
      <path d="M48 50 Q48 38 46 30 Q44 24 40 22 Q41 18 40 15 Q39 11 36 11 Q33 11 33 15 L33 20 Q32 16 32 13 Q31 9 28 9 Q25 9 25 13 L25 20" fill="currentColor" fillOpacity="0.07" />
      <path d="M48 50 Q48 38 46 30 Q44 24 40 22 Q41 18 40 15 Q39 11 36 11 Q33 11 33 15 L33 20 Q32 16 32 13 Q31 9 28 9 Q25 9 25 13 L25 20" />
      {/* Pulgar derecho al corazón */}
      <path d="M40 22 Q43 14 40 9 Q36 4 32 7 Q29 10 26 9" strokeWidth="1.5" />
      {/* Base unida */}
      <path d="M4 50 Q26 54 48 50" />
    </svg>
  )
}

/* 7 — Trazo único: corazón donde los lados son los contornos de las palmas */
export function HeartHands7(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 52" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* Trazo continuo exterior */}
      <path d="M24 48 Q10 38 5 28 Q0 18 5 11 Q10 4 17 7 Q21 9 24 15 Q27 9 31 7 Q38 4 43 11 Q48 18 43 28 Q38 38 24 48 Z" fill="currentColor" fillOpacity="0.1" />
      {/* Línea central (separación manos) */}
      <line x1="24" y1="15" x2="24" y2="48" strokeWidth="1" />
      {/* Dedos izquierda arriba */}
      <path d="M10 10 Q8 5 11 3 Q14 1 16 5 Q17 8 17 12" strokeWidth="1.3" />
      <path d="M16 6 Q17 2 20 2 Q23 2 23 6 L23 12" strokeWidth="1.3" />
      {/* Dedos derecha arriba */}
      <path d="M38 10 Q40 5 37 3 Q34 1 32 5 Q31 8 31 12" strokeWidth="1.3" />
      <path d="M32 6 Q31 2 28 2 Q25 2 25 6 L25 12" strokeWidth="1.3" />
    </svg>
  )
}

/* 8 — Palmas planas hacia arriba, pulgares curvados tocándose formando arco corazón */
export function HeartHands8(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 52" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* Palma izquierda (horizontal, girada) */}
      <path d="M2 44 Q2 36 8 34 L22 34 Q24 34 24 36 L24 44 Q24 48 18 50 L8 50 Q2 50 2 44 Z" fill="currentColor" fillOpacity="0.08" />
      <path d="M2 44 Q2 36 8 34 L22 34 Q24 34 24 36 L24 44 Q24 48 18 50 L8 50 Q2 50 2 44 Z" />
      {/* Dedos izquierda apuntando arriba */}
      <path d="M8 34 L6 20 Q6 16 9 16 Q12 16 12 20 L12 32" strokeWidth="1.3" />
      <path d="M12 34 L11 18 Q11 14 14 14 Q17 14 17 18 L17 32" strokeWidth="1.3" />
      <path d="M17 34 L17 17 Q17 13 20 13 Q23 13 23 17 L23 32" strokeWidth="1.3" />
      {/* Pulgar izquierdo */}
      <path d="M2 40 Q0 34 3 30 Q7 26 12 28 Q18 30 22 26 Q26 22 28 18" strokeWidth="1.5" />
      {/* Palma derecha (espejo) */}
      <path d="M54 44 Q54 36 48 34 L34 34 Q32 34 32 36 L32 44 Q32 48 38 50 L48 50 Q54 50 54 44 Z" fill="currentColor" fillOpacity="0.08" />
      <path d="M54 44 Q54 36 48 34 L34 34 Q32 34 32 36 L32 44 Q32 48 38 50 L48 50 Q54 50 54 44 Z" />
      {/* Dedos derecha */}
      <path d="M48 34 L50 20 Q50 16 47 16 Q44 16 44 20 L44 32" strokeWidth="1.3" />
      <path d="M44 34 L45 18 Q45 14 42 14 Q39 14 39 18 L39 32" strokeWidth="1.3" />
      <path d="M39 34 L39 17 Q39 13 36 13 Q33 13 33 17 L33 32" strokeWidth="1.3" />
      {/* Pulgar derecho */}
      <path d="M54 40 Q56 34 53 30 Q49 26 44 28 Q38 30 34 26 Q30 22 28 18" strokeWidth="1.5" />
      {/* Corazón formado por los pulgares */}
      <path d="M22 26 Q25 16 28 14 Q31 16 34 26" fill="currentColor" fillOpacity="0.12" strokeWidth="1.4" />
    </svg>
  )
}

/* 9 — Versión muy simplificada: dos siluetas de mano + corazón central */
export function HeartHands9(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 50" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* Mano izquierda simplificada */}
      <path d="M4 46 L4 26 Q4 20 10 18 L10 12 Q10 8 13 8 Q16 8 16 12 L16 18 L20 14 Q20 10 23 10 Q26 10 26 14 L26 18" />
      <path d="M4 46 Q12 50 26 46" />
      {/* Mano derecha simplificada */}
      <path d="M48 46 L48 26 Q48 20 42 18 L42 12 Q42 8 39 8 Q36 8 36 12 L36 18 L32 14 Q32 10 29 10 Q26 10 26 14 L26 18" />
      <path d="M48 46 Q40 50 26 46" />
      {/* Pulgares formando corazón */}
      <path d="M10 18 Q8 10 12 6 Q17 2 21 8 Q23 12 26 14 Q29 12 31 8 Q35 2 40 6 Q44 10 42 18" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
    </svg>
  )
}

/* 10 — Solo el corazón-mano como logo: silueta limpia con pulgar visible */
export function HeartHands10(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 52" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* Silueta exterior única */}
      <path
        d="M6 50
           L6 30 Q6 22 12 20
           Q10 14 11 10 Q12 6 15 6 Q18 6 18 10 L18 18
           Q19 12 20 9 Q21 5 24 5 Q27 5 28 9 L28 18
           Q29 12 31 10 Q32 6 35 6 Q38 6 38 10
           Q38 14 36 20
           Q42 22 42 30 L42 50
           Q34 54 24 52 Q14 54 6 50 Z"
        fill="currentColor"
        fillOpacity="0.1"
      />
      {/* División central */}
      <line x1="24" y1="14" x2="24" y2="50" strokeWidth="1" strokeDasharray="2 3" />
      {/* Pulgar izq */}
      <path d="M12 20 Q8 12 11 7 Q15 2 19 6 Q22 10 24 14" strokeWidth="1.4" />
      {/* Pulgar der */}
      <path d="M36 20 Q40 12 37 7 Q33 2 29 6 Q26 10 24 14" strokeWidth="1.4" />
    </svg>
  )
}
