import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { findSeller }  from "../../api/sellerAPI";

const initialState = {
    sellerInfo: {},
    loading: false,
    success: false,
    error: false,
};

export const findSellerInfo = createAsyncThunk(
    "seller/info",
    async (sellerId) => {
        const response = await findSeller(sellerId);
        console.log(response.data);
        return response.data;
    }
);

export const sellerSlice = createSlice({
    name: "seller",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setSuccess: (state, action) => {
            state.success = action.payload;
        },
        logOutSeller: (state) => {
            state.sellerInfo = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(findSellerInfo.pending, (state) => {
                state.success = false;
                state.loading = true;
                state.error = false;
            })
            .addCase(findSellerInfo.rejected, (state, action) => {
                state.success = false;
                state.loading = false;
                state.error = action.error;
            })
            .addCase(findSellerInfo.fulfilled, (state, action) => {
                state.success = true;
                state.loading = false;
                state.sellerInfo = action.payload;
                state.error = false;
            })
    }
})

export const {
    setLoading,
    setError,
    setSuccess,
    logOutSeller
} = sellerSlice.actions;

export const selectLoading = (state) => state.seller.loading;
export const selectError = (state) => state.seller.error;
export const selectSuccess = (state) => state.seller.success;
export const selectSellerDetail = (state) => state.seller.sellerInfo;


export const setLoadingTrueIfCalled = (isCalled) => (dispatch, getState) => {
    const currentValue = selectLoading(getState());
    if (currentValue === isCalled) {
        dispatch(setLoading(true));
    }
};

export default sellerSlice.reducer;