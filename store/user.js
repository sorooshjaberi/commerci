import { createSlice } from "@reduxjs/toolkit";
const initialState = { userData: {}, cart: [], saved: [], firstTime: true };
const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    setUserData(state, { payload }) {
      state.userData = payload;
    },
    setCartData(state, { payload }) {
      state.cart = [...state.cart, { ...payload, amount: 1 }];
    },
    createCartData(state, { payload }) {
      state.cart = state.cart.concat(payload);
    },
    removeCartData(state, { payload }) {
      const newAdded = state.cart.filter((item) => {
        return item.id != payload;
      });
      state.cart = newAdded;
    },
    setSavedData(state, { payload }) {
      state.saved = [...state.saved, payload];
    },
    removeSavedData(state, { payload }) {
      const newAdded = state.saved.filter((item) => {
        return item.id != payload;
      });
      state.saved = newAdded;
    },
    createSavedData(state, { payload }) {
      state.saved = state.saved.concat(payload);
    },
    firstTimeDone(state) {
      state.firstTime = true;
    },
    cartIncrement(state, { payload: id }) {
      const item = state.cart.find((cartItem) => cartItem.id == id);
      item.amount++;
    },
    cartDecrement(state, { payload: id }) {
      const item = state.cart.find((cartItem) => cartItem.id == id);
      item.amount--;
      if (item.amount === 0) {
        const newAdded = state.cart.filter((item) => {
          return item.id != id;
        });
        state.cart = newAdded;
      }
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice;
