import type { Metadata } from "next";
import "../../globals.css";
import { getUser } from "@/actions/auth/user.action";
import Nav from "@/components/shared/layout/nav/index";

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
        <Nav user={user} />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </body>
    </html>
  );
}
