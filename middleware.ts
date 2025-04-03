import { NextResponse, type NextRequest } from "next/server";
import { createServerSideClientMiddleware } from "./lib/supabase/supabase";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = await createServerSideClientMiddleware(req, res);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isLandingPage = req.nextUrl.pathname === "/";
  const isDashboardPage = req.nextUrl.pathname.startsWith("/dashboard");
  const isAuthPage = req.nextUrl.pathname.startsWith("/auth");

  if (user && isLandingPage) {
    // 로그인 사용자가 루트로 접근 시 대시보드로 리다이렉트
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (!user && isDashboardPage) {
    // 비로그인 사용자가 대시보드 접근 시 루트로 리다이렉트
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (user && isAuthPage) {
    // 로그인 사용자가 인증 페이지로 접근 시 대시보드로 리다이렉트
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/", "/auth/:path*", "/dashboard/:path*"],
};
