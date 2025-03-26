"use client";

import type { EventCardProps } from "../lib/types";
import Link from "next/link";
import {
  getMonthAbbreviation,
  getDay,
  isAllDayEvent,
  isMultiDayEvent,
  formatDate,
} from "../lib/utils";
import { useLang } from "@/contexts/dictionary-provider";
import { fullLocale } from "@/lib/locale";

export function EventCardCalendar({ event }: EventCardProps) {
  const lang = useLang();
  const month = getMonthAbbreviation(event.start, lang);
  const day = getDay(event.start);

  return (
    <Link
      className="flex h-full w-full flex-col items-start gap-4 rounded-2.5xl bg-black/5 p-5 transition md:w-[410px] md:flex-row md:p-6"
      href={`/${lang}/events`}
    >
      <div className="flex h-fit min-w-[72px] flex-row items-center gap-2 rounded-xl bg-white p-2.5 px-3 text-center md:h-[72px] md:flex-col md:gap-0">
        <div className="text-sm font-medium text-primary ">{month}</div>
        <div className="text-2xl font-medium">{day}</div>
      </div>
      <div className="flex w-full flex-col gap-2">
        <h3 className="line-clamp-1 text-start text-xl font-semibold">
          {event.title}
        </h3>
        <div className="text-gray-600 flex flex-col gap-0.5 text-base">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-gray">
              calendar_month
            </span>
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
            <div className="flex  items-center gap-2">
              <span className="material-symbols-outlined text-gray">
                location_on
              </span>
              {event.place}
            </div>
          )}
          {event.link && (
            <div className="flex w-64 max-w-[80%] items-center gap-2 sm:max-w-full">
              <span className="material-symbols-outlined text-gray">
                explore
              </span>
              <div
                className="truncate font-medium text-gray"
              >
                {event.link.split("://")[1]}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
