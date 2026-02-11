export default function AdvancedFilters({ filters, setFilters }) {
  const handleReset = () => {
    setFilters({
      cuisine: "",
      diet: "",
      calories: 500,
      protein: "",
    });
  };

  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="glass-strong animate-fade-in-up rounded-3xl border border-emerald-100/50 p-8 shadow-xl">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                🎯 Advanced Filters
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Refine your recipe results based on preferences
              </p>
            </div>
            <button
              onClick={handleReset}
              className="rounded-xl border-2 border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:border-emerald-300 hover:shadow-md"
            >
              ↻ Reset
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Cuisine */}
            <div>
              <label
                htmlFor="cuisine-filter"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                🌍 Cuisine
              </label>
              <select
                id="cuisine-filter"
                className="w-full rounded-xl border-2 border-emerald-100 bg-white p-3 text-slate-900 shadow-sm transition-all focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/10"
                value={filters.cuisine}
                onChange={(e) =>
                  setFilters({ ...filters, cuisine: e.target.value })
                }
              >
                <option value="">All Cuisines</option>
                <option value="Indian">Indian</option>
                <option value="Asian">Asian</option>
                <option value="Italian">Italian</option>
                <option value="Mexican">Mexican</option>
              </select>
            </div>

            {/* Diet */}
            <div>
              <label
                htmlFor="diet-filter"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                🥗 Diet Type
              </label>
              <select
                id="diet-filter"
                className="w-full rounded-xl border-2 border-emerald-100 bg-white p-3 text-slate-900 shadow-sm transition-all focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/10"
                value={filters.diet}
                onChange={(e) =>
                  setFilters({ ...filters, diet: e.target.value })
                }
              >
                <option value="">Any Diet</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Vegan">Vegan</option>
                <option value="High Protein">High Protein</option>
                <option value="Low Carb">Low Carb</option>
              </select>
            </div>

            {/* Calories */}
            <div>
              <label
                htmlFor="calories-filter"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                🔥 Max Calories
              </label>
              <input
                id="calories-filter"
                type="range"
                min="200"
                max="800"
                step="50"
                value={filters.calories}
                onChange={(e) =>
                  setFilters({ ...filters, calories: e.target.value })
                }
                className="w-full accent-emerald-500"
              />
              <div className="mt-2 flex items-center justify-between text-xs">
                <span className="font-medium text-slate-600">200</span>
                <span className="rounded-full bg-emerald-100 px-3 py-1 font-bold text-emerald-700">
                  {filters.calories} kcal
                </span>
                <span className="font-medium text-slate-600">800</span>
              </div>
            </div>

            {/* Protein */}
            <div>
              <label
                htmlFor="protein-filter"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                💪 Protein Level
              </label>
              <select
                id="protein-filter"
                className="w-full rounded-xl border-2 border-emerald-100 bg-white p-3 text-slate-900 shadow-sm transition-all focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/10"
                value={filters.protein}
                onChange={(e) =>
                  setFilters({ ...filters, protein: e.target.value })
                }
              >
                <option value="">Any Level</option>
                <option value="Low">Low (&lt;10g)</option>
                <option value="Medium">Medium (10-25g)</option>
                <option value="High">High (&gt;25g)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
