"use client";

import { fullLocale } from "@/lib/locale";
import type { EventCardProps } from "../lib/types";
import {
  getMonthAbbreviation,
  getDay,
  isAllDayEvent,
  isMultiDayEvent,
  formatDate,
} from "../lib/utils";
import { useLang } from "@/contexts/dictionary-provider";

export function EventCard({ event }: EventCardProps) {
  const lang = useLang();
  const month = getMonthAbbreviation(event.start, lang);
  const day = getDay(event.start);

  return (
    <div className="flex items-start gap-4 border-b border-black/20 py-6">
      <div className="w-[4.5rem] rounded-xl bg-black bg-opacity-[6%] p-2 text-center">
        <div className="text-sm font-medium text-primary">{month}</div>
        <div className="text-2xl font-bold">{day}</div>
      </div>
      <div className="flex-1">
        <h3 className="mb-4 text-xl font-bold">{event.title}</h3>
        <div className="text-gray-600 space-y-2 text-base">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined">calendar_month</span>
            {isAllDayEvent(event) ? (
              <span>
                {new Date(event.start).toLocaleDateString(fullLocale(lang))}
              </span>
            ) : isMultiDayEvent(event) ? (
              <span>
                {formatDate(event.start, fullLocale(lang))} -{" "}
                {formatDate(event.end, fullLocale(lang))}
              </span>
            ) : (
              <span>
                {new Date(event.start).toLocaleTimeString(fullLocale(lang), {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            )}
          </div>
          {event.place && (
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">location_on</span>
              {event.place}
            </div>
          )}
          {event.link && (
            <div className="flex w-64 max-w-[80%] items-center gap-2 text-primary sm:max-w-full">
              <span className="material-symbols-outlined">explore</span>
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="truncate hover:underline"
              >
                {event.link.split("://")[1]}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
