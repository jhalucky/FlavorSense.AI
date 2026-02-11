import { useState } from "react";
import FlavorModal from "./FlavorModal";
import Card from "./Card";

export default function RecipeCard({ recipe }) {
  const [open, setOpen] = useState(false);
  const score = typeof recipe.score === "number" ? recipe.score : 80;

  const scoreLabel =
    score >= 90 ? "Excellent match" : score >= 75 ? "Great match" : "Good match";

  return (
    <>
      <Card className="overflow-hidden p-0 transition-transform hover:-translate-y-1 hover:shadow-2xl">
        {/* Top: pseudo-image / gradient */}
        <div className="relative h-32 overflow-hidden bg-gradient-to-br from-emerald-500/80 via-emerald-400/70 to-lime-400/80">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.6),_transparent_55%)]" />
          {/* Score badge */}
          <div className="absolute right-4 top-4 rounded-2xl bg-white/90 px-3 py-1.5 text-xs font-semibold text-emerald-700 shadow-lg shadow-emerald-300/40 backdrop-blur">
            <span className="mr-1 text-[10px] uppercase tracking-[0.16em] text-emerald-500">
              Score
            </span>
            <span className="text-sm font-bold">{score}</span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3 p-5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
              {recipe.title}
            </h3>
            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
              {scoreLabel}
            </span>
          </div>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-500">
            <div className="flex items-center gap-1.5">
              <span className="text-base">⏱️</span>
              <span>~25 min</span>
            </div>
            <span className="hidden text-slate-300 sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <span className="text-base">🌶️</span>
              <span className="capitalize">
                {recipe.preference || "savory"}
              </span>
            </div>
            <span className="hidden text-slate-300 sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <span className="text-base">🍽️</span>
              <span>AI-curated</span>
            </div>
          </div>

          {/* Ingredients */}
          {recipe.ingredients && recipe.ingredients.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {recipe.ingredients.slice(0, 3).map((ingredient, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-800"
                >
                  {ingredient}
                </span>
              ))}
              {recipe.ingredients.length > 3 && (
                <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600">
                  +{recipe.ingredients.length - 3} more
                </span>
              )}
            </div>
          )}

          {/* Action */}
          <button
            onClick={() => setOpen(true)}
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-100 bg-white/90 px-4 py-2.5 text-xs font-semibold text-emerald-700 shadow-sm transition-all hover:border-emerald-200 hover:bg-emerald-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            <span>🧪</span>
            <span>Analyze flavor profile</span>
          </button>
        </div>
      </Card>

      {open && (
        <FlavorModal
          ingredients={recipe.ingredients}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
