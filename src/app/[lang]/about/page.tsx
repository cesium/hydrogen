"use client";

import AboutSection from "@/components/about-section";
import Carousel from "@/components/carousel";
import { useDictionary } from "@/contexts/dictionary-provider";
import DepartmentsList, {
  departmentNames,
  gradient,
  shortName,
} from "@/components/departments-list";
import DepartmentCard from "@/components/department-card";
import AboutSectionLayout from "@/components/about-section-layout";
import AppLink from "@/components/link";
import ProjectCard from "@/components/project-card";
import Avatar from "@/components/avatar";
import type { Member } from "@/lib/types";
import { useEffect, useState } from "react";
import { departmentShortName } from "@/lib/utils";
import Image from "next/image";
import { scrollTo, useScrollState } from "@/contexts/scrollstate-provider";
import Markdown from "markdown-to-jsx";
import { useTeamData, useTeamDataUtils } from "@/contexts/team-data-provider";

interface MemberDep extends Member {
  department: string;
}

export default function About() {
  const dict = useDictionary();
  const dictAbout = dict.about;
  const images = dictAbout.sections.cesium.images;
  const [members, setMembers] = useState<MemberDep[]>([]);
  const { isScrolledTop } = useScrollState();
  const teamData = useTeamData();
  const { getDepartmentByName } = useTeamDataUtils();

  const heroItems = [
    <div
      key="title"
      className="pointer-events-none flex h-full select-none items-center text-4xl lg:max-w-[50%] xl:text-5xl"
    >
      <Markdown
        options={{
          overrides: {
            strong: {
              props: {
                className: "font-bold text-black font-medium",
              },
            },
          },
        }}
        className="bg-gradient-to-r from-black/50 via-black/25 to-black/50 bg-clip-text font-title font-medium text-transparent"
      >
        {dict.about.sections.hero.title}
      </Markdown>
    </div>,
    <div
      key="subtitle"
      className="pointer-events-none flex select-none flex-col justify-center lg:max-w-[50%]"
    >
      <div className="text-justify text-[#6E6E6E]">
        <p className="h-fit">{dict.about.sections.hero.description}</p>
      </div>
      <div className="mt-3 text-right text-black lg:mt-5">
        <p>Pedro Rangel Henriques</p>
        <p>{dict.about.sections.hero.subtitle}</p>
      </div>
    </div>,
  ];

  useEffect(() => {
    const aux = async () => {
      const teamNames = ["Presidência", ...departmentNames, "Vogais"];

      const membersData: MemberDep[] = [];

      teamNames.forEach((departmentName, index) => {
        const departmentData =
          getDepartmentByName(departmentName)?.members ?? [];

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
  }, [teamData, getDepartmentByName]);

  return (
    <main>
      <AboutSection>
        <section className="flex h-[calc(100dvh-72px)] w-full flex-col justify-center md:h-[calc(100dvh-94px)]">
          {/* Desktop Hero */}
          <div className="hidden h-full items-center justify-center gap-10 lg:flex">
            {heroItems.map((item, _) => item)}
          </div>
          {/* Mobile Hero */}
          <div className="flex h-full items-center lg:hidden">
            <Carousel
              autoplay={25000}
              pagination
              items={heroItems.map((item, index) => (
                <div
                  key={index}
                  className="flex h-full items-center justify-center"
                >
                  {item}
                </div>
              ))}
            />
          </div>
          {/* See More */}
          <button
            onClick={() => scrollTo(window.innerHeight - 72)}
            className={`mb-8 flex h-14 flex-col items-center justify-center gap-1 transition-opacity duration-300 ${isScrolledTop ? "opacity-100" : "opacity-0"}`}
          >
            <p>{dict.button.swipe}</p>
            <span className="material-symbols-outlined">arrow_downward</span>
          </button>
        </section>
      </AboutSection>
      {/* "What is CeSIUM?" */}
      <section className="flex flex-col items-center gap-4 border-b border-black/10 bg-muted py-12 text-center sm:gap-6">
        <p className="font-title text-2xl font-medium sm:text-3xl">
          {dictAbout.sections.cesium.title}
        </p>
        <p className="layout-p-x">{dictAbout.sections.cesium.subtitle}</p>
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
                  width={1000}
                  height={1000}
                  alt={image.alt}
                  className="h-[237px] w-full rounded-xl object-cover sm:h-[367px] sm:max-w-full"
                />
              </div>
            ))}
          />
        </div>
        <p className="layout-p-x">{dictAbout.sections.cesium.description}</p>
      </section>
      {/* Team */}
      <AboutSectionLayout
        title={dict.about.sections.team.title ?? ""}
        titleOrientation="vertical"
        subtitle={dict.about.sections.team.subtitle ?? ""}
        linkName="see_team"
        linkPos="after"
        href="/team"
        overflows
      >
        <div className="flex w-full gap-7">
          {teamData.map((team, index) =>
            index == 0
              ? members.map((member) => (
                  <Avatar
                    key={member.name}
                    src={member.imageUrl ?? "/images/team/none.webp"}
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
              : team?.members?.map((member) => (
                  <Avatar
                    key={member.name}
                    src={member.imageUrl ?? "/images/team/none.webp"}
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
      {/* Departments */}
      <AboutSectionLayout
        linkName="see_more"
        titleOrientation="vertical"
        title={dict.about.departments.title}
        subtitle={dict.about.departments.subtitle}
        href="/departments"
        dark
      >
        <DepartmentsList
          hideTeam
          hideShortName
          className="hidden grid-cols-1 gap-4 sm:gap-5 md:grid md:grid-cols-2 2xl:grid-cols-3"
        />
        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel
            autoplay={2000}
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
                  shortDescription
                />
              </div>
            ))}
          />
        </div>
      </AboutSectionLayout>
      {/* Projects */}
      <AboutSectionLayout
        titleOrientation="vertical"
        title={dict.about.projects.title}
        subtitle={dict.about.projects.description}
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
                        color={linkColor}
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
