"use client";

import { Calendar } from "@/components/calendar";
import { EventList } from "@/components/event-list";
import PromotionalCard from "@/components/promotional-card";
import { useDictionary } from "@/contexts/dictionary-provider";
import getEvents from "@/lib/api/getEvents";
import { type Event, CardType } from "@/lib/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { isSameDay } from "@/lib/utils";

export default function EventsPage() {
  const dict = useDictionary();
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        setIsLoading(true);
        const eventsData = await getEvents();
        setEvents(eventsData);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setIsLoading(false);
      }
    }

    void fetchEvents();
  }, []);

  const handleDateSelect = (date: Date | null) => {
    setSelectedDate((prevDate) =>
      prevDate && date && isSameDay(prevDate, date) ? null : date,
    );
  };

  const handleClearDate = () => {
    setSelectedDate(null);
  };

  return (
    <>
      <div className="md:px-5">
        <div className="flex items-center justify-between py-8">
          <h1 className="font-title text-3xl font-medium">
            {dict.events.title}
          </h1>
          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="https://calendario.cesium.di.uminho.pt/"
              className="flex items-center gap-1 text-primary hover:underline"
            >
              Calendarium
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="text-primary"
              >
                <path
                  d="M7 17L17 7M17 7H8M17 7V16"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </Link>
            <Link
              href="https://instagram.com/cesiuminho"
              className="flex items-center gap-1 text-primary hover:underline"
            >
              Instagram
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="text-primary"
              >
                <path
                  d="M7 17L17 7M17 7H8M17 7V16"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="md:px-5">
        <div className="md:flex md:gap-12">
          <div className="mb-8 w-full md:mb-0 md:w-2/5">
            <Calendar
              events={events}
              onDateSelect={handleDateSelect}
              selectedDate={selectedDate}
              className="your-calendar-class"
            />
            <div className="mt-4">
              <PromotionalCard type={CardType.Membership} />
            </div>
          </div>
          <div className="flex-1">
            <EventList
              events={events}
              isLoading={isLoading}
              selectedDate={selectedDate}
              onClearDate={handleClearDate}
            />
            <p className="mt-8 text-sm text-black/50">
              {dict.events.warning.split("Calendarium")[0]}
              <Link
                href="https://calendario.cesium.di.uminho.pt/"
                className="text-primary hover:underline"
              >
                Calendarium
              </Link>
              {
                dict.events.warning
                  .split("Calendarium")[1]
                  ?.split("Instagram")[0]
              }
              <Link
                href="https://instagram.com/cesiuminho"
                className="text-primary hover:underline"
              >
                Instagram
              </Link>
              {dict.events.warning.split("Instagram")[1]}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
