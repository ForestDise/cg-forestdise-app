import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { findProductsSame } from "../../api/cartAPI";

export const getProductsSame = createAsyncThunk("products/list", async () => {
  const response = await findProductsSame();
  return response.data;
});

const initialState = {
  products: [],
  empties: []
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
    saveForLater: (state, action) => {
      const item = state.empties.find((item) => item.id === action.payload.id);
      if (item) {
        state.products = state.products.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.empties.push(action.payload);
      }
    },
    deleteEmpties: (state, action) => {
      state.empties = state.empties.filter(
        (item) => item.id !== action.payload
      );
    },
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
