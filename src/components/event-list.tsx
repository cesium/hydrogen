import type { EventListProps } from "../lib/types"
import { EventCard } from "./event-card"

export function EventList({ events }: EventListProps) {
  return (
    <div className="space-y-6">
      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  )
}