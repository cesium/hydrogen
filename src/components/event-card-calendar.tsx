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
      className="hover:bg-gray-100 mb-6 flex h-[215px] w-[353px] cursor-pointer flex-col items-start rounded-xl bg-[#0000000D] transition md:h-[180px] md:w-[410px] md:flex-row md:p-6"
      onClick={handleClick}
    >
      <div className=" ml-4 mt-3 flex flex-row gap-1 rounded-xl bg-white p-2 text-center md:mr-4 md:mt-6 md:h-[72px] md:w-[72px] md:flex-col md:gap-0">
        <div className="mt-2 text-sm font-medium text-primary md:mt-0 ">
          {month}
        </div>
        <div className="text-2xl font-bold">{day}</div>
      </div>
      <div className="ml-4 mt-2 flex-1 md:ml-0 md:mt-0">
        <h3 className="text-base font-bold">{event.title}</h3>
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
