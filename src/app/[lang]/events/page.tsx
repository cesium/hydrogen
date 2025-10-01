"use client";

import { Calendar } from "@/components/calendar";
import { EventList } from "@/components/event-list";
import PromotionalCard from "@/components/promotional-card";
import { useDictionary } from "@/contexts/dictionary-provider";
import getEvents from "@/lib/api/getEvents";
import { type Event, CardType } from "@/lib/types";
import { useEffect, useState } from "react";
import { isSameDay } from "@/lib/utils";

import AppLink from "@/components/link";
import Markdown from "markdown-to-jsx";

export default function EventsPage() {
  const dict = useDictionary();
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    /*
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
    */

    const now = new Date();
    const hardcodedEvents: Event[] = [
      // Single day event (2 hours duration)
      {
        title: "Tech Talk: AI in Web Development",
        place: "Auditorium A",
        link: "https://example.com/tech-talk",
        start: new Date(now.getTime() + 24 * 60 * 60 * 1000), // Tomorrow at same time
        end: new Date(now.getTime() + 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000), // Tomorrow + 2 hours
      },
      // Multi-day event (3 days duration)
      {
        title: "CeSIUM Code Week 2024",
        place: "Computer Science Department",
        link: "https://example.com/code-week",
        start: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 2,
          0,
          0,
          0,
        ), // Next week at midnight
        end: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() + 5,
          23,
          59,
          59,
        ), // Same day at 11:59 PM
      },
      // All-day event (starts at midnight, ends at 11:59 PM same day)
      {
        title: "Open Source Contribution Day",
        place: "Online Event",
        link: "https://example.com/open-source-day",
        start: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() + 7,
          0,
          0,
          0,
        ), // Next week at midnight
        end: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() + 7,
          23,
          59,
          59,
        ), // Same day at 11:59 PM
      },
      {
        title: "SEI",
        place: "Online Event",
        link: "https://example.com/open-source-day",
        start: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 2,
          0,
          0,
          0,
        ), // Next week at midnight
        end: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() + 4,
          23,
          59,
          59,
        ), // Same day at 11:59 PM
      },
    ];

    setEvents(hardcodedEvents);
    setIsLoading(false);
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
    <main className="layout-p-full flex flex-col gap-10 lg:gap-14">
      <div className="flex items-center justify-between">
        <h1 className="font-title text-3xl font-medium">{dict.events.title}</h1>
        <div className="hidden items-center gap-4 lg:flex">
          <AppLink
            href="https://calendario.cesium.di.uminho.pt/"
            title="Calendarium"
          />
          <AppLink href="https://instagram.com/cesiuminho" title="Instagram" />
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
    </main>
  );
}
