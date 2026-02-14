import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const fetchAdvancedRecipes = async (filters) => {
  const response = await API.get("/api/recipes/advanced", {
    params: filters,
  });

  return response.data;
};

export default API;

export const fetchByIngredients = async (ingredients) => {
  const response = await API.post(
    "/api/recipes/by-ingredients",
    { ingredients }
  );

  return response.data;
};

