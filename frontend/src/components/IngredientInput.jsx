export default function IngredientInput({
  value,
  onChange,
  onEnterPress,
}) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onEnterPress();
    }
  };

  return (
    <div>
      <label
        htmlFor="ingredients"
        className="mb-3 block text-sm font-semibold text-slate-700"
      >
        Your Ingredients
      </label>

      <textarea
        id="ingredients"
        rows={4}
        placeholder="e.g., chicken, tomatoes, basil, garlic, olive oil..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full rounded-2xl border-2 border-emerald-100 bg-white px-5 py-4 text-slate-900 placeholder-slate-400 shadow-sm transition-all focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/10"
      />

      <p className="mt-2 text-xs text-slate-500">
        💡 Separate ingredients with commas. Add 3–5 for best results.
      </p>
    </div>
  );
}
