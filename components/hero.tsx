import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-black">
      <div
        className="pointer-events-none absolute -right-24 -top-24 size-[420px] rounded-full bg-dioni/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 size-[320px] rounded-full bg-dioni/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-4 py-20 md:py-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-dioni/40 bg-dioni/10 px-3 py-1 text-xs font-medium text-dioni">
          <span className="size-1.5 rounded-full bg-dioni" />
          Auto Dioni — Prishtinë
        </span>
        <h1 className="max-w-3xl text-balance text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
          Zgjidh veturën tënde të radhës me{" "}
          <span className="text-dioni">vetëm një klikim.</span>
        </h1>
        <p className="max-w-2xl text-pretty text-lg text-white/60 md:text-xl">
          Vetura të mirëmbajtura, testuara dhe gati për rrugë te Auto Dioni.
        </p>
        <a
          href="#veturat"
          className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
        >
          Shiko veturat
          <ChevronDown className="size-4" />
        </a>
      </div>
    </section>
  )
}
