import { createSlice } from "@reduxjs/toolkit";
const initialState = { dashboardTabIndex: 0, showCart: false };

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
  },
});
export default uiSlice;
export const uiAction = uiSlice.actions;
