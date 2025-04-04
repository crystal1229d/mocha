import TransactionCategoryComponent from "@/features/transaction-category/components/category-page";

export default function TransactionCategoryFormPage({
  params,
}: {
  params: { userId: string };
}) {
  return (
    <div className="w-full overflow-y-auto">
      <h1 className="text-2xl font-bold">카테고리 관리</h1>
      <TransactionCategoryComponent userId={params.userId} />
    </div>
  );
}
