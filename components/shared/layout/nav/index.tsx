"use client";

import { useState } from "react";
import { User } from "@supabase/supabase-js";
import NavClient from "./NavClient";
import { clsx } from "clsx";

interface Props {
  user?: User | null;
}

export default function Nav({ user }: Props) {
  const [open, setOpen] = useState(true);

  return (
    <aside
      className={clsx(
        "h-screen bg-gray-100 dark:bg-gray-900 p-4 flex flex-col transition-all duration-300",
        open ? "w-60" : "w-16"
      )}
    >
      <div className="text-xl font-bold mb-6 text-black dark:text-white text-center">
        {open ? "MOCHA 가계부" : "M"}
      </div>

      <NavClient user={user} open={open} toggleOpen={() => setOpen(!open)} />
    </aside>
  );
}
