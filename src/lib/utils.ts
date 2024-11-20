import { Member, TeamData } from "@/lib/types";

const generateYearRanges = (startYear: number, endYear: number): string[] => {
  const yearRanges = [];
  for (let year = endYear; year >= startYear; year--) {
    yearRanges.push(`${year}-${year + 1}`);
  }

  return yearRanges;
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

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export { generateYearRanges, generateUrlsForTeams, classNames };
