"use client";

import AboutSectionLayout from "@/components/about-section-layout";
import AppLink from "@/components/link";
import ProjectCard from "@/components/project-card";
import { useDictionary } from "@/contexts/dictionary-provider";
import { useDictionary } from "@/contexts/dictionary-provider";

export default function About() {
  const dict = useDictionary();
const About = () => {
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
        <div className="pt-10 border-t border-black/10">
          <h2 className="ml-4 w-full font-title text-3xl font-medium md:mb-5 md:ml-10 md:mt-5 md:text-4xl">
            {dict.about.explore.title}
          </h2>
          <div className="mb-20 ml-4 mr-4 mt-8 grid grid-cols-2 gap-4 md:ml-10 md:mr-10 md:grid-cols-4 md:gap-4">
            <div>
              <h3 className="text-l pb-1 font-bold md:text-xl">
                {dict.about.explore.events.title}
              </h3>
              <p className="font-normal md:text-xl">
                {dict.about.explore.events.description}
              </p>
              <p className="pt-2"></p>
              <AppLink
                title={dict.about.explore.events.title}
                href="/events"
                arrow="forward"
              ></AppLink>

              <p className="pt-2"></p>
              <AppLink
                title={dict.button.open_calendarium}
                href="https://calendario.cesium.di.uminho.pt"
                arrow="outward"
              ></AppLink>
            </div>
            <div>
              <h3 className="text-l pb-1 font-semibold md:text-xl md:font-bold">
                {dict.about.explore.shop.title}
              </h3>
              <p className="text-l md:text-xl">
                {dict.about.explore.shop.description}
              </p>
              <p className="pt-2"></p>
              <AppLink
                title={dict.button.open_shop}
                href="https://store.cesium.pt"
                arrow="outward"
              ></AppLink>
            </div>
            <div>
              <h3 className="text-l pt-5 pb-1 font-semibold md:text-xl md:font-bold">
                {dict.about.explore.become_a_member.title}
              </h3>
              <p className="md:text-xl">
                {dict.about.explore.become_a_member.description}
              </p>
              <p className="pt-2"></p>
              <AppLink
                title={dict.about.explore.become_a_member.title}
                href="/about/become-a-member"
                arrow="forward"
              ></AppLink>

              <p className="pt-2"></p>
              <AppLink
                title={dict.button.partnerships}
                href="/partners"
                arrow="forward"
              ></AppLink>
            </div>
            <div>
              <h3 className="text-l pt-5 pb-1 font-semibold md:text-xl md:font-bold">
                {dict.about.explore.become_a_collaborator.title}
              </h3>
              <p className="md:text-xl">
                {dict.about.explore.become_a_collaborator.description}
              </p>
              <p className="pt-2"></p>
              <AppLink
                title={dict.about.explore.become_a_collaborator.title}
                href="/about/become-a-collaborator"
                color="blue"
                arrow="forward"
              ></AppLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}