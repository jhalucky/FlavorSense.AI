export default function EmptyState() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <div className="glass-strong animate-scale-in rounded-3xl border border-emerald-100/50 p-12 shadow-xl">
          <div className="mb-6 text-6xl">🔍</div>
          <h3 className="mb-3 text-2xl font-bold text-slate-900">
            No Recipes Found
          </h3>
          <p className="mb-8 text-lg leading-relaxed text-slate-600">
            We couldn't find any recipes matching your ingredients. Try
            adjusting your selection or explore different flavor preferences.
          </p>

          {/* Suggestions */}
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
            <p className="mb-4 text-sm font-semibold text-slate-700">
              💡 Try these popular combinations:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
                🍗 Chicken & Garlic
              </span>
              <span className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
                🍝 Pasta & Tomato
              </span>
              <span className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
                🐟 Salmon & Herbs
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
