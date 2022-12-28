import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "@/redux/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://617f-3-6-89-29.in.ngrok.io/v1",
  credentials: "include", //sends back http only secure cookie
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.accessToken;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.originalStatus === 403) {
    // put condition for expriration of access token
    console.log("sending refresh  token");
    // send refresh token to get new access token
    const refreshResult = await baseQuery("/refresh", api, extraOptions);
    console.log(refreshResult);
    if (refreshResult?.data) {
      const user = api.getState().auth.user;
      //store the new token
      api.dispatch(setCredentials(...refreshResult.data, user));
      //retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (_) => ({}),
});
