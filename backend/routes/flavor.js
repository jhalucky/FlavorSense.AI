import express from "express";
import { getFlavorByProfile } from "../services/flavorService.js";

const router = express.Router();

router.get("/:profile", async (req, res) => {
  try {
    const result = await getFlavorByProfile(req.params.profile);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch flavor profile" });
  }
});

export default router;
