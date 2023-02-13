import { createSlice } from "@reduxjs/toolkit";
const initialState = { userData: {}, cart: [], saved: [] };
const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    setUserData(state, { payload }) {
      state.userData = payload;
    },
    setCartData(state, { payload }) {
      state.cart = [...state.cart, payload];
    },
    removeCartData(state, { payload }) {
      const newAdded = state.cart.filter((item) => {
        return item.id != payload;
      });
      state.cart = newAdded;
    },
    setSavedData(state, { payload }) {
      state.cart = [...state.saved, payload];
    },
    removeSavedData(state, { payload }) {
      const newAdded = state.saved.filter((item) => {
        return item.id != payload;
      });
      state.saved = newAdded;
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice;
