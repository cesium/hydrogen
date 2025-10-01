"use client";

import { useState } from "react";
import type { EventListProps, Event } from "../lib/types";
import { EventCard } from "./event-card";
import { useDictionary, useLang } from "@/contexts/dictionary-provider";
import { EventSkeleton } from "./event-skeleton";
import {
  isSameDay,
  isWithinRange,
  isToday,
  isPastDay,
  isFutureDay,
  isMultiDayEvent,
} from "../lib/utils";
import { fullLocale } from "@/lib/locale";

interface ExtendedEvent extends Event {
  dayNumber?: number;
  totalDays?: number;
}

export function EventList({
  events,
  isLoading,
  selectedDate,
  onClearDate,
}: EventListProps) {
  const dict = useDictionary();
  const lang = useLang();
  const [visibleFutureCount, setVisibleFutureCount] = useState(5);
  const [visibleTodayCount, setVisibleTodayCount] = useState(5);
  const [visiblePastCount, setVisiblePastCount] = useState(5);
  const [visibleFilteredCount, setVisibleFilteredCount] = useState(5);

  const expandMultiDayEvents = (eventList: Event[]): ExtendedEvent[] =>
    eventList.flatMap((event) => {
      const start = new Date(event.start);
      const end = new Date(event.end);

      if (!isMultiDayEvent({ start, end })) return [event];

      const days = Math.ceil(
        (end.setHours(0,0,0,0) - start.setHours(0,0,0,0)) / (1000 * 60 * 60 * 24)
      ) + 1;

      return Array.from({ length: days }, (_, i) => {
        const day = new Date(start);
        day.setDate(start.getDate() + i);
        return {
          ...event,
          start: new Date(day),
          end: new Date(day),
          dayNumber: i + 1,
          totalDays: days,
          title: `${event.title} (${dict.events.day} ${i + 1})`,
        };
      });
    });

  const expandedEvents = expandMultiDayEvents(events);

  const filteredEvents = selectedDate
    ? expandedEvents.filter((event) => {
        const eventStart = new Date(event.start);
        return isSameDay(eventStart, selectedDate);
      })
    : expandedEvents;

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
    .sort((a, b) => {
      const dateA = new Date(a.start);
      const dateB = new Date(b.start);
      return dateA.getTime() - dateB.getTime();
    });

  const pastEvents = filteredEvents
    .filter((event) => {
      const eventEnd = new Date(event.end);
      return isPastDay(eventEnd);
    })
    .sort((a, b) => {
      const dateA = new Date(a.end);
      const dateB = new Date(b.end);
      return dateB.getTime() - dateA.getTime();
    });

  const visibleFutureEvents = futureEvents.slice(0, visibleFutureCount);
  const visiblePastEvents = pastEvents.slice(0, visiblePastCount);
  const visibleTodayEvents = todayEvents.slice(0, visibleTodayCount);
  const visibleFilteredEvents = filteredEvents.slice(0, visibleFilteredCount);

  const renderEventList = (
    eventList: ExtendedEvent[],
    totalEvents: ExtendedEvent[],
    visibleCount: number,
    setVisibleCount: (count: number) => void,
    title: string,
  ) => {
    if (isLoading || totalEvents.length > 0) {
      const canShowMore = totalEvents.length > visibleCount;
      return (
        <div className="">
          <h2 className="font-title text-2xl font-medium">{title}</h2>
          <div className="space-y-0">
            {isLoading ? (
              <>
                <EventSkeleton />
                <EventSkeleton />
              </>
            ) : (
              eventList.map((event, index) => (
                <EventCard
                  key={`${event.title}-${event.dayNumber ?? 0}-${index}`}
                  event={event}
                />
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

  const getTitleForSelectedDate = () => {
    if (!selectedDate) return dict.events.todayEvents;

    if (isToday(selectedDate)) {
      return dict.events.todayEvents;
    } else if (isFutureDay(selectedDate)) {
      return dict.events.futureEvents;
    } else {
      return dict.events.pastEvents;
    }
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
            .replace(/^\w/, (c) => c.toUpperCase())
            .replace("-", "/")}{" "}
          <span className="material-symbols-outlined ml-1 text-xl">close</span>
        </button>
      )}
      {selectedDate ? (
        filteredEvents.length > 0 &&
        renderEventList(
          visibleFilteredEvents,
          filteredEvents,
          visibleFilteredCount,
          setVisibleFilteredCount,
          getTitleForSelectedDate(),
        )
      ) : (
        <>
          {todayEvents.length > 0 &&
            renderEventList(
              visibleTodayEvents,
              todayEvents,
              visibleTodayCount,
              setVisibleTodayCount,
              dict.events.todayEvents,
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
        </>
      )}
      {!isLoading && filteredEvents.length === 0 && (
        <div className="text-center text-black/50">{dict.events.noEvents}</div>
      )}
    </div>
  );
}
