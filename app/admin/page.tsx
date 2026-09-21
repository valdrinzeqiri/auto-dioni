"use client"

import { CarStoreProvider } from "@/components/car-store"
import { AdminGate } from "@/components/admin/admin-gate"

export default function AdminPage() {
  return (
    <CarStoreProvider>
      <AdminGate />
    </CarStoreProvider>
  )
}
