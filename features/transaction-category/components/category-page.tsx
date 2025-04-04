"use client";

import { useEffect } from "react";
import { useTransactionCategoryFormStore } from "../stores";
import TransactionCategoryTree from "./category-tree";
import TransactionCategoryForm from "./category-form";

export default function TransactionCategoryComponent({
  userId,
}: {
  userId: string;
}) {
  const { fetch } = useTransactionCategoryFormStore();

  useEffect(() => {
    fetch(userId);
  }, [fetch, userId]);

  return (
    <div className="grid grid-cols-2 gap-6">
      <div>
        <h2 className="text-lg font-bold">카테고리 목록</h2>
        <TransactionCategoryTree />
      </div>
      <div>
        <h2 className="text-lg font-bold">카테고리 생성/수정</h2>
        <TransactionCategoryForm userId={userId} />
      </div>
    </div>
  );
}
