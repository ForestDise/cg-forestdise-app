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