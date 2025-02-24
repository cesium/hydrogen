"use client";

import DepartmentCard from "@/components/department-card";
import AboutSectionLayout from "@/components/about-section-layout";
import { useDictionary } from "@/contexts/dictionary-provider";
import { useEffect, useState } from "react";
import type { TeamData } from "@/lib/types";
import { fetchTeamData } from "@/lib/utils";

const departmentNames = [
  "Centro de Apoio ao Open Source",
  "Departamento de Marketing e Conteúdo",
  "Departamento de Relações Externas e Merch",
  "Departamento Pedagógico",
  "Departamento Recreativo",
];

const shortName = (name: string) => {
  switch (name) {
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

const gradient = (type: string) => {
  switch (type) {
    case "caos":
      return ["[#0085FF]/5", "[#00D1FF]/5"];
    case "dmc":
      return ["[#FF00F5]/5", "[#FF2E00]/5"];
    case "drem":
      return ["[#0500FF]/5", "[#A500DE]/5"];
    case "ped":
      return ["[#E4B12E]/20", "[#ED7950]/20"];
    case "rec":
      return ["[#03A300]/5", "[#82E700]/5"];
    default:
      return ["[#0085FF]/5", "[#00D1FF]/5"];
  }
};

const Departments = () => {
  const currentYearRange = "2024-2025";
  const [teamData, setTeamData] = useState<TeamData>([]);

  useEffect(() => {
    const aux = async () => {
      const data: TeamData = await fetchTeamData(currentYearRange);
      setTeamData(data);
    };
    void aux();
  }, [currentYearRange]);

  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
      {departmentNames.map((departmentName) => (
        <DepartmentCard
          key={departmentName}
          name={departmentName}
          shortName={shortName(departmentName)}
          gradientFrom={gradient(shortName(departmentName))[0] ?? ""}
          gradientTo={gradient(shortName(departmentName))[1] ?? ""}
          hideTeam
          teamData={teamData}
          yearRange={currentYearRange}
        ></DepartmentCard>
      ))}
    </div>
  );
};

const About = () => {
  const dict = useDictionary();

  return (
    <>
      <div className="flex flex-col">
        <div
          className="flex flex-col md:flex-row md:gap-4 md:overflow-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div
            className="flex flex-col md:flex-row md:gap-4 md:overflow-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <AboutSectionLayout
              title={dict.about.sections.departments.title}
              subtitle={dict.about.departments.short_description}
              href="/about/departments"
            >
              <Departments />
            </AboutSectionLayout>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
