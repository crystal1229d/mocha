import { Database } from "../supabase";
import { User } from "@supabase/supabase-js";

export type Profile = Database["public"]["Tables"]["profiles"]["Row"];

export type ExtendedProfile = {
  auth: AuthInfo;
  profile: Profile | null;
};

export type AuthInfo = Pick<User, "email"> & {
  provider: User["app_metadata"]["provider"];
};
