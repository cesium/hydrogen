import React from "react";

interface Member {
  name: string;
  cargo: string;
}

interface Team {
  title: string;
  members: Member[];
}

interface YearData {
  year: string;
  team: Team[];
}

interface TeamsProps {
  yearData: YearData;
}

const Teams: React.FC<TeamsProps> = ({ yearData }) => {
  return (
    <ul className="mt-8 flex flex-col items-start justify-center gap-10 px-28">
      {yearData.team.map((item) => (
        <li className="flex flex-col gap-4" key={item.title}>
          <strong className="font-orbitron text-2xl font-semibold">
            {item.title}
          </strong>
          <ul className="flex flex-row gap-16">
            {item.members.map((member) => (
              <li
                className="flex flex-col items-center justify-center"
                key={member.name}
              >
                <div className="h-[160px] w-[130px] rounded-lg bg-gray-200"></div>
                <span className="mt-4">{member.name}</span>
                <p className="text-sm opacity-50">{member.cargo}</p>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Teams;
