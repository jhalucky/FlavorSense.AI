import { useState } from "react";
import FlavorDashboard from "./FlavorDashboard";

export default function RecipeResults({
  recipes = [],
  ingredients = [],
  pagination = null,
  loadMore,
}) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loadingMore, setLoadingMore] = useState(false);

  // 🛡 Hard guard — prevent crash
  if (!Array.isArray(recipes) || recipes.length === 0) {
    return null;
  }

  const handleLoadMore = async () => {
    if (!loadMore || loadingMore) return;

    try {
      setLoadingMore(true);
      await loadMore();
    } catch (error) {
      console.error("Load more failed:", error);
    } finally {
      setLoadingMore(false);
    }
  };

  return (
    <>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900">
                Recipe Results
              </h2>
              <p className="mt-2 text-lg text-slate-600">
                Found {recipes.length}{" "}
                {recipes.length === 1 ? "match" : "matches"} for you
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-semibold text-emerald-700">
              ✨ {recipes.length} Results
            </div>
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recipes.map((recipe, index) => {
              if (!recipe) return null;

              const recipeTitle = recipe?.Recipe_title || "Untitled Recipe";
              const recipeIngredients = Array.isArray(recipe?.ingredients)
                ? recipe.ingredients
                : [];

              const region = typeof recipe?.Region === "string"
                ? recipe.Region.trim()
                : null;

              return (
                <div
                  key={recipe?._id || recipe?.Recipe_id || index}
                  className="group glass-strong animate-fade-in-up rounded-2xl border border-emerald-100/50 shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden rounded-t-2xl bg-gradient-to-br from-emerald-100 to-lime-100">
                    <img
                      src={`https://picsum.photos/400/300?random=${index}`}
                      alt={recipeTitle}
                      className="h-full w-full object-cover transition-transform group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute right-3 top-3 rounded-full bg-gradient-to-br from-emerald-500 to-lime-400 px-3 py-1 text-sm font-bold text-white shadow-lg">
                      ⭐ {Math.floor(85 + Math.random() * 13)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-bold text-slate-900">
                      {recipeTitle}
                    </h3>

                    {/* Ingredients */}
                    {recipeIngredients.length > 0 && (
                      <div className="mb-4 flex flex-wrap gap-2">
                        {recipeIngredients.slice(0, 4).map((ingredient, idx) => (
                          <span
                            key={idx}
                            className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
                          >
                            {typeof ingredient === "string"
                              ? ingredient
                              : ingredient?.name || "Unknown"}
                          </span>
                        ))}

                        {recipeIngredients.length > 4 && (
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                            +{recipeIngredients.length - 4}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Region */}
                    {region && (
                      <div className="mb-4 inline-block rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
                        🌍 {region}
                      </div>
                    )}

                    {/* Button */}
                    <button
                      onClick={() => setSelectedRecipe(recipe)}
                      className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-lime-400 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg"
                    >
                      🧪 Analyze Flavor
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load More */}
          {pagination?.hasNextPage && (
            <div className="mt-12 text-center">
              <button
                onClick={handleLoadMore}
                disabled={loadingMore}
                className="rounded-xl bg-gradient-to-r from-emerald-500 to-lime-400 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl disabled:opacity-50"
              >
                {loadingMore ? "Loading..." : "Load More"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
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
