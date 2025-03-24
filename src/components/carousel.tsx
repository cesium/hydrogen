"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

type PaginationPos = "bottom" | "top";

interface CarouselProps {
  overflow?: boolean;
  pagination?: boolean;
  loop?: boolean;
  single?: boolean;
  items: React.ReactNode[];
  autoplay?: number;
  showNavigation?: boolean;
  paginationPos?: PaginationPos;
}

export default function Carousel({
  overflow = false /* Shows partially the previous and next items */,
  pagination = false /* Shows the bullet pagination */,
  loop = false /* Loops through the items */,
  single = false /* Show just one slide at a time */,
  items /* Items to show on the carousel */,
  autoplay /* Sets if the carousel has autoplay */,
  showNavigation = false /* Default is without arrows */,
  paginationPos = "bottom",
}: CarouselProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative">
      {pagination && paginationPos === "top" && (
        <div className="custom-pagination pointer-events-none absolute right-4 top-4 z-10 flex h-fit w-fit sm:!top-12 sm:right-16"></div>
      )}

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={overflow ? 1.3 : 1}
        spaceBetween={15}
        centeredSlides
        loop={loop}
        autoplay={
          autoplay ? { delay: autoplay, disableOnInteraction: false } : false
        }
        pagination={
          pagination && paginationPos === "top"
            ? {
                el: ".custom-pagination",
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span key="${index}" class="${className} custom-bullet"></span>`;
                },
              }
            : { clickable: true }
        }
        breakpoints={{
          640: {
            slidesPerView: overflow ? 1.5 : single ? 1 : 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: overflow ? 1.8 : single ? 1 : 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: overflow ? 2.5 : single ? 1 : 3,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="custom-swiper"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className={`flex justify-center`}>
            {item}
          </SwiperSlide>
        ))}
      </Swiper>

      {showNavigation && (
        <div className="pointer-events-none absolute inset-0 top-0 z-10 h-full px-10">
          <button
            className={`pointer-events-auto absolute bottom-2 left-2 z-50 hidden transform select-none p-2 text-white lg:left-10 lg:top-1/2 lg:-translate-y-1/2`}
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous slide"
          >
            <span className="material-symbols-outlined text-5xl">
              arrow_back
            </span>
          </button>
          <button
            className={`pointer-events-auto absolute bottom-2 right-2 z-50 transform select-none p-2 text-white lg:right-10 lg:top-1/2 lg:-translate-y-1/2`}
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
