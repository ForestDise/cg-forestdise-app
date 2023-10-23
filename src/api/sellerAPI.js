import axios from "axios";
const SELLER_MANAGEMENT_API = "http://localhost:8080/api/sellers";

export const findSeller = async (sellerId, token) => {
  let result = null;
  try {
    result = await axios.get(`${SELLER_MANAGEMENT_API}/${sellerId}`, {
      headers: { Authorization: "Bearer " + token },
    });
  } catch (e) {
    console.log("Find seller API error: " + e);
  }
  return result;
};
