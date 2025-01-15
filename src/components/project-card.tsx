"use client";

import { useDictionary } from "@/contexts/dictionary-provider";
import Image from "next/image";
import Link from "next/link";

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
    <div className="mb-6 flex flex-col justify-center md:flex-row">
      <div className="lg:w-100px]">
        <h2 className="font-title text-2xl font-medium leading-8 md:translate-y-14 md:rotate-[-90deg]">
          {dict.about.projects.title}
        </h2>
      </div>
      <div className="flex flex-col">
        <p className="pb-10 pt-4">{dict.about.projects.description}</p>
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
                  <Link
                    className="flex items-center space-x-1 font-medium text-[#ED7950]"
                    href={info[key]?.ref ?? "#"}
                    target="_blank"
                  >
                    <span>{dict.about.projects.open}</span>
                    <span className="material-symbols-outlined text-xl font-medium text-[#ED7950]">
                      arrow_outward
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <Link
          className="my-10 flex hidden items-center space-x-1 font-medium text-[#ED7950] lg:inline-flex"
          href={"#"}
        >
          <span>{dict.about.projects.see_more}</span>
          <span className="material-symbols-outlined text-xl font-medium text-[#ED7950]">
            arrow_forward
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
