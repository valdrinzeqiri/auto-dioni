"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { ADMIN_PASSWORD } from "@/lib/cars"

export function AdminLogin({ onSuccess }: { onSuccess: () => void }) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setError(false)
      onSuccess()
    } else {
      setError(true)
    }
  }

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-black px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <span className="flex size-14 items-center justify-center rounded-2xl border border-dioni/40 bg-dioni/10 text-dioni">
            <Lock className="size-7" />
          </span>
          <Logo />
          <p className="text-sm text-white/50">Qasja e administratorit</p>
        </div>

        <form
          onSubmit={submit}
          className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-medium text-white/70">
              Fjalëkalimi
            </label>
            <input
              id="password"
              type="password"
              value={password}
              autoFocus
              onChange={(e) => {
                setPassword(e.target.value)
                setError(false)
              }}
              placeholder="••••••••"
              className="h-11 rounded-lg border border-white/10 bg-black px-3 text-white outline-none transition-colors placeholder:text-white/30 focus:border-dioni"
            />
            {error && (
              <p className="text-sm text-dioni">Fjalëkalimi është i gabuar. Provo përsëri.</p>
            )}
          </div>
          <Button
            type="submit"
            className="h-11 w-full bg-dioni text-dioni-foreground hover:bg-dioni/90"
          >
            Kyçu
          </Button>
        </form>

        <Link
          href="/"
          className="mt-6 flex items-center justify-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
        >
          <ArrowLeft className="size-4" />
          Kthehu në faqen kryesore
        </Link>
      </div>
    </div>
  )
}
