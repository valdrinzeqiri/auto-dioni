import { Car } from "lucide-react"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#" className={`flex items-center gap-3 group ${className}`}>
      {/* Katrori i zi me kornizë të hollë të kuqe */}
      <div className="relative flex items-center justify-center size-10 rounded-xl bg-black border border-dioni shadow-md transition-all duration-300 group-hover:scale-105">
        <Car className="size-5 text-dioni stroke-[1.75]" />
      </div>

      {/* Emri Auto Dioni */}
      <span className="text-2xl font-black tracking-tight">
        <span className="text-white">Auto</span>
        <span className="text-dioni">Dioni</span>
      </span>
    </a>
  )
}
