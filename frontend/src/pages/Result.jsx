import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
import RecipeCard from "../components/RecipeCard";
import LoadingSpinner from "../components/LoadingSpinner";
import EmptyState from "../components/EmptyState";
import Button from "../components/Button";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state || {};

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const ingredients = state.ingredients || [];
  const preference = state.preference || "spicy";

  useEffect(() => {
    // If navigated directly without state, don't fetch; show guidance
    if (!ingredients || ingredients.length === 0) {
      setLoading(false);
      return;
    }

    const fetchResults = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.post(
          `${API_BASE_URL}/api/recipes/search`,
          {
            ingredients,
            preference,
          }
        );
        setRecipes(response.data);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            "Failed to fetch recipes. Please try again."
        );
        setRecipes([]);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [ingredients, preference]);

  const handleBack = () => {
    navigate("/");
  };

  const title = `Recipe matches${recipes.length ? ` (${recipes.length})` : ""}`;

  return (
    <div className="space-y-6 pb-10 pt-4">
      {/* Header row */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="px-3 py-1.5 text-xs"
            onClick={handleBack}
          >
            ← Back to search
          </Button>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Results
            </p>
            <h1 className="text-lg font-semibold text-slate-900 sm:text-xl">
              {title}
            </h1>
            <p className="mt-0.5 text-xs text-slate-500 sm:text-[13px]">
              Based on ingredients:{" "}
              <span className="font-medium text-slate-700">
                {ingredients.join(", ") || "none provided"}
              </span>{" "}
              · Preference:{" "}
              <span className="capitalize text-emerald-700">
                {preference}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div>
        {/* Loading */}
        {loading && (
          <Card className="flex items-center justify-center p-10">
            <div className="text-center">
              <LoadingSpinner size="lg" />
              <p className="mt-3 text-sm font-medium text-slate-700">
                Analyzing flavor combinations...
              </p>
              <p className="mt-1 text-xs text-slate-500">
                We&apos;re matching your pantry to our flavor graph.
              </p>
            </div>
          </Card>
        )}

        {/* Error */}
        {!loading && error && (
          <Card className="p-6">
            <div className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          </Card>
        )}

        {/* No ingredients / direct access */}
        {!loading && !error && ingredients.length === 0 && (
          <Card className="p-6">
            <EmptyState
              title="No search query found"
              description="Go back to the home page and add a few ingredients to see tailored recipe results."
            />
          </Card>
        )}

        {/* No results */}
        {!loading &&
          !error &&
          ingredients.length > 0 &&
          recipes.length === 0 && (
            <Card className="p-6">
              <EmptyState
                title="No recipes found yet"
                description="Try adjusting your ingredients or switching the flavor profile to discover more combinations."
              />
            </Card>
          )}

        {/* Results list */}
        {!loading && !error && recipes.length > 0 && (
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recipes.map((recipe, index) => (
              <div
                key={recipe.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <RecipeCard recipe={recipe} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

