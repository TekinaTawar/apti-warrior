import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "@/redux/apiSlice";
import counterReducer from "@/redux/slice/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
