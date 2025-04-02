import { User } from "@supabase/supabase-js";
import AuthNav from "@/components/features/auth/auth-nav";
import Link from "next/link";

interface Props {
  user?: User | null;
}

export default function Nav({ user }: Props) {
  return (
    <section className="w-30 h-full bg-gray-200">
      <div>MOCHA 가계부</div>
      <ul>
        <li>
          <Link href="/dashboard">대시보드</Link>
        </li>
        <li>
          <Link href="/tracker">가계부</Link>
        </li>
        <li>
          <Link href="/statistics">통계</Link>
        </li>
        <li>
          <Link href="/Stocks">주식</Link>
        </li>
        <li>
          <Link href="/profile">마이페이지</Link>
        </li>
        <li>
          <Link href="/settings">설정</Link>
        </li>
      </ul>

      <AuthNav user={user} />
    </section>
  );
}
