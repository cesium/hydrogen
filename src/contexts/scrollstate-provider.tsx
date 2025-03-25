"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface ScrollStateContextData {
  isScrolledTop: boolean;
  isScrolledBottom: boolean;
}

const ScrollStateContext = createContext<ScrollStateContextData | undefined>(
  undefined,
);

export function ScrollStateProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [isScrolledTop, setIsScrolledTop] = useState(true);
  const [isScrolledBottom, setIsScrolledBottom] = useState(false);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const scrollableHeight = scrollHeight - clientHeight;

    const isTop = window.pageYOffset === 0;
    setIsScrolledTop(isTop);

    const isBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    setIsScrolledBottom(isBottom);

    const scrolledPercentage = (scrollTop / scrollableHeight) * 100;
  };

  useEffect(() => {
    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup: remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <ScrollStateContext.Provider
      value={{ isScrolledTop, isScrolledBottom }}
    >
      {children}
    </ScrollStateContext.Provider>
  );
}

export function useScrollState(): {
  isScrolledTop: boolean;
  isScrolledBottom: boolean;
} {
  const context = useContext(ScrollStateContext);
  if (context === undefined) {
    throw new Error("useDictionary() must be used within a DictionaryProvider");
  }
  return {
    isScrolledTop: context.isScrolledTop,
    isScrolledBottom: context.isScrolledBottom,
  };
}

export function relativeScrollTo(percentage: number) {
  const { scrollHeight, clientHeight } = document.documentElement;
  const scrollableHeight = scrollHeight - clientHeight;

  if (scrollableHeight <= 0) {
    return; // No scrolling needed
  }

  const pixelPosition = (percentage / 100) * scrollableHeight;

  window.scrollTo({
    top: pixelPosition,
    behavior: "smooth",
  });
}

export function scrollTo(pixels: number) {
  window.scrollTo({
    top: pixels,
    behavior: "smooth",
  });
}
