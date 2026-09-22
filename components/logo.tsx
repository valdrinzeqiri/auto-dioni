export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#" className={`flex items-center gap-3 group ${className}`}>
      {/* Ikona SVG me dizajnin e saktë nga fotoja */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 90"
        className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
        fill="none"
      >
        {/* Pjesa e sipërme dhe e pasme e veturës (E kuqe) */}
        <path
          d="M25 55C25 55 22 42 35 32C48 22 85 15 125 18C155 20 172 32 185 45C189 49 192 53 192 53C192 53 186 48 178 45C165 40 145 35 120 35C95 35 70 38 50 45C38 49 30 53 25 55Z"
          fill="#ef4444"
        />
        {/* Linja dinamike e xhamit dhe çatisë */}
        <path
          d="M42 47C55 35 90 28 125 29C150 30 168 38 180 44"
          stroke="#ef4444"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Pjesa e pasme/spoileri unik */}
        <path
          d="M23 48C23 48 18 53 20 58C21 61 26 56 30 52C28 50 25 49 23 48Z"
          fill="#ef4444"
        />
        <path
          d="M18 51C22 47 28 45 32 44"
          stroke="#ef4444"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Harqi i rrotës së pasme (Me ngjyrë të bardhë, në vend të hirit) */}
        <path
          d="M38 56C42 48 55 45 68 47"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Harqi i rrotës së përparme (Me ngjyrë të bardhë, në vend të hirit) */}
        <path
          d="M142 47C155 45 168 49 174 57"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>

      {/* Emri Auto Dioni */}
      <span className="text-2xl font-black tracking-tight">
        <span className="text-white">Auto</span>
        <span className="text-dioni">Dioni</span>
      </span>
    </a>
  )
}
