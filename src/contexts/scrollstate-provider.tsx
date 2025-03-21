"use client";

import { createContext, useContext } from "react";

interface ScrollStateContextData {
  isScrolledTop: boolean;
  isScrolledBottom: boolean;
  scrollPosition: number; // 0 - 100
}

const ScrollStateContext = createContext<ScrollStateContextData | undefined>(
  undefined,
);

export function ScrollStateProvider({
  children,
  isScrolledTop,
  isScrolledBottom,
  scrollPosition,
}: {
  children: React.ReactNode;
  isScrolledTop: boolean;
  isScrolledBottom: boolean;
  scrollPosition: number;
}) {
  return (
    <ScrollStateContext.Provider
      value={{ isScrolledTop, isScrolledBottom, scrollPosition }}
    >
      {children}
    </ScrollStateContext.Provider>
  );
}

export function useScrollState(): {
  isScrolledTop: boolean;
  isScrolledBottom: boolean;
  scrollPosition: number;
} {
  const context = useContext(ScrollStateContext);
  if (context === undefined) {
    throw new Error("useDictionary() must be used within a DictionaryProvider");
  }
  return {
    isScrolledTop: context.isScrolledTop,
    isScrolledBottom: context.isScrolledBottom,
    scrollPosition: context.scrollPosition,
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
