export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#" className={`flex items-center gap-3 group ${className}`}>
      {/* Katrori i zi me kornizë të hollë të kuqe dhe madhësi standarde */}
      <div className="relative flex items-center justify-center size-11 rounded-xl bg-black border border-dioni shadow-md transition-all duration-300 group-hover:scale-105">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-7 text-dioni"
        >
          {/* Silueta e veturës vetëm me outline (vija të kuqe) */}
          <path d="M3 13.5h18l-1.5-4.5c-.3-.8-1-1.3-1.8-1.3H6.3c-.8 0-1.5.5-1.8 1.3L3 13.5z" />
          <path d="M2 13.5V16c0 .8.7 1.5 1.5 1.5h1.2" />
          <path d="M19.3 17.5h1.2c.8 0 1.5-.7 1.5-1.5v-2.5" />
          <path d="M6.5 17.5h11" />
          
          {/* Dritaret */}
          <path d="M7 9h4.5v3.5H7z" />
          <path d="M12.5 9h4.5l1.2 3.5h-5.7z" />

          {/* Rrotat */}
          <circle cx="8" cy="17" r="2" className="fill-black stroke-dioni" />
          <circle cx="16" cy="17" r="2" className="fill-black stroke-dioni" />
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
