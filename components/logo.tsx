export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#" className={`flex items-center gap-3 group ${className}`}>
      {/* Katrori i zi modern me veturën nga përpara (front look) komplet të kuqe */}
      <div className="relative flex items-center justify-center size-11 rounded-xl bg-black border border-white/15 shadow-md group-hover:border-dioni transition-all duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-7 text-dioni transition-transform duration-300 group-hover:scale-110"
        >
          {/* Silueta e veturës pamje nga përpara (front view/grila dhe dritat) */}
          <path d="M3 8l2-3h14l2 3" />
          <path d="M4 8v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
          <circle cx="7" cy="12" r="1.5" className="fill-dioni" />
          <circle cx="17" cy="12" r="1.5" className="fill-dioni" />
          <path d="M9 12h6" />
          <path d="M6 16v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1" />
          <path d="M14 16v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1" />
        </svg>
      </div>

      {/* Emri Auto Dioni */}
      <span className="text-2xl font-black tracking-tight">
        <span className="text-white">Auto</span>
        <span className="text-dioni">Dioni</span>
      </span>
    </a>
  )
}
