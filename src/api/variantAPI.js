import axios from "axios";
const VARIANT_MANAGEMENT_API =
  "http://localhost:8080/api/product-detail";

export const findVariant = async (productId) => {
  let result = null;
  try {
     result = await axios.get(`${VARIANT_MANAGEMENT_API}/${productId}`);
     console.log(result);
  } catch (e) {
    console.log("Find variant API error: " + e);
  }
  return result;
};
export const updateVariant = async (Variant) => {
  let result = null;
  try {
    result = await axios.put(`${VARIANT_MANAGEMENT_API}/${Variant.id}`, Variant);
  } catch (e) {
    console.log("Update variant API error: " + e);
  }
  return result;
};
export const createVariant = async (variant) => {
  let result = null;
  try {
    result = await axios.post(`${VARIANT_MANAGEMENT_API}`, variant);
  } catch (e) {
    console.log("create variant API error: " + e);
  }
  return result;
};