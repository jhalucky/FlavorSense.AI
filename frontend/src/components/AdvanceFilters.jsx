import { useState } from "react";

export default function AdvancedFilters({ applyFilter, regions = [] }) {
  const [regionQuery, setRegionQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [minCalories, setMinCalories] = useState("");
  const [maxCalories, setMaxCalories] = useState("");
  const [flavor, setFlavor] = useState("");
  const [diet, setDiet] = useState("");

  // 🔎 Filter matching regions
  const filteredRegions = regions.filter((r) =>
    r.toLowerCase().includes(regionQuery.toLowerCase())
  );

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    setRegionQuery(region);
    setShowSuggestions(false);
  };

  const handleCuisine = () => {
    if (!selectedRegion) return;

    applyFilter("cuisine", {
      region: selectedRegion,
      page: 1,
      page_size: 10,
    });
  };

  const handleCalories = () => {
    if (!minCalories || !maxCalories) return;

    applyFilter("calories", {
      minCalories,
      maxCalories,
      limit: 10,
    });
  };

  const handleFlavor = () => {
    if (!flavor) return;

    applyFilter("flavor", {
      flavor,
      page: 1,
    });
  };

  const handleDietRegion = () => {
    if (!selectedRegion || !diet) return;

    applyFilter("diet-region", {
      region: selectedRegion,
      diet,
      limit: 10,
    });
  };

  return (
    <section className="py-16 bg-white border-t border-emerald-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <h3 className="text-3xl font-bold text-slate-900 mb-10">
          Advanced Filters
        </h3>

        <div className="grid gap-6 lg:grid-cols-4">

          {/* 🔥 REGION AUTOCOMPLETE */}
          <div className="relative space-y-3">
            <h4 className="font-semibold text-slate-700">Region</h4>

            <input
              type="text"
              placeholder="Search Region..."
              value={regionQuery}
              onChange={(e) => {
                setRegionQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              className="w-full rounded-xl border px-4 py-2"
            />

            {showSuggestions && filteredRegions.length > 0 && (
              <div className="absolute z-50 mt-1 max-h-48 w-full overflow-y-auto rounded-xl border bg-white shadow-lg">
                {filteredRegions.map((region, index) => (
                  <div
                    key={index}
                    onClick={() => handleRegionSelect(region)}
                    className="cursor-pointer px-4 py-2 hover:bg-emerald-50"
                  >
                    {region}
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={handleCuisine}
              className="w-full bg-emerald-500 text-white rounded-xl py-2 font-semibold hover:bg-emerald-600 transition"
            >
              Apply Cuisine
            </button>
          </div>

          {/* CALORIES */}
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-700">Calories</h4>

            <input
              type="number"
              placeholder="Min"
              value={minCalories}
              onChange={(e) => setMinCalories(e.target.value)}
              className="w-full rounded-xl border px-4 py-2"
            />

            <input
              type="number"
              placeholder="Max"
              value={maxCalories}
              onChange={(e) => setMaxCalories(e.target.value)}
              className="w-full rounded-xl border px-4 py-2"
            />

            <button
              onClick={handleCalories}
              className="w-full bg-emerald-500 text-white rounded-xl py-2 font-semibold hover:bg-emerald-600 transition"
            >
              Apply Calories
            </button>
          </div>

          {/* FLAVOR */}
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-700">Flavor</h4>

            <select
              value={flavor}
              onChange={(e) => setFlavor(e.target.value)}
              className="w-full rounded-xl border px-4 py-2"
            >
              <option value="">Select Flavor</option>
              <option value="spicy">Spicy</option>
              <option value="sweet">Sweet</option>
              <option value="savory">Savory</option>
            </select>

            <button
              onClick={handleFlavor}
              className="w-full bg-emerald-500 text-white rounded-xl py-2 font-semibold hover:bg-emerald-600 transition"
            >
              Apply Flavor
            </button>
          </div>

          {/* DIET */}
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-700">Diet + Region</h4>

            <select
              value={diet}
              onChange={(e) => setDiet(e.target.value)}
              className="w-full rounded-xl border px-4 py-2"
            >
              <option value="">Select Diet</option>
              <option value="vegan">Vegan</option>
              <option value="pescetarian">Pescetarian</option>
              <option value="lacto_vegetarian">Lacto Vegetarian</option>
            </select>

            <button
              onClick={handleDietRegion}
              className="w-full bg-emerald-500 text-white rounded-xl py-2 font-semibold hover:bg-emerald-600 transition"
            >
              Apply Diet
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
