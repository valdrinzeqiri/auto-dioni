export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#" className={`flex items-center gap-3 group ${className}`}>
      {/* Katrori i zi me kornizë të hollë të kuqe */}
      <div className="relative flex items-center justify-center size-11 rounded-xl bg-black border border-dioni shadow-md transition-all duration-300 group-hover:scale-105">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-7 text-dioni"
        >
          {/* Silueta e saktë e veturës (trupi i kuq) */}
          <path d="M3 14.5c0-.83.67-1.5 1.5-1.5h15c.83 0 1.5.67 1.5 1.5V16c0 1.1-.9 2-2 2h-1c0 1.1-.9 2-2 2s-2-.9-2-2H9c0 1.1-.9 2-2 2s-2-.9-2-2H5c-1.1 0-2-.9-2-2v-1.5z" />
          <path d="M4.5 13L6 9.5C6.3 8.8 7 8.3 7.8 8.3h8.4c.8 0 1.5.5 1.8 1.2L19.5 13h-15z" />
          
          {/* Dritaret (me ngjyrë të zezë për kontrast brendësie) */}
          <path d="M7.5 9.5h4v3.5h-4z" className="fill-black" />
          <path d="M12.5 9.5h4l1.2 3.5h-5.2z" className="fill-black" />

          {/* Rrotat (të zeza me rreth të jashtëm të kuq) */}
          <circle cx="7" cy="17" r="2.2" className="fill-black" />
          <circle cx="17" cy="17" r="2.2" className="fill-black" />
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
