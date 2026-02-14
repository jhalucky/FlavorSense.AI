export const refineResults = (recipes, filters) => {
  return recipes.filter((recipe) => {

    if (filters.minCalories && recipe.calories < filters.minCalories) return false;
    if (filters.maxCalories && recipe.calories > filters.maxCalories) return false;

    if (filters.minProtein && recipe.protein < filters.minProtein) return false;
    if (filters.maxProtein && recipe.protein > filters.maxProtein) return false;

    if (filters.minCarbs && recipe.carbs < filters.minCarbs) return false;
    if (filters.maxCarbs && recipe.carbs > filters.maxCarbs) return false;

    return true;
  });
};
