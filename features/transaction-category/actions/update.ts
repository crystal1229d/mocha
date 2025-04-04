"use server";

import { createServerSideClient } from "@/lib/supabase/supabase";
import { TablesUpdate } from "@/types/supabase";

export async function updateCategory(
  id: string,
  update: TablesUpdate<"transaction_categories">
) {
  const supabase = await createServerSideClient();

  const { data, error } = await supabase
    .from("transaction_categories")
    .update(update)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Update Category Error:", error.message);
    throw new Error(error.message);
  }

  return data;
}
