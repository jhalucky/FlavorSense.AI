export const applyMacroFilters = (recipes, filters) => {
  return recipes.filter((recipe) => {
    const calories = recipe.calories || 0;
    const protein = recipe.protein || 0;
    const carbs = recipe.carbs || 0;

    if (filters.minCalories && calories < filters.minCalories) return false;
    if (filters.maxCalories && calories > filters.maxCalories) return false;

    if (filters.minProtein && protein < filters.minProtein) return false;
    if (filters.maxProtein && protein > filters.maxProtein) return false;

    if (filters.minCarbs && carbs < filters.minCarbs) return false;
    if (filters.maxCarbs && carbs > filters.maxCarbs) return false;

    return true;
  });
};
