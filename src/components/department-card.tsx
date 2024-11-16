"use client";

import Link from "next/link";
import { useDictionary } from "@/contexts/dictionary-provider";

interface DepartmentCardProps {
  type: "caos" | "dmc" | "drem" | "ped" | "rec";
  hideTeam?: boolean;
}

const DepartmentCard = ({ type, hideTeam }: DepartmentCardProps) => {
  const dict = useDictionary();

  const gradient = () => {
    switch (type) {
      case "caos":
        return ["[#0085FF]/10", "[#00D1FF]/10"];
      case "dmc":
        return ["[#FF00F5]/10", "[#FF2E00]/10"];
      case "drem":
        return ["[#0500FF]/10", "[#A500DE]/10"];
      case "ped":
        return ["[#E4B12E]/20", "[#ED7950]/20"];
      case "rec":
        return ["[#03A300]/10", "[#82E700]/10"];
      default:
        return ["[#0085FF]/10", "[#00D1FF]/10"];
    }
  };

  return (
    <div className="relative grid w-full overflow-hidden rounded-2xl md:rounded-3xl">
      <div className="absolute bottom-0 right-0 hidden translate-x-10 translate-y-10 select-none bg-gradient-to-br from-black/0 to-black/20 bg-clip-text font-title text-9xl text-transparent lg:inline-block">
        {type.toUpperCase()}
      </div>

      {/* <div className="col-start-1 row-start-1 box-border rounded-3xl border border-black/10" /> */}
      <div
        className={`col-start-1 row-start-1 bg-gradient-to-r lg:bg-gradient-to-t from-${gradient()[0]} to-${gradient()[1]}`}
      />
      <div className="col-start-1 row-start-1 bg-gradient-to-b from-[#F0F0F0]/90 to-transparent lg:bg-gradient-to-r" />

      <div className="col-start-1 row-start-1 grid place-items-start gap-4 p-7 lg:grid-flow-col lg:gap-20 lg:p-14 lg:pr-36">
        <div className="w-full space-y-4 lg:w-96">
          <div className="font-title text-2xl font-medium">
            <span className="material-symbols-outlined text-4xl text-gray">
              {dict[type].icon}
            </span>
            <p className="text-gray">{dict[type].name[0]}</p>
            <p className="text-black">{dict[type].name[1]}</p>
          </div>
          {!hideTeam && (
            <div className="flex items-center justify-between lg:justify-normal">
              <div className="flex space-x-1">
                {/* TODO: Get team information from somewhere */}
                {/* TODO: Max length of 3 avatars for mobile and 5 for desktop */}
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="size-9 rounded-full bg-gray/20" />
                ))}
              </div>
              <Link
                className="flex items-center space-x-1 pl-8 text-sm font-medium"
                href="/about/team"
              >
                <span className="hover:underline">{dict.button.see_team}</span>
                <span className="material-symbols-outlined text-xl">
                  arrow_forward
                </span>
              </Link>
            </div>
          )}
        </div>
        <p className="flex h-full items-center text-justify lg:text-base">
          {dict[type].description}
        </p>
      </div>
    </div>
  );
};

export default DepartmentCard;
