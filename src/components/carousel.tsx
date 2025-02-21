"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

interface CarouselProps {
  items: React.ReactNode[];
}

export default function Carousel({ items }: CarouselProps) {
  const hasText = items.some((item) => item !== undefined);

  return (
    <Swiper
      slidesPerView={hasText ? 2 : 3}
      spaceBetween={20}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      speed={3000}
      breakpoints={{
        0: { slidesPerView: hasText ? 1 : 2, spaceBetween: 10 },
        768: { slidesPerView: hasText ? 2 : 2, spaceBetween: 15 },
        1024: {
          slidesPerView: hasText ? 2 : 3,
          spaceBetween: hasText ? 10 : 20,
          centeredSlides: hasText ? false : true,
        },
      }}
      pagination={{
        clickable: true,
        type: "bullets",
      }}
      modules={[Autoplay, Pagination]}
      className="custom-swiper"
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>{item}</SwiperSlide>
      ))}
    </Swiper>
  );
}
