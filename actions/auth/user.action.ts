import { createServerSideClient } from "@/lib/supabase";

export const getUser = async ({ serverComponent = false }) => {
  const supabase = await createServerSideClient(serverComponent);
  const user = await supabase.auth.getUser();
  return user?.data?.user;
};

export const getProfileById = async ({
  serverComponent = false,
  userId = "",
}) => {
  const supabase = await createServerSideClient(serverComponent);

  const { data: authUser } = await supabase.auth.getUser();
  if (!authUser?.user) return null;

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  return {
    auth: {
      email: authUser.user.email,
      provider: authUser.user.app_metadata?.provider,
    },
    profile: profile ?? null,
  };
};
