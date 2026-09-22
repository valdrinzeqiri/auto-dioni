"use client"

import { Calendar, Gauge } from "lucide-react"
import { Button } from "@/components/ui/button"
import { type Car, formatKm, formatPrice } from "@/lib/cars"

export function CarCard({ car, onDetails }: { car: Car; onDetails: (car: Car) => void }) {
  const cover = car.images[0] ?? "/placeholder.svg"
  return (
    <article 
      onClick={() => onDetails(car)}
      className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] cursor-pointer transition-all hover:border-dioni/50 hover:bg-white/[0.05]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cover || "/placeholder.svg"}
          alt={car.title}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-md bg-dioni px-2.5 py-1 text-sm font-bold text-dioni-foreground shadow-lg">
          {formatPrice(car.price)}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <h3 className="text-pretty text-lg font-bold leading-snug text-white">{car.title}</h3>
        <dl className="grid grid-cols-3 gap-2 text-center text-xs text-white/60">
          <div className="flex flex-col items-center gap-1 rounded-lg border border-white/10 py-2">
            <Gauge className="size-4 text-dioni" />
            <dd className="font-medium text-white/80">{formatKm(car.km)}</dd>
          </div>
          <div className="flex flex-col items-center gap-1 rounded-lg border border-white/10 py-2">
            <Calendar className="size-4 text-dioni" />
            <dd className="font-medium text-white/80">{car.year}</dd>
          </div>
          <div className="flex flex-col items-center gap-1 rounded-lg border border-white/10 py-2">
            {/* Ikona e motorit (Check Engine) */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.75" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="size-4 text-dioni"
            >
              <path d="M12 2v4" />
              <path d="M6 6h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
              <path d="M9 10h6" />
              <path d="M10 14h4" />
              <path d="M2 10h2" />
              <path d="M20 10h2" />
              <path d="M2 14h2" />
              <path d="M20 14h2" />
            </svg>
            <dd className="truncate px-1 font-medium text-white/80">{car.engine}</dd>
          </div>
        </dl>
        <Button
          type="button"
          onClick={(e) => {
            e.stopPropagation() // E ndalon thirrjen e dyfishtë nëse klikohet direkt te butoni
            onDetails(car)
          }}
          className="mt-auto w-full bg-dioni text-dioni-foreground hover:bg-dioni/90 h-10 pointer-events-none sm:pointer-events-auto"
        >
          Shiko detajet
        </Button>
      </div>
    </article>
  )
}
