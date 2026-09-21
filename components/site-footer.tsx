import Link from "next/link"
import { UserCog } from "lucide-react"
import { Logo } from "@/components/logo"

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-4 py-10 sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <Logo className="text-xl" />
          <p className="text-sm text-white/40">Prishtinë, Kosovë — © {new Date().getFullYear()}</p>
        </div>
        <Link
          href="/admin"
          aria-label="Qasja e administratorit"
          title="Admin"
          className="flex size-9 items-center justify-center rounded-full border border-white/10 text-white/30 transition-colors hover:border-dioni/50 hover:text-dioni"
        >
          <UserCog className="size-4" />
        </Link>
      </div>
    </footer>
  )
}
