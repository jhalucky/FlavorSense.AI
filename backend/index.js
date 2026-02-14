import dotenv from "dotenv";
dotenv.config();


import express from "express";
import cors from "cors";
import recipesRoutes from "./routes/recipes.routes.js";
import flavorRoutes from "./routes/flavor.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/recipes", recipesRoutes);
app.use("/api/flavor", flavorRoutes);

app.get("/", (req, res) => {
  res.json({ message: "FlavorSense Backend Running 🚀" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
