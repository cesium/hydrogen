"use client"

import { useState } from "react"
import { useSwipeable } from "react-swipeable"
import type { CalendarProps, Event } from "../lib/types"
import { getMonthDays, isSameDay, isWithinRange } from "../lib/utils"
import { useDictionary, useLang } from "@/contexts/dictionary-provider"
import { EventTooltip } from "./event-tooltip"

export function Calendar({ events = [], onDateSelect, selectedDate, className }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null)
  const [tooltipAnchor, setTooltipAnchor] = useState<HTMLElement | null>(null)

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNextMonth(),
    onSwipedRight: () => handlePreviousMonth(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  })

  const handlePreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const handleDateSelect = (date: Date) => {
    if (hasEvent(date)) {
      onDateSelect?.(date)
    }
  }

  const dict = useDictionary()
  const lang = useLang()
  const days = getMonthDays(currentDate)
  const weekDays = dict.events.weekDays.split(", ")

  const hasEvent = (date: Date) => {
    return events.some((event: Event) => {
      const eventStart = new Date(event.start)
      const eventEnd = new Date(event.end)
      return isWithinRange(date, eventStart, eventEnd)
    })
  }

  const getEventsForDate = (date: Date) => {
    return events.filter((event: Event) => {
      const eventStart = new Date(event.start)
      const eventEnd = new Date(event.end)
      return isWithinRange(date, eventStart, eventEnd)
    })
  }

  return (
    <div className={`w-full ${className}`}>
      <div {...handlers} className="select-none">
        <div className="flex items-center justify-center pb-4 space-x-3">
          <button onClick={handlePreviousMonth} className="text-primary hover:bg-gray-50">
            <span className="material-symbols-outlined text-3xl">arrow_back</span>
          </button>
          <h2 className="text-2xl font-title font-medium">
            {currentDate.toLocaleString(lang, { month: "long" }).charAt(0).toUpperCase() +
              currentDate.toLocaleString(lang, { month: "long" }).slice(1)}{" "}
            {currentDate.getFullYear()}
          </h2>
          <button onClick={handleNextMonth} className="text-primary hover:bg-gray-50">
            <span className="material-symbols-outlined text-3xl">arrow_forward</span>
          </button>
        </div>

        <div>
          <div className="grid grid-cols-7 mb-2">
            {weekDays.map((day) => (
              <div key={day} className="text-center text-sm text-gray-500">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-y-2">
            {days.map((date, index) => {
              const isCurrentMonth = date.getMonth() === currentDate.getMonth()
              const isSelected = selectedDate && isSameDay(selectedDate, date)

              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center"
                  onMouseEnter={(e) => {
                    if (hasEvent(date)) {
                      setHoveredDate(date)
                      setTooltipAnchor(e.currentTarget)
                    }
                  }}
                  onMouseLeave={() => {
                    setHoveredDate(null)
                    setTooltipAnchor(null)
                  }}
                >
                  <button
                    onClick={() => handleDateSelect(date)}
                    className={`
                  text-center w-10 h-10 flex items-center justify-center rounded-full
                  ${!isCurrentMonth ? "text-gray-300" : ""}
                  ${hasEvent(date) && isCurrentMonth ? "cursor-pointer hover:bg-gray-100" : "cursor-default"}
                  ${isSelected ? "bg-primary text-white hover:bg-primary" : ""}
                `}
                    disabled={!hasEvent(date) || !isCurrentMonth}
                  >
                    {date.getDate()}
                  </button>
                  {hasEvent(date) && !isSelected && isCurrentMonth && (
                    <span className="absolute bottom-0.5 w-1.5 h-1.5 rounded-full bg-primary" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <EventTooltip
        events={hoveredDate ? getEventsForDate(hoveredDate) : []}
        isVisible={!!hoveredDate}
        anchorElement={tooltipAnchor}
      />
    </div>
  )
}