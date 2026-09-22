export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#" className={`flex items-center gap-2.5 group ${className}`}>
      {/* Ikonë e veturës outline me stil limuzinë/sedan */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.8" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="size-7 text-dioni transition-transform group-hover:scale-105"
      >
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 12 10s-6.7.6-7.5 1.1C3.7 11.3 3 12.1 3 13v3c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" className="fill-black stroke-dioni" />
        <path d="M9 17h6" />
        <circle cx="17" cy="17" r="2" className="fill-black stroke-dioni" />
        <path d="M5 13l2-4h10l2 4" />
        <line x1="12" y1="9" x2="12" y2="13" />
      </svg>

      <span className="text-2xl font-extrabold tracking-tight">
        <span className="text-white">Auto</span>
        <span className="text-dioni">Dioni</span>
      </span>
    </a>
  )
}
