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

export const findFiveProducts = async () => {
  let result = null;
  try {
    result = await axios.get(`${CART_MANAGEMENT_API}`);
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

export const findCartLines = async (userId) => {
  let result = null;
  try {
    result = await axios.get(`${CART_MANAGEMENT_API}/${userId}`);
  } catch (e) {
    console.log("Find books API error: " + e);
  }
  return result;
};

export const addProductsInCart = async (cartLine) => {
  let result = null;
  try {
    result = await axios.get(
      `${CART_MANAGEMENT_API}/add-to-cart/${cartLine}`
    );
  } catch (e) {
    console.log("Find books API error: " + e);
  }
  return result;
};

export const updateCartLine = async (cartLine) => {
  let result = null;
  try {
    result = await axios.put(`${CART_MANAGEMENT_API}`,cartLine);
  } catch (e) {
    console.log("Find books API error: " + e);
  }
  return result;
};

export const addCartLine = async (product) => {
  let result = null;
  try {
    result = await axios.post(`${CART_MANAGEMENT_API}/add-to-cart`, product);
  } catch (e) {
    console.log("Find books API error: " + e);
  }
  return result;
};

export const removeCartLine = async (cartLineId) => {
  let result = null;
  try {
    result = await axios.delete(`${CART_MANAGEMENT_API}/delete/${cartLineId}`);
  } catch (e) {
    console.log("Find books API error: " + e);
  }
  return result;
};

export const clearAllCartLine = async (cartId) => {
  let result = null;
  try {
    result = await axios.delete(`${CART_MANAGEMENT_API}/delete-all/${cartId}`);
  } catch (e) {
    console.log("Find books API error: " + e);
  }
  return result;
};