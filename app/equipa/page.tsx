"use client";
import teamData from "@/data/TeamPageData.json";
import React, { useState } from "react";
import DatePicker from "@/components/DatePicker";
import Team from "@/components/Team";

export default function Equipa() {
  const yearDefault = "2023";
  const [selectedYear, setSelectedYear] = useState(yearDefault);

  const onYearChange = (year: string) => {
    setSelectedYear(year);
  };

  const selectedYearData = teamData.find((data) => data.year === selectedYear);

  return (
    <main>
      <div className="flex select-none flex-col items-center justify-center gap-8">
        <h1 className="font-orbitron text-5xl font-semibold">Equipa</h1>
        <DatePicker
          yearDataList={teamData}
          selectedYear={selectedYear}
          onYearChange={onYearChange}
        />
      </div>
      {selectedYearData && <Team yearData={selectedYearData} />}
    </main>
  );
}
