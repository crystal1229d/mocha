import { Database } from "@/types/supabase";

export type TransactionCategory =
  Database["public"]["Tables"]["transaction_categories"]["Row"];

export type TransactionCategoryTreeNode = TransactionCategory & {
  children: TransactionCategoryTreeNode[];
};

export type NewTransactionCatgory =
  Database["public"]["Tables"]["transaction_categories"]["Insert"];

export type TransactionCategoryType =
  | "income"
  | "expense"
  | "saving"
  | "investment";
export const TRANSACTION_CATEGORY_TYPE_OPTIONS: {
  value: TransactionCategoryType;
  label: string;
}[] = [
  { value: "expense", label: "지출" },
  { value: "income", label: "수입" },
  { value: "saving", label: "저축" },
  { value: "investment", label: "투자" },
];
