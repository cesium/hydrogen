"use client";

import { useDictionary } from "@/contexts/dictionary-provider";
import Image from "next/image";
import AppLink from "./link";

interface ProjectProps {
  type: string;
}

const ProjectCard = ({ type }: ProjectProps) => {
  const dict = useDictionary();

  const info = () => {
    switch (type) {
      case "sei":
        return {
          src: "/logo/sei.svg",
          alt: "SEI Logo",
          gradient_color: "rgba(35,11,183,0.10)",
          ref: "https://seium.org/",
        };
      case "bugsbyte":
        return {
          src: "/logo/bugsbyte.svg",
          alt: "BugsByte Logo",
          gradient_color: "rgba(120,176,69,0.25)",
          ref: "https://bugsbyte.org/",
        };
      case "coderdojo":
        return {
          src: "/logo/coderdojo.svg",
          alt: "CoderDojo Logo",
          gradient_color: "#722ed125",
          ref: "https://coderdojobraga.org/",
        };
      default:
        return {
          src: "/logo/sei.svg",
          alt: "SEI Logo",
          gradient_color: "rgba(35,11,183,0.10)",
          ref: "https://seium.org/",
        };
    }
  };

  const getCardIndex = () => {
    switch (type) {
      case "sei":
        return 0;
      case "bugsbyte":
        return 1;
      case "coderdojo":
        return 2;
      default:
        return 0;
    }
  };

  const cardIndex = getCardIndex();
  const project = dict.about.projects.card[cardIndex];

  if (!project) return null;

  return (
    <div
      className="mt-[30px] border-b border-[#230BB71A] pb-[30px] md:mt-0 md:w-1/3 md:min-w-[460px] md:border-none"
      style={{
        background: `radial-gradient(circle at center 130%, ${info().gradient_color ?? "rgba(50,51,51,0.25)"} 10%, rgba(50,51,51,0) 57%)`,
      }}
    >
      <div className="relative flex h-[50px] w-auto">
        <Image
          src={info().src}
          alt={info().alt}
          fill
          className="object-contain object-left-top"
        />
      </div>
      <p className="pt-4 md:hidden md:min-w-[460px]">
        {project.mobile_description}
      </p>
      <p className="hidden pt-4 md:block md:min-w-[460px]">
        {project.desktop_description}
      </p>
      <div className="mt-4 flex w-16 justify-between">
        <AppLink title={dict.about.projects.open} href={info().ref}></AppLink>
      </div>
    </div>
  );
};

export default ProjectCard;
