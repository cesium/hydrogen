"use client";

import AppLink from "./link";
import { useDictionary } from "@/contexts/dictionary-provider";
import AboutSection from "./about-section";
import Scrollable from "@/components/scrollable";

type TitleOr = "vertical" | "horizontal";
type LinkName = "see_more" | "see_team";
type LinkPos = "after" | "before";

interface AboutSectionProps {
  title: string;
  titleOrientation?: TitleOr;
  subtitle: string;
  linkName?: LinkName;
  linkPos?: LinkPos;
  href?: string;
  overflows?: boolean;
  dark?: boolean;
  children?: React.ReactNode;
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
}: AboutSectionProps) => {
  const dict = useDictionary();

  return (
    <AboutSection dark={dark}>
      <div
        className={`relative flex w-full flex-col items-stretch py-10 ${titleOrientation == "vertical" ? "sm:flex-row" : ""} sm:py-12`}
      >
        {/* Title */}
        <div
          className={`flex items-center gap-4 ${titleOrientation === "vertical" ? "mb-4 sm:mb-0 sm:w-10" : "mb-4"} sm:mr-6`}
        >
          <div
            className={`flex h-fit flex-1 items-center justify-start ${titleOrientation == "vertical" ? "sm:h-full sm:w-full sm:-translate-x-2 sm:items-start sm:justify-center" : ""}`}
          >
            <span
              className={`w-fit origin-right select-none whitespace-nowrap font-title text-2xl font-medium sm:text-3xl ${titleOrientation == "vertical" ? "sm:translate-x-[-50%] sm:translate-y-[-50%] sm:-rotate-90 sm:pr-1 " : ""} `}
            >
              {title}
            </span>
          </div>
          {linkName && href && (
            <span
              className={`pt-1 sm:hidden ${linkPos == "after" ? "hidden" : ""}`}
            >
              <AppLink title={dict.button[linkName]} href={href} />
            </span>
          )}
        </div>
        {/* Subtitle */}
        <div className="overflow-auto">
          <div>
            <span className="text-start">{subtitle}</span>
            {linkName && href && (
              <div
                className={`mt-4 sm:block ${linkPos == "after" ? "block" : "hidden"}`}
              >
                <AppLink title={dict.button[linkName]} href={href} />
              </div>
            )}
          </div>
          {/* Content (Scrollable) */}
          <Scrollable overflows={overflows} className="mt-7 sm:mt-10">
            {children}
          </Scrollable>
        </div>
      </div>
    </AboutSection>
  );
};

export default AboutSectionLayout;
