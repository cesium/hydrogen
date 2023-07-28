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
};

export default Date;
