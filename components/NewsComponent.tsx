import React, { useState } from "react";

interface NewsItem {
  date: string;
  title: string;
  text: string;
}

interface NewsComponentProps {
  newsData: NewsItem[];
}

function NewsComponent({ newsData }: NewsComponentProps): JSX.Element {
  const [visibleRows, setVisibleRows] = useState(3);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleShowMoreClick = () => {
    setIsExpanded(true);
    setVisibleRows(newsData.length);
  };

  const handleShowLessClick = () => {
    setIsExpanded(false);
    setVisibleRows(3);
  };

  return (
    <div>
      <div className="flex flex-row flex-wrap justify-center gap-8">
        {newsData.slice(0, visibleRows).map((newsItem) => (
          <div
            key={newsItem.title}
            className="w-[350px] items-start justify-start space-y-4"
          >
            <div className="h-[250px] w-full bg-gray-200"></div>
            <h2 className="font-inter text-sm font-light text-gray-400">
              {newsItem.date}
            </h2>
            <h1 className="font-inter text-lg font-semibold">
              {newsItem.title}
            </h1>
            <p className="text-justify font-inter text-sm font-normal text-gray-500">
              {newsItem.text}
            </p>
          </div>
        ))}
      </div>
      {newsData.length > 3 && !isExpanded && (
        <button
          className="mx-auto mt-16 w-full cursor-pointer p-2 font-inter text-lg font-semibold text-cesium-900"
          onClick={handleShowMoreClick}
        >
          Ver Todos
        </button>
      )}
      {isExpanded && (
        <button
          className="mx-auto mt-16 w-full cursor-pointer p-2 font-inter text-lg font-semibold text-cesium-900"
          onClick={handleShowLessClick}
        >
          Ver Menos
        </button>
      )}
    </div>
  );
}

export default NewsComponent;
