"use client"
import teamData from "@/data/2023.json"
import React, { useState } from "react"
import DatePicker from "@/components/DatePicker"
import Teams from "@/components/Teams"

export default function Team() {
  const yearDefault = "2023"
  const [selectedYear, setSelectedYear] = useState(yearDefault)

  const onYearChange = (year: string) => {
    setSelectedYear(year)
  }

  const selectedYearData = teamData.find((data) => data.year === selectedYear)

  return (
    <main className="bg-background px-28 pb-8 ">
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-5xl font-semibold">Equipa</h1>
        <DatePicker
          yearDataList={teamData}
          selectedYear={selectedYear}
          onYearChange={onYearChange}
        />
      </div>
      {selectedYearData && <Teams yearData={selectedYearData} />}
    </main>
  )
}
