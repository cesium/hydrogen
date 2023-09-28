"use client";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { useEffect, ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
  index: number;
} & EmblaOptionsType;

const Carousel = ({ children, index, ...options }: Props) => {
  // useEmblaCarousel returns a emblaRef and we must attach the ref to a container.
  // EmblaCarousel will use that ref as basis for swipe and other functionality.
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [scroll, setScroll] = useState<boolean>(true);

  useEffect(() => {
    // Only scrolls if mouse is not hovering the element
    if (scroll) {
      const interval = setInterval(
        () => {
          emblaApi?.scrollNext();
        },
        6000 + 1500 * index, // Sets a higher scroll interval for the 2nd banner (contains text)
      );
      return () => clearInterval(interval);
    }
  }, [emblaApi, scroll, index]);

  return (
    <div
      className="select-none overflow-hidden shadow-sm shadow-gray-900/20"
      ref={emblaRef}
    >
      <div
        className="flex"
        onMouseEnter={() => setScroll(false)}
        onMouseLeave={() => setScroll(true)}
      >
        {children}
      </div>
    </div>
  );
};

export default Carousel;
