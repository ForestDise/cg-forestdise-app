import axios from "axios";

const STORECATE_MANAGEMENT_API =
    "http://localhost:8080/api/store-category";


export const createCategory = async (category) => {
    let result = null;
    try {
        result = await axios.post(`${STORECATE_MANAGEMENT_API}`, category);
    } catch (e) {
        console.log("create book API error: " + e);
    }
    return result;
};

