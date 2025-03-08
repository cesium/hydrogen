"use client";

import AboutSectionLayout from "@/components/about-section-layout";
import AboutSection from "@/components/about-section";
import AboutSectionLayout from "@/components/about-section-layout";
import AppLink from "@/components/link";
import ProjectCard from "@/components/project-card";
import { useDictionary } from "@/contexts/dictionary-provider";
import Avatar from "@/components/avatar";
import type { MemberInfo, TeamData } from "@/lib/types";
import { useEffect, useState } from "react";
import {
  departmentShortName,
  getDepartmentMembersInfo,
  generateUrlsForTeams,
} from "@/lib/utils";
import { fetchTeamData } from "@/lib/utils";

interface MemberDep extends MemberInfo {
  department: string;
}

export default function About() {
  const dict = useDictionary();
  const dictAbout = dict.about;
  const images = dictAbout.sections.cesium.images;
        
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
    "Vogais",
  ];

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [yearRange]);
    
  return (
    <main>
      {/* "What is CeSIUM?" */}
      <section
        className={`flex flex-col items-center gap-4 border-b border-black/10 bg-black/5 py-12 text-center sm:gap-6`}
      >
        <p className="font-title text-2xl font-medium sm:text-3xl">
          {dictAbout.sections.cesium.title}
        </p>
        <p className={horizontalPadding}>
          {dictAbout.sections.cesium.subtitle}
        </p>
        <div className="w-full overflow-hidden pt-4 sm:pt-6">
          <Carousel
            autoplay={2000}
            pagination
            overflow
            loop
            items={images.map((image, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={image.src}
                  width={490}
                  height={367}
                  alt={image.alt}
                  className="h-[237px] w-full rounded-xl object-cover sm:h-[367px] sm:max-w-full"
                />
              </div>
            ))}
          />
        </div>
        <p className={horizontalPadding}>
          {dictAbout.sections.cesium.description}
        </p>
      </section>
      {/* Team */}
      <AboutSectionLayout
        title={dict.about.sections.team.title ?? ""}
        titleOrientation="vertical"
        subtitle={dict.about.sections.team.subtitle ?? ""}
        linkName="see_team"
        linkPos="after"
        href="/about/team"
        overflows
      >
        <div className="flex w-full gap-7">
          {teamData.map((team, index) =>
            index == 0
              ? members.map((member) => (
                  <Avatar
                    key={member.name}
                    src={member.imageUrl}
                    name={member.name}
                    role={
                      member.department
                        ? `${member.department} • ${member.role}`
                        : member.role
                    }
                    className="rounded-full font-normal"
                    imageClassName="size-24 md:size-32 rounded-full"
                    style="style2"
                  />
                ))
              : team?.members?.map((member, memberIndex) => (
                  <Avatar
                    key={member.name}
                    src={
                      imageUrls[index]?.[0]?.[memberIndex] ??
                      "/images/none.png"
                    }
                    name={member.name}
                    role={`${departmentShortName(team?.name)} • ${member.role}`}
                    className="rounded-full"
                    imageClassName="size-24 md:size-32 rounded-full"
                    style="style2"
                  />
                )),
          )}
        </div>
      </AboutSectionLayout>
      {/* Projects */}
      <AboutSectionLayout
        linkName="see_more"
        titleOrientation="vertical"
        title={dict.about.projects.title}
        subtitle={dict.about.projects.description}
        href="/projects"
        overflows
      >
        <div
          className="flex flex-col md:flex-row md:gap-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <ProjectCard type="sei" />
          <ProjectCard type="bugsbyte" />
          <ProjectCard type="coderdojo" />
        </div>
      </AboutSectionLayout>
      {/* Explore Further */}
      <AboutSection dark>
        <div className="flex flex-col gap-5 py-10 md:py-16">
          <h2 className="w-full font-title text-2xl font-medium md:text-3xl">
            {dict.about.explore.title}
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
            {dict.about.explore.items.map((item) => (
              <div key={item.title} className="flex flex-col gap-2 sm:gap-3">
                <h3 className="font-bold">{item.title}</h3>
                <p>{item.description}</p>
                {item.links.map((link, index) => {
                  const linkColor = "color" in link ? link.color : "primary";
                  return (
                    <div key={index}>
                      <AppLink
                        title={link.title}
                        href={link.href}
                        arrow={link.arrow as "back" | "forward" | "outward"}
                        color={linkColor as "primary" | "blue"}
                      />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </AboutSection>
    </main>
  );
}
