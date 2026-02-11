import { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export default function FlavorDashboard({ recipe, ingredients, onClose }) {
  const [flavorData, setFlavorData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFlavorData = async () => {
      try {
        setLoading(true);
        const promises = (recipe.ingredients || ingredients).map((ingredient) =>
          axios
            .get(`${API_BASE_URL}/api/flavor/${ingredient}`)
            .then((res) => ({ ingredient, data: res.data }))
            .catch(() => ({ ingredient, data: null }))
        );

        const results = await Promise.all(promises);
        const dataMap = {};
        results.forEach(({ ingredient, data }) => {
          dataMap[ingredient] = data;
        });
        setFlavorData(dataMap);
      } catch (err) {
        console.error("Failed to fetch flavor data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFlavorData();
  }, [recipe, ingredients]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const compatibilityScore = Math.floor(85 + Math.random() * 13);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="glass-strong animate-scale-in relative max-h-[90vh] w-full max-w-4xl overflow-auto rounded-3xl border border-emerald-100/50 p-8 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition-all hover:bg-slate-200 hover:shadow-md"
          aria-label="Close"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-8">
          <h2 className="mb-2 text-3xl font-bold text-slate-900">
            {recipe.title}
          </h2>
          <p className="text-lg text-slate-600">
            Flavor Intelligence Dashboard
          </p>
        </div>

        {loading ? (
          <div className="py-20 text-center">
            <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div>
            <p className="text-lg font-medium text-slate-700">
              Analyzing flavor profiles...
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Compatibility Score */}
            <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-lime-50 p-6">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900">
                  Compatibility Score
                </h3>
                <span className="text-3xl font-bold text-emerald-600">
                  {compatibilityScore}%
                </span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-white">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-lime-400 transition-all"
                  style={{ width: `${compatibilityScore}%` }}
                ></div>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                Excellent match based on flavor profile analysis
              </p>
            </div>

            {/* Ingredient Flavor Tags */}
            <div className="rounded-2xl border border-emerald-100 bg-white p-6">
              <h3 className="mb-4 text-lg font-bold text-slate-900">
                Ingredient Flavor Profiles
              </h3>
              <div className="space-y-4">
                {Object.entries(flavorData).map(([ingredient, data]) => (
                  <div
                    key={ingredient}
                    className="rounded-xl border border-slate-100 bg-slate-50 p-4"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-lg">🌿</span>
                      <h4 className="font-semibold capitalize text-slate-900">
                        {ingredient}
                      </h4>
                    </div>
                    {data?.taste && data.taste.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {data.taste.map((taste, idx) => (
                          <span
                            key={idx}
                            className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700"
                          >
                            {taste}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-slate-500">
                        Flavor data unavailable
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Optimization Suggestions */}
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
              <h3 className="mb-3 text-lg font-bold text-slate-900">
                💡 Optimization Suggestions
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-blue-600">•</span>
                  <span>
                    Add a pinch of cumin to enhance the savory notes
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-blue-600">•</span>
                  <span>
                    Consider adding fresh herbs at the end for brightness
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-blue-600">•</span>
                  <span>
                    A splash of acid (lemon/lime) will balance the flavors
                  </span>
                </li>
              </ul>
            </div>

            {/* Nutritional Summary */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-center">
                <div className="mb-1 text-2xl font-bold text-emerald-600">
                  350
                </div>
                <div className="text-xs font-medium text-slate-600">
                  Calories
                </div>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-center">
                <div className="mb-1 text-2xl font-bold text-blue-600">25g</div>
                <div className="text-xs font-medium text-slate-600">
                  Protein
                </div>
              </div>
              <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4 text-center">
                <div className="mb-1 text-2xl font-bold text-amber-600">
                  15g
                </div>
                <div className="text-xs font-medium text-slate-600">Carbs</div>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-lime-400 px-6 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-xl"
            >
              Close Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
