import type { Metadata } from "next";
import "../../globals.css";
import { getUser } from "@/actions/auth/user.action";
import Nav from "@/components/shared/layout/nav/index";
import AuthObserver from "@/components/shared/AuthObserver";
import SubNav from "@/components/shared/layout/sub-nav";

export const metadata: Metadata = {
  title: "MOCHA 가계부",
  description: "개인 가계부 웹앱",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser({ serverComponent: true });

  return (
    <html lang="ko">
      <body className="flex h-screen">
        <AuthObserver />
        <Nav user={user} />
        <div className="flex-1 flex flex-col bg-gray-300">
          <SubNav />
          <main className="flex-1 overflow-y-auto p-4">
            <div className="max-w-6xl mx-auto">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
