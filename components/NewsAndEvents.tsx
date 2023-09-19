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
    <div className="pb-20 pt-20">
      <div className="flex justify-center">
        <button
          onClick={handleNewsClick}
          className={`mb-5 mr-8 border-b-2 border-transparent pl-2 pr-2 font-inter text-lg font-semibold transition-colors duration-300 hover:border-cesium-orange hover:text-cesium-orange ${
            !isEventsOverNews ? "text-cesium-orange" : "text-black"
          }`}
        >
          Noticias
        </button>
        <button
          onClick={handleEventsClick}
          className={`mb-5 mr-8 border-b-2 border-transparent pl-2 pr-2 font-inter text-lg font-semibold transition-colors duration-300 hover:border-cesium-orange hover:text-cesium-orange ${
            isEventsOverNews ? "text-cesium-orange" : "text-black"
          }`}
        >
          Eventos
        </button>
      </div>

      {isEventsOverNews ? (
        <div className="mx-auto w-full max-w-[1172px]">
          <SeiComponent />
          <div className="mt-10">
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
