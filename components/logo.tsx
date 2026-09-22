export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#" className={`flex items-center gap-3 group ${className}`}>
      {/* Katrori i zi me outline të hollë të kuq */}
      <div className="relative flex items-center justify-center size-11 rounded-xl bg-black border border-dioni shadow-md transition-all duration-300 group-hover:scale-105">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-7 text-dioni"
        >
          {/* Silueta e veturës nga anash (komplet e mbushur me të kuqe) */}
          <path d="M19 17h2a1 1 0 0 0 1-1v-2a2 2 0 0 0-1.07-1.78l-1.83-.92a3 3 0 0 1-1.34-1.63L15.5 8.5A3.5 3.5 0 0 0 12.3 6h-.6a3.5 3.5 0 0 0-3.2 2.5l-.76 2.17a3 3 0 0 1-1.34 1.63l-1.83.92A2 2 0 0 0 2 14v2a1 1 0 0 0 1 1h2" />
          <circle cx="7" cy="17" r="2.5" className="fill-black" />
          <circle cx="17" cy="17" r="2.5" className="fill-black" />
          {/* Detaje të brendshme me ngjyrë të zi për kontrast te rrotat dhe dritaret */}
          <path d="M5 13l2-3h10l2 3H5Z" className="fill-black" />
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
