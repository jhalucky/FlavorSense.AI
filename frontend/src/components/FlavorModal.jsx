import { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import Button from "./Button";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export default function FlavorModal({ ingredients, onClose }) {
  const [profiles, setProfiles] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlavor = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch all ingredient profiles in parallel
        const promises = ingredients.map((ingredient) =>
          axios
            .get(`${API_BASE_URL}/api/flavor/${ingredient}`)
            .then((res) => ({ ingredient, data: res.data }))
            .catch((err) => ({
              ingredient,
              error: err.response?.data?.message || "Failed to load",
            }))
        );

        const results = await Promise.all(promises);

        const profilesMap = {};
        results.forEach(({ ingredient, data, error: err }) => {
          if (err) {
            profilesMap[ingredient] = { error: err };
          } else {
            profilesMap[ingredient] = data;
          }
        });

        setProfiles(profilesMap);
      } catch (err) {
        setError("Failed to load flavor profiles. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchFlavor();
  }, [ingredients]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4 backdrop-blur-md"
      onClick={handleBackdropClick}
    >
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-3xl border border-emerald-100/70 bg-white/80 shadow-[0_30px_100px_rgba(15,118,110,0.6)] backdrop-blur-2xl">
        {/* Top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-emerald-500 via-lime-400 to-emerald-400" />

        <div className="relative px-6 pb-6 pt-5 sm:px-8 sm:pb-7 sm:pt-6">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-xl bg-white/80 text-slate-600 shadow-sm transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label="Close modal"
          >
            ✕
          </button>

          {/* Header */}
          <div className="mb-5 flex flex-col gap-2 pr-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-600">
                Flavor analysis
              </p>
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                🧪 Ingredient flavor profile
              </h2>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                Generated from individual ingredient lookups using your
                FlavorSense API.
              </p>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="py-14 text-center">
              <LoadingSpinner label="Loading flavor profiles..." size="lg" />
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          {/* Flavor Profiles */}
          {!loading && !error && (
            <div className="space-y-6">
              {/* Ingredient pills */}
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Ingredients analyzed
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {Object.entries(profiles).map(([ingredient, data]) => (
                  <div
                    key={ingredient}
                    className="rounded-2xl border border-emerald-100/70 bg-emerald-50/40 p-4"
                  >
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">🌿</span>
                        <h3 className="text-sm font-semibold capitalize text-slate-900">
                          {ingredient}
                        </h3>
                      </div>
                    </div>

                    {data.error ? (
                      <p className="text-xs text-red-600">{data.error}</p>
                    ) : data.taste && data.taste.length > 0 ? (
                      <div className="space-y-2 text-xs">
                        <div>
                          <span className="font-semibold text-slate-700">
                            Taste notes:
                          </span>{" "}
                          <span className="text-slate-600">
                            {data.taste.join(", ")}
                          </span>
                        </div>
                        {data.aroma && (
                          <div>
                            <span className="font-semibold text-slate-700">
                              Aroma:
                            </span>{" "}
                            <span className="text-slate-600">
                              {data.aroma}
                            </span>
                          </div>
                        )}

                        {/* Simple taste badges */}
                        <div className="mt-2 flex flex-wrap gap-1">
                          {data.taste.map((t) => (
                            <span
                              key={t}
                              className="rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-700"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <p className="text-xs text-slate-500">
                        No flavor data available.
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Optimize taste section */}
              <div className="mt-2 rounded-2xl border border-emerald-100 bg-white/80 p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  Optimize taste
                </p>
                <p className="mb-3 text-xs text-slate-600 sm:text-sm">
                  Use these chef-style tweaks to balance your recipe based on
                  the dominant flavors above:
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-800">
                    ➕ Add acidity to brighten heavy or rich notes (lemon, lime,
                    vinegar)
                  </span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-800">
                    ⚖️ Balance strong bitterness with a touch of sweetness
                    (honey, caramelized onions)
                  </span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-800">
                    🌿 Layer fresh herbs at the end to boost aroma and perceived
                    freshness
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Footer button */}
          <div className="mt-6">
            <Button onClick={onClose} className="w-full">
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
