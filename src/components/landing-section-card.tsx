"use client";

import { useRef, useState } from "react";

interface CardProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  overflows?: boolean;
}

const LandingSectionCard = ({
  title,
  subtitle,
  children,
  overflows,
}: CardProps) => {
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
    <section className="flex w-full flex-col items-center justify-center gap-5 rounded-2xl border border-dark/10 bg-white px-6 py-6 sm:px-12 md:gap-12 md:py-12">
      <div className="flex flex-col gap-4 md:flex-row md:gap-10">
        <p className="font-title text-2xl font-medium sm:text-[30px]">
          {title}
        </p>
        <p className="font-normal">{subtitle}</p>
      </div>

      <div className="w-full">
        <div className="relative w-full">
          {overflows && (
            <div className="block">
              {isScrolledRight && (
                <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white from-20% to-transparent" />
              )}
              {!isScrolledLeft && (
                <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white from-20% to-transparent" />
              )}
            </div>
          )}
          <div
            className="no-scrollbar snap-x snap-mandatory overflow-x-scroll"
            ref={scrollableRef}
            onScroll={handleScroll}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSectionCard;
