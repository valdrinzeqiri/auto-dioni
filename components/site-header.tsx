"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

export function SiteHeader({ onContact }: { onContact: () => void }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
        <Logo />
        <Button
          onClick={onContact}
          className="bg-dioni text-dioni-foreground hover:bg-dioni/90 h-9 px-4"
        >
          <Phone className="size-4" />
          Kontakt
        </Button>
      </div>
    </header>
  )
}
