import {
  fetchRegionDiet,
  fetchProteinRange,
  fetchCaloriesRange,
  fetchCarbsRange,
  fetchCuisine,
  fetchRecipeRange
} from "./recipes.service.js";

import { refineResults } from "../utils/refinementlayers.js";

export const hybridAdvancedSearch = async (filters) => {
  let recipes = [];

  // PRIMARY FILTER SELECTION
  if (filters.region && filters.diet) {
    recipes = await fetchRegionDiet(filters.region, filters.diet, filters.limit);
  }

  else if (filters.minProtein || filters.maxProtein) {
    recipes = await fetchProteinRange(filters.minProtein, filters.maxProtein);
  }

  else if (filters.minCalories || filters.maxCalories) {
    recipes = await fetchCaloriesRange(filters.minCalories, filters.maxCalories);
  }

  else if (filters.minCarbs || filters.maxCarbs) {
    recipes = await fetchCarbsRange(filters.minCarbs, filters.maxCarbs);
  }

  else if (filters.cuisine) {
    recipes = await fetchCuisine(filters.cuisine, filters.limit);
  }

  else {
    recipes = await fetchRecipeRange(1, filters.limit || 20);
  }

  // SECONDARY LOCAL REFINEMENT
  recipes = refineResults(recipes, filters);

  return recipes;
};

export const searchByIngredients = async (filters) => {
  const { ingredients, limit } = filters;

  let recipes = await fetchByIngredients(ingredients, limit);

  recipes = refineResults(recipes, filters);

  return recipes;
};

