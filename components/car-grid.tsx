"use client"

import { useState } from "react"
import { CarCard } from "@/components/car-card"
import { CarDetailsDialog } from "@/components/car-details-dialog"
import { useCarStore } from "@/components/car-store"
import type { Car } from "@/lib/cars"

export function CarGrid({ onContact }: { onContact: () => void }) {
  const { cars, ready } = useCarStore()
  const [selected, setSelected] = useState<Car | null>(null)

  return (
    <section id="veturat" className="mx-auto w-full max-w-6xl px-4 py-16">
      <div className="mb-8 flex flex-col gap-2">
        <h2 className="text-3xl font-extrabold tracking-tight text-white">
          Veturat në ofertë
        </h2>
        <p className="text-white/60">
          {ready ? `${cars.length} vetura të disponueshme te Auto Dioni.` : "Duke ngarkuar..."}
        </p>
      </div>

      {ready && cars.length === 0 ? (
        <div className="rounded-xl border border-dashed border-white/15 p-12 text-center text-white/50">
          Momentalisht nuk ka vetura të postuara.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} onDetails={setSelected} />
          ))}
        </div>
      )}

      <CarDetailsDialog
        car={selected}
        onClose={() => setSelected(null)}
        onContact={onContact}
      />
    </section>
  )
}
