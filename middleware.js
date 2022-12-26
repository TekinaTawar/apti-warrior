import { NextResponse } from "next/server";

export const middleware = (request) => {
  const { cookies } = request;
  const jwt = cookies.JWT;
  const url = request.url;
  const url2 = request.nextUrl.clone();
  url2.pathname = "/auth/login";
  
  
  // for all page other then /auth/* check if person is authenticated if not redirect to /auth/login
  if (url.includes("/dashboard")) {
    if (jwt === undefined) {
      console.log("this is running");
      return NextResponse.redirect(url2);
    }

    // if someone goes to otp page without having a valid otp token redirect to /auth/login or else make otp a component.

    // for all page of type /auth/* check if person is authenticated if yes redirect to /dashboard
    if (url.includes("/auth")) {
      if (jwt) {
        return NextResponse.redirect("/dashboard");
      }
    }
  }
};
