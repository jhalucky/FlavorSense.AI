import { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import IntelligenceModules from "../components/IntelligenceModules";
import IngredientAnalyzer from "../components/IngredientAnalyzer";
import AdvancedFilters from "../components/AdvanceFilters";
import RecipeResults from "../components/RecipeResults";
import EmptyState from "../components/EmptyState";
import ImpactSection from "../components/ImpactSection";
import Footer from "../components/Footer";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [searchedIngredients, setSearchedIngredients] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [filters, setFilters] = useState({
    cuisine: "",
    diet: "",
    calories: 500,
    protein: "",
  });

  const handleResults = (results, ingredients) => {
    setRecipes(results);
    setSearchedIngredients(ingredients);
    setHasSearched(ingredients.length > 0);

    // Scroll to results
    if (results.length > 0) {
      setTimeout(() => {
        const resultsSection = document.getElementById("results");
        if (resultsSection) {
          resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  // Apply filters to recipes (MUST be before useEffect that uses it)
  const filteredRecipes = useMemo(() => {
    if (!hasSearched || recipes.length === 0) return recipes;

    return recipes.filter((recipe) => {
      // Filter by cuisine
      if (filters.cuisine && recipe.cuisine !== filters.cuisine) {
        return false;
      }

      // Filter by diet (simplified - in real app would check recipe properties)
      if (filters.diet) {
        // You can extend this based on actual recipe data structure
        // For now, we'll keep all recipes as this is a demo
      }



      return true;
    });
  }, [recipes, filters, hasSearched]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-emerald-50/30 to-green-50">
      {/* Background decoration */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(16,185,129,0.08),transparent_40%),radial-gradient(circle_at_80%_70%,_rgba(190,242,100,0.08),transparent_40%)]" />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <HowItWorks />
        <IntelligenceModules />
        <IngredientAnalyzer onResults={handleResults} />

        {/* Advanced Filters - Show only when recipes are found */}
        {hasSearched && recipes.length > 0 && (
          <AdvancedFilters filters={filters} setFilters={setFilters} />
        )}

        {/* Results or Empty State */}
        <div id="results">
          {hasSearched && filteredRecipes.length > 0 && (
            <RecipeResults
              recipes={filteredRecipes}
              ingredients={searchedIngredients}
            />
          )}
          {hasSearched && filteredRecipes.length === 0 && recipes.length > 0 && (
            <div className="py-20">
              <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
                <div className="glass-strong animate-scale-in rounded-3xl border border-emerald-100/50 p-12 shadow-xl">
                  <div className="mb-6 text-6xl">🔍</div>
                  <h3 className="mb-3 text-2xl font-bold text-slate-900">
                    No Matches for Current Filters
                  </h3>
                  <p className="mb-6 text-lg text-slate-600">
                    Try adjusting your filter criteria to see more results
                  </p>
                  <button
                    onClick={() =>
                      setFilters({
                        cuisine: "",
                        diet: "",
                        calories: 500,
                        protein: "",
                      })
                    }
                    className="rounded-2xl bg-gradient-to-r from-emerald-500 to-lime-400 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            </div>
          )}
          {hasSearched && recipes.length === 0 && <EmptyState />}
        </div>

        <ImpactSection />
        <Footer />
      </div>
    </div>
  );
}
