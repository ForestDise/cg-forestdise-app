import axios from "axios";
const VARIANT_MANAGEMENT_API =
  "http://localhost:8080/api/product-detail/1";

export const findVariant = async (variantId) => {
  let result = null;
  try {
     result = await axios.get(`${VARIANT_MANAGEMENT_API}/${variantId}`);
     console.log(result);
  } catch (e) {
    console.log("Find variant API error: " + e);
  }
  return result;
};