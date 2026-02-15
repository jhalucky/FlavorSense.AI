import { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export default function FlavorDashboard({ recipe, onClose }) {
  const [nutrition, setNutrition] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!recipe?.Recipe_id) return;

    const fetchNutrition = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          `${API_BASE_URL}/api/recipes/nutrition`,
          {
            params: { recipeId: recipe.Recipe_id },
          }
        );

        if (response.data.success) {
          setNutrition(response.data.nutrition);
        }
      } catch (error) {
        console.error("Nutrition fetch failed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNutrition();
  }, [recipe]);

  if (!recipe) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-2xl relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-2xl font-bold text-slate-500 hover:text-slate-800"
        >
          &times;
        </button>

        <h2 className="mb-6 text-2xl font-bold text-slate-900">
          🍽 Nutrition Information
        </h2>

        {loading ? (
          <p className="text-slate-600">Loading nutrition data...</p>
        ) : nutrition ? (
          <div className="grid grid-cols-2 gap-6">

            <div className="rounded-xl bg-emerald-50 p-4 text-center">
              <p className="text-sm text-slate-600">Calories</p>
              <p className="text-xl font-bold text-emerald-600">
                {nutrition.Calories || nutrition.calories || "N/A"}
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-4 text-center">
              <p className="text-sm text-slate-600">Protein</p>
              <p className="text-xl font-bold text-blue-600">
                {nutrition.Protein || nutrition.protein || "N/A"}
              </p>
            </div>

            <div className="rounded-xl bg-yellow-50 p-4 text-center">
              <p className="text-sm text-slate-600">Carbs</p>
              <p className="text-xl font-bold text-yellow-600">
                {nutrition.Carbs || nutrition.carbs || "N/A"}
              </p>
            </div>

            <div className="rounded-xl bg-pink-50 p-4 text-center">
              <p className="text-sm text-slate-600">Fat</p>
              <p className="text-xl font-bold text-pink-600">
                {nutrition.Fat || nutrition.fat || "N/A"}
              </p>
            </div>

          </div>
        ) : (
          <p className="text-slate-600">No nutrition data available.</p>
        )}
      </div>
    </div>
  );
}
