import type { Member, MemberInfo, TeamData } from "@/lib/types";

const generateYearRanges = (startYear: number, endYear: number): string[] => {
  const yearRanges = [];
  for (let year = endYear; year >= startYear; year--) {
    yearRanges.push(`${year}-${year + 1}`);
  }

  return yearRanges;
};

const fetchTeamData = async (currentYear: string): Promise<TeamData> => {
  try {
    const response = await fetch(`/data/teams/${currentYear}/teams.json`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: TeamData = (await response.json()) as TeamData;

    return data;
  } catch (error) {
    console.error("Error fetching team data:", error);
    return [];
  }
};

const getTeamByName = (teams: TeamData, name: string) => {
  return teams.find((team) => team.name === name);
};

const getDepartmentByName = (teams: TeamData, departmentName: string) => {
  for (const team of teams) {
    const department = team.departments?.find(
      (department) => department.name === departmentName,
    );
    if (department) {
      return department;
    }
  }
};

const generateImageUrl = (
  yearRange: string,
  name: string,
  count: number,
): string => {
  return `https://assets.hydrogen.cesium.pt/team-photos/${yearRange}/${name}${count ? count : ""}.jpg`;
};

const generateUrlsForTeams = (
  teams: TeamData,
  yearRange: string,
): (string | string[])[][] => {
  const nameCount: Record<string, number> = {};

  const generateForMember = (member: Member) => {
    const baseName = member.name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "")
      .toLowerCase();
    const count = nameCount[baseName] ?? 0;
    nameCount[baseName] = count + 1;
    return generateImageUrl(yearRange, baseName, count);
  };

  const urls: (string | string[])[][] = [];

  teams.forEach((team) => {
    const teamUrls: (string | string[])[] = [];

    if (team.members) {
      const memberUrls = team.members.map((member) =>
        generateForMember(member),
      );
      teamUrls.push(memberUrls);
    }

    if (team.departments) {
      const departmentUrls = team.departments.map((department) => {
        return department.members.map((member) => generateForMember(member));
      });
      teamUrls.push(...departmentUrls);
    }

    urls.push(teamUrls);
  });

  return urls;
};

const getDepartmentMembersInfo = (
  team: TeamData,
  yearRange: string,
  departmentName: string,
): MemberInfo[] => {
  const imageUrls = generateUrlsForTeams(team, yearRange);
  const department = getDepartmentByName(team, departmentName);

  if (!department) {
    return [];
  }

  return department.members.map((member, index) => {
    const departmentIndex = team[0]?.departments?.findIndex(
      (d) => d.name === department.name,
    );

    if (departmentIndex !== undefined && departmentIndex !== -1)
      return {
        ...member,
        imageUrl:
          imageUrls[0]?.[departmentIndex]?.[index] ?? "/images/team/none.png",
      };
    else return { ...member, imageUrl: "/images/team/none.png" };
  });
};

const shuffleArray = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j]!, array[i]!];
  }
  return array;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

// Short names, !! as they appear in dictionary !!
const departmentShortName = (departmentName: string) => {
  switch (departmentName) {
    case "Presidência":
      return "presi";
    case "Centro de Apoio ao Open Source":
      return "caos";
    case "Departamento de Marketing e Conteúdo":
      return "dmc";
    case "Departamento de Relações Externas e Merch":
      return "drem";
    case "Departamento Pedagógico":
      return "ped";
    case "Departamento Recreativo":
      return "rec";
    case "Mesa da Assembleia Geral":
      return "MAG";
    case "Conselho Fiscal":
      return "CF";
    default:
      return "caos";
  }
};

function getMonthAbbreviation(date: Date, lang: string): string {
  return date
    .toLocaleString(lang, { month: "short" })
    .replace(".", "")
    .toUpperCase();
}

function getDay(date: Date): number {
  return date.getDate();
}

function getDaysInMonth(date: Date): Date[] {
  const year = date.getFullYear();
  const month = date.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days: Date[] = [];
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(new Date(year, month, day));
  }

  return days;
}

function getMonthDays(date: Date): Date[] {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const days: Date[] = [];

  const daysFromPrevMonth = firstDay.getDay();
  for (let i = daysFromPrevMonth; i > 0; i--) {
    days.push(new Date(year, month, -i + 1));
  }

  days.push(...getDaysInMonth(date));

  const daysFromNextMonth = 7 - lastDay.getDay() - 1;
  for (let i = 1; i <= daysFromNextMonth; i++) {
    days.push(new Date(year, month + 1, i));
  }

  return days;
}

function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

function isWithinRange(date: Date, start: Date, end: Date): boolean {
  const normalizedDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  );
  const normalizedStart = new Date(
    start.getFullYear(),
    start.getMonth(),
    start.getDate(),
  );
  const normalizedEnd = new Date(
    end.getFullYear(),
    end.getMonth(),
    end.getDate(),
  );

  return normalizedDate >= normalizedStart && normalizedDate <= normalizedEnd;
}

function isAllDayEvent(event: { start: Date; end: Date }): boolean {
  const start = new Date(event.start);
  const end = new Date(event.end);
  return (
    start.getHours() === 0 &&
    start.getMinutes() === 0 &&
    end.getHours() === 0 &&
    end.getMinutes() === 0
  );
}

function isMultiDayEvent(event: { start: Date; end: Date }): boolean {
  const start = new Date(event.start);
  const end = new Date(event.end);
  return (
    start.getHours() === 0 &&
    start.getMinutes() === 0 &&
    end.getHours() === 23 &&
    end.getMinutes() === 59 &&
    !isSameDay(start, end)
  );
}

function formatDate(date: Date, locale: string): string {
  const d = new Date(date);
  return d
    .toLocaleDateString(locale, {
      day: "2-digit",
      month: "2-digit",
    })
    .replace(/\//g, "/");
}

export {
  generateYearRanges,
  generateUrlsForTeams,
  fetchTeamData,
  getTeamByName,
  getDepartmentByName,
  classNames,
  getDepartmentMembersInfo,
  departmentShortName,
  shuffleArray,
  getMonthAbbreviation,
  getDay,
  getDaysInMonth,
  getMonthDays,
  isSameDay,
  isWithinRange,
  isAllDayEvent,
  isMultiDayEvent,
  formatDate,
};
