"use client";

import CustomLink from "./link";
import { useDictionary } from "@/contexts/dictionary-provider";
import { horizontalPaddingL, horizontalPaddingR } from "@/lib/styling";

type TitleOr = "vertical" | "horizontal";
type LinkName = "see_more" | "see_team";
type LinkPos = "after" | "before";

interface AboutSectionProps {
  title: string;
  titleOrientation?: TitleOr;
  subtitle: string;
  linkName: LinkName;
  linkPos?: LinkPos;
  href: string;
  children?: React.ReactNode;
}

const AboutSectionLayout = ({
  title,
  titleOrientation, // Allows to show the title horizontally on desktop
  subtitle,
  linkName,
  linkPos, // Allows to show the link after the subtitle on mobile
  href,
  children,
}: AboutSectionProps) => {
  const dict = useDictionary();

  return (
    <div
      className={`flex w-full flex-col items-stretch py-10 ${titleOrientation == "vertical" ? "sm:flex-row" : ""} sm:py-12 ${horizontalPaddingL}`}
    >
      {/* Title */}
      <div
        className={`flex items-center gap-4 ${titleOrientation === "vertical" ? "mb-4 sm:mb-0 sm:w-20" : "mb-4"} sm:mr-6`}
      >
        <div
          className={`flex h-fit flex-1 items-center justify-start ${titleOrientation == "vertical" ? "sm:h-full sm:w-full sm:items-start sm:justify-center" : ""}`}
        >
          <span
            className={`w-fit origin-right select-none whitespace-nowrap font-title text-2xl font-medium sm:text-3xl ${titleOrientation == "vertical" ? "sm:translate-x-[-50%] sm:translate-y-[-50%] sm:-rotate-90 sm:pr-1 " : ""} `}
          >
            {title}
          </span>
        </div>
        <span
          className={`pt-1 sm:hidden ${linkPos == "after" ? "hidden" : ""} ${horizontalPaddingR}`}
        >
          <CustomLink
            title={dict.button[linkName]}
            href={href}
            arrow="forward"
          />
        </span>
      </div>
      {/* Subtitle */}
      <div className="overflow-auto">
        <div className={horizontalPaddingR}>
          <span className="text-start">{subtitle}</span>

          <div
            className={`mt-4 sm:block ${linkPos == "after" ? "block" : "hidden"}`}
          >
            <CustomLink
              title={dict.button[linkName]}
              href={href}
              arrow="forward"
            />
          </div>
        </div>
        {/* Content (Scrollable) */}
        <div
          className={`mt-7 overflow-y-auto overflow-x-scroll sm:mt-10 ${horizontalPaddingR}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default AboutSectionLayout;
