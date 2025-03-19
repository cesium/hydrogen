"use client";

import { Calendar } from "@/components/calendar";
import { EventList } from "@/components/event-list";
import PromotionalCard from "@/components/promotional-card";
import { useDictionary } from "@/contexts/dictionary-provider";
import getEvents from "@/lib/api/getEvents";
import { type Event, CardType } from "@/lib/types";
import { useEffect, useState } from "react";
import { isSameDay } from "@/lib/utils";
import { horizontalPadding, verticalPadding } from "@/lib/styling";
import { EventListCard } from "@/components/event-list-card";
import AppLink from "@/components/link";
import Markdown from "markdown-to-jsx";

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

      <div className="md:flex md:gap-12">
        <div className="mb-8 flex w-full flex-col gap-14 md:mb-0 md:w-2/5">
          <Calendar
            events={events}
            onDateSelect={handleDateSelect}
            selectedDate={selectedDate}
            className="your-calendar-class"
          />
          <div className="hidden md:block">
            <PromotionalCard mobileOnlyLayout type={CardType.Membership} />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <EventList
            events={events}
            isLoading={isLoading}
            selectedDate={selectedDate}
            onClearDate={handleClearDate}
          />
          <div className="text-sm">
            <h2 className="mb-4 font-title text-2xl font-medium">
              {dict.events.warningTitle}
            </h2>
            <div className="text-black/50">
              <Markdown
                options={{
                  overrides: {
                    a: {
                      props: {
                        className: "font-bold text-primary hover:underline",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                  },
                }}
              >
                {dict.events.warning}
              </Markdown>
            </div>
          </div>
          <div className="md:hidden">
            <PromotionalCard type={CardType.Membership} />
          </div>
        </div>
      </div>
      <EventListCard
        events={events}
        selectedDate={selectedDate}
        onClearDate={handleClearDate}
      />
    </main>
  );
}
