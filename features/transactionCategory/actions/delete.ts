"use server";

import { createServerSideClient } from "@/lib/supabase/supabase";
import { revalidateTag } from "next/cache";

export async function softDeleteCategory(id: string) {
  const supabase = await createServerSideClient();

  const { error } = await supabase
    .from("transaction_categories")
    .update({ deleted_at: new Date().toISOString() })
    .eq("id", id);

  if (error) {
    console.error("Delete Category Error:", error.message);
    throw new Error(error.message);
  }

  revalidateTag("transaction-categories");
  return { success: true };
}
