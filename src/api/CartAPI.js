import axios from "axios";

const CART_MANAGEMENT_API = "http://localhost:8080/api/cart-lines";

export const findProductsSame = async () => {
  let result = null;
  try {
    result = await axios.get(`https://fakestoreapi.com/products?limit=20`);
  } catch (e) {
    console.log("Find books API error: " + e);
  }
  return result;
};

export const findFiveProducts = async (id) => {
  let result = null;
  try {
    result = await axios.get(`${CART_MANAGEMENT_API}/${id}`);
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

export const findProductsInCart = async () => {
  let result = null;
  try {
    result = await axios.get(`https://fakestoreapi.com/products?limit=12`);
  } catch (e) {
    console.log("Find books API error: " + e);
  }
  return result;
};