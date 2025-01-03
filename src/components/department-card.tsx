"use client";

import Link from "next/link";
import { useDictionary, useLang } from "@/contexts/dictionary-provider";
import type { MemberInfo, TeamData } from "@/lib/types";
import { useEffect, useState } from "react";
import { getDepartmentMembersInfo } from "@/lib/utils";
import Avatar from "./avatar";

interface DepartmentCardProps {
  name: string;
  shortName: "caos" | "dmc" | "drem" | "ped" | "rec";
  gradientFrom: string;
  gradientTo: string;
  hideTeam?: boolean;
  teamData: TeamData;
  yearRange: string;
}

const DepartmentCard = ({
  name, // name of the department !! as specified in team data !!
  shortName, // short name of the department !! as specified in dictionary !!
  gradientFrom,
  gradientTo,
  hideTeam,
  teamData,
  yearRange,
}: DepartmentCardProps) => {
  const lang = useLang();
  const dict = useDictionary();

  const [members, setMembers] = useState<MemberInfo[]>([]);

  useEffect(() => {
    const membersData = getDepartmentMembersInfo(teamData, yearRange, name);
    setMembers(membersData);
  }, [teamData, yearRange, name]);

  return (
    <div className="relative grid w-full overflow-hidden rounded-2xl md:rounded-3xl">
      <div className="absolute bottom-0 right-0 hidden translate-x-10 translate-y-10 select-none bg-gradient-to-br from-black/0 to-black/20 bg-clip-text font-title text-9xl text-transparent lg:inline-block">
        {shortName.toUpperCase()}
      </div>

      {/* <div className="col-start-1 row-start-1 box-border rounded-3xl border border-black/10" /> */}
      <div
        className={`col-start-1 row-start-1 bg-gradient-to-r lg:bg-gradient-to-t from-${gradientFrom} to-${gradientTo}`}
      />
      <div className="col-start-1 row-start-1 bg-gradient-to-b from-[#F0F0F0]/90 to-transparent lg:bg-gradient-to-r" />

      <div className="col-start-1 row-start-1 grid place-items-start gap-4 p-7 lg:grid-flow-col lg:gap-20 lg:p-14 lg:pr-36">
        <div className="w-full space-y-4 lg:w-96">
          <div className="font-title text-2xl font-medium">
            <span className="material-symbols-outlined text-4xl text-gray">
              {dict[shortName].icon}
            </span>
            <p className="text-gray">{dict[shortName].name[0]}</p>
            <p className="text-black">{dict[shortName].name[1]}</p>
          </div>
          {!hideTeam && (
            <div className="flex items-center justify-between gap-3 lg:justify-normal">
              <div className="flex -space-x-4 min-[400px]:-space-x-3 sm:-space-x-2">
                {/* TODO: Max length of 3 avatars for mobile and 5 for desktop */}
                {members.map((m, _) => (
                  <Avatar
                    src={m.imageUrl}
                    className="rounded-full border-2 border-background/50"
                    imageClassName="size-9 rounded-full"
                    key={m.name}
                  />
                ))}
              </div>
              <Link
                className="flex items-center space-x-1 text-sm font-medium"
                href={`/${lang}/about/team`}
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
          {dict[shortName].description}
        </p>
      </div>
    </div>
  );
};

export default DepartmentCard;
