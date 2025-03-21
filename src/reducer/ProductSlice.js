import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      state.product.push(action.payload);
      localStorage.setItem("product", JSON.stringify(state.product));
    },
    removeFromcart: (state, action) => {
      state.product = state.product.filter((item)=>item.id !== action.payload)
      localStorage.setItem("product", JSON.stringify(state.product));
    },
  },
});

export const { addtoCart, removeFromcart} = ProductSlice.actions;

export default ProductSlice.reducer;
