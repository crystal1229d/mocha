"use client";

import { COLOR_PALETTE } from "@/constants";
import clsx from "clsx";

interface ColorSelectorProps {
  value: string | null;
  onChange: (color: string) => void;
}

export default function ColorSelector({ value, onChange }: ColorSelectorProps) {
  return (
    <>
      <div className="flex flex-wrap gap-2 items-center">
        {COLOR_PALETTE.map((c) => (
          <button
            key={c}
            type="button"
            className={clsx(
              "w-6 h-6 rounded-full border-2",
              value === c ? "border-black" : "border-transparent"
            )}
            style={{ backgroundColor: c }}
            onClick={() => onChange(c)}
          />
        ))}

        <label className="flex items-center gap-2 text-sm text-gray-700">
          직접 선택
          <input
            type="color"
            value={value ?? "#000000"}
            onChange={(e) => onChange(e.target.value)}
            className="w-8 h-8 p-0 border-black bg-transparent"
          />
        </label>
      </div>
    </>
  );
}
