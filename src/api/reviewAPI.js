import axios from "axios";

const REVIEW_MANAGEMENT_API =
    "http://localhost:8080/api/reviews";

export const findReview = async (variantId, customer) => {
    let result = null;
    try {
        result = await axios.get(`${REVIEW_MANAGEMENT_API}/{variantId}`, customer);
    } catch (e) {
        console.log("Find books API error: " + e);
    }
    return result;
};

export const findReviewByProductId = async (productId) => {
    let result = null;
    try {
        result = await axios.get(`${REVIEW_MANAGEMENT_API}/shops/${productId}`);
    } catch (e) {
        console.log("Find book API error: " + e);
    }
    return result;
};

export const createReview = async (review) => {
    let result = null;
    try {
        result = await axios.post(`${REVIEW_MANAGEMENT_API}`, review);
    } catch (e) {
        console.log("create book API error: " + e);
    }
    return result;
};
