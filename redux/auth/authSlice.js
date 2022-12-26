import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { otpToken: null, accessToken: null },
  reducers: {
    setOtpToken: (state, action) => {
      state.otpToken = action.payload;
    },
    removeOtpToken: (state, _) => {
      state.otpToken = null;
    },
    setAccessToken: (state, action) => {
      const { accessToken } = action.payload;
      state.accessToken = accessToken;
    },
    logOut: (state, _) => {
      state.accessToken = null;
    },
  },
});

//reducer
export default authSlice.reducer;

//actions
export const { setOtpToken, removeOtpToken, setAccessToken, logOut } =
  authSlice.actions;

//selectors
export const selectOtpToken = (state) => state.auth.otpToken;
export const selectAccessToken = (state) => state.auth.accessToken;