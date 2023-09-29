import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  empties: [],
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
        state.products = state.products.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
    deleteEmpties: (state, action) => {
      state.empties = state.empties.filter(
        (item) => item.id !== action.payload
      );
    },
    moveToCart:(state,action)=>{
      state.products.push(action.payload);
      state.empties = state.empties.filter(
        (item) => item.id !== action.payload.id
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
  moveToCart,
} = cartSlice.actions;

export default cartSlice.reducer;
