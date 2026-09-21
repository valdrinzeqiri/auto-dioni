"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { type Car, defaultCars, loadCars, saveCars } from "@/lib/cars"

type CarStore = {
  cars: Car[]
  ready: boolean
  addCar: (car: Omit<Car, "id" | "createdAt">) => void
  updateCar: (id: string, car: Omit<Car, "id" | "createdAt">) => void
  deleteCar: (id: string) => void
}

const CarStoreContext = createContext<CarStore | null>(null)

export function CarStoreProvider({ children }: { children: ReactNode }) {
  const [cars, setCars] = useState<Car[]>(defaultCars)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setCars(loadCars())
    setReady(true)
  }, [])

  useEffect(() => {
    if (ready) saveCars(cars)
  }, [cars, ready])

  const addCar: CarStore["addCar"] = (data) => {
    setCars((prev) => [
      { ...data, id: crypto.randomUUID(), createdAt: Date.now() },
      ...prev,
    ])
  }

  const updateCar: CarStore["updateCar"] = (id, data) => {
    setCars((prev) =>
      prev.map((c) => (c.id === id ? { ...c, ...data } : c)),
    )
  }

  const deleteCar: CarStore["deleteCar"] = (id) => {
    setCars((prev) => prev.filter((c) => c.id !== id))
  }

  return (
    <CarStoreContext.Provider value={{ cars, ready, addCar, updateCar, deleteCar }}>
      {children}
    </CarStoreContext.Provider>
  )
}

export function useCarStore() {
  const ctx = useContext(CarStoreContext)
  if (!ctx) throw new Error("useCarStore must be used within CarStoreProvider")
  return ctx
}
