import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { findVariant, findVariantById } from "../../api/variantAPI";

const initialState = {
    variant: null,
    variantDetail: null,
    loading: false,
    error: null,
    success: false,
}

export const getVariant = createAsyncThunk("variant/detail", async (productId) => {
  const response = await findVariant(productId);
    return response.data;
})
export const getVariantInfo = createAsyncThunk("variant/info", async (productId) => {
  const response = await findVariantById(productId);
  return response.data;
})
export const variantSlice = createSlice({
    name: "variant",
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
        }
    },
    extraReducers: (builder) => {
    builder
    //Update states of get variant action
      .addCase(getVariant.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(getVariant.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getVariant.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.variant = action.payload;
        state.error = false;
      })
      .addCase(getVariantInfo.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(getVariantInfo.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getVariantInfo.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.variantDetail = action.payload;
        state.error = false;
      })
    }
})
export const {
  setLoading,
  setError,
  setSuccess,
} = variantSlice.actions;

export const selectLoading = (state) => state.variant.loading;
export const selectError = (state) => state.variant.error;
export const selectSuccess = (state) => state.variant.success;
export const selectVariantDetail = (state) => state.variant.variant;
export const selectVariantInfo = (state) => state.variant.variantDetail;

export default variantSlice.reducer;

