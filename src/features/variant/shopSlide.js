import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    findShops,
    findShop,
    createShop,
    updateShop
} from "../../api/shopAPI";

const initialState = {
    stores: null,
    store: null,
    loading: false,
    error: null,
    success: false,
};

export const getStores = createAsyncThunk("store/list", async () => {
    const response = await findShops();
    return response.data;
});

export const getStore = createAsyncThunk("store/detail", async (shopId) => {
    const response = await findShop(shopId);
    return response.data;
});

export const addStore = createAsyncThunk("store/create", async (shop) => {
    const response = await createShop(shop);
    return response.data;
});

export const editStore = createAsyncThunk("store/edit", async (shop) => {
    const response = await updateShop(shop);
    return response.data;
});


export const shopSlide = createSlice({
    name: "shop",
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
    },
    extraReducers: (builder) => {
        builder
            //Update states of get books action
            .addCase(getStores.pending, (state) => {
                state.success = false;
                state.loading = true;
                state.error = false;
            })
            .addCase(getStores.rejected, (state, action) => {
                state.success = false;
                state.loading = false;
                state.error = action.error;
            })
            .addCase(getStores.fulfilled, (state, action) => {
                state.success = true;
                state.loading = false;
                state.stores = action.payload;
                state.error = false;
            })

            //Update states of get book action
            .addCase(getStore.pending, (state) => {
                state.success = false;
                state.loading = true;
                state.error = false;
            })
            .addCase(getStore.rejected, (state, action) => {
                state.success = false;
                state.loading = false;
                state.error = action.error;
            })
            .addCase(getStore.fulfilled, (state, action) => {
                state.success = true;
                state.loading = false;
                state.store = action.payload;
                state.error = false;
            })

            //Update states of add book action
            .addCase(addStore.pending, (state) => {
                state.success = false;
                state.loading = true;
                state.error = false;
            })
            .addCase(addStore.rejected, (state, action) => {
                state.success = false;
                state.loading = false;
                state.error = action.error;
            })
            .addCase(addStore.fulfilled, (state, action) => {
                state.success = true;
                state.loading = false;
                state.store = action.payload;
                state.error = false;
            })

            //Update states of edit book action
            .addCase(editStore.pending, (state) => {
                state.success = false;
                state.loading = true;
                state.error = false;
            })
            .addCase(editStore.rejected, (state, action) => {
                state.success = false;
                state.loading = false;
                state.error = action.error;
            })
            .addCase(editStore.fulfilled, (state, action) => {
                state.success = true;
                state.loading = false;
                state.store = action.payload;
                state.error = false;
            })
    },
});

export const {
    setLoading,
    setError,
    setSuccess,
} = shopSlide.actions;

export const selectLoading = (state) => state.shop.loading;
export const selectError = (state) => state.shop.error;
export const selectSuccess = (state) => state.shop.success;
export const selectStoreList = (state) => state.shop.stores;
export const selectStoreDetail = (state) => state.shop.store;
export const selectStoreAdded = (state) => state.shop.store;
export const selectStoreEdited = (state) => state.shop.store;

//Enhancement feature of book slice
export const setLoadingTrueIfCalled = (isCalled) => (dispatch, getState) => {
    const currentValue = selectLoading(getState());
    if (currentValue === isCalled) {
        dispatch(setLoading(true));
    }
};

export default shopSlide.reducer;
