import axios from "axios";
const STORE_MANAGEMENT_API = "https://forestdise.up.railway.app/api/stores";

export const findStore = async (storeId) => {
  let result = null;
  try {
    result = await axios.get(`${STORE_MANAGEMENT_API}/${storeId}`);
  } catch (e) {
    console.log("Find store API error: " + e);
  }
  return result;
};
