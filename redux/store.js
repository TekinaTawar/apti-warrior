import { configureStore } from "@reduxjs/toolkit";
import { aptiApiSlice } from "@/redux/aptiApiSlice";

import authReducer from "@/redux/auth/authSlice";
import courseReducer from "@/redux/course/courseSlice";
import uiReducer from "@/redux/UI/uiSlice";


export const store = configureStore({
  reducer: {
    [aptiApiSlice.reducerPath]: aptiApiSlice.reducer,
    auth: authReducer,
    course: courseReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(aptiApiSlice.middleware),
  devTools: true,
});
