"use client";
import { useState } from "react";

import PostWall from "./PostWall";
import HighlightEvent from "./HighlightEvent";

import eventData from "@/data/EventData.json";

type TabButtonProps = {
  title: string;
  isEvents: boolean;
  handleClick: () => void;
};

const TabButton = ({ title, isEvents, handleClick }: TabButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`border-transparent pb-4 pl-2 pr-2 font-inter text-lg font-semibold transition-colors duration-300 hover:border-b hover:border-b-cesium-900 hover:text-cesium-900 ${
        isEvents ? "border-b border-b-cesium-900 text-cesium-900" : ""
      }`}
    >
      {title}
    </button>
  );
};

const NewsAndEvents = () => {
  const [isEvents, setIsEvents] = useState(true);

  return (
    <div className="space-y-16">
      {/* Tab Buttons */}
      <div className="flex justify-center space-x-8">
        <TabButton
          title="Eventos"
          isEvents={isEvents}
          handleClick={() => setIsEvents(true)}
        />
        <TabButton
          title="Notícias"
          isEvents={!isEvents}
          handleClick={() => setIsEvents(false)}
        />
      </div>

      {/* Body */}
      {isEvents ? (
        // Events
        <div className="mx-auto w-full space-y-32">
          {/* Highlighted Event */}
          <HighlightEvent />
          {/* Other Events */}
          <div className="space-y-16">
            {/* Title */}
            <h1 className="flex justify-center font-orbitron text-3xl font-semibold">
              Outros Eventos
            </h1>
            {/* Grid of Events */}
            <PostWall postData={eventData} />
          </div>
        </div>
      ) : (
        // News
        <PostWall postData={[]} />
      )}
    </div>
  );
};

export default NewsAndEvents;
