export default function TransactionFormPage({
  params,
}: {
  params: { userId: string };
}) {
  return (
    <div className="w-full overflow-y-auto">
      <h1 className="text-2xl font-bold">가계부 관리</h1>
      <p>TransactionFormPage</p>
      <p>{params.userId}</p>
    </div>
  );
}
