import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/", request.url)); // Redirect to the root path
}

export const config = {
  matcher: '/:path*', // Match all paths
};
