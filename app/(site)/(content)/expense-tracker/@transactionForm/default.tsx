export default function TransactionFormPage() {
  return (
    <div className="w-full p-3 bg-white rounded-2xl">
      <h1 className="text-xl font-semibold mb-2 text-black">가계부 관리</h1>
      <p className="text-sm text-gray-500">TransactionFormPage</p>
      <ul className="text-gray-500 list-disc pl-3">
        <li>소비/지출 카테고리 관리</li>
        <li>결제수단 관리</li>
        <li>이벤트 관리</li>
      </ul>
    </div>
  );
}
