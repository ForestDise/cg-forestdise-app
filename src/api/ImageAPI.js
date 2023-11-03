import axios from "axios";
const IMAGE_MANAGEMENT_API =
    "http://localhost:8080/api/image";
export const createImages = async ({ imageUrls, variantId }) => {
    let result = null;
    try {
        result = await axios.post(`${IMAGE_MANAGEMENT_API}/${variantId}/create`, imageUrls);
    } catch (e) {
        console.log("create image API error: " + e);
    }
    return result;
};