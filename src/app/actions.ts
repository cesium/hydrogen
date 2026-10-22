"use server";

import type {
  Member,
  TeamData,
  DocumentsProps,
  DocumentsData,
} from "@/lib/types";
import { unstable_cache } from "next/cache";

const S3_BUCKET_URL = "https://assets.hydrogen.cesium.pt";

const isYearBefore2016 = (yearRange: string) => {
  const firstYearStr = yearRange.split("-")[0];
  const year = firstYearStr ? parseInt(firstYearStr, 10) : NaN;
  return year < 2016;
};

const generateImageUrl = (
  yearRange: string,
  name: string,
  count: number,
): string => {
  return `${S3_BUCKET_URL}/team-photos/${yearRange}/${name}${count ? count : ""}.jpg`;
};

const generateForMember = (member: Member, yearRange: string) => {
  const nameCount: Record<string, number> = {};

  const baseName = member.name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "")
    .toLowerCase();
  const count = nameCount[baseName] ?? 0;
  nameCount[baseName] = count + 1;

  return generateImageUrl(yearRange, baseName, count);
};

const buildDocumentUrl = (yearSelected: string, documentName: string) => {
  return `${S3_BUCKET_URL}/documents/${yearSelected}/${documentName}.pdf`;
};

export const fetchTeamData = (currentYear: string) =>
  unstable_cache(
    async (): Promise<TeamData> => {
      try {
        const response = await fetch(
          `${S3_BUCKET_URL}/data/teams/${currentYear}/teams.json`,
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data: TeamData = (await response.json()) as TeamData;

        if (!isYearBefore2016(currentYear)) {
          data = data.map((team) => ({
            ...team,
            members: (team.members = team.members?.map((member) => ({
              ...member,
              imageUrl: (member.imageUrl = generateForMember(
                member,
                currentYear,
              )),
            }))),
            departments: team.departments?.map((department) => ({
              ...department,
              members: department.members?.map((member) => ({
                ...member,
                imageUrl: (member.imageUrl = generateForMember(
                  member,
                  currentYear,
                )),
              })),
            })),
          }));
        }

        return data;
      } catch (error) {
        console.error("Error fetching team data:", error);
        return [];
      }
    },
    ["teamData", currentYear],
    { revalidate: 60 * 60 * 24, tags: ["teamData"] }, // 1 day
  )();

export const fetchDocumentsData = (
  currentYear: string,
): Promise<DocumentsData> =>
  unstable_cache(
    async (): Promise<DocumentsData> => {
      try {
        const response = await fetch(
          `${S3_BUCKET_URL}/documents/${currentYear}/documents.json`,
        );
        if (!response.ok) {
          throw new Error(`HTTP Error: status ${response.status}`);
        }
        const documents = (await response.json()) as DocumentsProps;

        return documents.map(({ documentName, ...metadata }) => ({
          ...metadata,
          documentUrl: buildDocumentUrl(currentYear, documentName),
        }));
      } catch (error) {
        console.log("Error fetching documents data: ", error);
        return [];
      }
    },
    ["documentsData", currentYear],
    { revalidate: 60 * 60 * 24, tags: ["documentsData"] },
  )();
