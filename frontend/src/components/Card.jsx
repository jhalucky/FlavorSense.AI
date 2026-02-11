export default function Card({ children, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-emerald-100/70 bg-white/70 backdrop-blur-xl shadow-sm shadow-emerald-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${className}`}
    >
      <div className="pointer-events-none absolute inset-px rounded-[1.05rem] bg-gradient-to-br from-emerald-500/10 via-transparent to-lime-400/10" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

