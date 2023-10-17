import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {findProductsByFeatured, findProductsByPricesDecease, findProductsByPriceIncrease} from "../../api/searchAPI";
const initialState = {
    products: [],
    loading: false,
    error: null,
    success: false,
};
export const getProducts = createAsyncThunk("searchProduct/getProducts", async ({ text, searchType })=>{
    let response;
    if (searchType === "Featured") {
        response = await findProductsByFeatured(text);
    } else if (searchType === "PricesDecease") {
        response = await findProductsByPricesDecease(text);
    } else if (searchType === "PricesIncrease") {
        response = await findProductsByPriceIncrease(text);
    }
    return response.data
})


export  const searchProductSlice = createSlice({
    name : "searchProduct",
    initialState,
    reducers: {
        // các action creator tự bổ sung: setLoading, setError, setSuccess
        setLoading: (state, action) => {
            state.loading =action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setSuccess: (state, action) =>{
            state.success=action.payload;
        }
    },
    extraReducers: (builder) => {
         //"extraReducers" dùng khi cần xử lý 3 trường hợp: pending, fulfilled, rejected của asynthunk khi gọi api, khong can cung duoc.
        builder
            //Update states of get variant action
            .addCase(getProducts.pending, (state) => {
                state.success = false;
                state.loading = true;
                state.error = false;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.success = false;
                state.loading = false;
                state.error = action.error;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.success = true;
                state.loading = false;
                state.products = action.payload;
                state.error = false;
            })
    }
})
export const {
    setLoading,
    setError,
    setSuccess,
} = searchProductSlice.actions;
export const selectLoading = (state) => state.searchProduct.loading;
export const selectError = (state) => state.searchProduct.error;
export const selectSuccess = (state) => state.searchProduct.success;
export const selectProducts = (state) => state.searchProduct.products
export default searchProductSlice.reducer;
