"use client";

import React from "react";
import Carousel from "./carousel";
import Image from "next/image";
import Markdown from "markdown-to-jsx";

interface Item {
  src: string;
  alt: string;
}

interface Props {
  title?: string;
  subtitle?: string;
  background?: Item;
  items: Item[];
}

export default function ScrollableHighlight({
  title,
  subtitle,
  background,
  items,
}: Props) {
  const content = [
    <div
      key={0}
      className="flex h-[650px] w-full place-items-center justify-center rounded-2xl bg-cover bg-no-repeat px-7 sm:h-[600px] sm:justify-start sm:px-10"
      style={{
        backgroundImage: `
        radial-gradient(circle at top center, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 100%),
        radial-gradient(circle, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.7) 100%),
        url(${background?.src})
      `,
        backgroundPosition: "center 16%",
      }}
    >
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
            {`${title}`}
          </Markdown>
        </h1>
        <h2 className="text-base text-white">{subtitle}</h2>
      </div>
    </div>,
    ...items.map((item, index) => (
      <div key={index + 1} className="flex justify-center">
        <Image
          src={item.src}
          width={490}
          height={367}
          alt={item.alt}
          className="h-[650px] w-full rounded-2xl object-cover sm:h-[600px] sm:max-w-full"
        />
      </div>
    )),
  ];

  return (
    <div className="w-full overflow-hidden px-5 pt-4 sm:px-8 sm:pt-6">
      <Carousel
        single
        showNavigation
        pagination
        items={content}
        paginationPos={"top"}
      />
    </div>
  );
}
