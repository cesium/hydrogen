"use client"

import { useState } from "react"
import { useSwipeable } from "react-swipeable"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { CalendarProps, Event } from "../lib/types"
import { getMonthDays, isSameDay, isWithinRange } from "../lib/utils"

export function Calendar({ events = [], onDateSelect, onEventClick, className }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

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
    setSelectedDate(date)
    onDateSelect?.(date)
  }

  const days = getMonthDays(currentDate)
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]

  return (
    <div className={`w-full ${className}`}>
      <div {...handlers} className="select-none">
        <div className="flex items-center justify-center pb-4 space-x-2">
          <button onClick={handlePreviousMonth} className="text-orange-500 hover:bg-gray-50">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <h2 className="text-xl">{currentDate.toLocaleString("pt-BR", { month: "long", year: "numeric" })}</h2>
          <button onClick={handleNextMonth} className="text-orange-500 hover:bg-gray-50">
            <ChevronRight className="h-6 w-6" />
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
              const hasEvent = events.some((event: Event) => {
                const eventDate = new Date(event.startDate)
                if (event.endDate) {
                  return isWithinRange(date, eventDate, new Date(event.endDate))
                }
                return isSameDay(eventDate, date)
              })

              return (
                <button
                  key={index}
                  onClick={() => handleDateSelect(date)}
                  className="relative flex flex-col items-center"
                >
                  <span
                    className={`text-center w-10 h-10 flex items-center justify-center rounded-full
                    ${!isCurrentMonth ? "text-gray-400" : ""}
                    hover:bg-gray-50`}
                  >
                    {date.getDate()}
                  </span>
                  {hasEvent && <span className="absolute bottom-0.5 w-1.5 h-1.5 rounded-full bg-orange-500" />}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}