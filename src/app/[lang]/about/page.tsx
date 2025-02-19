"use client";

import AboutSectionLayout from "@/components/about-section-layout";
import { useDictionary } from "@/contexts/dictionary-provider";
import Avatar from "@/components/avatar";
import type { MemberInfo, TeamData } from "@/lib/types";
import { useEffect, useState } from "react";
import { getDepartmentMembersInfo } from "@/lib/utils";
import { fetchTeamData } from "@/lib/utils";


const About = () => {

  const dict = useDictionary();

  const [teamData, setTeamData] = useState<TeamData>([]);
  const [members, setMembers] = useState<MemberInfo[]>([]);
  const yearRange = "2024-2025";
  const name = "Centro de Apoio ao Open Source"

  useEffect(() => {
    const aux = async () => {
      const data: TeamData = await fetchTeamData(yearRange);
      setTeamData(data);
    };
    void aux();
  }, [yearRange]);

  useEffect(() => {
    const membersData: MemberInfo[] = []; 

    departmentNames.forEach((departmentName) => {
      const departmentData = getDepartmentMembersInfo(teamData, yearRange, departmentName);
      membersData.push(...departmentData);
    })
    setMembers(membersData);

  }, [teamData, yearRange, name]);

  // List of department names, !! as they appear in team data !!
  const departmentNames = [
    "Centro de Apoio ao Open Source",
    "Departamento de Marketing e Conteúdo",
    "Departamento de Relações Externas e Merch",
    "Departamento Pedagógico",
    "Departamento Recreativo",
  ];
  
  return (
    <>
      <div className="flex flex-col">
        <AboutSectionLayout
          title={dict.about.team.title}
          //titleOrientation="vertical"
          subtitle="O CeSIUM não existiria sem a nossa equipa incrível, que trabalha todos os dias para manter o núcleo a funcionar e tornar os anos dos estudantes no curso únicos. Conhece-a aqui."
          //linkName="see_team"
          //linkPos="after"
          href="#"
        >
          <div className="flex gap-7 w-full overflow-scroll no-scrollbar">
            {members.map((member, _) => (
              <Avatar
                src={member.imageUrl}
                name={member.name}
                role={` ${member.role}`}
                className="rounded-full "
                imageClassName="size-24 md:size-32 rounded-full"
                key={member.name}
              />
            ))}
          </div>
        </AboutSectionLayout>
      </div>
    </>
  );
};

export default About;
