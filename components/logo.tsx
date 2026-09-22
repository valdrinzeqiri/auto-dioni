export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#" className={`flex items-center gap-3 group ${className}`}>
      {/* Katrori i zi me kornizë të hollë të kuqe (pak më i gjerë për t'i dhënë proporcionin e duhur) */}
      <div className="relative flex items-center justify-center size-11 w-14 rounded-xl bg-black border border-dioni shadow-md transition-all duration-300 group-hover:scale-105">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 24"
          fill="currentColor"
          className="size-8 w-11 text-dioni"
        >
          {/* Trupi i shtrirë dhe elegant i veturës */}
          <path d="M2.5 14.5C2.5 13.7 3.2 13 4 13h24c.8 0 1.5.7 1.5 1.5V16c0 1.1-.9 2-2 2h-1c0 1.1-.9 2-2 2s-2-.9-2-2H9.5c0 1.1-.9 2-2 2s-2-.9-2-2H4.5c-1.1 0-2-.9-2-2v-1.5z" />
          <path d="M5 13l2.5-4.5c.4-.7 1.1-1.2 2-1.2h12.5c.9 0 1.6.5 2 1.2L27 13H5z" />
          
          {/* Dritaret e ndara (më të gjata dhe proporcionale) */}
          <path d="M9 8.5h5.5V12.5H9z" className="fill-black" />
          <path d="M16 8.5h6.5l1.5 4H16V8.5z" className="fill-black" />

          {/* Rrotat */}
          <circle cx="8" cy="17" r="2.2" className="fill-black" />
          <circle cx="24" cy="17" r="2.2" className="fill-black" />
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
