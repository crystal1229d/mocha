"use client";

import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";
import { User } from "@supabase/supabase-js";
import AuthNav from "@/components/features/auth/auth-nav";

interface Props {
  user?: User | null;
  open: boolean;
  toggleOpen: () => void;
}

const routes = [
  { href: "/dashboard", label: "대시보드" },
  { href: "/expense-tracker", label: "가계부" },
  { href: "/statistics", label: "통계" },
  { href: "/stocks", label: "주식" },
  { href: "/profile", label: "마이페이지" },
  { href: "/settings", label: "설정" },
];

export default function NavClient({ user, open, toggleOpen }: Props) {
  return (
    <nav className="flex flex-col justify-between h-full">
      <div className="flex flex-col gap-2">
        <button
          onClick={toggleOpen}
          className="self-end mb-4 text-xs text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
        >
          {open ? "←" : "→"}
        </button>

        <ul className="space-y-1">
          {routes.map((route) => (
            <li key={route.href}>
              <Link
                href={route.href}
                className={clsx(
                  "block py-2 px-3 rounded text-sm font-medium transition-colors",
                  "text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700",
                  !open && "text-center"
                )}
              >
                {open ? route.label : route.label[0]}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-center gap-2 mt-4">
        {user?.user_metadata?.avatar_img && (
          <Image
            src={user.user_metadata.avatar_img}
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full border border-gray-300 dark:border-white"
          />
        )}
        <AuthNav user={user} />
      </div>
    </nav>
  );
}
