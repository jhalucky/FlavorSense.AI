import { useState } from "react";
import axios from "axios";
import IngredientInput from "./IngredientInput";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export default function IngredientAnalyzer({ onResults }) {
  const [ingredients, setIngredients] = useState("");
  const [preference, setPreference] = useState("spicy");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const flavorTypes = [
    { value: "spicy", label: "Spicy", icon: "🔥" },
    { value: "savory", label: "Savory", icon: "🧂" },
    { value: "sweet", label: "Sweet", icon: "🍯" },
  ];

const handleAnalyze = async () => {
  if (!ingredients.trim()) {
    setError("Please enter at least one ingredient");
    return;
  }

  setLoading(true);
  setError(null);

  try {
    const ingredientList = ingredients
      .split(",")
      .map((i) => i.trim())
      .filter(Boolean);

    const response = await axios.post(
      `${API_BASE_URL}/api/recipes/search`,
      {
        ingredients: ingredientList,
        page: 1,
      }
    );

    if (!response.data.success) {
      setError(response.data.message || "Search failed");
      onResults([], ingredientList, null);
      return;
    }

    onResults(
      response.data.recipes || [],
      ingredientList,
      response.data.pagination || null
    );

  } catch {
    setError("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};



  const handleReset = () => {
    setIngredients("");
    setPreference("spicy");
    setError(null);
    onResults([], [], null);
  };

  return (
    <section id="analyzer" className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            Ingredient Analyzer
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Enter your ingredients and let our AI find the perfect recipe matches
          </p>
        </div>

        {/* Analyzer card */}
        <div className="glass-strong animate-scale-in rounded-3xl border border-emerald-100/50 p-8 shadow-2xl sm:p-12">
          <div className="space-y-6">

            {/* Ingredient Input */}
            <IngredientInput
              value={ingredients}
              onChange={(val) => {
                setIngredients(val);
                setError(null);
              }}
              onEnterPress={handleAnalyze}
            />

            {/* Flavor preference */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Target Flavor Profile
              </label>
              <div className="grid grid-cols-3 gap-3">
                {flavorTypes.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setPreference(type.value)}
                    className={`rounded-2xl border-2 px-6 py-4 text-center font-semibold transition-all ${
                      preference === type.value
                        ? "border-emerald-400 bg-gradient-to-br from-emerald-500 to-lime-400 text-white shadow-lg shadow-emerald-200"
                        : "border-emerald-100 bg-white text-slate-700 hover:border-emerald-300 hover:shadow-md"
                    }`}
                  >
                    <div className="text-2xl">{type.icon}</div>
                    <div className="mt-1 text-sm">{type.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="animate-fade-in rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
                ⚠️ {error}
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-col gap-3 pt-4 sm:flex-row">
              <button
                onClick={handleAnalyze}
                disabled={loading || !ingredients.trim()}
                className="flex-1 rounded-2xl bg-gradient-to-r from-emerald-500 to-lime-400 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Analyzing..." : "🧪 Analyze Ingredients"}
              </button>

              <button
                onClick={handleReset}
                disabled={loading}
                className="rounded-2xl border-2 border-emerald-200 bg-white px-8 py-4 text-lg font-semibold text-slate-700 transition-all hover:border-emerald-300 hover:shadow-md disabled:opacity-50"
              >
                ↻ Reset
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
