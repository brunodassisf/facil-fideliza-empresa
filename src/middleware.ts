"user server";

import { NextResponse } from "next/server";
import { NextRequestWithAuth, withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req: NextRequestWithAuth) {
    // console.log(req.nextauth.token);
    // if (
    //   req.nextUrl.pathname.startsWith("/cliente") &&
    //   req.nextauth.token?.role !== "user"
    // ) {
    //   return NextResponse.redirect(new URL("/admin", req.url));
    // } else if (
    //   req.nextUrl.pathname.startsWith("/admin") &&
    //   req.nextauth.token?.role !== "admin"
    // ) {
    //   return NextResponse.redirect(new URL("/cliente", req.url));
    // }
  },
  {
    pages: {
      signIn: "/",
    },
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = { matcher: ["/loja", "/cadastrar-loja"] };
