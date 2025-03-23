"use client";

import { useRouter } from "next/navigation";
import type { EventCardProps } from "../lib/types";
import {
  getMonthAbbreviation,
  getDay,
  isAllDayEvent,
  isMultiDayEvent,
  formatDate,
} from "../lib/utils";
import { useLang } from "@/contexts/dictionary-provider";

export function EventCardCalendar({ event }: EventCardProps) {
  const lang = useLang();
  const router = useRouter();

  const month = getMonthAbbreviation(event.start, lang);
  const day = getDay(event.start);

  const handleClick = () => {
    router.push("/events");
  };

  return (
    <div
      className="hover:bg-gray-100 mb-6 mr-6 flex h-[180px] w-[410px] cursor-pointer items-start rounded-xl bg-[#0000000D] p-6 transition"
      onClick={handleClick}
    >
      <div className="mr-4 mt-6 h-[72px] w-[72px] rounded-xl bg-white p-2 text-center">
        <div className="text-sm font-medium text-primary">{month}</div>
        <div className="text-2xl font-bold">{day}</div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold">{event.title}</h3>
        <div className="text-gray-600 text-base">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-gray">
              calendar_month
            </span>
            {isAllDayEvent(event) ? (
              <span>{new Date(event.start).toLocaleDateString(lang)}</span>
            ) : isMultiDayEvent(event) ? (
              <span>
                {formatDate(event.start, lang)} - {formatDate(event.end, lang)}
              </span>
            ) : (
              <span>
                {new Date(event.start).toLocaleTimeString(lang, {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            )}
          </div>
          {event.place && (
            <div className="flex items-center gap-2">
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
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="truncate text-gray hover:underline"
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
