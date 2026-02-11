import express from "express";
import { searchRecipes } from "../services/recipeService.js";
import { scoreRecipe } from "../services/scoringService.js";

const router = express.Router()

router.post("/search", async(req, res) => {
    const {ingredients, preference} = req.body;

    try {
        const recipes = await searchRecipes(ingredients);

        const ranked = recipes.map(recipe => ({
            ...recipe,
            score: scoreRecipe(recipe, preference)
        }))

        ranked.sort((a, b) => b.score - a.score);

        res.json(ranked)
    } catch (error) {
        res.status(500).json({error: "failed to fetch Recipes"})
    }
})

export default router;