export default function Hero() {
  const exampleIngredients = [
    "🍗 Chicken",
    "🍅 Tomato",
    "🧄 Garlic",
    "🌿 Basil",
    "🧅 Onion",
    "🫑 Pepper",
  ];

  return (
    <div className="relative overflow-hidden pb-20 pt-16">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(16,185,129,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,_rgba(190,242,100,0.15),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/60 px-4 py-2 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-1.5">
              <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></div>
              <span className="text-sm font-semibold text-emerald-700">
                AI-Powered Food Intelligence
              </span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="animate-fade-in-up delay-100 mb-6 bg-gradient-to-br from-slate-900 via-emerald-800 to-slate-700 bg-clip-text text-6xl font-bold leading-tight tracking-tight text-transparent sm:text-7xl lg:text-8xl">
            FlavorSense AI
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-up delay-200 mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-slate-600 sm:text-2xl">
            Transform your ingredients into culinary masterpieces with{" "}
            <span className="font-semibold text-emerald-600">
              intelligent flavor mapping
            </span>{" "}
            and{" "}
            <span className="font-semibold text-emerald-600">
              AI-driven recipe discovery
            </span>
          </p>

          {/* CTA */}
          <div className="animate-fade-in-up delay-300 mb-12">
            <a
              href="#analyzer"
              className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-lime-400 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-emerald-200 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-300"
            >
              Start Analyzing
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up delay-400 mb-10 grid grid-cols-3 gap-4 sm:gap-8">
            <div className="glass-strong rounded-2xl border border-emerald-100/50 p-4 shadow-lg">
              <div className="text-3xl font-bold text-emerald-600 sm:text-4xl">
                10K+
              </div>
              <div className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">
                Recipe Ideas
              </div>
            </div>
            <div className="glass-strong rounded-2xl border border-emerald-100/50 p-4 shadow-lg">
              <div className="text-3xl font-bold text-emerald-600 sm:text-4xl">
                98%
              </div>
              <div className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">
                Match Score
              </div>
            </div>
            <div className="glass-strong rounded-2xl border border-emerald-100/50 p-4 shadow-lg">
              <div className="text-3xl font-bold text-emerald-600 sm:text-4xl">
                500+
              </div>
              <div className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">
                Ingredients Mapped
              </div>
            </div>
          </div>

          {/* Example ingredients */}
          <div className="animate-fade-in-up delay-500">
            <p className="mb-4 text-sm font-medium text-slate-500">
              Popular ingredients to try:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {exampleIngredients.map((ingredient, index) => (
                <span
                  key={index}
                  className="rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
