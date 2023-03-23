import { NextResponse } from "next/server";

export const middleware = (request) => {
  console.log("middleware running");

  const jwt = request.cookies.get("jwt");

  // redirect to /auth/login if someone tries to access a (!/auth/*)  page without a valid jwt token
  if (!request.nextUrl.pathname.startsWith("/auth")) {
    console.log("non auth url opened");
    if (jwt === undefined) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }

  // redirect to /dashboard if someone tries to access a (/auth/*) page with a valid jwt token
  if (request.nextUrl.pathname.startsWith("/auth")) {
    console.log("auth url opened");
    if (jwt) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  // if someone goes to otp page without having a valid otp token redirect to /auth/login
  if (request.nextUrl.pathname.startsWith("/auth/otp")) {
    console.log("auth/otp opened");
    const otpToken = request.cookies.get("otpToken");
    if (!otpToken) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }
};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|favicon.ico|fonts/).*)",
  ],
};
