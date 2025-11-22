import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

export const getShops = async () => {
  try {
    const response = await API.get("/api/shops");
    return response.data;
  } catch (error) {
    console.error("Error fetching shops:", error);
    return [];
  }
};

export const getShopProducts = async (shopId) => {
  try {
    const response = await API.get(`/api/shops/${shopId}/products`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching products for shop ${shopId}:`, error);
    return [];
  }
};
