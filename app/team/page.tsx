"use client";
import teamData from "@/data/2023.json";
import React, { useState } from "react";
import Date from "@/components/Date";
import Teams from "@/components/Teams";

export default function Team() {
  const yearDefault = "2023";
  const [selectedYear, setSelectedYear] = useState(yearDefault);

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
