"use client";

import { useDictionary } from "@/contexts/dictionary-provider";
import Avatar from "./avatar";
import Markdown from "markdown-to-jsx";
import AppLink from "./link";
import { useTeamDataUtils } from "@/contexts/team-data-provider";

interface DepartmentCardProps {
  name: string;
  shortName: "caos" | "dmc" | "dsp" | "ped" | "rec";
  gradientFrom: string;
  gradientTo: string;
  hideTeam?: boolean;
  hideShortName?: boolean;
  shortDescription?: boolean;
}

const DepartmentCard = ({
  name, // name of the department !! as specified in team data !!
  shortName, // short name of the department !! as specified in dictionary !!
  gradientFrom,
  gradientTo,
  hideTeam,
  hideShortName,
  shortDescription,
}: DepartmentCardProps) => {
  const dict = useDictionary();
  const members = useTeamDataUtils().getDepartmentByName(name)?.members ?? [];

  return (
    <div className="wt-full relative grid overflow-hidden rounded-2xl md:rounded-3xl">
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
            <p>
              <Markdown
                className="text-gray"
                options={{
                  overrides: {
                    strong: {
                      props: {
                        className: "text-black font-medium",
                      },
                    },
                  },
                }}
              >
                {dict[shortName].name}
              </Markdown>
            </p>
          </div>
          {!hideTeam && (
            <div className="flex items-center justify-between gap-3">
              <div className="flex -space-x-4 min-[400px]:-space-x-3 sm:-space-x-2">
                {members.map((m, _) => (
                  <Avatar
                    src={m.imageUrl ?? "/images/team/none.webp"}
                    className="rounded-full border-2 border-muted/50"
                    imageClassName="size-9 rounded-full"
                    key={m.name}
                  />
                ))}
              </div>
              <AppLink
                title={dict.button.see_team}
                href="/team"
                color="black"
              />
            </div>
          )}
        </div>
        {shortDescription ? (
          <p className="flex h-full items-start">
            {dict[shortName].short_description}
          </p>
        ) : (
          <p className="h-full items-start">{dict[shortName].description}</p>
        )}
      </div>
    </div>
  );
};

export default DepartmentCard;
