import axios from "axios";
import { mockRecipes } from "../mocks/recipeMock.js";

export const searchRecipes = async (ingredients) => {
  // MOCK LOGIC
  return mockRecipes.filter(recipe =>
    ingredients.some(ing =>
      recipe.ingredients.includes(ing.toLowerCase())
    )
  );

  // 🔥 HACKATHON DAY (REPLACE WITH REAL API)
  /*
  const response = await axios.get(
    `${process.env.RECIPE_BASE_URL}/recipeByTitle`,
    { params: { ingredients: ingredients.join(",") } }
  );
  return response.data;
  */
};
