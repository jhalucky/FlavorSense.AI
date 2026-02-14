export default function Navbar() {
  return (
    <nav className="bg-blur bg-gradient-to-r from-emerald-400/10 to-lime-100/10 text-white shadow-emerald-200 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-lime-400 shadow-lg shadow-emerald-200">
              <span className="text-lg font-bold text-white">FS</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-slate-900">
                FlavorSense.AI
              </span>
              <span className="text-xs text-slate-500">
                {/* Flavor Intelligence Platform */}
              </span>
            </div>
          </div>

          {/* Right side links */}
          <div className="hidden items-center gap-6 md:flex">
            <a
              href="#how-it-works"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-emerald-600"
            >
              How it Works
            </a>
            <a
              href="#analyzer"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-emerald-600"
            >
              Analyzer
            </a>
            <a
              href="#impact"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-emerald-600"
            >
              Impact
            </a>
            <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-700">
              <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></div>
              Live Demo
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
