export default function HeartHandsIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 44"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Relleno opaco para bloquear el glow interior */}
      <path
        d="M24 40 C24 40 4 28 4 14 C4 7 9 2 16 4 C19 5 22 8 24 12 C26 8 29 5 32 4 C39 2 44 7 44 14 C44 28 24 40 24 40 Z"
        fill="#383636"
        stroke="none"
      />
      {/* Trazo del corazón */}
      <path
        d="M24 40 C24 40 4 28 4 14 C4 7 9 2 16 4 C19 5 22 8 24 12 C26 8 29 5 32 4 C39 2 44 7 44 14 C44 28 24 40 24 40 Z"
        fill="none"
      />
    </svg>
  )
}
