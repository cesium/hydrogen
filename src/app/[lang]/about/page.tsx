"use client";

import AboutSectionLayout from "@/components/about-section-layout";
import { useDictionary } from "@/contexts/dictionary-provider";
import Avatar from "@/components/avatar";
import type { MemberInfo, TeamData } from "@/lib/types";
import { useEffect, useState } from "react";
import { departmentShortName, getDepartmentMembersInfo, generateUrlsForTeams } from "@/lib/utils";
import { fetchTeamData } from "@/lib/utils";

interface MemberDep extends MemberInfo {
  department: string;
}

export default function About() {

  const dict = useDictionary();

  const [teamData, setTeamData] = useState<TeamData>([]);
  const [members, setMembers] = useState<MemberDep[]>([]);
  const [imageUrls, setImageUrls] = useState<(string | string[])[][]>([]);

  const yearRange = "2024-2025";
  
  // List of department names, !! as they appear in team data !!
  const departmentNames = [
    "Presidência",
    "Centro de Apoio ao Open Source",
    "Departamento de Marketing e Conteúdo",
    "Departamento de Relações Externas e Merch",
    "Departamento Pedagógico",
    "Departamento Recreativo",
    "Vogais"
  ];

  useEffect(() => {
    const aux = async () => {
      const team: TeamData = await fetchTeamData(yearRange);
      setTeamData(team);
      
      const urls = generateUrlsForTeams(team, yearRange);
      setImageUrls(urls);

      const membersData: MemberDep[] = []; 

      console.log(departmentNames)
      
      departmentNames.forEach((departmentName, index) => {
        console.log("Processing department:", departmentName);
        const departmentData = getDepartmentMembersInfo(team, yearRange, departmentName);
        console.log(departmentData);
        
        const depShortName = (index != 0 && index != 6) ? departmentShortName(departmentName).toUpperCase() : "";

        const membersWithDep = departmentData.map((member) => ({
          ...member,
          department: depShortName,
        }));
        
        membersData.push(...membersWithDep);
      });
      setMembers(membersData);
    };
    void aux();
  }, [yearRange]);


  
  return (
    <>
      <div className="flex flex-col">
        <AboutSectionLayout
          title={dict.about.team.title}
          //titleOrientation="vertical"
          subtitle="O CeSIUM não existiria sem a nossa equipa incrível, que trabalha todos os dias para manter o núcleo a funcionar e tornar os anos dos estudantes no curso únicos. Conhece-a aqui."
          //linkName="see_team"
          //linkPos="after"
          href="/about/team"
        >
          <div className="flex gap-7 w-full overflow-scroll no-scrollbar">
            {teamData.map((team, index) => (
              index == 0 ? members.map((member) => (
                <Avatar
                key={member.name}
                src={member.imageUrl}
                name={member.name}
                role={member.department ? `${member.department} • ${member.role}` : member.role}
                className="rounded-full font-normal"
                imageClassName="size-24 md:size-32 rounded-full"
                />
          
            )) : team?.members?.map((member, memberIndex) => (
              <Avatar
              key={member.name}
              src={
                imageUrls[index]?.[0]?.[memberIndex] ??
                "/images/none.png"
              }
              name={member.name}
              role={`${team?.name} • ${member.role}`}
              className="rounded-full"
              imageClassName="size-24 md:size-32 rounded-full"
              />))
            ))}
            
          </div>
        </AboutSectionLayout>
      </div>
    </>
  );
};
