import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  breadcrumb: {
    category: "",
    subCategory: "",
  },
  moreSideBar: false,
  moreCategoryToggle: {
    deals: false
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
    toggleMoreSideBar: (state, action) => {
      state.moreSideBar = action.payload;
    },
    addMoreCategoryToggle: (state, action) => {
      state.moreCategoryToggle = {
        ...state.moreCategoryToggle,
        [action.payload]: false,
      };
    },
    toggleMoreCategory: (state, action) => {
      const categoryName = action.payload
      state.moreCategoryToggle = {
        ...state.moreCategoryToggle,
        [categoryName]: !state.moreCategoryToggle[categoryName],
      };
    },
  },
});

export const {
  setLoading,
  setError,
  setSuccess,
  changeCategory,
  changeSubCategory,
  toggleMoreSideBar,
  addMoreCategoryToggle,
  toggleMoreCategory,
} = sellerStoreSlice.actions;

export const selectLoading = (state) => state.sellerStore.loading;
export const selectError = (state) => state.sellerStore.error;
export const selectSuccess = (state) => state.sellerStore.success;
export const selectBreadcrumb = (state) => state.sellerStore.breadcrumb;

export default sellerStoreSlice.reducer;
