"use client"

import type React from "react"
import Link from "next/link"

interface ShortcutButtonProps {
  href: string
  children: React.ReactNode
  className?: string
  highlight?: string
}

export const ShortcutButton: React.FC<ShortcutButtonProps> = ({ href, children, className = "", highlight }) => {
  return (
    <div className="relative pt-3 w-full md:w-[260px]">
      {highlight && (
        <div className="absolute -top-0.5 right-8 z-20">
          <div className="px-3 py-0.5 text-xs font-medium text-primary bg-white border border-primary rounded-full whitespace-nowrap">
            {highlight}
          </div>
        </div>
      )}
      <Link href={href} className="block">
        <div
          className={`
            relative bg-white rounded-[24px] h-[88px] 
            transition-all duration-200 
            shadow-[0_2px_4px_rgba(0,0,0,0.04)] 
            hover:shadow-[0_4px_8px_rgba(0,0,0,0.08)] 
            ${className}
          `}
        >
          <div className="flex items-center justify-between h-full p-6 border border-black/10 rounded-2xl">
            <div className="flex-grow">{children}</div>
            <div className="flex-shrink-0 ml-4">
              <span className="material-symbols-outlined text-[#9CA3AF] text-2xl">north_east</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ShortcutButton