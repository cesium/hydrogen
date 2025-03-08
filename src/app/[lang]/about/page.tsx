"use client";

import AboutSection from "@/components/about-section";
import AboutSectionLayout from "@/components/about-section-layout";
import AppLink from "@/components/link";
import ProjectCard from "@/components/project-card";
import { useDictionary } from "@/contexts/dictionary-provider";
import Carousel from "@/components/carousel";
import Image from "next/image";
import { horizontalPadding } from "@/lib/styling";

export default function About() {
  const dict = useDictionary();
  const dictAbout = dict.about;
  const images = dictAbout.sections.cesium.images;
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
