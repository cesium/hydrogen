"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { ReactNode } from "react";

interface CarouselItem {
  image?: string; 
  text?: ReactNode;  
}

interface CarouselProps {
  items: CarouselItem[]; 
}

export default function Carousel({ items }: CarouselProps) {
  const hasText = items.some((item) => item.text);

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
        0: { slidesPerView: hasText ? 1 : 2, spaceBetween: 10, }, 
        768: { slidesPerView: hasText ? 2 : 2, spaceBetween: 15 },
        1024: { slidesPerView: hasText ? 2: 3, spaceBetween: 20,centeredSlides: hasText ? false : true },
      }}
      pagination={{
        clickable: true,
        type: "bullets",
      }}
      modules={[Autoplay, Pagination]}
      className="custom-swiper"
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          {item.image ? (
            <img
              src={item.image}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
          ) : item.text ? (
            <div className={`carousel-text-wrapper ${index === 0 ? 'first-text' : index === 1 ? 'second-text' : ''}`}>
              <div className="carousel-text">{item.text}</div>
            </div>
          ) : null}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
