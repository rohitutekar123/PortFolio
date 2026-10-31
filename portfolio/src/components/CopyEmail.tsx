"use client";

import { useState } from "react";

// Copy button for the email shown in the Events list. Falls back to selecting the text when the clipboard is blocked.
export default function CopyEmail({ email, targetId }: { email: string; targetId: string }) {
  const [note, setNote] = useState("");

  const select = () => {
    const el = document.getElementById(targetId);
    if (!el) return;
    const range = document.createRange();
    range.selectNodeContents(el);
    const sel = window.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(range);
    setNote("Selected. Press Ctrl/Cmd+C to copy.");
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setNote("Copied to clipboard.");
    } catch {
      select();
    }
  };

  return (
    <>
      <button className="btn primary" type="button" onClick={copy}>
        Copy email
      </button>
      <span id="copy-note" role="status">
        {note}
      </span>
    </>
  );
}
