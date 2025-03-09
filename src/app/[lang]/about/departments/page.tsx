"use client";

import DepartmentCard from "@/components/department-card";
import AppLink from "@/components/link";
import PromotionalCard from "@/components/promotional-card";
import { useDictionary } from "@/contexts/dictionary-provider";
import { horizontalPadding, verticalPadding } from "@/lib/styling";
import { CardType, type TeamData } from "@/lib/types";
import { departmentShortName, fetchTeamData } from "@/lib/utils";
import { useState, useEffect } from "react";

type shortNames = "caos" | "dmc" | "drem" | "ped" | "rec";

export default function Departments() {
  const dict = useDictionary();

  const currentYearRange = "2024-2025";
  const [teamData, setTeamData] = useState<TeamData>([]);

  useEffect(() => {
    const aux = async () => {
      const data: TeamData = await fetchTeamData(currentYearRange);
      setTeamData(data);
    };
    void aux();
  }, [currentYearRange]);

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



  // List of department names, !! as they appear in team data !!
  const departmentNames = [
    "Centro de Apoio ao Open Source",
    "Departamento de Marketing e Conteúdo",
    "Departamento de Relações Externas e Merch",
    "Departamento Pedagógico",
    "Departamento Recreativo",
  ];

  return (
    <main
      className={`flex flex-col gap-8 sm:gap-12 ${horizontalPadding} ${verticalPadding}`}
    >
      <div className="flex flex-col gap-4 px-2 md:px-5">
        <AppLink arrow="back" title={dict.button.back} href={"/about"} />
        <h1 className="font-title text-3xl font-medium">
          {dict.about.departments.title}
        </h1>
        <p>{dict.about.departments.description}</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
        {departmentNames.map((departmentName) => (
          <DepartmentCard
            key={departmentName}
            name={departmentName}
            shortName={departmentShortName(departmentName) as shortNames}
            gradientFrom={gradient(departmentShortName(departmentName))[0] ?? ""}
            gradientTo={gradient(departmentShortName(departmentName))[1] ?? ""}
            hideTeam={false}
            teamData={teamData}
            yearRange={currentYearRange}
          />
        ))}
      </div>
      <div className="px-2 md:px-5">
        <PromotionalCard type={CardType.Collaborate} />
      </div>
    </main>
  );
}
