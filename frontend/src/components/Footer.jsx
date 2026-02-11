export default function Footer() {
  return (
    <footer className="border-t border-emerald-100/50 bg-white/50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo and name */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-lime-400 shadow-md">
              <span className="text-lg font-bold text-white">FS</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-slate-900">
                FlavorSense AI
              </span>
              <span className="text-xs text-slate-500">
                Flavor Intelligence Platform
              </span>
            </div>
          </div>

          {/* Credits */}
          <div className="text-center text-sm text-slate-600 sm:text-right">
            <p className="mb-1">Built with 💚 by Backlog Busters</p>
            <p className="text-xs text-slate-500">
              © 2026 FlavorSense AI. Powered by advanced flavor intelligence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
