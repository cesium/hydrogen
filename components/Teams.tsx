import React from "react";

interface TeamsProps {
  yearData: {
    year: string;
    team: { title: string; members: { name: string; cargo: string }[] }[];
  };
}

const Teams: React.FC<TeamsProps> = ({ yearData }) => {
  return (
    <div className="mt-8 flex flex-col items-start justify-center gap-10 px-28">
      {yearData.team.map((item) => (
        <div className="flex flex-col gap-4" key={item.title}>
          <div className="text-2xl font-semibold">{item.title}</div>
          <div className="flex flex-row gap-16">
            {item.members.map((member) => (
              <div
                className="flex flex-col items-center justify-center"
                key={member.name}
              >
                <div className="h-[160px] w-[130px] rounded-lg bg-gray-200"></div>
                <div className="mt-4">{member.name}</div>
                <div className="text-sm opacity-50">{member.cargo}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Teams;
