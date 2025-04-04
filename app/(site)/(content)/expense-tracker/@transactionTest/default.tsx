export default function TransactionTestPage({
  params,
}: {
  params: { userId: string };
}) {
  return (
    <div className="w-full overflow-y-auto">
      <h1 className="text-2xl font-bold">가계부 todo list</h1>
      <p>{params.userId}</p>
      <ul>
        <li>지출/수입 카테고리</li>
        <li>결제수단</li>
        <li>달력</li>
        <li>일자 별 지출/수입 테이블</li>
        <li>월별 차트</li>
      </ul>
    </div>
  );
}
