"use client"

import { useState } from "react"
import { CarStoreProvider } from "@/components/car-store"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { CarGrid } from "@/components/car-grid"
import { FloatingButtons } from "@/components/floating-buttons"
import { SiteFooter } from "@/components/site-footer"
import { ContactDialog } from "@/components/contact-dialog"

export default function HomePage() {
  const [contactOpen, setContactOpen] = useState(false)
  const openContact = () => setContactOpen(true)

  return (
    <CarStoreProvider>
      <div className="flex min-h-dvh flex-col bg-black">
        <SiteHeader onContact={openContact} />
        <main className="flex-1">
          <Hero />
          <CarGrid onContact={openContact} />
        </main>
        <SiteFooter />
        <FloatingButtons />
        <ContactDialog open={contactOpen} onClose={() => setContactOpen(false)} />
      </div>
    </CarStoreProvider>
  )
}
