"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

interface CarouselProps {
  overflow?: boolean;
  pagination?: boolean;
  loop?: boolean;
  items: React.ReactNode[];
  autoplay?: number;
}

export default function Carousel({
  overflow = false /* Shows partially the previous and next items */,
  pagination = false /* Shows the bullet pagination */,
  loop = false /* Loops through the items */,
  items /* Items to show on the carousel */,
  autoplay /* Sets if the carousel has autoplay */,
}: CarouselProps) {
  return (
    <Swiper
      slidesPerView={overflow ? 1.3 : 1}
      spaceBetween={15}
      loop={loop}
      autoplay={
        autoplay ? { delay: autoplay, disableOnInteraction: false } : false
      }
      pagination={pagination ? { clickable: true, type: "bullets" } : false}
      breakpoints={{
        640: { slidesPerView: overflow ? 1.5 : 1, spaceBetween: 15 },
        768: { slidesPerView: overflow ? 1.8 : 1, spaceBetween: 15 },
        1024: { slidesPerView: overflow ? 2.5 : 3, spaceBetween: 20 },
      }}
      modules={[Autoplay, Pagination]}
      className="custom-swiper"
      centeredSlides
    >
      {items.map((item, index) => (
        <SwiperSlide key={index} className={`flex justify-center`}>
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
