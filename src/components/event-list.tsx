"use client"

import { useState } from "react"
import type { EventListProps, Event } from "../lib/types"
import { EventCard } from "./event-card"
import { useDictionary } from "@/contexts/dictionary-provider"

export function EventList({ events }: EventListProps) {
  const dict = useDictionary()
  const [showAllFuture, setShowAllFuture] = useState(false)
  const [showAllPast, setShowAllPast] = useState(false)

  const currentDate = new Date()
  const futureEvents = events.filter((event) => new Date(event.start) >= currentDate)
  const pastEvents = events.filter((event) => new Date(event.end) < currentDate)

  const visibleFutureEvents = showAllFuture ? futureEvents : futureEvents.slice(0, 5)
  const visiblePastEvents = showAllPast ? pastEvents : pastEvents.slice(0, 5)

  const renderEventList = (
    eventList: Event[],
    totalEvents: Event[],
    showAll: boolean,
    setShowAll: (show: boolean) => void,
    title: string,
  ) => (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className={`space-y-6 ${showAll ? "max-h-[600px] overflow-y-auto pr-4" : ""}`}>
        {eventList.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
      {totalEvents.length > 5 && (
        <button onClick={() => setShowAll(!showAll)} className="mt-4 text-primary hover:underline text-center w-full">
          {showAll ? dict.events.showLess : dict.events.showMore}
        </button>
      )}

    {totalEvents.length === 0 && (
        <p className="text-center text-base text-black/50">{dict.events.noEvents}</p>
      )}
    </div>
  )

  return (
    <div>
      {renderEventList(visibleFutureEvents, futureEvents, showAllFuture, setShowAllFuture, dict.events.futureEvents as string)}
      {renderEventList(visiblePastEvents, pastEvents, showAllPast, setShowAllPast, dict.events.pastEvents as string)}
    </div>
  )
}