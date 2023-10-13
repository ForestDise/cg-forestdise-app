import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  breadcrumb: {
    category: "",
    subCategory: "",
  },
  loading: false,
  error: null,
  success: false,
};

export const sellerStoreSlice = createSlice({
  name: "sellerStore",
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
    changeCategory: (state, action) => {
      state.breadcrumb.category = action.payload;
    },
    changeSubCategory: (state, action) => {
      state.breadcrumb.subCategory = action.payload;
    },
  },
});

export const {
  setLoading,
  setError,
  setSuccess,
  changeCategory,
  changeSubCategory,
} = sellerStoreSlice.actions;

export const selectLoading = (state) => state.sellerStore.loading;
export const selectError = (state) => state.sellerStore.error;
export const selectSuccess = (state) => state.sellerStore.success;
export const selectBreadcrumb = (state) => state.sellerStore.breadcrumb;

export default sellerStoreSlice.reducer;
