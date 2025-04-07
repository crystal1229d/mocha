"use client";

import { create } from "zustand";
import {
  NewTransactionCatgory,
  TransactionCategory,
} from "@/features/transactionCategory/types";
import {
  fetchCategories,
  updateCategory,
  insertCategory,
  softDeleteCategory,
} from "@/features/transactionCategory/actions";

type CategoryStore = {
  categories: TransactionCategory[];
  selected: TransactionCategory | null;
  fetch: (userId: string) => Promise<void>;
  select: (cat: TransactionCategory | null) => void;
  add: (cat: NewTransactionCatgory) => Promise<void>;
  update: (id: string, update: Partial<TransactionCategory>) => Promise<void>;
  remove: (id: string) => Promise<void>;
};

export const useTransactionCategoryFormStore = create<CategoryStore>((set) => ({
  categories: [],
  selected: null,

  fetch: async (userId) => {
    const data = await fetchCategories(userId);
    set({ categories: data });
  },

  select: (cat) => set({ selected: cat }),

  add: async (cat: NewTransactionCatgory) => {
    const newCat = await insertCategory(cat);
    set((s) => ({
      categories: [...s.categories, newCat],
      selected: null,
    }));
  },

  update: async (id, update) => {
    const updated = await updateCategory(id, update);
    set((s) => ({
      categories: s.categories.map((c) => (c.id === id ? updated : c)),
      selected: null,
    }));
  },

  remove: async (id) => {
    await softDeleteCategory(id);
    set((s) => ({
      categories: s.categories.filter((c) => c.id !== id),
      selected: null,
    }));
  },
}));
