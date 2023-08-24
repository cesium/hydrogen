"use client";
import { useState } from "react";
import Image from "next/image";
import newsData from "../data/NewsData.json";

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
          className={`mb-5 mr-8 border-b-2 border-transparent pl-2 pr-2 transition-colors duration-300 hover:border-cesium-orange hover:text-cesium-orange ${
            !isEventsOverNews ? "text-cesium-orange" : "text-gray-500"
          }`}
        >
          Noticias
        </button>
        <button
          onClick={handleEventsClick}
          className={`mb-5 mr-8 border-b-2 border-transparent pl-2 pr-2 transition-colors duration-300 hover:border-cesium-orange hover:text-cesium-orange ${
            isEventsOverNews ? "text-cesium-orange" : "text-gray-500"
          }`}
        >
          Eventos
        </button>
      </div>

      {isEventsOverNews ? (
        <div>
          <ul>
            <li>
              <article className="mt-12 flex justify-center">
                <div className="h-44 w-40 bg-cesium-orange"></div>
                <div className="h-44 w-[550px] bg-gray-200"></div>
              </article>
            </li>
            <li>
              <article className="mt-12 flex justify-center">
                <div className="h-44 w-[550px] bg-gray-200"></div>
                <div className="h-44 w-40 bg-cesium-orange"></div>
              </article>
            </li>
            <li>
              <article className="mt-12 flex justify-center">
                <div className="h-44 w-40 bg-cesium-orange"></div>
                <div className="h-44 w-[550px] bg-gray-200"></div>
              </article>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <ul>
            {newsData.map((newsItem, index) => (
              <li key={newsItem.id}>
                <article
                  className={`mt-12 flex justify-center ${
                    index % 2 === 1 ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="h-44 w-[550px] bg-gray-200">
                    <p className="opacity-85 px-4 pt-4 text-lg font-bold">
                      {newsItem.title}
                    </p>
                    <p className="opacity-85 px-4 pt-4">{newsItem.text}</p>
                  </div>
                  <div className="flex h-44 w-44 items-center justify-center bg-cesium-orange">
                    <Image
                      src={require(`../public/${newsItem.image}`).default}
                      alt=""
                      width={120}
                      height={120}
                    />
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
