"use client";

import AboutSection from "@/components/about-section";
import AboutSectionLayout from "@/components/about-section-layout";
import AppLink from "@/components/link";
import ProjectCard from "@/components/project-card";
import { useDictionary } from "@/contexts/dictionary-provider";

export default function About() {
  const dict = useDictionary();

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col bg-white">
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
        <AboutSection>
          <div className="border-t border-black/10 pt-10">
            <h2 className="w-full font-title text-3xl font-medium md:mb-4 md:mt-8 md:text-4xl">
              {dict.about.explore.title}
            </h2>
            <div className="mb-20 mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-4">
              {dict.about.explore.items.map((item) => (
                <div key={item.title}>
                  <h3 className="text-l pb-1 font-bold md:text-xl">
                    {item.title}
                  </h3>
                  <p className="font-normal md:text-xl">{item.description}</p>
                  {item.links.map((link, index) => {
                    const linkColor = "color" in link ? link.color : "primary";
                    return (
                      <div key={index} className="pt-2">
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
      </div>
    </>
  );
}
