export type Car = {
  id: string
  title: string
  price: number
  km: number
  year: number
  engine: string
  description: string
  images: string[]
  createdAt: number
}

export const STORAGE_KEY = "auto-dioni-cars"
export const ADMIN_PASSWORD = "valdet1965"

export const defaultCars: Car[] = [
  {
    id: "seed-golf7",
    title: "Volkswagen Golf 7 2.0 TDI",
    price: 12900,
    km: 148000,
    year: 2016,
    engine: "2.0 TDI Diesel",
    description:
      "Volkswagen Golf 7 shumë e mirëmbajtur, servisim i rregullt, gjendje perfekte. Klimë automatike, navigacion, sensorë parkimi dhe goma të reja.",
    images: ["/cars/golf-7-front.png", "/cars/interior.png"],
    createdAt: Date.now() - 30000,
  },
  {
    id: "seed-audia4",
    title: "Audi A4 2.0 TDI S-Line",
    price: 17500,
    km: 121000,
    year: 2017,
    engine: "2.0 TDI Diesel",
    description:
      "Audi A4 S-Line, full opsione, lëkurë, LED matrix, virtual cockpit. E importuar nga Gjermania me histori të plotë servisimi.",
    images: ["/cars/audi-a4-front.png", "/cars/interior.png"],
    createdAt: Date.now() - 20000,
  },
  {
    id: "seed-bmw320",
    title: "BMW 320d Sport Line",
    price: 15800,
    km: 165000,
    year: 2015,
    engine: "2.0 Diesel",
    description:
      "BMW 320d Sport Line në gjendje të shkëlqyeshme. Automatik, navigacion profesional, sensorë përpara dhe prapa. Gati për regjistrim.",
    images: ["/cars/bmw-320-front.png", "/cars/interior.png"],
    createdAt: Date.now() - 10000,
  },
]

export function loadCars(): Car[] {
  if (typeof window === "undefined") return defaultCars
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultCars
    const parsed = JSON.parse(raw) as Car[]
    if (!Array.isArray(parsed)) return defaultCars
    return parsed
  } catch {
    return defaultCars
  }
}

export function saveCars(cars: Car[]) {
  if (typeof window === "undefined") return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cars))
  } catch (err) {
    console.log("[v0] Failed to save cars:", err)
  }
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("de-DE").format(price) + " €"
}

export function formatKm(km: number): string {
  return new Intl.NumberFormat("de-DE").format(km) + " km"
}
