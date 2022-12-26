import { apiSlice } from "@/redux/apiSlice";


export const authApiSlice = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/user/login/",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    register: builder.mutation({
      query: ({ username, name, email, phNumber }) => ({
        url: "/user/register/",
        method: "POST",
        body: {
          username: username,
          full_name: name,
          email: email,
          mobile: phNumber,
          mobile_extension: "+91",
        },
      }),
    }),
    verifyOtp: builder.mutation({
      query: ({ otp, otpToken }) => {
        const payload = { otp: otp, otp_token: otpToken };
        console.log("🚀 ~ file: authApiSlice.js:30 ~ payload", payload);
        return {
          url: "/user/verify-otp/",
          method: "POST",
          //get otp token from register mutation.
          body: { otp: otp, otp_token: otpToken}, //otp_token is a placeholder
        };
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useVerifyOtpMutation } =
  authApiSlice;
