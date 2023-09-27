import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  userInfo: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state,action)=>{
        const item = state.products.find((item)=>item.id === action.payload.id);
        if(item){
            state.quantity += action.payload.quantity;
        }else{
            state.products.push(action.payload);
        }
    }
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
