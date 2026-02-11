import axios from "axios";
import { mockFlavorProfiles } from "../mocks/flavorMock.js";

export const getFlavorProfile = async (ingredient) => {
  return mockFlavorProfiles[ingredient.toLowerCase()] || { taste: [] };

  // 🔥 Replace with real API later
};
