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
