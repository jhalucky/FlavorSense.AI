import axios from "axios";

const commonHeaders = {
  Authorization: `Bearer ${process.env.FOODOSCOPE_API_KEY}`,
};

// RecipeDB API
export const recipeAPI = axios.create({
  baseURL: process.env.RECIPEDB_BASE_URL,
  headers: commonHeaders,
});

// FlavorDB API
export const flavorAPI = axios.create({
  baseURL: process.env.RECIPEDB_BASE_URL, // Flavor endpoints are under same domain
  headers: commonHeaders,
});
