"use client";

import CustomLink from "./link";
import { useDictionary } from "@/contexts/dictionary-provider";
import { horizontalPadding } from "@/lib/styling";

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
  children: React.ReactNode;
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
      className={`flex flex-col items-stretch py-10 ${titleOrientation == "vertical" ? "sm:flex-row" : ""} sm:py-12 ${horizontalPadding}`}
    >
      <div className="mb-4 flex w-full items-center sm:mr-6 sm:w-20">
        <div
          className={`flex h-fit flex-1 items-center justify-start ${titleOrientation == "vertical" ? "sm:h-full sm:w-full sm:items-start sm:justify-center" : ""}`}
        >
          <span
            className={`w-fit origin-right font-title text-2xl font-medium sm:text-3xl ${titleOrientation == "vertical" ? "sm:translate-x-[-50%] sm:translate-y-[-50%] sm:-rotate-90 sm:pr-1 " : ""} `}
          >
            {title}
          </span>
        </div>
        <span
          className={`pt-1 sm:hidden ${linkPos == "after" ? "hidden" : ""}`}
        >
          <CustomLink
            title={dict.button[linkName]}
            href={href}
            arrow="forward"
          />
        </span>
      </div>

      <div className="overflow-auto">
        <div className={`flex justify-start ${titleOrientation == "vertical" ? "max-w-[1250px]" : ""}`}>{subtitle}</div>

        <div
          className={`mt-4 sm:block ${linkPos == "after" ? "block" : "hidden"}`}
        >
          <CustomLink
            title={dict.button[linkName]}
            href={href}
            arrow="forward"
          />
        </div>

        <div className="mt-7 sm:mt-10">{children}</div>
      </div>
    </div>
  );
};

export default AboutSectionLayout;
