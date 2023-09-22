import React from "react";

interface DateProps {
  yearDataList: {
    year: string;
    team: { title: string; members: { name: string; cargo: string }[] }[];
  }[];
  selectedYear: string;
  onYearChange: (year: string) => void;
}

const Date: React.FC<DateProps> = ({
  yearDataList,
  selectedYear,
  onYearChange,
}) => {
  const selectedYearIndex = yearDataList.findIndex(
    (yearData) => yearData.year === selectedYear,
  );
  const displayedYears = yearDataList.slice(
    Math.max(0, selectedYearIndex - 2),
    Math.min(selectedYearIndex + 3, yearDataList.length),
  );

  return (
    <div className="flex justify-between gap-10">
      <button
        className="w-16 items-center text-xl font-normal text-slate-400"
        onClick={() => {
          const prevYearIndex = Math.max(0, selectedYearIndex - 1);
          onYearChange(yearDataList[prevYearIndex].year);
        }}
      >
        &lt;
      </button>
      <div className="flex w-96 flex-row items-center justify-center gap-10">
        {displayedYears.map((yearData) => (
          <div
            className={`cursor-pointer text-xl font-semibold ${
              yearData.year === selectedYear
                ? "text-cesium-900-900"
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
        className="w-16 items-center text-xl font-normal text-slate-400"
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
  );
};

export default Date;
