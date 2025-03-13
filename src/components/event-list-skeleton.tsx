import { EventSkeleton } from "./event-skeleton";

export function EventListSkeleton() {
  return (
    <div className="space-y-6">
      <EventSkeleton />
      <EventSkeleton />
      <EventSkeleton />
    </div>
  );
}
