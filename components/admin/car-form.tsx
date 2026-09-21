"use client"

import { useRef, useState } from "react"
import { ImagePlus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Car } from "@/lib/cars"

export type CarFormValues = Omit<Car, "id" | "createdAt">

const empty: CarFormValues = {
  title: "",
  price: 0,
  km: 0,
  year: new Date().getFullYear(),
  engine: "",
  description: "",
  images: [],
}

function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

export function CarForm({
  initial,
  onSubmit,
  onCancel,
}: {
  initial?: Car
  onSubmit: (values: CarFormValues) => void
  onCancel: () => void
}) {
  const [values, setValues] = useState<CarFormValues>(
    initial
      ? {
          title: initial.title,
          price: initial.price,
          km: initial.km,
          year: initial.year,
          engine: initial.engine,
          description: initial.description,
          images: initial.images,
        }
      : empty,
  )
  const [uploading, setUploading] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  const set = <K extends keyof CarFormValues>(key: K, value: CarFormValues[K]) =>
    setValues((v) => ({ ...v, [key]: value }))

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return
    setUploading(true)
    try {
      const urls = await Promise.all(Array.from(files).map(fileToDataUrl))
      set("images", [...values.images, ...urls])
    } catch (err) {
      console.log("[v0] Image upload failed:", err)
    } finally {
      setUploading(false)
      if (fileRef.current) fileRef.current.value = ""
    }
  }

  const removeImage = (i: number) =>
    set(
      "images",
      values.images.filter((_, idx) => idx !== i),
    )

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!values.title.trim()) return
    onSubmit(values)
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-5">
      <Field label="Titulli i veturës" htmlFor="title">
        <input
          id="title"
          required
          value={values.title}
          onChange={(e) => set("title", e.target.value)}
          placeholder="p.sh. Volkswagen Golf 7 2.0 TDI"
          className={inputCls}
        />
      </Field>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Çmimi (€)" htmlFor="price">
          <input
            id="price"
            type="number"
            min={0}
            value={values.price || ""}
            onChange={(e) => set("price", Number(e.target.value))}
            placeholder="12900"
            className={inputCls}
          />
        </Field>
        <Field label="Kilometrazhi (km)" htmlFor="km">
          <input
            id="km"
            type="number"
            min={0}
            value={values.km || ""}
            onChange={(e) => set("km", Number(e.target.value))}
            placeholder="148000"
            className={inputCls}
          />
        </Field>
        <Field label="Viti" htmlFor="year">
          <input
            id="year"
            type="number"
            min={1950}
            max={new Date().getFullYear() + 1}
            value={values.year || ""}
            onChange={(e) => set("year", Number(e.target.value))}
            placeholder="2016"
            className={inputCls}
          />
        </Field>
        <Field label="Motori" htmlFor="engine">
          <input
            id="engine"
            value={values.engine}
            onChange={(e) => set("engine", e.target.value)}
            placeholder="2.0 TDI Diesel"
            className={inputCls}
          />
        </Field>
      </div>

      <Field label="Përshkrimi" htmlFor="description">
        <textarea
          id="description"
          rows={4}
          value={values.description}
          onChange={(e) => set("description", e.target.value)}
          placeholder="Gjendja, opsionet, historia e servisimit..."
          className={`${inputCls} resize-y`}
        />
      </Field>

      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-white/70">Fotot</span>
        <div className="flex flex-wrap gap-3">
          {values.images.map((img, i) => (
            <div
              key={i}
              className="group relative size-24 overflow-hidden rounded-lg border border-white/10"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img || "/placeholder.svg"} alt={`Foto ${i + 1}`} className="size-full object-cover" />
              <button
                type="button"
                onClick={() => removeImage(i)}
                aria-label={`Fshij foton ${i + 1}`}
                className="absolute right-1 top-1 flex size-6 items-center justify-center rounded-full bg-black/70 text-white opacity-0 transition-opacity group-hover:opacity-100"
              >
                <X className="size-4" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="flex size-24 flex-col items-center justify-center gap-1 rounded-lg border border-dashed border-white/20 text-white/50 transition-colors hover:border-dioni hover:text-dioni"
          >
            <ImagePlus className="size-6" />
            <span className="text-xs">{uploading ? "..." : "Shto"}</span>
          </button>
        </div>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => handleFiles(e.target.files)}
          className="hidden"
        />
      </div>

      <div className="flex gap-3 pt-2">
        <Button type="submit" className="h-11 flex-1 bg-dioni text-dioni-foreground hover:bg-dioni/90">
          {initial ? "Ruaj ndryshimet" : "Shto veturën"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          className="h-11 border-white/15 bg-transparent text-white hover:bg-white/5"
        >
          Anulo
        </Button>
      </div>
    </form>
  )
}

const inputCls =
  "h-11 w-full rounded-lg border border-white/10 bg-black px-3 text-white outline-none transition-colors placeholder:text-white/30 focus:border-dioni"

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm font-medium text-white/70">
        {label}
      </label>
      {children}
    </div>
  )
}
