"use client";

import AboutSectionLayout from "@/components/about-section-layout";
import ProjectCard from "@/components/project-card";
import { useDictionary } from "@/contexts/dictionary-provider";

const About = () => {
  const dict = useDictionary()
  return (
    <>
      <div className="flex flex-col">
        <AboutSectionLayout title={dict.about.projects.title} subtitle={dict.about.projects.description} href="#">
          <div
              className="flex flex-col md:flex-row md:gap-4 md:overflow-auto"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <ProjectCard type="sei"/>
              <ProjectCard type="bugsbyte"/>
              <ProjectCard type="coderdojo"/>
            </div>
        </AboutSectionLayout>
      </div>
    </>
  );
};

export default About;
