import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      //   state.push(action.payload);
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += action.payload.quantity;
      } else {
        // const productClone = { ...action.payload, quantity: 1 };
        state.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      return [];
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
