"use server";

import { createServerSideClient } from "@/lib/supabase/supabase";

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

  return { success: true };
}
