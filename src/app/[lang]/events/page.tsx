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
import { horizontalPadding, verticalPadding } from "@/lib/styling";
import AppLink from "@/components/link";

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
    <main
      className={`flex flex-col gap-10 lg:gap-14 ${horizontalPadding} ${verticalPadding}`}
    >
      <div className="flex items-center justify-between">
        <h1 className="font-title text-3xl font-medium">{dict.events.title}</h1>
        <div className="hidden items-center gap-4 lg:flex">
          <AppLink
            href="https://calendario.cesium.di.uminho.pt/"
            arrow="outward"
            title="Calendarium"
          />
          <AppLink
            href="https://instagram.com/cesiuminho"
            arrow="outward"
            title="Instagram"
          />
        </div>
      </div>

      <div className="flex flex-col gap-12 lg:flex-row">
        <div className="flex w-full flex-col gap-14 lg:w-2/5">
          <Calendar
            events={events}
            onDateSelect={handleDateSelect}
            selectedDate={selectedDate}
            className="your-calendar-class"
          />
          <PromotionalCard type={CardType.Membership} mobileOnlyLayout />
        </div>
        <div className="flex-1">
          <EventList
            events={events}
            isLoading={isLoading}
            selectedDate={selectedDate}
            onClearDate={handleClearDate}
          />
          <p className="mt-8 text-justify text-sm text-black/50">
            {dict.events.warning.split("Calendarium")[0]}
            <Link
              href="https://calendario.cesium.di.uminho.pt/"
              className="text-primary hover:underline"
            >
              Calendarium
            </Link>
            {dict.events.warning.split("Calendarium")[1]?.split("Instagram")[0]}
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
    </main>
  );
}
