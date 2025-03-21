"use client";

import React from "react";
import { useDictionary } from "@/contexts/dictionary-provider";
import Markdown from "markdown-to-jsx";
import ScrollableHighlight from "@/components/scrollable-highlight";

export default function ScrollableContent() {
  const dict = useDictionary();
  const dictAbout = dict.about;
  const images = dictAbout.sections.cesium.images;

  const items = [
    {
      image: images[3]?.src,
      highlight: (
        <div className="md:px-25 relative sm:w-[684px] xl:w-[800px]">
          <h1 className="mb-5 bg-gradient-to-r from-white/40 via-white to-white bg-clip-text font-title text-4xl text-transparent sm:text-5xl">
            <Markdown
              className="font-normal"
              options={{
                overrides: {
                  strong: { props: { className: "text-white font-medium" } },
                },
              }}
            >
              {dict.home.scrollable_highlight.slide1.title}
            </Markdown>
          </h1>
          <h2 className="text-base text-white">
            {dict.home.scrollable_highlight.slide1.subtitle}
          </h2>
        </div>
      ),
    },
    {
      image: images[2]?.src,
      highlight: (
        <div className="md:px-25 relative sm:w-[684px] xl:w-[800px]">
          <h1 className="mb-5 bg-gradient-to-r from-white/40 via-white to-white bg-clip-text font-title text-4xl text-transparent sm:text-5xl">
            <Markdown
              className="font-normal"
              options={{
                overrides: {
                  strong: { props: { className: "text-white font-medium" } },
                },
              }}
            >
              {dict.home.scrollable_highlight.slide2.title}
            </Markdown>
          </h1>
          <h2 className="text-base text-white">
            {dict.home.scrollable_highlight.slide2.subtitle}
          </h2>
        </div>
      ),
    },
    {
      image: images[1]?.src,
      highlight: (
        <div className="md:px-25 relative sm:w-[684px] xl:w-[800px]">
          <h1 className="mb-5 bg-gradient-to-r from-white/40 via-white to-white bg-clip-text font-title text-4xl text-transparent sm:text-5xl">
            <Markdown
              className="font-normal"
              options={{
                overrides: {
                  strong: { props: { className: "text-white font-medium" } },
                },
              }}
            >
              {dict.home.scrollable_highlight.slide3.title}
            </Markdown>
          </h1>
          <h2 className="text-base text-white">
            {dict.home.scrollable_highlight.slide3.subtitle}
          </h2>
        </div>
      ),
    },
    {
      image: images[0]?.src,
      highlight: (
        <div className="md:px-25 relative sm:w-[684px] xl:w-[800px]">
          <h1 className="mb-5 bg-gradient-to-r from-white/40 via-white to-white bg-clip-text font-title text-4xl text-transparent sm:text-5xl">
            <Markdown
              className="font-normal"
              options={{
                overrides: {
                  strong: { props: { className: "text-white font-medium" } },
                },
              }}
            >
              {dict.home.scrollable_highlight.slide4.title}
            </Markdown>
          </h1>
          <h2 className="text-base text-white">
            {dict.home.scrollable_highlight.slide4.subtitle}
          </h2>
        </div>
      ),
    },
  ];

  const content: React.ReactNode[] = items.map((item, index) => (
    <div
      key={index}
      className="select-none flex h-[650px] w-full place-items-center justify-center rounded-2xl bg-cover bg-[center_16%] bg-no-repeat px-7 sm:h-[600px] sm:justify-start sm:px-10"
      style={{
        backgroundImage: `
          radial-gradient(circle at top center, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 100%),
          radial-gradient(circle, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.7) 100%),
          url(${item.image})
          `,
      }}
    >
      {item.highlight}
    </div>
  ));

  return (
    <div>
      <ScrollableHighlight items={content} />
    </div>
  );
}
