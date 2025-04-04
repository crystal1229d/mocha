"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const pageMap: Record<string, { parent: string; label: string; href: string }> =
  {
    "/dashboard": { parent: "대시보드", label: "홈", href: "/dashboard" },
    "/expense-tracker": {
      parent: "가계부",
      label: "거래 카테고리 관리",
      href: "/expense-tracker",
    },
    "/statistics": { parent: "통계", label: "통계 보기", href: "/statistics" },
    "/stocks": { parent: "주식", label: "주식 정보", href: "/stocks" },
    "/profile": { parent: "마이페이지", label: "내 정보", href: "/profile" },
    "/settings": { parent: "설정", label: "환경 설정", href: "/settings" },
  };

export default function SubNav() {
  const pathname = usePathname();
  const router = useRouter();

  const current = Object.entries(pageMap).find(([path]) =>
    pathname?.startsWith(path)
  );

  if (!current) return null;

  const [, { parent, label, href }] = current;

  return (
    <div className="flex items-center gap-2 px-4 py-3 border-b bg-white dark:bg-gray-900 dark:border-gray-800 text-sm">
      <button
        onClick={() => router.back()}
        className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
      >
        {`<`}
      </button>
      <Link
        href={href}
        className="text-gray-700 hover:underline dark:text-gray-200"
      >
        {parent}
      </Link>
      <span className="text-gray-400">/</span>
      <span className="text-gray-800 font-medium dark:text-white">{label}</span>
    </div>
  );
}
