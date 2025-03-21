"use client";

import { DictionaryProvider } from "@/contexts/dictionary-provider";
import { ScrollStateProvider } from "@/contexts/scrollstate-provider";
import type { Locale } from "@/internationalization/dictionaries";
import type { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { useEffect, useState } from "react";

export default function Body({
  fonts,
  lang,
  children,
}: {
  fonts: NextFontWithVariable[];
  lang: Locale;
  children: React.ReactNode;
}) {
  const [isScrolledTop, setIsScrolledTop] = useState(true);
  const [isScrolledBottom, setIsScrolledBottom] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const scrollableHeight = scrollHeight - clientHeight;

    const isTop = window.pageYOffset === 0;
    setIsScrolledTop(isTop);

    const isBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    setIsScrolledBottom(isBottom);

    const scrolledPercentage = (scrollTop / scrollableHeight) * 100;
    setScrollPosition(Math.min(100, Math.max(0, scrolledPercentage)));
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
    <body
      className={`${fonts.map((f) => f.variable).join(" ")} overflow-x-hidden overflow-y-scroll bg-foundation font-sans text-black antialiased`}
    >
      <ScrollStateProvider
        isScrolledBottom={isScrolledBottom}
        isScrolledTop={isScrolledTop}
        scrollPosition={scrollPosition}
      >
        <DictionaryProvider lang={lang}>{children}</DictionaryProvider>
      </ScrollStateProvider>
    </body>
  );
}
