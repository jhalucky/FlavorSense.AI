import { recipeAPI } from "../utils/axiosInstance.js";
import axios from "axios";

export const fetchByIngredients = async (ingredients, page = 1, limit = 25) => {
  const fullURL =
    process.env.RECIPEDB_BASE_URL +
    "/recipe2-api/recipebyingredient/by-ingredients-categories-title";

  const response = await axios.get(fullURL, {
    headers: {
      Authorization: `Bearer ${process.env.FOODOSCOPE_API_KEY}`,
    },
    params: {
      includeIngredients: ingredients.join(","),
      page,
      limit,
    },
  });

  return response.data; // contains { success, message, payload }
};










export const fetchCuisine = async (cuisine, limit = 20) => {
  const response = await recipeAPI.get(
    "/recipe2-api/recipe/recipes_cuisine/cuisine",
    {
      params: { cuisine, limit },
    }
  );

  return response.data?.data || response.data;
};

export const fetchRegionDiet = async (region, diet, limit = 20) => {
  const response = await recipeAPI.get(
    "/recipe2-api/recipe/recipes_region_diet",
    { params: { region, diet, limit } }
  );
  return response.data?.data || response.data;
};

export const fetchProteinRange = async (min, max) => {
  const response = await recipeAPI.get(
    "/recipe2-api/recipe/protein-range",
    { params: { min, max } }
  );
  return response.data?.data || response.data;
};

export const fetchCaloriesRange = async (min, max) => {
  const response = await recipeAPI.get(
    "/recipe2-api/recipe/calories",
    { params: { min, max } }
  );
  return response.data?.data || response.data;
};

export const fetchCarbsRange = async (min, max) => {
  const response = await recipeAPI.get(
    "/recipe2-api/recipe/recipes-by-carbs",
    { params: { min, max } }
  );
  return response.data?.data || response.data;
};

export const fetchRecipeRange = async (page, limit) => {
  const response = await recipeAPI.get(
    "/recipe2-api/recipe/recipes/range",
    { params: { page, limit } }
  );
  return response.data?.data || response.data;
};
