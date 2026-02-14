import { flavorAPI } from "../utils/axiosInstance.js";

// GET FLAVOR BY COMMON NAME
export const getFlavorByName = async (name) => {
  const response = await flavorAPI.get(
    "/flavor-api/by-commonName",
    {
      params: { name },
    }
  );

  return response.data;
};

// GET FLAVOR BY PROFILE
export const getFlavorByProfile = async (profile) => {
  const response = await flavorAPI.get(
    "/flavor-api/by-flavorProfile",
    {
      params: { profile },
    }
  );

  return response.data;
};

// GET ENTITIES BY NATURAL SOURCE
export const getByNaturalSource = async (source) => {
  const response = await flavorAPI.get(
    "/flavor-api/by-natural-source",
    {
      params: { source },
    }
  );

  return response.data;
};
