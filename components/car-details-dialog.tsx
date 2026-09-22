"use client"

import { useEffect, useState } from "react"
import { Calendar, ChevronLeft, ChevronRight, Fuel, Gauge, Phone, X, ZoomIn, ZoomOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { type Car, formatKm, formatPrice } from "@/lib/cars"

export function CarDetailsDialog({
  car,
  onClose,
  onContact,
}: {
  car: Car | null
  onClose: () => void
  onContact: () => void
}) {
  const [index, setIndex] = useState(0)
  const [zoomed, setZoomed] = useState(false)

  useEffect(() => {
    setIndex(0)
    setZoomed(false)
  }, [car])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!car) return
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % car.images.length)
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + car.images.length) % car.images.length)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [car, onClose])

  if (!car) return null

  const images = car.images.length ? car.images : ["/placeholder.svg"]
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)
  const next = () => setIndex((i) => (i + 1) % images.length)

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/80 p-0 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={car.title}
      onClick={onClose}
    >
      <div
        className="relative my-0 w-full max-w-4xl border border-white/10 bg-neutral-950 sm:my-auto sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          aria-label="Mbyll"
          className="absolute right-3 top-3 z-10 bg-black/60 text-white hover:bg-black/80"
        >
          <X className="size-5" />
        </Button>

        {/* Gallery */}
        <div className="relative aspect-video w-full overflow-hidden bg-black sm:rounded-t-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[index] || "/placeholder.svg"}
            alt={`${car.title} — foto ${index + 1}`}
            onClick={() => setZoomed((z) => !z)}
            className={`size-full transition-transform duration-300 ${
              zoomed ? "scale-150 cursor-zoom-out" : "scale-100 cursor-zoom-in"
            } object-contain`}
          />

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setZoomed((z) => !z)}
            aria-label={zoomed ? "Zvogëlo" : "Zmadho"}
            className="absolute bottom-3 right-3 bg-black/60 text-white hover:bg-black/80"
          >
            {zoomed ? <ZoomOut className="size-5" /> : <ZoomIn className="size-5" />}
          </Button>

          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={prev}
                aria-label="Foto e mëparshme"
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white hover:bg-black/80"
              >
                <ChevronLeft className="size-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={next}
                aria-label="Foto tjetër"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white hover:bg-black/80"
              >
                <ChevronRight className="size-6" />
              </Button>
              <span className="absolute left-3 top-3 rounded-md bg-black/60 px-2 py-1 text-xs font-medium text-white">
                {index + 1} / {images.length}
              </span>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto border-b border-white/10 p-3">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => {
                  setIndex(i)
                  setZoomed(false)
                }}
                aria-label={`Shko te foto ${i + 1}`}
                className={`relative size-16 shrink-0 overflow-hidden rounded-md border-2 transition-colors ${
                  i === index ? "border-dioni" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img || "/placeholder.svg"} alt="" className="size-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Details */}
        <div className="flex flex-col gap-6 p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h2 className="text-pretty text-2xl font-extrabold text-white">{car.title}</h2>
            <span className="rounded-lg bg-dioni px-3 py-1.5 text-xl font-bold text-dioni-foreground">
              {formatPrice(car.price)}
            </span>
          </div>

          <dl className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <Spec icon={<Gauge className="size-5 text-dioni" />} label="Kilometrazhi" value={formatKm(car.km)} />
            <Spec icon={<Calendar className="size-5 text-dioni" />} label="Viti" value={String(car.year)} />
            <Spec icon={<Fuel className="size-5 text-dioni" />} label="Motori" value={car.engine} />
          </dl>

          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/50">
              Përshkrimi
            </h3>
            <p className="whitespace-pre-line text-pretty leading-relaxed text-white/70">
              {car.desc || "Nuk ka përshkrim."}
            </p>
          </div>

          <Button
            onClick={onContact}
            className="h-11 w-full bg-dioni text-dioni-foreground hover:bg-dioni/90"
          >
            <Phone className="size-4" />
            Kontakto për këtë veturë
          </Button>
        </div>
      </div>
    </div>
  )
}

function Spec({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-3">
      {icon}
      <div className="min-w-0">
        <dt className="text-xs text-white/50">{label}</dt>
        <dd className="truncate font-semibold text-white">{value}</dd>
      </div>
    </div>
  )
}
