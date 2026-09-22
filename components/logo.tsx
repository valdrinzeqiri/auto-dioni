export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#" className={`flex items-center gap-3 group ${className}`}>
      {/* Ikonë moderne e veturës me stil sportiv dhe efekt shkëlqimi */}
      <div className="relative flex items-center justify-center size-10 rounded-xl bg-gradient-to-br from-zinc-900 to-black border border-white/10 shadow-lg group-hover:border-dioni/50 transition-all duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-5 text-dioni transition-transform duration-300 group-hover:scale-110"
        >
          {/* Silueta e veturës sportive / limuzinë e personalizuar */}
          <path d="M19 17h2a1 1 0 0 0 1-1v-2a2 2 0 0 0-1.07-1.78l-1.83-.92a3 3 0 0 1-1.34-1.63L15.5 8.5A3.5 3.5 0 0 0 12.3 6h-.6a3.5 3.5 0 0 0-3.2 2.5l-.76 2.17a3 3 0 0 1-1.34 1.63l-1.83.92A2 2 0 0 0 2 14v2a1 1 0 0 0 1 1h2" />
          <circle cx="7" cy="17" r="2.5" className="fill-black stroke-dioni" />
          <circle cx="17" cy="17" r="2.5" className="fill-black stroke-dioni" />
          <path d="M9 17h6" />
          <path d="M5 13l2-3h10l2 3" />
        </svg>
      </div>

      {/* Emri me stil modern dhe kontrast vizual */}
      <div className="flex flex-col">
        <span className="text-xl font-black tracking-wider text-white uppercase leading-none">
          Auto <span className="text-dioni">Dioni</span>
        </span>
        <span className="text-[10px] tracking-widest text-white/50 uppercase font-semibold mt-1">
          Auto Salon
        </span>
      </div>
    </a>
  )
}
