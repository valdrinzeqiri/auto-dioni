"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { supabase } from "@/lib/supabase"

type Car = {
  id: string
  title: string
  price: string
  km: string
  year: string
  engine: string
  desc?: string
  images: string[]
  createdAt: number
}

type CarStore = {
  cars: Car[]
  ready: boolean
  addCar: (car: any, imageFiles?: any) => Promise<void>
  updateCar: (id: string, car: any, imageFiles?: any) => Promise<void>
  deleteCar: (id: string) => Promise<void>
}

const CarStoreContext = createContext<CarStore | null>(null)

export function CarStoreProvider({ children }: { children: ReactNode }) {
  const [cars, setCars] = useState<Car[]>([])
  const [ready, setReady] = useState(false)

  const fetchCars = async () => {
    try {
      const { data, error } = await supabase
        .from("dionicars")
        .select("*")
        .order("created_at", { ascending: false })

      if (error) throw error
      if (data) {
        const formattedCars: Car[] = data.map((item: any) => ({
          id: item.id.toString(),
          title: item.title,
          price: item.price,
          km: item.km,
          year: item.year,
          engine: item.engine,
          desc: item.desc || "",
          images: item.images || [],
          createdAt: new Date(item.created_at).getTime(),
        }))
        setCars(formattedCars)
      }
    } catch (err) {
      console.error("Gabim gjatë leximit:", err)
    } finally {
      setReady(true)
    }
  }

  useEffect(() => {
    fetchCars()
  }, [])

  const uploadImages = async (files: any[]): Promise<string[]> => {
    let imageUrls: string[] = []
    if (!files || !Array.isArray(files)) return imageUrls

    for (let file of files) {
      if (!(file instanceof File)) continue
      const fileName = `${Date.now()}_${file.name.replace(/\s+/g, '_')}`
      const { error } = await supabase.storage
        .from("dioni-images")
        .upload(fileName, file)

      if (error) continue

      const { data: publicUrlData } = supabase.storage
        .from("dioni-images")
        .getPublicUrl(fileName)

      if (publicUrlData?.publicUrl) {
        imageUrls.push(publicUrlData.publicUrl)
      }
    }
    return imageUrls
  }

  const addCar: CarStore["addCar"] = async (carData, imageFiles = []) => {
    try {
      let newImageUrls = carData.images || []
      if (imageFiles && imageFiles.length > 0) {
        const uploaded = await uploadImages(imageFiles)
        newImageUrls = [...newImageUrls, ...uploaded]
      }

      const { error } = await supabase
        .from("dionicars")
        .insert([
          {
            title: carData.title,
            price: carData.price,
            km: carData.km,
            year: carData.year,
            engine: carData.engine,
            desc: carData.desc || carData.description || "",
            images: newImageUrls,
          },
        ])

      if (error) throw error
      await fetchCars()
    } catch (err) {
      console.error("Gabim gjatë shtimit:", err)
      alert("Gabim gjatë ruajtjes!")
    }
  }

  const updateCar: CarStore["updateCar"] = async (id, carData, imageFiles = []) => {
    try {
      let existingImages = carData.images || []
      if (imageFiles && imageFiles.length > 0) {
        const uploaded = await uploadImages(imageFiles)
        existingImages = [...existingImages, ...uploaded]
      }

      const { error } = await supabase
        .from("dionicars")
        .update({
          title: carData.title,
          price: carData.price,
          km: carData.km,
          year: carData.year,
          engine: carData.engine,
          desc: carData.desc || carData.description || "",
          images: existingImages,
        })
        .eq("id", id)

      if (error) throw error
      await fetchCars()
    } catch (err) {
      console.error("Gabim gjatë përditësimit:", err)
      alert("Gabim gjatë përditësimit!")
    }
  }

  const deleteCar: CarStore["deleteCar"] = async (id) => {
    try {
      const { error } = await supabase
        .from("dionicars")
        .delete()
        .eq("id", id)

      if (error) throw error
      setCars((prev) => prev.filter((c) => c.id !== id))
    } catch (err) {
      console.error("Gabim gjatë fshirjes:", err)
    }
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
