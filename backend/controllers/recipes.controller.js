import { hybridAdvancedSearch } from "../services/hybridEngine.js";
import { fetchByIngredients } from "../services/recipes.service.js";

/* ===============================
   ADVANCED SEARCH CONTROLLER
================================= */
export const handleAdvancedSearch = async (req, res) => {
  try {
    const filters = {
      region: req.query.region || "",
      diet: req.query.diet || "",
      cuisine: req.query.cuisine || "",
      minCalories: req.query.minCalories
        ? Number(req.query.minCalories)
        : undefined,
      maxCalories: req.query.maxCalories
        ? Number(req.query.maxCalories)
        : undefined,
      minProtein: req.query.minProtein
        ? Number(req.query.minProtein)
        : undefined,
      maxProtein: req.query.maxProtein
        ? Number(req.query.maxProtein)
        : undefined,
      minCarbs: req.query.minCarbs
        ? Number(req.query.minCarbs)
        : undefined,
      maxCarbs: req.query.maxCarbs
        ? Number(req.query.maxCarbs)
        : undefined,
      limit: req.query.limit ? Number(req.query.limit) : 20,
    };

    const recipes = await hybridAdvancedSearch(filters);

    return res.json({
      success: true,
      count: recipes?.length || 0,
      recipes: recipes || [],
    });

  } catch (error) {
    console.error("Hybrid Advanced Error:", error.response?.data || error.message);

    return res.status(500).json({
      success: false,
      message: "Advanced search failed",
    });
  }
};


/* ===============================
   INGREDIENT SEARCH CONTROLLER
================================= */
export const handleIngredientSearch = async (req, res) => {
  try {
    const { ingredients, page = 1 } = req.body;

    if (!ingredients || ingredients.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Ingredients required",
      });
    }

    const apiResponse = await fetchByIngredients(ingredients, page, 25);

    const recipes = apiResponse?.payload?.data || [];
    const pagination = apiResponse?.payload?.pagination || null;

    return res.json({
      success: true,
      recipes,
      pagination,
    });

  } catch (error) {
    console.error("Ingredient Search Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Ingredient search failed",
    });
  }
};





