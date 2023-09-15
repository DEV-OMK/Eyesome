import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem(state, action) {
      state.push(action.payload);
    },

    removeCartItem(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },

    increaseCartItemCount(state, action) {
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      });
    },

    decreaseCartItemCount(state, action) {
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, qty: item.qty - 1 };
        }
        return item;
      });
    },
  },
});

export const {
  addCartItem,
  removeCartItem,
  decreaseCartItemCount,
  increaseCartItemCount,
} = cartSlice.actions;
export default cartSlice.reducer;
