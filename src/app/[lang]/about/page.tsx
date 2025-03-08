"use client";

import AboutSection from "@/components/about-section";
import AboutSectionLayout from "@/components/about-section-layout";
import AppLink from "@/components/link";
import ProjectCard from "@/components/project-card";
import { useDictionary } from "@/contexts/dictionary-provider";

export default function About() {
  const dict = useDictionary();

  return (
    <main>
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
        <AboutSection>
          <div className="flex flex-col gap-5 py-10 md:py-16">
            <h2 className="w-full font-title text-2xl md:text-3xl font-medium">
              {dict.about.explore.title}
            </h2>
            <div className="grid grid-cols-2 gap-4 md:gap-5 md:grid-cols-4">
              {dict.about.explore.items.map((item) => (
                <div key={item.title} className="flex flex-col gap-2 sm:gap-3">
                  <h3 className="font-bold">
                    {item.title}
                  </h3>
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
