"use server";

import { createServerSideClient } from "@/lib/supabase/supabase";
import { TablesInsert } from "@/types/supabase";
import { revalidateTag } from "next/cache";

export async function insertCategory(
  category: TablesInsert<"transaction_categories">
) {
  const supabase = await createServerSideClient();

  const { data, error } = await supabase
    .from("transaction_categories")
    .insert(category)
    .select()
    .single();

  if (error) {
    console.error("Insert Category Error:", error.message);
    throw new Error(error.message);
  }

  revalidateTag("transaction-categories");
  return data;
}
