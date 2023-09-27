import React, { useState } from "react";

interface Post {
  date: string;
  title: string;
  text: string;
}

type ExpandButtonProps = {
  isExpanded: boolean;
  showMore: () => void;
  showLess: () => void;
};

const ExpandButton = ({
  isExpanded,
  showMore,
  showLess,
}: ExpandButtonProps) => {
  return (
    <button
      className={`mt-16 w-fit cursor-pointer p-2 font-inter text-lg font-semibold transition-colors ${
        isExpanded && "text-cesium-900 hover:text-cesium-600"
      } hover:text-cesium-900`}
      onClick={isExpanded ? showLess : showMore}
    >
      {isExpanded ? `Ver menos` : "Ver tudo"}{" "}
      {isExpanded ? (
        <i className="bi bi-chevron-up"></i>
      ) : (
        <i className="bi bi-chevron-down"></i>
      )}
    </button>
  );
};

const PostWall = ({ postData }: { postData: Post[] }): JSX.Element => {
  const [visibleRows, setVisibleRows] = useState(3);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleShowMore = () => {
    setIsExpanded(true);
    setVisibleRows(postData.length);
  };

  const handleShowLess = () => {
    setIsExpanded(false);
    setVisibleRows(3);
  };

  // No posts, show nothing
  if (!postData || postData.length === 0)
    return (
      <div className="flex justify-center text-zinc-500">Nothing for now.</div>
    );

  // Otherwise
  return (
    // TODO: Add Image Support
    <div>
      <div className="flex flex-row flex-wrap justify-center gap-8">
        {/* Posts */}
        {postData.slice(0, visibleRows).map((newsItem) => (
          <div
            key={newsItem.title}
            className="w-[350px] items-start justify-start space-y-4"
          >
            {/* Image */}
            <div className="h-[250px] w-full bg-gray-200"></div>
            {/* Date/Time */}
            <h2 className="font-inter text-sm font-light text-gray-400">
              {newsItem.date}
            </h2>
            {/* Title */}
            <h1 className="font-inter text-lg font-semibold">
              {newsItem.title}
            </h1>
            {/* Description */}
            <p className="text-justify font-inter text-sm font-normal text-gray-500">
              {newsItem.text}
            </p>
          </div>
        ))}
      </div>
      {/* See All / See Less Button */}
      <div className="flex justify-center">
        <ExpandButton
          isExpanded={isExpanded}
          showMore={handleShowMore}
          showLess={handleShowLess}
        />
      </div>
    </div>
  );
};

export default PostWall;
