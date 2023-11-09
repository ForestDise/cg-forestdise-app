import axios from "axios";

const BULLET_MANAGEMENT_API = "https://forestdise.up.railway.app/api/bullet"; 

export const createBullet = async(bullet) => {
    let result = null;
    try {
        result = await axios.post(`${PRODUCT_MANAGEMENT_API}`, bullet);
    } catch (e) {
        console.log("create book API error: " + e);
    }
    return result;
};