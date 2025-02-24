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
  title: string,
  place?: string,
  link?: string,
  start: Date,
  end: Date
}

export interface EventsPageProps {
  events: Event[]
}

export interface EventCardProps {
  event: Event
}

export interface EventListProps {
  events: Event[],
  isLoading?: boolean
}

export interface CalendarProps {
  events: Event[]
  onDateSelect?: (date: Date) => void
  onEventClick?: (event: Event) => void
  className?: string
}