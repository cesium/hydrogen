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
  hideShortName?: boolean;
  teamData: TeamData;
  yearRange: string;
}

const DepartmentCard = ({
  name, // name of the department !! as specified in team data !!
  shortName, // short name of the department !! as specified in dictionary !!
  gradientFrom,
  gradientTo,
  hideTeam,
  hideShortName,
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
      {!hideShortName && (
        <div className="absolute bottom-0 right-0 hidden translate-x-10 translate-y-10 select-none bg-gradient-to-br from-black/0 to-black/10 bg-clip-text font-title text-9xl text-transparent md:block">
          {shortName.toUpperCase()}
        </div>
      )}

      <div
        className={`col-start-1 row-start-1 bg-gradient-to-r from-${gradientFrom} to-${gradientTo}`}
      />
      <div className="col-start-1 row-start-1 bg-gradient-to-b from-[#F0F0F0]/90 to-transparent" />

      <div className="col-start-1 row-start-1 flex flex-col items-start gap-4 p-7">
        <div className="w-full space-y-4">
          <div className="font-title text-2xl font-medium">
            <span className="material-symbols-outlined text-4xl text-gray">
              {dict[shortName].icon}
            </span>
            <p className="text-gray">{dict[shortName].name[0]}</p>
            <p className="text-black">{dict[shortName].name[1]}</p>
          </div>
          {!hideTeam && (
            <div className="flex items-center justify-between gap-3">
              <div className="flex -space-x-4 min-[400px]:-space-x-3 sm:-space-x-2">
                {members.map((m, _) => (
                  <Avatar
                    src={m.imageUrl}
                    className="rounded-full border-2 border-muted/50"
                    imageClassName="size-9 rounded-full"
                    key={m.name}
                  />
                ))}
              </div>
              <Link
                className="flex items-center space-x-1 text-sm font-medium"
                href={`/${lang}/team`}
              >
                <span className="hover:underline">{dict.button.see_team}</span>
                <span className="material-symbols-outlined text-xl">
                  arrow_forward
                </span>
              </Link>
            </div>
          )}
        </div>
        <p className="hidden h-full items-start text-justify md:flex lg:text-base">
          {dict[shortName].description}
        </p>
        <p className="flex h-full items-start text-left md:hidden lg:text-base">
          {dict[shortName].short_description}
        </p>
      </div>
    </div>
  );
};

export default DepartmentCard;
