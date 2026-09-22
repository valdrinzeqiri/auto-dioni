"use client"

import { MapPin, Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "38344111148"
const MAPS_URL = "https://maps.app.goo.gl/voXJEfN74iXUbAQM7"

export function ContactDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Kontakt"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-white/10 bg-neutral-950 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          aria-label="Mbyll"
          className="absolute right-3 top-3 text-white hover:bg-white/10"
        >
          <X className="size-5" />
        </Button>
        <h2 className="text-2xl font-extrabold text-white">
          Na <span className="text-dioni">kontaktoni</span>
        </h2>
        <p className="mt-1 text-sm text-white/60">
          Auto Dioni — Prishtinë, Kosovë. Jemi këtu për çdo pyetje.
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-[#25D366]/60"
          >
            <span className="flex size-10 items-center justify-center rounded-full bg-[#25D366] text-black">
              <Phone className="size-5" />
            </span>
            <span>
              <span className="block text-sm text-white/50">WhatsApp / Telefon</span>
              <span className="block font-semibold text-white">+383 44 111 148</span>
            </span>
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-dioni/60"
          >
            <span className="flex size-10 items-center justify-center rounded-full bg-dioni text-dioni-foreground">
              <MapPin className="size-5" />
            </span>
            <span>
              <span className="block text-sm text-white/50">Lokacioni</span>
              <span className="block font-semibold text-white">Prishtinë, Kosovë</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}
