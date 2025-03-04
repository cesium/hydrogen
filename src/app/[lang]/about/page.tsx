"use client";

import AboutSectionLayout from "@/components/about-section-layout";
import { useDictionary } from "@/contexts/dictionary-provider";
import ProjectCard from "@/components/project-card";
import DepartmentsList from "@/components/departments-list";

export default function About() {
  const dict = useDictionary();
  return (
    <main>
      <AboutSectionLayout
        linkName="see_more"
        title={dict.about.departments.title}
        subtitle={dict.about.departments.subtitle}
        href="/about/departments"
      >
        <DepartmentsList
          hideTeam
          className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2"
        />
      </AboutSectionLayout>
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
    </main>
  );
}
