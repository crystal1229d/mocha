import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="bg-white text-gray-900">
      <header className="text-center py-24 px-6">
        <h1 className="text-4xl font-bold mb-4">
          스마트한 지출 관리를 시작해보세요
        </h1>
        <p className="text-lg text-gray-600">
          수입과 지출을 한눈에 파악하고, 당신만의 소비 리포트를 받아보세요.
        </p>
        <Link
          href="/auth"
          className="inline-block bg-blue-600 text-white text-lg px-8 py-4 rounded-full shadow-md hover:bg-blue-700 transition"
        >
          시작하기
        </Link>
      </header>

      <section className="max-w-4xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            1. 간편한 수입/지출 기록
          </h2>
          <p className="text-gray-600">
            몇 번의 클릭으로 하루 소비 내역을 기록할 수 있어요.
          </p>
        </div>
        <Image
          src="/images/calendar.png"
          alt="간편한 기록"
          width={242}
          height={242}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8 items-center">
        <Image
          src="/images/diagram.png"
          alt="소비 통계"
          width={242}
          height={242}
        />
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            2. 통계로 보는 소비 습관
          </h2>
          <p className="text-gray-600">
            소비 카테고리와 월별 지출을 시각적으로 확인해보세요.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            3. 자동 분류와 AI 리포트
          </h2>
          <p className="text-gray-600">
            입력만 하면 AI가 알아서 카테고리를 정리하고 리포트를 만들어줘요.
          </p>
        </div>
        <Image
          src="/images/dashboard.png"
          alt="AI 리포트"
          width={242}
          height={242}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8 items-center">
        <Image
          src="/images/rocket.png"
          alt="데이터 백업"
          width={242}
          height={242}
        />
        <div>
          <h2 className="text-2xl font-semibold mb-2">4. 안전한 데이터 관리</h2>
          <p className="text-gray-600">
            클라우드에 안전하게 저장되며, 언제든지 엑셀로 내보낼 수 있어요.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="w-full bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">지금 바로 시작해보세요!</h2>
        <Link
          href="/auth"
          className="inline-block bg-blue-600 text-white text-lg px-8 py-4 rounded-full shadow-md hover:bg-blue-700 transition"
        >
          시작하기
        </Link>
      </div>
    </main>
  );
}
