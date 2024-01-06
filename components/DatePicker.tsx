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
    <div className="flex justify-between gap-10 font-orbitron">
      {/* Left Chevron */}
      <button
        className="w-16 items-center text-xl text-slate-400 transition-colors hover:text-gray-900"
        onClick={() => {
          const prevYearIndex = Math.max(0, selectedYearIndex - 1);
          onYearChange(yearDataList[prevYearIndex]!.year);
        }}
      >
        <i className="bi bi-chevron-left"></i>
      </button>
      {/* Year List */}
      <div className="flex w-96 flex-row justify-center gap-10">
        {displayedYears.map((yearData) => (
          <div
            className={`cursor-pointer text-xl transition-all ${
              yearData.year === selectedYear
                ? "font-semibold text-cesium-900"
                : "text-slate-300 hover:text-cesium-900"
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
      {/* Right Chevron */}
      <button
        className="w-16 items-center text-xl text-slate-400 transition-colors hover:text-gray-900"
        onClick={() => {
          const nextYearIndex = Math.min(
            selectedYearIndex + 1,
            yearDataList.length - 1,
          );
          onYearChange(yearDataList[nextYearIndex]!.year);
        }}
      >
        <i className="bi bi-chevron-right"></i>
      </button>
    </div>
  );
};

export default Date;
