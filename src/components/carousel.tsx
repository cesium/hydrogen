"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

interface CarouselProps {
  items: React.ReactNode[];
  autoplay?: number;
}

export default function Carousel({ items, autoplay }: CarouselProps) {
  const hasText = items.some((item) => item !== undefined);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={autoplay ? { delay: autoplay, disableOnInteraction: false } : false}
      loop={true}
      navigation={true}
      breakpoints={{
        0: { slidesPerView: hasText ? 1 : 2, spaceBetween: 10 },
        768: { slidesPerView: hasText ? 2 : 2, spaceBetween: 15 },
        1024: {
          slidesPerView: hasText ? 3 : 3,
          spaceBetween: hasText ? 10 : 20,
          centeredSlides: hasText ? false : true,
        },
      }}
      pagination={{
        clickable: false,
        type: "bullets",
      }}
      modules={[Autoplay, Pagination]}
      className="custom-swiper"
    >
      {items.map((item, index) => (
        <SwiperSlide className="" key={index}>
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
