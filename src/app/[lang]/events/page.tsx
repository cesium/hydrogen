"use client"

import { Calendar } from "@/components/calendar"
import { EventList } from "@/components/event-list"
import PromotionalCard from "@/components/promotional-card"
import { useDictionary } from "@/contexts/dictionary-provider"
import getEvents from "@/lib/api/getEvents"
import  { type Event, CardType } from "@/lib/types"
import Link from "next/link"

import { useEffect, useState } from "react"

export default function EventsPage() {
  const dict = useDictionary()

  /*
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    async function fetchEvents() {
      const eventsData = await getEvents()
      setEvents(eventsData)
    }
    fetchEvents().catch(error => console.error('Failed to fetch events:', error))
  }, [])
  */

  const events: Event[] = [
    {
      title: "[AL] Teste",
      place: "CP2 - 0.11 + 0.20 + 1.03 + 1.05 + 1.07",
      link: "https://instagram.com/cesiuminho",
      start: new Date("2025-10-31T00:00:00"),
      end: new Date("2025-10-31T00:00:00"),
    },
    {
      title: "[AL] Teste",
      place: "CP2 - 0.11 + 0.20 + 1.03 + 1.05 + 1.07",
      link: "https://instagram.com/cesiuminho",
      start: new Date("2025-01-04T00:00:00"),
      end: new Date("2025-01-04T00:00:00"),
    },
    {
      title: "[AL] Recurso",
      place: "CP2 - 0.11 + 0.20 + 1.03 + 1.05 + 1.07",
      link: "https://instagram.com/cesiuminho",
      start: new Date("2025-01-25T09:00:00"),
      end: new Date("2025-01-25T12:00:00"),
    },
    {
      title: "[AL] Época Especial",
      place: "CP2 - 0.11 + 0.20 + 1.03 + 1.05 + 1.07",
      link: "https://instagram.com/cesiuminho",
      start: new Date("2025-07-19T09:00:00"),
      end: new Date("2025-07-19T12:00:00"),
    }
  ];
  

  return (
    <>
      <div className="md:px-5">
        <div className="flex items-center justify-between py-8">
          <h1 className="text-3xl font-medium font-title">{dict.events.title}</h1>
            <div className="hidden md:flex items-center gap-4">
            <Link href="https://calendario.cesium.di.uminho.pt/" className="text-primary hover:underline flex items-center gap-1">
              Calendarium
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-primary">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" />
              </svg>
            </Link>
            <Link href="https://instagram.com/cesiuminho" className="text-primary hover:underline flex items-center gap-1">
              Instagram
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-primary">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="md:px-5">
        <div className="md:flex md:gap-12">
          <div className="w-full md:w-2/5 mb-8 md:mb-0">
            <Calendar events={events} />
            <div className="mt-4">
              <PromotionalCard type={CardType.Membership}/>
            </div>
          </div>
          <div className="flex-1">
            <EventList events={events} />
            <p className="mt-8 text-sm text-black/50">
              {dict.events.warning.split("Calendarium")[0]}
              <Link href="https://calendario.cesium.di.uminho.pt/" className="text-primary hover:underline">
              Calendarium
              </Link>
              {dict.events.warning.split("Calendarium")[1]?.split("Instagram")[0]}
              <Link href="https://instagram.com/cesiuminho" className="text-primary hover:underline">
              Instagram
              </Link>
              {dict.events.warning.split("Instagram")[1]}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}