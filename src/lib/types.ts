export enum CardType {
  Collaborate = "Collaborate",
  Membership = "Membership",
}

export interface Member {
  name: string;
  role: string;
}

export interface Department {
  name: string;
  members: Member[];
}

export interface Team {
  name: string;
  departments?: Department[];
  members?: Member[];
}

export type TeamData = Team[];

export interface MemberInfo extends Member {
  imageUrl: string;
}

export interface Event {
  id: string
  title: string
  startDate: Date
  endDate?: Date
  time?: string
  location: string
  instagramLink?: string
  description: string
}

export interface EventsPageProps {
  events: Event[]
}

export interface EventCardProps {
  event: Event
}

export interface EventListProps {
  events: Event[]
}

export interface CalendarProps {
  events: Event[]
  onDateSelect?: (date: Date) => void
  onEventClick?: (event: Event) => void
  className?: string
}