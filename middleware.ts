import { NextResponse, type NextRequest } from "next/server";
import { createServerSideClientMiddleware } from "./lib/supabase/supabase";

const protectedRoutes = ["/dashboard", "/expense-tracker"];
const authPages = ["/auth"];

function isProtectedRoute(pathname: string) {
  return protectedRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );
}

function isAuthPage(pathname: string) {
  return authPages.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );
}

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = await createServerSideClientMiddleware(req, res);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = req.nextUrl;
  const isLandingPage = req.nextUrl.pathname === "/";

  if (user && (isLandingPage || isAuthPage(pathname))) {
    // 로그인 사용자가 랜딩&인증 페이지 접근 시 대시보드로 리다이렉트
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (!user && isProtectedRoute(pathname)) {
    // 비로그인 사용자가 접근 시 랜딩페이지로 리다이렉트
    return NextResponse.redirect(new URL("/", req.url));
  }

  return res;
}

const matcher = [
  "/",
  ...protectedRoutes.map((r) => `${r}/:path*`),
  ...authPages.map((r) => `${r}/:path*`),
];
export const config = {
  matcher,
};
