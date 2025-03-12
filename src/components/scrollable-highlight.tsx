"use client";

import React from "react";
import Carousel from "./carousel";
import Image from "next/image";

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
      className="flex h-[650px] w-full place-items-center justify-center rounded-xl sm:h-[600px] sm:justify-start"
      style={{
        backgroundImage: `
        radial-gradient(circle at top center, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 100%),
        radial-gradient(circle, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.7) 100%),
        url(${background?.src})
      `,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 16%",
      }}
    >
      <div className="relative sm:w-[684px] sm:px-[100px] xl:w-[800px]">
        <h1
          className="mb-5 font-title text-5xl text-white"
          style={{
            background:
              "linear-gradient(to right, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          {title}
        </h1>
        <h2 className="text-base text-white">{subtitle}</h2>
      </div>
    </div>,
    ...items.map((item, index) => (
      <div key={index} className="flex justify-center">
        <Image
          src={item.src}
          width={490}
          height={367}
          alt={item.alt}
          className="h-[650px] w-full rounded-xl object-cover sm:h-[600px] sm:max-w-full"
        />
      </div>
    )),
  ];

  return (
    <div className="w-full overflow-hidden px-8 pt-4 sm:pt-6">
      <Carousel single items={content} showNavigation />
    </div>
  );
}
