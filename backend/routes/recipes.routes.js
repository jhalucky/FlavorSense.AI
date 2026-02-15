import express from "express";
import {
  handleIngredientSearch,
  handleCuisineFilter,
  handleCaloriesFilter,
  handleFlavorFilter,
  handleDietRegionFilter,
  handleNutritionInfo
} from "../controllers/recipes.controller.js";

const router = express.Router();

router.post("/search", handleIngredientSearch);
router.get("/cuisine", handleCuisineFilter);
router.get("/calories", handleCaloriesFilter);
router.get("/flavor", handleFlavorFilter);
router.get("/diet-region", handleDietRegionFilter);
router.get("/nutrition", handleNutritionInfo);

export default router;
