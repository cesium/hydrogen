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
  const [showAllFuture, setShowAllFuture] = useState(false);
  const [showAllPast, setShowAllPast] = useState(false);

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

  const visibleFutureEvents = showAllFuture
    ? futureEvents
    : futureEvents.slice(0, 5);
  const visiblePastEvents = showAllPast ? pastEvents : pastEvents.slice(0, 5);

  const renderEventList = (
    eventList: Event[],
    totalEvents: Event[],
    showAll: boolean,
    setShowAll: (show: boolean) => void,
    title: string,
  ) => (
    <div className="mb-8">
      <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
      <div
        className={`space-y-6 ${showAll ? "max-h-[1000px] overflow-y-auto pr-4" : ""}`}
      >
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
      {!isLoading && totalEvents.length > 5 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 w-full text-center text-primary hover:underline"
        >
          {showAll ? dict.events.showLess : dict.events.showMore}
        </button>
      )}
    </div>
  );

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
        showAllFuture,
        setShowAllFuture,
        dict.events.futureEvents,
      )}
      {renderEventList(
        visiblePastEvents,
        pastEvents,
        showAllPast,
        setShowAllPast,
        dict.events.pastEvents,
      )}
    </div>
  );
}
