"use client";

import AboutSectionLayout from "@/components/about-section-layout";
import Avatar from "@/components/avatar";
import { departmentShortName, fetchTeamData, generateUrlsForTeams, getDepartmentMembersInfo } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useDictionary } from "@/contexts/dictionary-provider";
import { MemberInfo, TeamData } from "@/lib/types";
import DepartmentsList from "@/components/departments-list";
import CollaboratorLayout from "@/components/become-a-collaborator-layout";

interface MemberDep extends MemberInfo {
  department: string;
}

export default function BecomeACollaborator() {

  const dict= useDictionary();
  const dictBecomeCollaborator = dict.about.explore.items[3]?.become_collaborator;
  const departmentNames = [
    "Presidência",
    "Centro de Apoio ao Open Source",
    "Departamento de Marketing e Conteúdo",
    "Departamento de Relações Externas e Merch",
    "Departamento Pedagógico",
    "Departamento Recreativo",
    "Vogais",
  ];

  const [imageUrls, setImageUrls] = useState <(string | string [])[][]> ([]); 
  const [teamData, setTeamData] = useState <TeamData>([]);
  const [members, setMembers] = useState<MemberDep[]>([]);

  const yearRange ="2024-2025";

  useEffect (() => {
      const aux = async () => { 

        const team: TeamData = await fetchTeamData(yearRange);
        setTeamData(team);
        
        const urls = generateUrlsForTeams (team, yearRange);
        setImageUrls(urls);

        const membersData: MemberDep[] = [];

      departmentNames.forEach((departmentName, index) => {
        const departmentData = getDepartmentMembersInfo(
          team,
          yearRange,
          departmentName,
        );

        const depShortName =
          index != 0 && index != 6
            ? departmentShortName(departmentName).toUpperCase()
            : "";

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

  return <main>
    <CollaboratorLayout 
    title = {dictBecomeCollaborator?.team.title ?? "Error"}
    subtitle = {dictBecomeCollaborator?.team.subtitle ?? "Error"}
    linkName = "go_to_team"
    href = {dictBecomeCollaborator?.team.href ?? "Error"} 
    overflows 
    linkColor ={dictBecomeCollaborator?.team.color == "blue"? "blue": "primary"}
    dark
    >
      <div className="flex w-full gap-5 justify-evenly">
          {teamData.map((team, index) =>
            index == 0
              ? members.map((member) => (
                  <Avatar
                    key={member.name}
                    src={member.imageUrl}
                    className="rounded-full font-normal"
                    imageClassName="size-20 md:size-2buns5 rounded-full "
                    style="style2"
                  />
                ))
              : team?.members?.map((member, memberIndex) => (
                  <Avatar
                    key={member.name}
                    src={
                      imageUrls[index]?.[0]?.[memberIndex] ?? "/images/none.png"
                    }
                    className="rounded-full"
                    imageClassName="size-15 md:size-20 rounded-full"
                    style="style2"
                  />  
                )),
          )}
      </div>
      </CollaboratorLayout>
      <div className=" w-full ">
        <AboutSectionLayout
          title={dictBecomeCollaborator?.choose_department.title ?? "Error"}
          subtitle={dictBecomeCollaborator?.choose_department.subtitle ?? "Error"}
          linkName="go_to_departments"
          href={dictBecomeCollaborator?.choose_department.href ?? "Error"}
          linkColor={dictBecomeCollaborator?.choose_department.color == "blue" ? "blue" : "primary"}
        >
          <div className="h-[224px] w-full relative overflow-y-hidden ">
            <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-b from-transparent from-20% to-white"></div>
            <DepartmentsList
              hideTeam
              hideShortName
              className="flex md:flex-row flex-col justify-between"
              />
          </div>
        </AboutSectionLayout>
      </div>
    
  <div className="flex justify-center items-center w-full py-12 bg-white">
      <div className="text-center max-w-2xl">
        <h2 className="select-none whitespace-nowrap font-title text-2xl font-medium sm:text-3xl text-black">{dictBecomeCollaborator?.join.title ?? "Error"}</h2>
        <p className="mt-2 text-gray-600">
        {dictBecomeCollaborator?.join.subtitle ?? "Error"}
        </p>
        <div className="mt-6 space-y-3">
          <button className="px-6 py-2 bg-blue text-white font-medium rounded-lg border border-transparent transition-colors duration-300 hover:bg-white hover:text-blue hover:border-blue">
            Começar inscrição
          </button>
          <div>
            <a href="#" className="text-blue ">
              Fala connosco
            </a>
          </div>
        </div>
      </div>
    </div>
    </main>;
}