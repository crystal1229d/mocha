"use server";

import { createServerSideClient } from "@/lib/supabase/supabase";

export async function fetchCategories(userId: string) {
  const supabase = await createServerSideClient();

  const { data, error } = await supabase
    .from("transaction_categories")
    .select("*")
    .eq("user_id", userId)
    .is("deleted_at", null)
    .order("depth", { ascending: true });

  if (error) {
    console.error("Fetch Categories Error:", error.message);
    throw new Error(error.message);
  }

  return data;
}
