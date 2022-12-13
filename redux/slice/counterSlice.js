import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrease: (state) => {
      state.count -= 1;
    }
  },
});

export const { increment, decrease } = counterSlice.actions;

export default counterSlice.reducer;