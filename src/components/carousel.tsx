"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useState, useRef } from "react";
import { Swiper as SwiperType } from "swiper";

interface CarouselProps {
  overflow?: boolean;
  pagination?: boolean;
  loop?: boolean;
  single?: boolean;
  items: React.ReactNode[];
  autoplay?: number;
  showNavigation?: boolean;
}

export default function Carousel({
  overflow = false /* Shows partially the previous and next items */,
  pagination = false /* Shows the bullet pagination */,
  loop = false /* Loops through the items */,
  single = false,
  items /* Items to show on the carousel */,
  autoplay /* Sets if the carousel has autoplay */,
  showNavigation = false /* Default is without arrows */,
}: CarouselProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const handleSlideChange = (swiper: any) => {
    setIsFirstSlide(swiper.realIndex === 0);
    setIsLastSlide(swiper.isEnd);
  };

  return (
    <div className="relative">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={overflow ? 1.3 : 1}
        spaceBetween={15}
        centeredSlides={true}
        loop={loop}
        autoplay={
          autoplay ? { delay: autoplay, disableOnInteraction: false } : false
        }
        pagination={pagination ? { clickable: true, type: "bullets" } : false}
        breakpoints={{
          768: {
            slidesPerView: overflow ? 1.8 : single ? 1 : 2,
            spaceBetween: 15,
            centeredSlides: overflow ? true : false,
          },
          1024: {
            slidesPerView: overflow ? 2.5 : single ? 1 : 3,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="custom-swiper"
        onSlideChange={handleSlideChange}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className={`flex justify-center`}>
            {item}
          </SwiperSlide>
        ))}
      </Swiper>

      {showNavigation && (
        <div className="absolute inset-0 z-50 px-10 h-full top-0">
          <button
            className={`select-none absolute left-10 top-1/2 transform -translate-y-1/2 p-2 text-white ${isFirstSlide ? "hidden" : ""} pointer-events-auto`}
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous slide"
          >
            <span className="material-symbols-outlined text-5xl">
              arrow_back
            </span>
          </button>
          <button
            className={`select-none absolute right-10 top-1/2 transform -translate-y-1/2 p-2 text-white ${(isLastSlide && !loop) ? "hidden" : ""} pointer-events-auto`}
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next slide"
          >
            <span className="material-symbols-outlined text-5xl">
              arrow_forward
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
