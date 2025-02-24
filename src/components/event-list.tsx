"use client"

import { useState } from "react"
import type { EventListProps, Event } from "../lib/types"
import { EventCard } from "./event-card"
import { useDictionary } from "@/contexts/dictionary-provider"
import { LoadingSpinner } from "@/components/loading-spinner"

export function EventList({ events, isLoading }: EventListProps) {
  const dict = useDictionary()
  const [showAllFuture, setShowAllFuture] = useState(false)
  const [showAllPast, setShowAllPast] = useState(false)

  if (isLoading) {
    return <LoadingSpinner text={String(dict.events.loading)} />
  }

  const currentDate = new Date()
  const futureEvents = events
    .filter((event) => new Date(event.start) >= currentDate)
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
  const pastEvents = events
    .filter((event) => new Date(event.end) < currentDate)
    .sort((a, b) => new Date(b.end).getTime() - new Date(a.end).getTime())

  const visibleFutureEvents = showAllFuture ? futureEvents : futureEvents.slice(0, 5)
  const visiblePastEvents = showAllPast ? pastEvents : pastEvents.slice(0, 5)

  const renderEventList = (
    eventList: Event[],
    totalEvents: Event[],
    showAll: boolean,
    setShowAll: (show: boolean) => void,
    title: string,
  ) => (
    <>
      {totalEvents.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{title}</h2>
          <div className={`space-y-6 ${showAll ? "max-h-[1000px] overflow-y-auto pr-4" : ""}`}>
            {eventList.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
          {totalEvents.length > 5 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="mt-4 text-primary hover:underline text-center w-full"
            >
              {showAll ? dict.events.showLess : dict.events.showMore}
            </button>
          )}
        </div>
      )}
    </>
  )

  return (
    <div>
      {renderEventList(visibleFutureEvents, futureEvents, showAllFuture, setShowAllFuture, dict.events.futureEvents)}
      {renderEventList(visiblePastEvents, pastEvents, showAllPast, setShowAllPast, dict.events.pastEvents)}
    </div>
  )
}