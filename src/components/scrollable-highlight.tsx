"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

interface Props {
  items: React.ReactNode[];
}

export default function ScrollableHighlight({ items }: Props) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative">
      {/* Pagination Circles */}
      <div className="custom-pagination pointer-events-none absolute right-4 top-4 z-10 flex h-fit w-fit sm:!top-12 sm:right-16" />
      {/* Slides */}
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={1}
        spaceBetween={15}
        centeredSlides
        loop
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          renderBullet: (index, className) => {
            return `<span key="${index}" class="${className} custom-bullet"></span>`;
          },
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="custom-swiper"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
      {/* Navigation Buttons */}
      <div className="pointer-events-none absolute inset-0 top-0 z-10 h-full px-10">
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
    </div>
  );
}
