import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  dashboardTabIndex: 0,
  showCart: false,
  alert: { type: null, duration: 5000, context: "" },
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
      state.alert.type = payload.type;
      state.alert.context = payload.context;
    },
  },
});
export default uiSlice;
export const uiAction = uiSlice.actions;
