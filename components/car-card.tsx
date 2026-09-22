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
          
          {/* Kilometrazha */}
          <div className="flex flex-col items-center justify-between rounded-lg border border-white/10 py-2.5 px-1">
            <div className="flex items-center gap-1">
              <Gauge className="size-3.5 text-dioni" />
              <span className="text-[10px] font-semibold text-white/50 uppercase tracking-wider">KM</span>
            </div>
            <dd className="font-medium text-white/90 mt-1">{formatKm(car.km)}</dd>
          </div>

          {/* Viti */}
          <div className="flex flex-col items-center justify-between rounded-lg border border-white/10 py-2.5 px-1">
            <div className="flex items-center gap-1">
              <Calendar className="size-3.5 text-dioni" />
              <span className="text-[10px] font-semibold text-white/50 uppercase tracking-wider">Viti</span>
            </div>
            <dd className="font-medium text-white/90 mt-1">{car.year}</dd>
          </div>

          {/* Motorri */}
          <div className="flex flex-col items-center justify-between rounded-lg border border-white/10 py-2.5 px-1">
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-3.5 text-dioni"
              >
                <path d="M9 3h6v2H9z" />
                <path d="M11 5v2h2V5" />
                <path d="M4 9h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9z" />
                <path d="M2 11h2" />
                <path d="M20 11h2" />
                <path d="M2 15h2" />
                <path d="M20 15h2" />
                <path d="M9 13h6" />
              </svg>
              <span className="text-[10px] font-semibold text-white/50 uppercase tracking-wider">Motor</span>
            </div>
            <dd className="truncate px-1 font-medium text-white/90 mt-1">{car.engine}</dd>
          </div>

        </dl>
        <Button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
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
