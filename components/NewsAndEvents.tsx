"use client";
import React from "react";
import Image from "next/image";
import newsData from "../data/NewsData.json";

export default function NewsAndEvents() {
  const [isEventsOverNews, setEventsOverNews] = React.useState(true);

  function handleNewsClick() {
    setEventsOverNews(false);
  }

  function handleEventsClick() {
    setEventsOverNews(true);
  }

  return (
    <div className="pt-20 pb-20">
      <div className="flex justify-center">
        <button
          onClick={handleNewsClick}
          className="text-gray-500 mr-8 pl-2 pr-2 mb-5 border-b-2 border-transparent hover:border-cesium-orange hover:text-cesium-orange transition-colors duration-300"
        >
          Noticias
        </button>
        <button
          onClick={handleEventsClick}
          className="text-gray-500 mr-8 pl-2 pr-2 mb-5 border-b-2 border-transparent hover:border-cesium-orange hover:text-cesium-orange transition-colors duration-300"
        >
          Eventos
        </button>
      </div>

      {isEventsOverNews ? (
        <div>
          <ul>
            <li>
              <article className="flex justify-center mt-12">
                <div className="w-40 h-44 bg-cesium-orange"></div>
                <div className="w-[550px] h-44 bg-gray-200"></div>
              </article>
            </li>
            <li>
              <article className="flex justify-center mt-12">
                <div className="w-[550px] h-44 bg-gray-200"></div>
                <div className="w-40 h-44 bg-cesium-orange"></div>
              </article>
            </li>
            <li>
              <article className="flex justify-center mt-12">
                <div className="w-40 h-44 bg-cesium-orange"></div>
                <div className="w-[550px] h-44 bg-gray-200"></div>
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
                  className={`flex justify-center mt-12 ${
                    index % 2 === 1 ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-[550px] h-44 bg-gray-200">
                    <p className="px-4 pt-4 text-lg font-bold opacity-85">
                      {newsItem.title}
                    </p>
                    <p className="px-4 pt-4 opacity-85">{newsItem.text}</p>
                  </div>
                  <div className="w-44 h-44 bg-cesium-orange flex items-center justify-center">
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
