"use client"

import { useState } from "react"
import Link from "next/link"
import { ExternalLink, LogOut, Pencil, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { useCarStore } from "@/components/car-store"
import { CarForm, type CarFormValues } from "@/components/admin/car-form"
import { type Car, formatKm, formatPrice } from "@/lib/cars"

type View = { mode: "list" } | { mode: "new" } | { mode: "edit"; car: Car }

export function AdminPanel({ onLogout }: { onLogout: () => void }) {
  const { cars, addCar, updateCar, deleteCar } = useCarStore()
  const [view, setView] = useState<View>({ mode: "list" })
  const [confirmId, setConfirmId] = useState<string | null>(null)

  const handleSubmit = (values: CarFormValues) => {
    if (view.mode === "edit") {
      updateCar(view.car.id, values)
    } else {
      addCar(values)
    }
    setView({ mode: "list" })
  }

  return (
    <div className="min-h-dvh bg-black">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Logo className="text-xl" />
            <span className="rounded-md border border-white/10 px-2 py-0.5 text-xs text-white/50">
              Admin
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/" target="_blank">
              <Button variant="outline" className="h-9 border-white/15 bg-transparent text-white hover:bg-white/5">
                <ExternalLink className="size-4" />
                <span className="hidden sm:inline">Shiko faqen</span>
              </Button>
            </Link>
            <Button
              variant="outline"
              onClick={onLogout}
              className="h-9 border-white/15 bg-transparent text-white hover:bg-white/5"
            >
              <LogOut className="size-4" />
              <span className="hidden sm:inline">Dil</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-4 py-8">
        {view.mode === "list" ? (
          <>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h1 className="text-2xl font-extrabold text-white">Menaxho veturat</h1>
                <p className="text-sm text-white/50">{cars.length} vetura të postuara</p>
              </div>
              <Button
                onClick={() => setView({ mode: "new" })}
                className="h-10 bg-dioni text-dioni-foreground hover:bg-dioni/90"
              >
                <Plus className="size-4" />
                Shto veturë
              </Button>
            </div>

            {cars.length === 0 ? (
              <div className="rounded-xl border border-dashed border-white/15 p-12 text-center text-white/50">
                Nuk ka vetura. Kliko &quot;Shto veturë&quot; për të filluar.
              </div>
            ) : (
              <ul className="flex flex-col gap-3">
                {cars.map((car) => (
                  <li
                    key={car.id}
                    className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-3 sm:flex-row sm:items-center"
                  >
                    <div className="size-20 shrink-0 overflow-hidden rounded-lg bg-black">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={car.images[0] || "/placeholder.svg"}
                        alt={car.title}
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate font-bold text-white">{car.title}</h3>
                      <p className="text-sm text-white/50">
                        {car.year} · {formatKm(car.km)} · {car.engine}
                      </p>
                      <p className="font-semibold text-dioni">{formatPrice(car.price)}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setView({ mode: "edit", car })}
                        className="border-white/15 bg-transparent text-white hover:bg-white/5"
                      >
                        <Pencil className="size-4" />
                        Ndrysho
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setConfirmId(car.id)}
                        className="border-dioni/30 bg-transparent text-dioni hover:bg-dioni/10"
                      >
                        <Trash2 className="size-4" />
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <div className="mx-auto max-w-2xl">
            <div className="mb-6">
              <h1 className="text-2xl font-extrabold text-white">
                {view.mode === "edit" ? "Ndrysho veturën" : "Shto veturë të re"}
              </h1>
              <p className="text-sm text-white/50">Plotëso të dhënat dhe ngarko fotot.</p>
            </div>
            <CarForm
              initial={view.mode === "edit" ? view.car : undefined}
              onSubmit={handleSubmit}
              onCancel={() => setView({ mode: "list" })}
            />
          </div>
        )}
      </main>

      {confirmId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Konfirmo fshirjen"
          onClick={() => setConfirmId(null)}
        >
          <div
            className="w-full max-w-sm rounded-2xl border border-white/10 bg-neutral-950 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold text-white">Fshij veturën?</h2>
            <p className="mt-1 text-sm text-white/60">
              Ky veprim nuk mund të zhbëhet.
            </p>
            <div className="mt-6 flex gap-3">
              <Button
                onClick={() => {
                  deleteCar(confirmId)
                  setConfirmId(null)
                }}
                className="h-10 flex-1 bg-dioni text-dioni-foreground hover:bg-dioni/90"
              >
                Fshij
              </Button>
              <Button
                variant="outline"
                onClick={() => setConfirmId(null)}
                className="h-10 flex-1 border-white/15 bg-transparent text-white hover:bg-white/5"
              >
                Anulo
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
