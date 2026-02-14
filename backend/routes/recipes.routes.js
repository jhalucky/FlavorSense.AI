import express from "express";
import { handleAdvancedSearch, handleIngredientSearch } from "../controllers/recipes.controller.js";

const router = express.Router();

router.get("/advanced", handleAdvancedSearch);
router.post("/by-ingredients", handleIngredientSearch);
router.post("/search", handleIngredientSearch);


export default router;
