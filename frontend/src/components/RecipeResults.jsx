import { useState } from "react";
import FlavorDashboard from "./FlavorDashboard";

export default function RecipeResults({ recipes, ingredients }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  if (recipes.length === 0) {
    return null;
  }

  return (
    <>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900">
                Recipe Results
              </h2>
              <p className="mt-2 text-lg text-slate-600">
                Found {recipes.length} perfect{" "}
                {recipes.length === 1 ? "match" : "matches"} for you
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-semibold text-emerald-700">
              <span>✨</span>
              {recipes.length} Results
            </div>
          </div>

          {/* Recipe grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recipes.map((recipe, index) => (
              <div
                key={recipe.id}
                className={`group glass-strong animate-fade-in-up rounded-2xl border border-emerald-100/50 shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl delay-${Math.min((index + 1) * 100, 600)}`}
              >
                {/* Recipe image */}
                <div className="relative h-48 overflow-hidden rounded-t-2xl bg-gradient-to-br from-emerald-100 to-lime-100">
                  <img
                    src={`https://picsum.photos/400/300?random=${recipe.id}`}
                    alt={recipe.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Score badge */}
                  <div className="absolute right-3 top-3 rounded-full bg-gradient-to-br from-emerald-500 to-lime-400 px-3 py-1 text-sm font-bold text-white shadow-lg">
                    ⭐ {Math.floor(85 + Math.random() * 13)}
                  </div>
                </div>

                {/* Recipe content */}
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    {recipe.title}
                  </h3>

                  {/* Ingredient tags */}
                  {recipe.ingredients && recipe.ingredients.length > 0 && (
                    <div className="mb-4 flex flex-wrap gap-2">
                      {recipe.ingredients.slice(0, 4).map((ingredient, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
                        >
                          {ingredient}
                        </span>
                      ))}
                      {recipe.ingredients.length > 4 && (
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                          +{recipe.ingredients.length - 4}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Cuisine badge */}
                  {recipe.cuisine && (
                    <div className="mb-4 inline-block rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
                      🌍 {recipe.cuisine}
                    </div>
                  )}

                  {/* Action button */}
                  <button
                    onClick={() => setSelectedRecipe(recipe)}
                    className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-lime-400 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg"
                  >
                    🧪 Analyze Flavor
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flavor Dashboard Modal */}
      {selectedRecipe && (
        <FlavorDashboard
          recipe={selectedRecipe}
          ingredients={ingredients}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </>
  );
}
