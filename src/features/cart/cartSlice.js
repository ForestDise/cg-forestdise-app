import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  findCartLines,
  updateCartLine,
  addCartLine,
  removeCartLine,
  clearAllCartLine,
} from "../../api/cartAPI";

export const getCartLines = createAsyncThunk(
  "cartLine/list",
  async (userId) => {
    const response = await findCartLines(userId);
    return response.data;
  }
);

export const addNewCartLine = createAsyncThunk(
  "cartLine/add",
  async (cartLine) => {
    const response = await addCartLine(cartLine);
    return response.data;
  }
);

export const editCartLine = createAsyncThunk(
  "cartLine/edit",
  async (cartLine) => {
    const response = await updateCartLine(cartLine);
    return response.data;
  }
);

export const clearCartLine = createAsyncThunk(
  "cartLine/clearAll",
  async (cartId) => {
    const response = await clearAllCartLine(cartId);
    return response.data;
  }
);

export const deleteCartLine = createAsyncThunk(
  "cartLine/delete",
  async (cartLineId) => {
    const response = await removeCartLine(cartLineId);
    return response.data;
  }
);

const initialState = {
  products: [],
  empties: [],
  cussess: false,
  loading: false,
  error: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addToCart: (state, action) => {
    //   const item = state.products.find((item) => item.id === action.payload.id);
    //   if (item) {
    //     item.quantity += action.payload.quantity;
    //   } else {
    //     state.products.push(action.payload);
    //   }
    // },
    // incrementQuantity: (state, action) => {
    //   const item = state.products.find((item) => item.id === action.payload);
    //   item.quantity++;
    // },
    // decrementQuantity: (state, action) => {
    //   const item = state.products.find((item) => item.id === action.payload);
    //   if (item.quantity === 1) {
    //     item.quantity = 1;
    //   } else {
    //     item.quantity--;
    //   }
    // },
    // deleteItem: (state, action) => {
    //   state.products = state.products.filter(
    //     (item) => item.id !== action.payload
    //   );
    // },
    // resetCart: (state) => {
    //   state.products = [];
    // },
    // saveForLater: (state, action) => {
    //   const item = state.empties.find((item) => item.id === action.payload.id);
    //   if (item) {
    //     state.products = state.products.filter(
    //       (item) => item.id !== action.payload.id
    //     );
    //   } else {
    //     state.empties.push(action.payload);
    //   }
    // },
    // deleteEmpties: (state, action) => {
    //   state.empties = state.empties.filter(
    //     (item) => item.id !== action.payload
    //   );
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartLines.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(getCartLines.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getCartLines.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.error = false;
        state.products = action.payload;
      })
      .addCase(addNewCartLine.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(addNewCartLine.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(addNewCartLine.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.error = false;
        const item = state.products.find(
          (item) => item.id === action.payload.id
        );
        if (item) {
          item.quantity += 1;
        } else {
          state.products.push(action.payload);
        }
      })
      .addCase(editCartLine.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(editCartLine.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(editCartLine.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.error = false;
        const item = state.products.find(
          (item) => item.id === action.meta.arg.id
        );
        item.quantity = action.meta.arg.quantity;
      })
      .addCase(clearCartLine.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(clearCartLine.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(clearCartLine.fulfilled, (state) => {
        state.success = true;
        state.loading = false;
        state.error = false;
        state.products = [];
      })
      .addCase(deleteCartLine.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteCartLine.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(deleteCartLine.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.error = false;
        state.products = state.products.filter(
          (item) => item.id !== action.meta.arg
        );
      });
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  deleteItem,
  resetCart,
  decrementQuantity,
  incrementQuantity,
  saveForLater,
  deleteEmpties,
} = cartSlice.actions;

export default cartSlice.reducer;
