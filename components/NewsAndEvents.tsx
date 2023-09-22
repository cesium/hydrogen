"use client";
import { useState } from "react";
import NewsComponent from "./NewsComponent";
import SeiComponent from "./SeiComponent";
import newsData from "@/data/NewsData.json";

export default function NewsAndEvents() {
  const [isEventsOverNews, setEventsOverNews] = useState(true);

  function handleNewsClick() {
    setEventsOverNews(false);
  }

  function handleEventsClick() {
    setEventsOverNews(true);
  }

  return (
    <div className="space-y-16">
      <div className="flex justify-center space-x-8">
        <button
          onClick={handleEventsClick}
          className={`border-transparent pb-4 pl-2 pr-2 font-inter text-lg font-semibold transition-colors duration-300 hover:border-b hover:border-b-cesium-900 hover:text-cesium-900 ${
            isEventsOverNews
              ? "border-b border-b-cesium-900 text-cesium-900"
              : ""
          }`}
        >
          Eventos
        </button>
        <button
          onClick={handleNewsClick}
          className={`hover: border-b border-transparent pb-4 pl-2 pr-2 font-inter text-lg font-semibold transition-colors duration-300 hover:border-b-cesium-900 hover:text-cesium-900 ${
            !isEventsOverNews
              ? "border-b border-b-cesium-900 text-cesium-900"
              : ""
          }`}
        >
          Notícias
        </button>
      </div>

      {isEventsOverNews ? (
        <div className="mx-auto w-full space-y-32">
          <SeiComponent />
          <div className="space-y-16">
            <h1 className="flex justify-center font-orbitron text-3xl font-semibold">
              Outros Eventos
            </h1>
            <NewsComponent newsData={newsData} />
          </div>
        </div>
      ) : (
        <NewsComponent newsData={newsData} />
      )}
    </div>
  );
}
