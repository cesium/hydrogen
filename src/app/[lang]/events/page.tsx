import { Calendar } from "@/components/calendar"
import { EventList } from "@/components/event-list"
import PromotionalCard from "@/components/promotional-card"
import  { type Event, CardType } from "@/lib/types"

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
  return (
    <>
      <div className="px-4">
        <div className="flex items-center justify-between py-8">
          <h1 className="text-2xl font-bold">Eventos</h1>
            <div className="hidden md:flex items-center gap-4">
            <a href="/calendar" className="text-orange-500 hover:underline flex items-center gap-1">
              Calendarium
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-orange-500">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" />
              </svg>
            </a>
            <a href="https://instagram.com" className="text-orange-500 hover:underline flex items-center gap-1">
              Instagram
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-orange-500">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" />
              </svg>
            </a>
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
              Por agora a lista acabou. Esta lista só mostra eventos organizados pelo CeSIUM. Para veres mais eventos,
              como festas ou feriados, visita o{" "}
              <a href="/calendar" className="text-orange-500 hover:underline">
                Calendarium
              </a>
              . Mantém-te a par das novidades no nosso{" "}
              <a href="https://instagram.com" className="text-orange-500 hover:underline">
                Instagram
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}