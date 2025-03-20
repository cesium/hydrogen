"use client";

import type React from "react";
import Link from "next/link";

interface ShortcutButtonProps {
  href: string;
  children: React.ReactNode;
  highlight?: string;
}

export const ShortcutButton: React.FC<ShortcutButtonProps> = ({
  href,
  children,
  highlight,
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex h-[80px] w-full items-center gap-4 rounded-2xl border border-black/10 px-2 shadow-[0_2px_4px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] md:h-[90px] md:px-6"
    >
      {highlight && (
        <span className="absolute -top-3.5 right-5 z-20 whitespace-nowrap rounded-full border border-primary bg-white px-2 py-1 text-xs font-semibold text-primary">
          {highlight}
        </span>
      )}
      <div className="w-full truncate">{children}</div>
      <span className="material-symbols-outlined text-2xl text-black/30">
        arrow_outward
      </span>
    </Link>
  );
};

export default ShortcutButton;
