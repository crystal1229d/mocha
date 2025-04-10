"use client";

import { create } from "zustand";
import {
  NewTransactionCatgory,
  TransactionCategory,
} from "@/features/transactionCategory/types";
import {
  updateCategory,
  insertCategory,
  softDeleteCategory,
} from "@/features/transactionCategory/actions";

type CategoryStore = {
  selected: TransactionCategory | null;
  select: (cat: TransactionCategory | null) => void;
  add: (cat: NewTransactionCatgory) => Promise<TransactionCategory>;
  update: (
    id: string,
    update: Partial<TransactionCategory>
  ) => Promise<TransactionCategory>;
  remove: (id: string) => Promise<void>;
};

export const useTransactionCategoryFormStore = create<CategoryStore>((set) => ({
  selected: null,

  select: (cat) => set({ selected: cat }),

  add: async (cat: NewTransactionCatgory) => {
    const newCat = await insertCategory(cat);
    set({ selected: null });
    return newCat;
  },

  update: async (id, update) => {
    const updated = await updateCategory(id, update);
    set({ selected: null });
    return updated;
  },

  remove: async (id) => {
    await softDeleteCategory(id);
    set({ selected: null });
  },
}));
