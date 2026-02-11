export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold tracking-tight transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-50 disabled:opacity-60 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-gradient-to-r from-emerald-500 to-lime-400 text-white shadow-md shadow-emerald-200 hover:shadow-lg hover:-translate-y-0.5",
    ghost:
      "bg-white/50 text-emerald-700 border border-emerald-100 hover:bg-white/80 hover:shadow-sm",
    subtle:
      "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-100/70",
  };

  const variantClasses = variants[variant] || variants.primary;

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

