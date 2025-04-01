import AuthNav from "@/components/features/auth/auth-nav";

export default function Nav() {
  return (
    <section className="w-15 h-full">
      <div>MOCHA 가계부</div>
      <ul>
        <li>대시보드</li>
        <li>통계</li>
        <li>마이페이지</li>
        <li>설정</li>
      </ul>
      <AuthNav />
      <div>
        <button>로그인</button>
        <div>유저 정보</div>
      </div>
    </section>
  );
}
