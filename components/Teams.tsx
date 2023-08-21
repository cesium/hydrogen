import React from "react"

interface IMember {
  name: string
  cargo: string
}

interface ITeam {
  title: string
  members: IMember[]
}

interface IYearData {
  year: string
  team: ITeam[]
}

interface ITeamsProps {
  yearData: IYearData
}

const Teams: React.FC<ITeamsProps> = ({ yearData }) => {
  return (
    <ul className="mt-8 flex flex-col items-start justify-center gap-10 px-28">
      {yearData.team.map((item) => (
        <li className="flex flex-col gap-4" key={item.title}>
          <strong className="text-2xl font-semibold">{item.title}</strong>
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
  )
}

export default Teams
