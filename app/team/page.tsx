"use client";
import React, { useState } from "react";
import teamData from "@/data/2023.json";

interface TeamMember {
  name: string;
  cargo: string;
}

interface TeamDepartment {
  title: string;
  members: TeamMember[];
}

interface TeamYearData {
  year: string;
  team: TeamDepartment[];
}

function Teams({ yearData }: { yearData: TeamYearData }) {
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
}

function Date({
  yearDataList,
  selectedYear,
  onYearChange,
}: {
  yearDataList: TeamYearData[];
  selectedYear: string;
  onYearChange: (year: string) => void;
}) {
  // Encontrar o índice do ano selecionado na lista de anos
  const selectedYearIndex = yearDataList.findIndex(
    (yearData) => yearData.year === selectedYear,
  );

  // Filtrar os cinco anos a serem exibidos, centrando o ano selecionado
  const displayedYears = yearDataList.slice(
    Math.max(0, selectedYearIndex - 2),
    Math.min(selectedYearIndex + 3, yearDataList.length),
  );

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="text-5xl font-semibold">Equipa</div>
      <div className="flex gap-10">
        <button
          className="items-center text-xl font-normal text-slate-400"
          onClick={() => {
            const prevYearIndex = Math.max(0, selectedYearIndex - 1);
            onYearChange(yearDataList[prevYearIndex].year);
          }}
        >
          &lt;
        </button>
        <div className="flex flex-row items-center gap-10">
          {displayedYears.map((yearData) => (
            <div
              className={`text-xl font-semibold ${
                yearData.year === selectedYear
                  ? "text-cesium-orange-900"
                  : "text-slate-300"
              } ${
                parseInt(yearData.year) === parseInt(selectedYear) - 2
                  ? "gradient-text-left"
                  : parseInt(yearData.year) === parseInt(selectedYear) + 2
                  ? "gradient-text-right"
                  : ""
              }`}
              key={yearData.year}
              onClick={() => onYearChange(yearData.year)}
            >
              {yearData.year}
            </div>
          ))}
        </div>
        <button
          className="items-center text-xl font-normal text-slate-400"
          onClick={() => {
            const nextYearIndex = Math.min(
              selectedYearIndex + 1,
              yearDataList.length - 1,
            );
            onYearChange(yearDataList[nextYearIndex].year);
          }}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default function Team() {
  const [selectedYear, setSelectedYear] = useState(teamData[0].year);

  const onYearChange = (year: string) => {
    setSelectedYear(year);
  };

  const selectedYearData = teamData.find((data) => data.year === selectedYear);

  return (
    <main className="bg-background px-28 pb-8">
      <Date
        yearDataList={teamData}
        selectedYear={selectedYear}
        onYearChange={onYearChange}
      />
      {selectedYearData && <Teams yearData={selectedYearData} />}
    </main>
  );
}
