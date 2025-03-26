"use client";

import CustomLink from "./link";
import { useDictionary } from "@/contexts/dictionary-provider";
import AboutSection from "./about-section";
import { useRef, useState } from "react";

type TitleOr = "vertical" | "horizontal";
type LinkName = "see_more" | "see_team" | "go_to_departments" | "go_to_team";
type LinkPos = "after" | "before";

interface CollaboratorLayoutProps {
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
}

const CollaboratorLayout = ({
  title,
  subtitle,
  linkName,
  href,
  overflows,
  dark,
  children,
  linkColor,
}: CollaboratorLayoutProps) => {
  const dict = useDictionary();

  const [isScrolledLeft, setIsScrolledLeft] = useState(true);
  const [isScrolledRight, setIsScrolledRight] = useState(false);
  const scrollableRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollableRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollableRef.current;
      const isLeft = scrollableRef.current.scrollLeft === 0;
      setIsScrolledLeft(isLeft);
      const isRight = scrollLeft + clientWidth >= scrollWidth;
      setIsScrolledRight(isRight);
    }
  };

  return (
    <AboutSection dark={dark}>
      <div className="relative flex w-full flex-col items-stretch gap-6 py-10 sm:flex-row sm:py-12">
        {/* Left Section: Title, Subtitle, and Link */}
        <div className="flex flex-shrink-0 flex-col px-6 sm:w-1/2 sm:px-0">
          <div className="mb-4">
            <span className="w-fit select-none whitespace-nowrap font-title text-2xl font-medium sm:text-3xl">
              {title}
            </span>
          </div>
          <div className="mb-4">
            <span className="text-start">{subtitle}</span>
          </div>
          <div>
            <CustomLink
              title={dict.button[linkName]}
              href={href}
              color={linkColor}
            />
          </div>
        </div>

        {/* Right Section: Children */}
        <div className="relative flex-1 md:pt-16">
          {overflows && (
            <>
              {/* Gradient for desktop */}
              <div className="hidden md:block">
                {!isScrolledRight && (
                  <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-foundation from-20% to-transparent" />
                )}
                {!isScrolledLeft && (
                  <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-foundation from-20% to-transparent" />
                )}
              </div>

              {/* Gradient for mobile */}
              <div className="block md:hidden">
                {!isScrolledRight && (
                  <div className="absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-foundation from-50% to-transparent" />
                )}
                {!isScrolledLeft && (
                  <div className="absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-foundation from-50% to-transparent" />
                )}
              </div>
            </>
          )}
          <div
            className="no-scrollbar mt-7 h-20 overflow-y-hidden overflow-x-scroll sm:mt-0"
            ref={scrollableRef}
            onScroll={handleScroll}
          >
            {children}
          </div>
        </div>
      </div>
    </AboutSection>
  );
};

export default CollaboratorLayout;
