"use client";

import { useState, useRef, useEffect } from "react";

const Scrollable = ({
  children,
  overflows = true,
  className = "",
}: {
  children: React.ReactNode;
  overflows?: boolean;
  className?: string;
}) => {
  const [isScrolledLeft, setIsScrolledLeft] = useState(true);
  const [isScrolledRight, setIsScrolledRight] = useState(true);
  const scrollableRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollableRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollableRef.current;
      const isLeft = scrollLeft === 0;
      setIsScrolledLeft(isLeft);
      const isRight = scrollLeft + clientWidth >= scrollWidth - 1;
      setIsScrolledRight(isRight);
    }
  };

  useEffect(() => {
    const element = scrollableRef.current;
    if (!element) return;

    handleScroll();

    const observer = new ResizeObserver(handleScroll);
    observer.observe(element);

    return () => observer.disconnect();
  }, [children]);

  // Define dinamicamente onde aplicar a transparência nas pontas
  const getMaskStyle = () => {
    if (!overflows) return undefined;

    const fadeLeft = !isScrolledLeft;
    const fadeRight = !isScrolledRight;

    if (fadeLeft && fadeRight) {
      return "linear-gradient(to right, transparent, black 30px, black calc(100% - 30px), transparent)";
    }
    if (fadeRight) {
      return "linear-gradient(to right, black calc(100% - 30px), transparent)";
    }
    if (fadeLeft) {
      return "linear-gradient(to right, transparent, black 30px, black 100%)";
    }
    return undefined;
  };

  const mask = getMaskStyle();

  return (
    <div className="relative w-full min-w-0 max-w-full">
      <div
        className={`no-scrollbar min-w-0 max-w-full overflow-x-auto ${className}`}
        ref={scrollableRef}
        onScroll={handleScroll}
        style={{
          maskImage: mask,
          WebkitMaskImage: mask,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Scrollable;
