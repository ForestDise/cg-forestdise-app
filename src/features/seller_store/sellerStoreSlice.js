import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  breadcrumb: {
    category: null,
    subCategory: null
  }
};


export const userSlice = createSlice({
  name: "seller_store",
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
  extraReducers: (builder) => {
    builder
  },
});

export const { setLoading, setError, setSuccess, changeCategory, changeSubCategory } =
  sellerStoreSlice.actions;

export const selectLoading = (state) => state.user.loading;
export const selectError = (state) => state.user.error;
export const selectSuccess = (state) => state.user.success;
export const selectUserDetail = (state) => state.user.userInfo;

export const setLoadingTrueIfCalled = (isCalled) => (dispatch, getState) => {
  const currentValue = selectLoading(getState());
  if (currentValue === isCalled) {
    dispatch(setLoading(true));
  }
};

export default sellerStoreSlice.reducer;
