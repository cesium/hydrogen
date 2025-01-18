"use client";

import { useDictionary } from "@/contexts/dictionary-provider";
import Image from "next/image";
import Link from "next/link";
import CustomLink from "./link";

const ProjectCard = () => {
  const dict = useDictionary();
  const info = [
    {
      src: "/logo/sei.svg",
      alt: "SEI Logo",
      width: "57",
      height: "38",
      gradient_color: "rgba(35,11,183,0.10)",
      ref: "https://seium.org/",
    },
    {
      src: "/logo/bugsbyte.svg",
      alt: "BugsByte Logo",
      width: "220",
      height: "36",
      gradient_color: "rgba(120,176,69,0.25)",
      ref: "https://bugsbyte.org/",
    },
    {
      src: "/logo/coderdojo.svg",
      alt: "CoderDojo Logo",
      width: "162",
      height: "47",
      gradient_color: "rgba(50,51,51,0.25)",
      ref: "https://coderdojobraga.org/",
    },
  ];

  return (
      <div className="flex flex-col">
        <div className="flex flex-col md:gap-4 lg:flex-row">
          {dict.about.projects.card.map((project, key) => {
            return (
              <div
                key={key}
                className={`mt-[30px] max-w-[460px] content-center border-b border-[#230BB71A] pb-[30px] md:mt-0 lg:w-1/3 lg:border-none`}
                style={{
                  background: `radial-gradient(circle at center 130%, ${info[key]?.gradient_color ?? "rgba(50,51,51,0.25)"} 10%, rgba(50,51,51,0) 57%)`,
                }}
              >
                <Image
                  src={info[key]?.src ?? "#"}
                  alt={info[key]?.alt ?? "Logo"}
                  width={Number(info[key]?.width) ?? 100}
                  height={Number(info[key]?.height) ?? 40}
                />
                <p className="max-w-[380px] pt-4 md:hidden">
                  {project.mobile_description}
                </p>
                <p className="hidden max-w-[380px] pt-4 md:block">
                  {project.desktop_description}
                </p>
                <div className="mt-4 flex w-16 justify-between">
                  <CustomLink title={dict.about.projects.open} href={info[key]?.ref ?? "#"} arrow="outward"></CustomLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
  );
};

export default ProjectCard;
