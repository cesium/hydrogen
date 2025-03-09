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
  console.log(imageUrls)

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
          imageUrls[0]?.[departmentIndex]?.[index] ?? "/images/none.png",
      };
    else return { ...member, imageUrl: "/images/none.png" };
  });
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
      default:
        return "caos";
    }
  };

export {
  generateYearRanges,
  generateUrlsForTeams,
  fetchTeamData,
  getTeamByName,
  getDepartmentByName,
  classNames,
  getDepartmentMembersInfo,
  departmentShortName
};
