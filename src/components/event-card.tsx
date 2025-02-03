"use client"

import { Calendar, MapPin, Instagram } from "lucide-react"
import type { EventCardProps } from "../lib/types"
import { getMonthAbbreviation, getDay } from "../lib/utils"
import { useLang } from "@/contexts/dictionary-provider"

export function EventCard({ event }: EventCardProps) {
  const month = getMonthAbbreviation(event.startDate, useLang())
  const day = getDay(event.startDate)

  return (
    <div className="flex gap-4 items-start p-4 border-b border-black/20">
      <div className="bg-black bg-opacity-[6%] rounded-xl p-2 text-center w-[4.5rem]">
        <div className="text-primary text-sm font-medium">{month}</div>
        <div className="text-2xl font-bold">{day}</div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-4">{event.title}</h3>
        <div className="space-y-2 text-sm text-gray-600">
          {event.time && (
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{event.time}</span>
              {event.endDate && <span>• {event.endDate.toLocaleDateString("pt-BR")}</span>}
            </div>
          )}
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{event.location}</span>
          </div>
          {event.instagramLink && (
            <div className="flex items-center gap-2 text-primary">
              <Instagram className="h-4 w-4" />
              <a href={event.instagramLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                instagram.com
              </a>
            </div>
          )}
        </div>
        <p className="mt-4 text-sm text-black/50">
          {event.description} <button className="text-primary hover:underline">mais</button>
        </p>
      </div>
    </div>
  )
}