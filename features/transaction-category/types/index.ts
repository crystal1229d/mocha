import { Database } from "@/types/supabase";

export type TransactionCategories =
  Database["public"]["Tables"]["transaction_categories"]["Row"];
