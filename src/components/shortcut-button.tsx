"use client";

import type React from "react";
import Link from "next/link";

interface ShortcutButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  highlight?: string;
}

export const ShortcutButton: React.FC<ShortcutButtonProps> = ({
  href,
  children,
  className = "",
  highlight,
}) => {
  return (
    <div className="relative w-full pt-3 md:w-[260px]">
      {highlight && (
        <div className="absolute -top-0.5 right-8 z-20">
          <div className="whitespace-nowrap rounded-full border border-primary bg-white px-3 py-0.5 text-xs font-medium text-primary">
            {highlight}
          </div>
        </div>
      )}
      <Link href={href} className="block">
        <div
          className={`
            relative h-[88px] rounded-[24px] bg-white 
            shadow-[0_2px_4px_rgba(0,0,0,0.04)] transition-all 
            duration-200 
            hover:shadow-[0_4px_8px_rgba(0,0,0,0.08)] 
            ${className}
          `}
        >
          <div className="flex h-full items-center justify-between rounded-2xl border border-black/10 p-6">
            <div className="flex-grow">{children}</div>
            <div className="ml-4 flex-shrink-0">
              <span className="material-symbols-outlined text-2xl text-[#9CA3AF]">
                north_east
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ShortcutButton;
