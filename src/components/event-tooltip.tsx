"use client";

import { useEffect, useState, useRef } from "react";
import type { EventTooltipProps } from "@/lib/types";

export function EventTooltip({
  events,
  isVisible,
  anchorElement,
}: EventTooltipProps) {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isRendered, setIsRendered] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) {
      setIsRendered(true);
    } else {
      const timer = setTimeout(() => {
        setIsRendered(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  useEffect(() => {
    if (!anchorElement || !isRendered) return;

    const updatePosition = () => {
      if (!anchorElement || !tooltipRef.current) return;

      const rect = anchorElement.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      let top = rect.top - tooltipRect.height - 5;
      let left = rect.left + rect.width / 2;

      if (top < 10) {
        top = rect.bottom + 10;
      }

      const rightEdge = left + tooltipRect.width / 2;
      const leftEdge = left - tooltipRect.width / 2;

      if (rightEdge > window.innerWidth - 10) {
        left = window.innerWidth - 10 - tooltipRect.width / 2;
      }

      if (leftEdge < 10) {
        left = tooltipRect.width / 2 + 10;
      }

      setPosition({ top, left });
    };

    updatePosition();

    const handleScroll = () => updatePosition();
    const handleResize = () => updatePosition();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [anchorElement, isRendered]);

  if (!isRendered) return null;

  return (
    <div
      ref={tooltipRef}
      className={`pointer-events-none fixed z-[100] transition-all duration-200 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
      }`}
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        transform: "translate(-50%, 0)",
      }}
    >
      <div className="relative">
        <div
          className={`relative max-w-[300px] rounded-lg border border-black/10 bg-white/50 p-4 shadow-lg backdrop-blur-lg`}
        >
          <div className="space-y-3">
            {events.map((event, index) => (
              <div key={index} className="text-sm">
                <div className="font-medium text-primary">{event.title}</div>
                {event.place && (
                  <div className="mt-1 flex items-center gap-1 text-xs text-black/60">
                    <span className="material-symbols-outlined text-sm">
                      location_on
                    </span>
                    {event.place}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
