"use client"

import { useEffect, useState, useRef } from "react"
import type { EventTooltipProps } from "@/lib/types"

export function EventTooltip({ events, isVisible, anchorElement }: EventTooltipProps) {
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const tooltipRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (anchorElement && isVisible && tooltipRef.current) {
      const rect = anchorElement.getBoundingClientRect()
      const scrollY = window.scrollY
      const scrollX = window.scrollX

      setPosition({
        top: rect.top + scrollY - window.scrollY,
        left: rect.left + scrollX + rect.width / 2 - window.scrollX,
      })
    }
  }, [anchorElement, isVisible])

  if (!isVisible || !anchorElement) return null

  return (
    <div
      ref={tooltipRef}
      className="fixed z-[100] pointer-events-none transition-opacity duration-150 opacity-100"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        transform: "translate(-50%, -100%)",
      }}
    >
      <div className="bg-white rounded-lg shadow-lg border border-border p-3 max-w-[300px]">
        <div className="space-y-2">
          {events.map((event, index) => (
            <div key={index} className="text-sm">
              <div className="font-medium text-foreground">{event.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}