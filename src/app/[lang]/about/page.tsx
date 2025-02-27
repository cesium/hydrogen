"use client";
import AboutSectionLayout from "@/components/about-section-layout";
import ProjectCard from "@/components/project-card";
import { useDictionary } from "@/contexts/dictionary-provider";

function About() {
  const dict = useDictionary();
  return (
    <>
      <div className="flex flex-col">
        <AboutSectionLayout
          linkName="see_more"
          titleOrientation="vertical"
          title={dict.about.projects.title}
          subtitle={dict.about.projects.description}
          href="/projects"
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
      </div>
    </>
  );
}