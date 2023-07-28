"use client";

import React, { useState } from "react";

export default function Date() {
  const [year, setYear] = useState(2023);

  const incrementYear = () => {
    setYear((prevYear) => prevYear + 1);
  };

  const decrementYear = () => {
    setYear((prevYear) => prevYear - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="text-5xl font-semibold">Equipa</div>
      <div className="flex gap-10">
        <button
          className="items-center text-xl font-normal text-slate-400"
          onClick={decrementYear}
        >
          {" "}
          &lt;{" "}
        </button>
        <div className="flex flex-row items-center gap-10">
          <div className="gradient-text-left text-xl font-semibold">
            {year - 2}
          </div>
          <div className="text-xl font-semibold text-slate-300">{year - 1}</div>
          <div className="text-2xl font-semibold text-cesium-orange-900">
            {year}
          </div>
          <div className="text-xl font-semibold text-slate-300">{year + 1}</div>
          <div className="gradient-text-right text-xl font-semibold">
            {year + 2}
          </div>
        </div>
        <button
          className="items-center text-xl font-normal text-slate-400"
          onClick={incrementYear}
        >
          {" "}
          &gt;{" "}
        </button>
      </div>
    </div>
  );
}
