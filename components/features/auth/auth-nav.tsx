"use client";

import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/client/supabase";
import { User } from "@supabase/supabase-js";
import Image from "next/image";

interface Props {
  user?: User | null;
}

export default function AuthNav({ user }: Props) {
  const supabase = createSupabaseBrowserClient();
  const router = useRouter();

  const isLoggedIn = !!user?.email;

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: process.env.NEXT_PUBLIC_AUTH_REDIREC_TO },
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <div className="mt-auto flex flex-col items-center gap-2">
      {isLoggedIn ? (
        <>
          <button
            onClick={handleLogout}
            className="text-sm text-red-500 hover:underline"
          >
            로그아웃
          </button>
          {user.user_metadata?.avatar_url && (
            <Image
              src={user.user_metadata.avatar_url}
              alt="Avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
          )}
        </>
      ) : (
        <button
          onClick={handleGoogleLogin}
          className="text-sm text-blue-500 hover:underline"
        >
          Google 로그인
        </button>
      )}
    </div>
  );
}
