import express from "express";
import { getFlavorProfile } from "../services/flavorService.js";

const router = express.Router()

router.get("/:ingredient", async (req, res) => {
    try {
        const profile = await getFlavorProfile(req.params.ingredient)
        res.json(profile)
    } catch (error) {
        res.status(500).json({error: "failed to fetch flavor profile"})
    }
})

export default router;