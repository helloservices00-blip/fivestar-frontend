import axios from "axios";

// Create Axios instance pointing to your backend
const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, // Use only the backend URL, no extra /api
});

// Fetch all shops
export const getShops = async () => {
  try {
    const response = await API.get("/api/shops"); // exact backend endpoint
    return response.data;
  } catch (error) {
    console.error("Error fetching shops:", error);
    return []; // return empty array to prevent frontend crash
  }
};

// Fetch products for a specific shop
export const getShopProducts = async (shopId) => {
  try {
    const response = await API.get(`/api/shops/${shopId}/products`); // exact endpoint
    return response.data;
  } catch (error) {
    console.error(`Error fetching products for shop ${shopId}:`, error);
    return []; // return empty array to prevent frontend crash
  }
};
