"use client";

import AboutSectionLayout from "@/components/about-section-layout";
import Avatar from "@/components/avatar";
import {
  departmentShortName,
  fetchTeamData,
  generateUrlsForTeams,
  getDepartmentMembersInfo,
} from "@/lib/utils";
import { useEffect, useState } from "react";
import { useDictionary } from "@/contexts/dictionary-provider";
import { MemberInfo, TeamData } from "@/lib/types";
import DepartmentsList from "@/components/departments-list";
import CollaboratorLayout from "@/components/become-a-collaborator-layout";
import Image from "next/image";
import Button from "@/components/button";
import CallSubscribe from "@/components/call-subscribe";
import { horizontalPadding, verticalPadding } from "@/lib/styling";
import AboutSection from "@/components/about-section";
import AppLink from "@/components/link";

interface MemberDep extends MemberInfo {
  department: string;
}

export default function BecomeACollaborator() {
  const dict = useDictionary();
  const departmentNames = [
    "Presidência",
    "Centro de Apoio ao Open Source",
    "Departamento de Marketing e Conteúdo",
    "Departamento de Relações Externas e Merch",
    "Departamento Pedagógico",
    "Departamento Recreativo",
    "Vogais",
  ];

  const [imageUrls, setImageUrls] = useState<(string | string[])[][]>([]);
  const [teamData, setTeamData] = useState<TeamData>([]);
  const [members, setMembers] = useState<MemberDep[]>([]);

  const yearRange = "2024-2025";

  useEffect(() => {
    const aux = async () => {
      const team: TeamData = await fetchTeamData(yearRange);
      setTeamData(team);

      const urls = generateUrlsForTeams(team, yearRange);
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

  return (
    <main>
      <section
        className={`relative grid min-h-[380px] grid-flow-row items-start bg-blue text-white lg:grid-flow-col lg:items-start`}
      >
        <div
          className={`max-w-1/2 flex flex-col gap-8 ${verticalPadding} px-5 sm:pr-0 md:px-16 lg:pl-28 2xl:pl-60`}
        >
          <div>
            <h1 className="text-gradient font-title text-4xl font-medium text-white/50 lg:text-5xl">
              {dict.about.become_a_collaborator.hero.title}{" "}
              <span className="text-white">CeSIUM</span>
            </h1>
          </div>
          <p className="relative z-10 text-lg">
            {dict.about.become_a_collaborator.hero.description}
          </p>
          <Button
            title={dict.about.become_a_collaborator.hero.button}
            style="style1"
            color="blue"
            as="link"
            href="https://cesium.link/f/recrutamento"
          />
        </div>
        <div className="pointer-events-none flex h-full select-none items-end justify-center sm:hidden sm:justify-end xl:flex">
          <Image
            src="/vectors/collaborator.svg"
            alt="Torna-te membro"
            height={331}
            width={528}
            className="h-fit w-[323px] lg:w-[528px]"
          />
        </div>
        <div className="pointer-events-none absolute bottom-0 right-0 hidden h-full select-none items-end justify-center sm:flex sm:justify-end xl:hidden">
          <Image
            src="/vectors/collaborator.svg"
            alt="Torna-te colaborador"
            height={331}
            width={528}
            className="h-fit w-[323px]"
          />
        </div>
      </section>
      <CollaboratorLayout
        title={dict.about.become_a_collaborator.join_team.title}
        subtitle={dict.about.become_a_collaborator.join_team.description}
        linkName="go_to_team"
        href="/team"
        overflows
        linkColor="blue"
      >
        <div className="flex w-full justify-evenly gap-5">
          {teamData.map((team, index) =>
            index == 0
              ? members.map((member) => (
                  <Avatar
                    key={member.name}
                    src={member.imageUrl}
                    className="rounded-full font-normal"
                    imageClassName="size-20 rounded-full "
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
      <AboutSection stretch>
        <div className="relative flex w-full flex-col items-stretch gap-4 py-10 sm:py-12">
          {/* Title */}
          <div className="flex items-center gap-4 px-6 sm:mr-6 sm:px-0">
            <div
              className={`flex h-fit flex-1 items-center justify-start ${horizontalPadding}`}
            >
              <span className="w-fit origin-right select-none whitespace-nowrap font-title text-2xl font-medium sm:text-3xl">
                {dict.about.become_a_collaborator.choose_department.title}
              </span>
            </div>
          </div>
          {/* Subtitle */}
          <div className="overflow-auto px-6 sm:px-0">
            <div className={`${horizontalPadding}`}>
              <span className="text-start">
                {dict.about.become_a_collaborator.choose_department.description}
              </span>
              <div className="mt-4 block sm:block">
                <AppLink
                  title={dict.button["go_to_departments"]}
                  href="/departments"
                  color="blue"
                />
              </div>
            </div>
            {/* Content (Scrollable) */}
            <div className="relative">
              <div className="no-scrollbar mt-7 overflow-y-auto overflow-x-scroll sm:mt-10">
                <div className="relative mb-8 h-[224px] w-full overflow-hidden">
                  <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-transparent from-20% to-white"></div>
                  <DepartmentsList
                    hideTeam
                    hideShortName
                    className="-mx-8 flex flex-col justify-between gap-8 md:flex-row"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AboutSection>
      <div className="my-12">
        <CallSubscribe
          title={dict.callsub.collaborators.title}
          description={dict.callsub.collaborators.desc}
          buttonText={dict.callsub.button}
          buttonURL="https://cesium.link/f/recrutamento"
          buttonColor="blue"
          footerText={dict.callsub.footer}
        />
      </div>
    </main>
  );
}
