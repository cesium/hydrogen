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
      className="relative flex h-20 w-full items-center gap-3 rounded-2xl border border-black/10 p-2 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:p-3 md:h-24"
    >
      {highlight && (
        <span className="absolute -top-3.5 right-4 z-20 whitespace-nowrap rounded-full border border-primary bg-white px-2 py-1 text-xs font-semibold text-primary uppercase">
          {highlight}
        </span>
      )}
      <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden py-4 sm:py-3">
        {children}
      </div>
      <span className="material-symbols-outlined text-lg text-black/30 sm:text-2xl">
        arrow_outward
      </span>
    </Link>
  );
};

export default ShortcutButton;
