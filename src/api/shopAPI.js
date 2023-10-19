import axios from "axios";

const SHOP_MANAGEMENT_API =
    "http://localhost:8080/api/shop";

export const findShops = async () => {
  let result = null;
  try {
      result = await axios.get(`${SHOP_MANAGEMENT_API}`);
  } catch (e) {
    console.log("Find books API error: " + e);
  }
  return result;
};

export const findShop = async (shopId) => {
  let result = null;
  try {
      result = await axios.get(`${SHOP_MANAGEMENT_API}/shops/${shopId}`);
  } catch (e) {
    console.log("Find book API error: " + e);
  }
  return result;
};

export const createShop = async (shop) => {
  let result = null;
  try {
      result = await axios.post(`${SHOP_MANAGEMENT_API}/shop`, shop);
  } catch (e) {
    console.log("create book API error: " + e);
  }
  return result;
};


export const updateShop = async (shop) => {
  let result = null;
  try {
      result = await axios.put(`${SHOP_MANAGEMENT_API}/shop/${shop.id}`, shop);
  } catch (e) {
    console.log("Update book API error: " + e);
  }
  return result;
};