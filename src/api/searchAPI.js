import axios from "axios";

// const PRODUCT_BY_FEATURED = "https://fakestoreapi.com/products";
const PRODUCT_BY_FEATURED = "http://localhost:8080/api/search/products";
const PRODUCT_BY_PRICES_DECREASE = "2";
const PRODUCT_BY_PRICES_INCREASE = "3";
const PRODUCT_BY_BEST_SELLER = "4";
const PRODUCT_BY_LAST = "5";
const PRODUCT_BY_REVIEW = "6";
export const findProductsByFeatured = async (searchText) => {
    let result = null;
    try {
        result = await axios.get(`${PRODUCT_BY_FEATURED}?searchText=${searchText}`);
        // result = await axios.get(`${PRODUCT_BY_FEATURED}?searText=@{text}`);
        console.log(result)
    } catch (e) {
        console.log("Find product API error: " + e);
    }
    return result;
};
export const findProductsByPricesDecease = async () => {
    let result = null;
    try {
        result = await axios.get(`${PRODUCT_BY_PRICES_DECREASE}`);
    } catch (e) {
        console.log("Find product API error: " + e);
    }
    return result;
};
export const findProductsByPriceIncrease = async () => {
    let result = null;
    try {
        result = await axios.get(`${PRODUCT_BY_PRICES_INCREASE}`);
    } catch (e) {
        console.log("Find product API error: " + e);
    }
    return result;
};
export const findProductsByBestSeller = async () => {
    let result = null;
    try {
        result = await axios.get(`${PRODUCT_BY_BEST_SELLER}`);
    } catch (e) {
        console.log("Find product API error: " + e);
    }
    return result;
};
export const findProductsByLast = async () => {
    let result = null;
    try {
        result = await axios.get(`${PRODUCT_BY_LAST}`);
    } catch (e) {
        console.log("Find product API error: " + e);
    }
    return result;
};
export const findProductsReview = async () => {
    let result = null;
    try {
        result = await axios.get(`${PRODUCT_BY_REVIEW}`);
    } catch (e) {
        console.log("Find product API error: " + e);
    }
    return result;
};
