"use client";

import { useDictionary } from "@/contexts/dictionary-provider";
import Image from "next/image";
import CustomLink from "./link";

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
          width: "57",
          height: "38",
          gradient_color: "rgba(35,11,183,0.10)",
          ref: "https://seium.org/",
        };
      case "bugsbyte":
        return {
          src: "/logo/bugsbyte.svg",
          alt: "BugsByte Logo",
          width: "220",
          height: "36",
          gradient_color: "rgba(120,176,69,0.25)",
          ref: "https://bugsbyte.org/",
        };
      case "coderdojo":
        return {
          src: "/logo/coderdojo.svg",
          alt: "CoderDojo Logo",
          width: "162",
          height: "47",
          gradient_color: "rgba(50,51,51,0.25)",
          ref: "https://coderdojobraga.org/",
        };
      default:
        return {
          src: "/logo/sei.svg",
          alt: "SEI Logo",
          width: "57",
          height: "38",
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
      className={`mt-[30px] content-center border-b border-[#230BB71A] pb-[30px] md:mt-0 md:min-w-[460px] lg:w-1/3 lg:border-none`}
      style={{
        background: `radial-gradient(circle at center 130%, ${info().gradient_color ?? "rgba(50,51,51,0.25)"} 10%, rgba(50,51,51,0) 57%)`,
      }}
    >
      <Image
        src={info().src}
        alt={info().alt}
        width={Number(info().width) ?? 100}
        height={Number(info().height) ?? 40}
      />
      <p className="pt-4 md:hidden md:min-w-[460px]">
        {project.mobile_description}
      </p>
      <p className="hidden pt-4 md:block md:min-w-[460px]">
        {project.desktop_description}
      </p>
      <div className="mt-4 flex w-16 justify-between">
        <CustomLink
          title={dict.about.projects.open}
          href={info().ref}
          arrow="outward"
        ></CustomLink>
      </div>
    </div>
  );
};

export default ProjectCard;
