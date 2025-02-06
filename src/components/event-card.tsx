"use client"

import type { EventCardProps } from "../lib/types"
import { getMonthAbbreviation, getDay } from "../lib/utils"
import { useLang } from "@/contexts/dictionary-provider"

export function EventCard({ event }: EventCardProps) {
  const lang = useLang()
  const month = getMonthAbbreviation(event.start, lang)
  const day = getDay(event.start)
  const time = new Date(event.start).toLocaleTimeString(lang, { hour: '2-digit', minute: '2-digit' })

  return (
    <div className="flex gap-4 items-start p-4 border-b border-black/20">
      <div className="bg-black bg-opacity-[6%] rounded-xl p-2 text-center w-[4.5rem]">
        <div className="text-primary text-sm font-medium">{month}</div>
        <div className="text-2xl font-bold">{day}</div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-4">{event.title}</h3>
        <div className="space-y-2 text-base text-gray-600">
          {time && (
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">calendar_month</span>
              {time}
              {event.end && <span>• {event.end.toLocaleDateString(lang)}</span>}
            </div>
          )}
          <div className="flex items-center gap-2">
          <span className="material-symbols-outlined">location_on</span>
            {event.place}
          </div>
          {event.link && (
            <div className="flex items-center gap-2 text-primary w-[80%]">
              <span className="material-symbols-outlined">explore</span>
              <a href={event.link} target="_blank" rel="noopener noreferrer" className="hover:underline truncate">
                {event.link.split("://")[1]}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}