"use client";

import { createSupabaseBrowserClient } from "@/lib/client/supabase";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

interface Props {
  user?: User | null;
}

export default function AuthNav({ user }: Props) {
  const isLoggedIn = !!user?.email;
  const supabase = createSupabaseBrowserClient();
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: process.env.NEXT_PUBLIC_AUTH_REDIREC_TO,
      },
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  return (
    <div className="w-40 h-full">
      <div onClick={goHome}>Home</div>
      {isLoggedIn ? (
        <div onClick={handleLogout} className="cursor-pointer">
          Logout
        </div>
      ) : (
        <div onClick={handleGoogleLogin} className="cursor-pointer">
          Login with google
        </div>
      )}
    </div>
  );
}
