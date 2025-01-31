import type { EventListProps } from "../lib/types"
import { EventCard } from "./event-card"

export function EventList({ events }: EventListProps) {
  return (
    <div className="space-y-6">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  )
}