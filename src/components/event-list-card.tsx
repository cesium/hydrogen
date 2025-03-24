"use client";
import type { EventListProps, Event } from "../lib/types";
import { EventCardCalendar } from "./event-card-calendar";
import { useDictionary, useLang } from "@/contexts/dictionary-provider";
import { EventSkeleton } from "./event-skeleton";
import { isSameDay } from "../lib/utils";
import { useState } from "react";

export function EventListCard({
  events,
  isLoading,
  selectedDate,
  onClearDate,
}: EventListProps) {
  const dict = useDictionary();
  const lang = useLang();
  const currentDate = new Date();
  const [visibleFutureCount, setVisibleFutureCount] = useState(5);
  const [visiblePastCount, setVisiblePastCount] = useState(5);

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
      return (
        <div className="">
          <div className="my-4 flex w-full flex-row items-center">
            <div className="h-[4px] w-6 bg-gradient-to-r from-stroke to-transparent"></div>
            <h2 className="px-4 font-sans text-xl font-medium text-stroke">
              {title}
            </h2>
            <div className="h-[4px] flex-1 bg-gradient-to-l from-stroke to-stroke/10"></div>
          </div>
          <div className="flex space-x-6 pb-4">
            {isLoading ? (
              <>
                <div className="min-w-[280px] flex-shrink-0">
                  <EventSkeleton />
                </div>
                <div className="min-w-[280px] flex-shrink-0">
                  <EventSkeleton />
                </div>
              </>
            ) : (
              eventList.map((event, index) => (
                <div key={index} className="min-w-[280px] flex-shrink">
                  <EventCardCalendar event={event} />
                </div>
              ))
            )}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col gap-6">
      {selectedDate && (
        <button
          onClick={() => {
            onClearDate();
          }}
          className="inline-flex w-fit items-center rounded-full bg-primary p-1 px-3 text-white transition-colors hover:bg-primary/90"
        >
          {selectedDate
            .toLocaleDateString(lang, {
              day: "numeric",
              month: "2-digit",
            })
            .replace(/^-/, (c) => c.toUpperCase())
            .replace("-", "/")}{" "}
          <span className="material-symbols-outlined ml-1 text-xl">close</span>
        </button>
      )}
      <div className="flex w-full flex-row items-center gap-6">
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
      </div>
      {!isLoading && filteredEvents.length === 0 && (
        <div className="text-center text-black/50">{dict.events.noEvents}</div>
      )}
    </div>
  );
}
