import axios from "axios";

// const CART_MANAGEMENT_API = "http://localhost:8080/api";

export const findProductsSame = async () => {
  let result = null;
  try {
    result = await axios.get(`https://fakestoreapi.com/products?limit=20`);
  } catch (e) {
    console.log("Find books API error: " + e);
  }
  return result;
};

export const findFiveProducts = async () => {
  let result = null;
  try {
    result = await axios.get(`https://fakestoreapi.com/products?limit=5`);
  } catch (e) {
    console.log("Find books API error: " + e);
  }
  return result;
};

export const findProductsRecentlyViewed = async () => {
  let result = null;
  try {
    result = await axios.get(`https://fakestoreapi.com/products?limit=12`);
  } catch (e) {
    console.log("Find books API error: " + e);
  }
  return result;
};