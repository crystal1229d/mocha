import { getUser } from "@/actions/auth/user.action";
import { TransactionCategory } from "@/features/transactionCategory/types";
import { fetchCategories } from "@/features/transactionCategory/actions";
import TransactionCategoryForm from "@/features/transactionCategory/components/CategoryForm";
import TransactionCategoryTree from "@/features/transactionCategory/components/CategoryTree";

export default async function TransactionCategoryManagerPage() {
  const user = await getUser({ serverComponent: true });
  if (!user) throw new Error("User not found");

  const categories: TransactionCategory[] = await fetchCategories(user.id);

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-6  p-3 bg-white rounded-2xl text-black">
        <div>
          <h2 className="text-lg font-bold">카테고리 목록</h2>
          <TransactionCategoryTree categories={categories} />
        </div>
        <div>
          <h2 className="text-lg font-bold">카테고리 생성/수정</h2>
          <TransactionCategoryForm categories={categories} userId={user.id} />
        </div>
      </div>
    </div>
  );
}
