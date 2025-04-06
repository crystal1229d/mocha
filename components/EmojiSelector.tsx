"use client";

import { useState } from "react";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

interface Props {
  value: string | null;
  onChange: (emoji: string) => void;
}

export default function EmojiSelector({ value, onChange }: Props) {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={() => setShowPicker((prev) => !prev)}
        className="text-xl border px-2 py-1 rounded-full"
      >
        {value || "🍀"}
      </button>
      {showPicker && (
        <div className="absolute z-50 mt-2">
          <EmojiPicker
            onEmojiClick={(emojiData: EmojiClickData) => {
              onChange(emojiData.emoji);
              setShowPicker(false);
            }}
            autoFocusSearch={false}
          />
        </div>
      )}
    </div>
  );
}
