export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`text-2xl font-extrabold tracking-tight ${className}`}>
      <span className="text-white">Auto</span>
      <span className="text-dioni">Dioni</span>
    </span>
  )
}
