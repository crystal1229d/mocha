"use client";

import { useState } from "react";
import {
  TRANSACTION_CATEGORY_TYPE_OPTIONS,
  TransactionCategoryType,
} from "../types";
import { useTransactionCategoryFormStore } from "../stores";

export default function TransactionCategoryForm({
  userId,
}: {
  userId: string;
}) {
  const { selected, add, update, categories } =
    useTransactionCategoryFormStore();
  const [name, setName] = useState(selected?.name ?? "");
  const [type, setType] = useState<TransactionCategoryType>(() => {
    return selected?.type === "income" || selected?.type === "expense"
      ? selected.type
      : "expense";
  });

  const [parentId, setParentId] = useState<string | null>(
    selected?.parent_id ?? null
  );

  const isEditing = !!selected?.id;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newCategory = {
      user_id: userId,
      name,
      type,
      parent_id: parentId,
      depth: parentId
        ? (categories.find((c) => c.id === parentId)?.depth ?? 0) + 1
        : 0,
      root_id: parentId
        ? categories.find((c) => c.id === parentId)?.root_id ?? parentId
        : null,
      full_path: parentId
        ? [
            ...(categories.find((c) => c.id === parentId)?.full_path ?? []),
            name,
          ]
        : [name],
      color: null,
      icon: null,
    };

    if (isEditing && selected?.id) {
      await update(selected.id, newCategory);
    } else {
      await add(newCategory);
    }

    setName("");
    setType("expense");
    setParentId(null);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름"
        required
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value as TransactionCategoryType)}
      >
        {TRANSACTION_CATEGORY_TYPE_OPTIONS.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <select
        value={parentId ?? ""}
        onChange={(e) => setParentId(e.target.value || null)}
      >
        <option value="">상위 카테고리 없음</option>
        {categories
          .filter((c) => c.depth < 2)
          .map((c) => (
            <option key={c.id} value={c.id}>
              {c.full_path.join(" > ")}
            </option>
          ))}
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        {isEditing ? "수정하기" : "추가하기"}
      </button>
    </form>
  );
}
