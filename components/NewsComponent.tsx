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
    <div className="mt-12 flex flex-col items-center justify-center">
      <div className="grid w-[1172px] grid-cols-3 gap-10">
        {newsData.slice(0, visibleRows).map((newsItem) => (
          <div className="flex w-[384px] flex-col items-start justify-start gap-4 text-start">
            <div className="h-[256px] w-[364px] bg-gray-200"></div>
            <h2 className="font-inter text-sm font-light text-gray-400">
              {newsItem.date}
            </h2>
            <h1 className="font-inter text-lg font-semibold">
              {newsItem.title}
            </h1>
            <p className="font-inter text-sm font-normal text-gray-500">
              {newsItem.text}
            </p>
          </div>
        ))}
      </div>
      {newsData.length > 3 && !isExpanded && (
        <button
          className="mt-8 cursor-pointer p-2 font-inter text-lg font-semibold text-cesium-orange"
          onClick={handleShowMoreClick}
        >
          Ver Mais
        </button>
      )}
      {isExpanded && (
        <button
          className="mt-8 cursor-pointer p-2 font-inter text-lg font-semibold text-cesium-orange"
          onClick={handleShowLessClick}
        >
          Ver Menos
        </button>
      )}
    </div>
  );
}

export default NewsComponent;
