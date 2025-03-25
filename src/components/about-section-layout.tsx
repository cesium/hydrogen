"use client";

import CustomLink from "./link";
import { useDictionary } from "@/contexts/dictionary-provider";
import AboutSection from "./about-section";
import { useRef, useState } from "react";

type TitleOr = "vertical" | "horizontal";
type LinkName = "see_more" | "see_team" | "go_to_departments" | "go_to_team";
type LinkPos = "after" | "before";

interface AboutSectionProps {
  title: string;
  titleOrientation?: TitleOr;
  subtitle: string;
  linkName: LinkName;
  linkPos?: LinkPos;
  href: string;
  overflows?: boolean;
  dark?: boolean;
  children?: React.ReactNode;
  linkColor?: "blue" | "primary";
  strech?: boolean;
  showlinkmobile?: boolean;
}

const AboutSectionLayout = ({
  title,
  titleOrientation, // Allows to show the title horizontally on desktop
  subtitle,
  linkName,
  linkPos, // Allows to show the link after the subtitle on mobile
  href,
  overflows,
  dark,
  children,
  linkColor,
  strech,
  showlinkmobile,
}: AboutSectionProps) => {
  const dict = useDictionary();

  const [isScrolledLeft, setIsScrolledLeft] = useState(true);
  const [isScrolledRight, setIsScrolledRight] = useState(false);
  const scrollableRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollableRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollableRef.current;
      // Check if the element is scrolled all the way to the left
      const isLeft = scrollableRef.current.scrollLeft === 0;
      setIsScrolledLeft(isLeft);
      const isRight = scrollLeft + clientWidth >= scrollWidth;
      setIsScrolledRight(isRight);
    }
  };

  return (
    <AboutSection dark={dark}>
      <div
        className={`relative flex w-full flex-col items-stretch ${titleOrientation == "vertical" ? "sm:flex-row" : ""} sm:py-12 `}
      >
        {/* Title */}
        <div
          className={`flex items-center gap-4 ${titleOrientation === "vertical" ? "mb-4 sm:mb-0 sm:w-20" : "mb-4"} sm:mr-6`}
        >
          <div
            className={`flex h-fit flex-1 items-center justify-start ${titleOrientation == "vertical" ? "sm:h-full sm:w-full sm:items-start sm:justify-center" : ""}`}
          >
            <span
              className={`w-fit origin-right select-none whitespace-nowrap font-title text-2xl font-medium sm:text-3xl ${titleOrientation == "vertical" ? "sm:translate-x-[-50%] sm:translate-y-[-50%] sm:-rotate-90 sm:pr-1 " : ""} ${strech ? "px-4 md:px-12 md:py-2" : ""} `}
            >
              {title}
            </span>
          </div>
          <span
            className={` ${showlinkmobile ? "hidden" : ""} pt-1 sm:hidden ${linkPos == "after" ? "hidden" : ""}`}
          >
            <CustomLink
              title={dict.button[linkName]}
              href={href}
              arrow="forward"
              color={linkColor}
            />
          </span>
        </div>
        {/* Subtitle */}
        <div className={`overflow-hidden `}>
          <div className={` flex md:flex-col ${strech ? "px-4 sm:px-12" : ""}`}>
            <span className={` text-start  `}>{subtitle}</span>
            <div
              className={` ${showlinkmobile ? "hidden md:block" : ""} mt-4 sm:block ${linkPos == "after" ? "block" : "hidden"}`}
            >
              <CustomLink
                title={dict.button[linkName]}
                href={href}
                arrow="forward"
                color={linkColor}
              />
            </div>
          </div>
          {/* Content (Scrollable) */}
          <div className={`${showlinkmobile ? "mt-8" : ""} `}>
            {overflows && (
              <div className="hidden md:block">
                {!isScrolledRight && (
                  <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white from-20% to-transparent" />
                )}
                {!isScrolledLeft && (
                  <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white from-20% to-transparent" />
                )}
              </div>
            )}
            <div
              className={`no-scrollbar overflow-y-auto overflow-x-scroll sm:mt-10 ${strech ? "mx-[20px] md:-mx-[50px]" : ""}`}
              ref={scrollableRef}
              onScroll={handleScroll}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </AboutSection>
  );
};

export default AboutSectionLayout;
