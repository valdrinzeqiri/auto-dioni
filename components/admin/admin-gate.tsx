"use client"

import { useEffect, useState } from "react"
import { AdminLogin } from "@/components/admin/admin-login"
import { AdminPanel } from "@/components/admin/admin-panel"

const SESSION_KEY = "auto-dioni-admin"

export function AdminGate() {
  const [authed, setAuthed] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setAuthed(sessionStorage.getItem(SESSION_KEY) === "1")
    setReady(true)
  }, [])

  const login = () => {
    sessionStorage.setItem(SESSION_KEY, "1")
    setAuthed(true)
  }

  const logout = () => {
    sessionStorage.removeItem(SESSION_KEY)
    setAuthed(false)
  }

  if (!ready) return <div className="min-h-dvh bg-black" />
  return authed ? <AdminPanel onLogout={logout} /> : <AdminLogin onSuccess={login} />
}
