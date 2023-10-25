import axios from "axios";
const USER_MANAGEMENT_API = "http://localhost:8080/api/sellers";

export const findSeller = async (sellerId) => {
    let result = null;
    try {
        result = await axios.get(`${USER_MANAGEMENT_API}/${sellerId}`);
        console.log(result);
    } catch (e) {
        console.log("Find seller API error: " + e);
    }
    return result;
};