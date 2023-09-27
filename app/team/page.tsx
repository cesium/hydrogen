"use client";
import teamData from "@/data/2023.json";
import React, { useState } from "react";
import DatePicker from "@/components/DatePicker";
import Teams from "@/components/Team";

export default function Team() {
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
      {selectedYearData && <Teams yearData={selectedYearData} />}
    </main>
  );
}
