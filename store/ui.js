import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  dashboardTabIndex: 0,
  showCart: false,
  alert: { type: null, duration: 6000 },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showCart(state) {
      state.showCart = true;
    },
    hideCart() {
      state.showCart = false;
    },
    changeTab(state, { payload }) {
      state.dashboardTabIndex = payload;
    },
    changeAlert(state, { payload }) {
      setTimeout(() => {
        state.alert.type = null;
      }, state.alert.duration);
      state.alert.type = payload;
    },
  },
});
export default uiSlice;
export const uiAction = uiSlice.actions;
