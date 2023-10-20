import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { findStore } from "../../api/storeAPI";

const initialState = {
  storeBanner: "",
  storeInfo: {},
  categories: [],
  breadcrumb: {
    category: "",
    subCategory: "",
  },
  selectedCategory: null,
  moreSideBar: false,
  moreCategoryToggle: {
    deals: false,
  },
  loading: false,
  error: null,
  success: false,
};

export const setStore = createAsyncThunk("store/info", async (storeID) => {
  const response = await findStore(storeID);
  console.log(response.data);
  return response.data;
});

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
    setCategory: (state, action) => {
      state.categories = action.payload;
    },
    setStoreBanner: (state, action) => {
      state.storeBanner = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
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
      const categoryId = action.payload;
      state.moreCategoryToggle = {
        ...state.moreCategoryToggle,
        [categoryId]: !state.moreCategoryToggle[categoryId],
      };
    },
    toggleOffMoreCategory: (state, action) => {
      const categoryId = action.payload;
      state.moreCategoryToggle = {
        ...state.moreCategoryToggle,
        deals: false,
        [categoryId]: false,
      };
    },
    toggleOffMoreCategoryForDeals: (state, action) => {
      const categoryId = action.payload;
      state.moreCategoryToggle = {
        ...state.moreCategoryToggle,
        [categoryId]: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setStore.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(setStore.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(setStore.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.storeInfo = action.payload;
        state.error = false;
      });
  },
});

export const {
  setLoading,
  setError,
  setSuccess,
  setCategory,
  setStoreBanner,
  setSelectedCategory,
  changeCategory,
  changeSubCategory,
  toggleMoreSideBar,
  addMoreCategoryToggle,
  toggleMoreCategory,
  toggleOffMoreCategory,
  toggleOffMoreCategoryForDeals,
} = sellerStoreSlice.actions;

export const selectLoading = (state) => state.sellerStore.loading;
export const selectError = (state) => state.sellerStore.error;
export const selectSuccess = (state) => state.sellerStore.success;
export const selectBreadcrumb = (state) => state.sellerStore.breadcrumb;
export const selectStore = (state) => state.sellerStore.store;
export const selectCategories = (state) => state.sellerStore.categories;

export default sellerStoreSlice.reducer;
