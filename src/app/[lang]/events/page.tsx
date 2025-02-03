"use client"

import { Calendar } from "@/components/calendar"
import { EventList } from "@/components/event-list"
import PromotionalCard from "@/components/promotional-card"
import { useDictionary } from "@/contexts/dictionary-provider"
import  { type Event, CardType } from "@/lib/types"
import Link from "next/link"

const events: Event[] = [
  {
    id: "1",
    title: "Hackathon Bugsbyte",
    startDate: new Date(2025, 3, 5),
    endDate: new Date(2025, 3, 7),
    location: "Altice Forum Braga",
    instagramLink: "https://instagram.com",
    description:
      "Na Hackathon Bugsbyte qualquer estudante pode fazer nascer uma idea, basta ter um espírito competitivo e alguns dotes",
  },
  {
    id: "2",
    title: "Karaoke",
    startDate: new Date(2025, 2, 14),
    time: "21:00",
    location: "Rick Universal",
    instagramLink: "https://instagram.com",
    description:
      "O karaoke do CeSIUM está de volta! Prepara a tua voz 🎤 Junta-te a nós, no Rick's, na próxima quinta-feira, dia 14",
  },
  {
    id: "3",
    title: "Showoff Typst",
    startDate: new Date(2025, 2, 14),
    time: "16:00",
    location: "DI - Auditório 1",
    instagramLink: "https://instagram.com",
    description:
      "Farto de demorar mais a escrever um relatório do que a implementar uma feature? Vem à demonstração do Typst",
  },
]

export default function EventsPage() {
  const dict = useDictionary()

  return (
    <>
      <div className="px-4">
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

      <div className="px-4">
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