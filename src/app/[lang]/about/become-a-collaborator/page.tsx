"use client";

import Avatar from "@/components/avatar";
import {
  departmentShortName,
  fetchTeamData,
  generateUrlsForTeams,
  getDepartmentMembersInfo,
} from "@/lib/utils";
import { useEffect, useState } from "react";
import { useDictionary } from "@/contexts/dictionary-provider";
import type { MemberInfo, TeamData } from "@/lib/types";
import DepartmentsList, {
  departmentNames,
  gradient,
  shortName,
} from "@/components/departments-list";
import CollaboratorLayout from "@/components/become-a-collaborator-layout";
import Image from "next/image";
import Button from "@/components/button";
import CallSubscribe from "@/components/call-subscribe";
import AboutSection from "@/components/about-section";
import AppLink from "@/components/link";
import Carousel from "@/components/carousel";
import DepartmentCard from "@/components/department-card";

interface MemberDep extends MemberInfo {
  department: string;
}

export default function BecomeACollaborator() {
  const dict = useDictionary();

  const [imageUrls, setImageUrls] = useState<(string | string[])[][]>([]);
  const [teamData, setTeamData] = useState<TeamData>([]);
  const [members, setMembers] = useState<MemberDep[]>([]);

  const yearRange = "2024-2025";

  useEffect(() => {
    const aux = async () => {
      const departmentNames = [
        "Presidência",
        "Centro de Apoio ao Open Source",
        "Departamento de Marketing e Conteúdo",
        "Departamento de Relações Externas e Merch",
        "Departamento Pedagógico",
        "Departamento Recreativo",
        "Vogais",
      ];

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
      <section className="relative grid min-h-[380px] grid-flow-row items-start bg-blue text-white lg:grid-flow-col lg:items-start">
        <div className="max-w-1/2 layout-p-y flex flex-col gap-8 px-5 sm:pr-0 md:px-16 lg:pl-28 2xl:pl-60">
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
        <div className="flex w-full flex-col items-stretch gap-4 bg-white py-10 sm:py-12">
          {/* Title */}
          <div className="flex items-center gap-4 px-6 sm:mr-6 sm:px-0">
            <div className="layout-p-x flex h-fit flex-1 items-center justify-start">
              <span className="w-fit origin-right select-none whitespace-nowrap font-title text-2xl font-medium sm:text-3xl">
                {dict.about.become_a_collaborator.choose_department.title}
              </span>
            </div>
          </div>
          {/* Subtitle */}
          <div className="px-6 sm:px-0">
            <div className="layout-p-x">
              <span className="text-start">
                {dict.about.become_a_collaborator.choose_department.description}
              </span>
              <div className="mt-4 block sm:block">
                <AppLink
                  title={dict.button.go_to_departments}
                  href="/departments"
                  color="blue"
                />
              </div>
            </div>
          </div>
          {/* Content (Scrollable) */}
          <div className="relative hidden xl:block">
            <div className="mt-7 w-full sm:mt-10">
              <div className="no-scrollbar mb-8 flex h-[302px] w-full overflow-y-hidden overflow-x-scroll px-10">
                <DepartmentsList
                  hideTeam
                  hideShortName
                  className="flex w-fit gap-3"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_100%_70%_at_50%_0%,_var(--tw-gradient-stops))] from-transparent from-40% via-white/80 via-80% to-white to-100%"></div>
            </div>
          </div>
          {/* Mobile Carousel */}
          <div className="relative h-72 overflow-hidden xl:hidden">
            <Carousel
              pagination
              overflow
              loop
              items={departmentNames.map((departmentName, index) => (
                <div
                  key={index}
                  className="pointer-events-none flex h-[350px] select-none"
                >
                  <DepartmentCard
                    key={departmentName}
                    name={departmentName}
                    shortName={shortName(departmentName)}
                    gradientFrom={gradient(shortName(departmentName))[0] ?? ""}
                    gradientTo={gradient(shortName(departmentName))[1] ?? ""}
                    hideTeam
                    hideShortName
                    teamData={teamData}
                    yearRange={yearRange}
                    shortDescription
                  />
                </div>
              ))}
            />
            <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_100%_70%_at_50%_0%,_var(--tw-gradient-stops))] from-transparent from-40% via-white/80 via-80% to-white to-100%"></div>
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
