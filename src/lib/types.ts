export enum CardType {
  Collaborate = "Collaborate",
  Membership = "Membership",
}

export enum NoticeType {
  Partnerships = "Partnerships",
}

export interface Member {
  name: string;
  role: string;
  imageUrl?: string;
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

export interface ProductImage {
  thumb: string;
  square: string;
  full: string;
}

export interface Product {
  id: string;
  title: string;
  handle: string;
  price_formatted: string;
  image: ProductImage;
}

export interface Event {
  title: string;
  place?: string;
  link?: string;
  start: Date;
  end: Date;
}

export interface EventsPageProps {
  events: Event[];
}

export interface EventCardProps {
  event: Event;
}

export interface EventListProps {
  events: Event[];
  isLoading?: boolean;
  selectedDate: Date | null;
  onClearDate: () => void;
}

export interface CalendarProps {
  events: Event[];
  onDateSelect?: (date: Date | null) => void;
  onEventClick?: (event: Event) => void;
  selectedDate: Date | null;
  className?: string;
}

export interface EventTooltipProps {
  events: Event[];
  isVisible: boolean;
  anchorElement: HTMLElement | null;
}

export interface Document{
  documentUrl: string;
  title: string; 
  publication_date: string; 
  description:string;
  imageUrl?: string; 
  categories: string[];
  reference: string;
  accessPermision: string
}

export type DocumentsData =  Document[];