"use client";

import { useDictionary } from "@/contexts/dictionary-provider";
import Carousel from "@/components/carousel";
import Image from "next/image";

export default function About() {

  const dict = useDictionary();
  const dictAbout = dict.about;

  const images = [
    "/images/uMinho1.jpg",
    "/images/sei24-25.jpg",
    "/images/uMinho2.jpg",
    "/images/uMinho1.jpg",
    "/images/sei24-25.jpg",
    "/images/uMinho2.jpg",
  ];
  
  return (
    <>

      <section className={`flex flex-col text-center pt-24 pb-12 gap-4 sm:gap-6 border-b-[1px] border-[#0000001A]`}>
        <p className="font-title font-medium text-2xl sm:text-3xl">{dictAbout.sections[0]?.title}</p>
        <p className="px-6 sm:px-12">{dictAbout.sections[0]?.subtitle}</p>
        <div className="w-full pt-6">
          <Carousel
            autoplay={3000}
            items={images.map((image, index) => (
              <Image
                key={index}
                src={image}
                width={400}
                height={400}
                alt=""
                className="h-[400px] w-full rounded-xl object-cover"
              />
            ))}
          />
        </div>
        <p className="px-6 sm:px-12">{dictAbout.sections[0]?.description}</p>
      </section>

    </>
  );
};
