"use client";

import type { EventListProps, Event } from "../lib/types";
import { EventCardCalendar } from "./event-card-calendar";
import { useDictionary, useLang } from "@/contexts/dictionary-provider";
import {
  isSameDay,
  isWithinRange,
  isToday,
  isPastDay,
  isFutureDay,
} from "../lib/utils";
import { fullLocale } from "@/lib/locale";

export function EventListCard({
  events,
  isLoading,
  selectedDate,
  onClearDate,
}: EventListProps) {
  const dict = useDictionary();
  const lang = useLang();

  const filteredEvents = selectedDate
    ? events.filter((event) => {
        const eventStart = new Date(event.start);
        const eventEnd = new Date(event.end);
        return (
          isSameDay(eventStart, selectedDate) ||
          (eventEnd && isWithinRange(selectedDate, eventStart, eventEnd))
        );
      })
    : events;

  const todayEvents = filteredEvents.filter((event) => {
    const eventStart = new Date(event.start);
    const eventEnd = new Date(event.end);
    const today = new Date();

    return (
      isToday(eventStart) ||
      isToday(eventEnd) ||
      isWithinRange(today, eventStart, eventEnd)
    );
  });

  const futureEvents = filteredEvents
    .filter((event) => {
      const eventStart = new Date(event.start);
      return isFutureDay(eventStart);
    })
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());

  const pastEvents = filteredEvents
    .filter((event) => {
      const eventEnd = new Date(event.end);
      return isPastDay(eventEnd);
    })
    .sort((a, b) => new Date(b.end).getTime() - new Date(a.end).getTime());

  const renderEventList = (
    eventList: Event[],
    totalEvents: Event[],
    title: string,
  ) => {
    if (isLoading || totalEvents.length > 0) {
      return (
        <div className="flex flex-col gap-2">
          {isLoading ? (
            <div className="my-2.5 flex h-1.5 w-full animate-pulse rounded-full bg-gray/10" />
          ) : (
            <div className="flex w-full flex-row items-center">
              <div className="h-1 w-6 rounded-full bg-gradient-to-r from-stroke to-transparent" />
              <h2 className="px-4 font-semibold text-gray/70">{title}</h2>
              <div className="h-1 flex-1 rounded-full bg-gradient-to-l from-stroke to-stroke/10" />
            </div>
          )}
          <div className="flex space-x-6">
            {isLoading ? (
              <>
                <div className="h-[218px] w-[296px] animate-pulse rounded-2.5xl bg-gray/10 md:h-[158px] md:w-[410px]" />
                <div className="h-[218px] w-[296px] animate-pulse rounded-2.5xl bg-gray/10 md:h-[158px] md:w-[410px]" />
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
            .toLocaleDateString(fullLocale(lang), {
              day: "numeric",
              month: "2-digit",
            })
            .replace(/^-/, (c) => c.toUpperCase())
            .replace("-", "/")}{" "}
          <span className="material-symbols-outlined ml-1 text-xl">close</span>
        </button>
      )}
      <div className="flex w-full flex-row items-center gap-6">
        {renderEventList(todayEvents, todayEvents, dict.events.todayEvents)}
        {renderEventList(futureEvents, futureEvents, dict.events.futureEvents)}
        {renderEventList(pastEvents, pastEvents, dict.events.pastEvents)}
      </div>
      {!isLoading && filteredEvents.length === 0 && (
        <div className="text-center text-black/50">{dict.events.noEvents}</div>
      )}
    </div>
  );
}
