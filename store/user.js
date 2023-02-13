import { createSlice } from "@reduxjs/toolkit";
const initialState = { userData:{} };
const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    setUserData(state, { payload }) {
      state.userData = payload;
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice;
