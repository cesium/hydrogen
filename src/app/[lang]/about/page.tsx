"use client";

import ProjectCard from "@/components/project-card";

const About = () => {
  return (
    <>
      <div className="flex flex-col">
        <div
          className="flex flex-col md:flex-row md:gap-4 md:overflow-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <ProjectCard type="sei" />
          <ProjectCard type="bugsbyte" />
          <ProjectCard type="coderdojo" />
        </div>
      </div>
    </>
  );
};

export default About;
