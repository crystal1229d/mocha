"use client";

import { useEffect } from "react";
import { useTransactionCategoryFormStore } from "../stores";
import TransactionCategoryTree from "./CategoryTree";
import TransactionCategoryForm from "./CategoryForm";
import { useUserStore } from "@/stores";

export default function TransactionCategoryContainer() {
  const { fetch } = useTransactionCategoryFormStore();

  const userId = useUserStore((s) => s.userId);

  useEffect(() => {
    if (userId) {
      fetch(userId);
    }
  }, [fetch, userId]);

  if (!userId)
    return <p className="text-sm text-gray-500">로그인이 필요합니다.</p>;

  return (
    <>
      <div className="grid grid-cols-2 gap-6  p-3 bg-white rounded-2xl text-black">
        <div>
          <h2 className="text-lg font-bold">카테고리 목록</h2>
          <TransactionCategoryTree />
        </div>
        <div>
          <h2 className="text-lg font-bold">카테고리 생성/수정</h2>
          <TransactionCategoryForm userId={userId} />
        </div>
      </div>
    </>
  );
}
