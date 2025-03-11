"use client";

import { useState } from "react";
import type { EventListProps, Event } from "../lib/types";
import { EventCard } from "./event-card";
import { useDictionary, useLang } from "@/contexts/dictionary-provider";
import { EventSkeleton } from "./event-skeleton";
import { isSameDay } from "../lib/utils";

export function EventList({
  events,
  isLoading,
  selectedDate,
  onClearDate,
}: EventListProps) {
  const dict = useDictionary();
  const lang = useLang();
  const [visibleFutureCount, setVisibleFutureCount] = useState(5);
  const [visiblePastCount, setVisiblePastCount] = useState(5);

  const currentDate = new Date();

  const filteredEvents = selectedDate
    ? events.filter((event) => {
        const eventStart = new Date(event.start);
        const eventEnd = new Date(event.end);
        return (
          isSameDay(eventStart, selectedDate) ||
          (eventEnd && eventStart <= selectedDate && eventEnd >= selectedDate)
        );
      })
    : events;

  const futureEvents = filteredEvents
    .filter((event) => new Date(event.start) >= currentDate)
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
  const pastEvents = filteredEvents
    .filter((event) => new Date(event.end) < currentDate)
    .sort((a, b) => new Date(b.end).getTime() - new Date(a.end).getTime());

  const visibleFutureEvents = futureEvents.slice(0, visibleFutureCount);
  const visiblePastEvents = pastEvents.slice(0, visiblePastCount);

  const renderEventList = (
    eventList: Event[],
    totalEvents: Event[],
    visibleCount: number,
    setVisibleCount: (count: number) => void,
    title: string,
  ) => {
    if (isLoading || totalEvents.length > 0) {
      const canShowMore = totalEvents.length > visibleCount;
      return (
        <div className="mb-8">
          <h2 className="mb-4 font-title text-2xl font-medium">{title}</h2>
          <div className="space-y-0">
            {isLoading ? (
              <>
                <EventSkeleton />
                <EventSkeleton />
              </>
            ) : (
              eventList.map((event, index) => (
                <EventCard key={index} event={event} />
              ))
            )}
          </div>
          {!isLoading && canShowMore && (
            <button
              onClick={() => setVisibleCount(visibleCount + 5)}
              className="mt-6 w-full text-center text-primary hover:underline"
            >
              {dict.events.showMore}
            </button>
          )}
          {!isLoading && !canShowMore && visibleCount > 5 && (
            <button
              onClick={() => setVisibleCount(5)}
              className="mt-6 w-full text-center text-primary hover:underline"
            >
              {dict.events.showLess}
            </button>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      {selectedDate && (
        <button
          onClick={() => {
            onClearDate();
          }}
          className="mb-4 inline-flex w-auto items-center rounded-full bg-primary p-1 px-3 text-white transition-colors hover:bg-primary/90"
        >
          {selectedDate
            .toLocaleDateString(lang, {
              day: "numeric",
              month: "2-digit",
            })
            .replace(/^\w/, (c) => c.toUpperCase())
            .replace("-", "/")}{" "}
          <span className="material-symbols-outlined ml-1 text-xl">close</span>
        </button>
      )}
      {renderEventList(
        visibleFutureEvents,
        futureEvents,
        visibleFutureCount,
        setVisibleFutureCount,
        dict.events.futureEvents,
      )}
      {renderEventList(
        visiblePastEvents,
        pastEvents,
        visiblePastCount,
        setVisiblePastCount,
        dict.events.pastEvents,
      )}
      {!isLoading && filteredEvents.length === 0 && (
        <div className="text-center text-black/50">{dict.events.noEvents}</div>
      )}
    </div>
  );
}
