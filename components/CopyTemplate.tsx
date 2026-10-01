"use client";

import { useState } from "react";
import { Icon } from "./icons";

/** A document template shown as preformatted text, with a copy button. */
export default function CopyTemplate({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };
  return (
    <div className="mx-auto max-w-[78ch]">
      <div className="card overflow-hidden">
        <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-3">
          <span className="text-[12.5px] font-bold uppercase tracking-[0.14em] text-subtle">Template</span>
          <button
            type="button"
            onClick={copy}
            className="inline-flex min-h-[40px] items-center gap-2 rounded-full px-4 text-[13.5px] font-semibold text-accent ring-1 ring-inset ring-line-strong transition-colors hover:ring-line-accent"
          >
            <Icon name={copied ? "check" : "folder"} className="h-3.5 w-3.5" />
            {copied ? "Copied" : "Copy text"}
          </button>
        </div>
        <pre className="whitespace-pre-wrap break-words px-5 py-5 font-sans text-[15px] leading-[1.75] text-body [text-transform:none]">{text}</pre>
      </div>
    </div>
  );
}
