export default function DressIcon(props) {
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
