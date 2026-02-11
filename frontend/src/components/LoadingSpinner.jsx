export default function LoadingSpinner({ label = "", size = "md" }) {
  const sizeClass =
    size === "sm" ? "h-4 w-4 border-2" : size === "lg" ? "h-10 w-10 border-3" : "h-6 w-6 border-2";

  return (
    <div className="inline-flex items-center gap-2 text-emerald-700">
      <span
        className={`inline-block rounded-full border-emerald-500 border-t-transparent animate-spin ${sizeClass}`}
      />
      {label && <span className="text-sm font-medium">{label}</span>}
    </div>
  );
}

