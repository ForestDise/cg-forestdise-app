import axios from "axios";
const ADDRESS_MANAGEMENT_API = "";


export const findAddress = async () => {
    let result = null;
    try {
        result = await axios.get(`${ADDRESS_MANAGEMENT_API}`);
        console.log(result);
    } catch (e) {
        console.log("Find address API error: " + e);
    }
    return result;
}