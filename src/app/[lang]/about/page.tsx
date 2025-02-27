"use client";

import { useDictionary } from "@/contexts/dictionary-provider";
import Carousel from "@/components/carousel";
import Image from "next/image";
import { horizontalPadding } from "@/lib/styling";

export default function About() {

  const dict = useDictionary();
  const dictAbout = dict.about;

  const images = dictAbout.sections.cesium.images;
  
  return (
    <main>
      <section className={`flex flex-col items-center text-center py-12 gap-4 sm:gap-6 border-b-[1px] border-[#0000001A] bg-gray/`}>
        <p className="font-title font-medium text-2xl sm:text-3xl">{dictAbout.sections.cesium.title}</p>
        <p className="px-6 sm:px-64">{dictAbout.sections.cesium.subtitle}</p>
        <div className="w-full overflow-hidden pt-4 sm:pt-6">
          <Carousel
            autoplay={2000}
            pagination
            overflow
            loop
            items={images.map((image, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={image.src}
                  width={490}
                  height={367}
                  alt={image.alt}
                  className="h-[237px] w-full rounded-xl object-cover sm:h-[367px] sm:max-w-full"
                />
              </div>
            ))}
          />
        </div>
        <p className="px-6 sm:px-64">{dictAbout.sections.cesium.description}</p>
      </section>
    </main>
  );
};
