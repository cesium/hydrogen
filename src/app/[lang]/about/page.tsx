"use client";

import AboutSection from "@/components/about-section";
import Carousel from "@/components/carousel";
import { useDictionary } from "@/contexts/dictionary-provider";

export default function About() {
  const dict = useDictionary();

  const heroItems = [
    <div key="title" className="flex items-center lg:flex-1 mb-32 lg:mb-0 pointer-events-none">
      <p className="h-fit w-[343px] bg-gradient-to-r from-black/50 via-black/25 to-black/50 bg-clip-text font-title text-[36px] font-medium leading-[125%] text-transparent sm:w-[358px] sm:text-[40px] lg:w-[460px] xl:w-[565px] xl:text-[48px]">
        Centro de
        <br /> Estudantes de
        <span className="font-title text-[36px] text-black sm:text-[40px] xl:text-[48px]">
          {" "}
          Engenharia Informática
        </span>{" "}
        da Universidade do Minho
      </p>
    </div>,

    <div key="subtitle" className="flex flex-col justify-center sm:h-[300px] mb-32 lg:mb-0 pointer-events-none">
      <div className="text-justify font-sans font-normal leading-[24px] text-[#6E6E6E]">
        <p className="h-fit w-[343px] text-[15px] sm:w-[480px] md:w-[636px] lg:w-[480px] xl:w-[636px] xl:text-[16px]">
          {dict.about.sections.hero.description}
        </p>
      </div>
      <div className="mt-3 text-right font-sans text-[15px] font-normal text-black lg:mt-5 xl:text-[16px]">
        <p>Pedro Rangel Henriques</p>
        <p>{dict.about.sections.hero.subtitle}</p>
      </div>
    </div>,
  ];

  return (
    <main className="flex-col items-center justify-center">
      <AboutSection>
        <section
          className={`flex h-[745px] w-full flex-col justify-center sm:h-[804px] lg:gap-44`}
        >
          <div className="hidden h-fit items-center justify-center lg:flex">
            {heroItems.map((item, _) => item)}
          </div>

          <div className="block lg:hidden">
            <Carousel
              autoplay={2000}
              pagination
              items={heroItems.map((item, index) => (
                <div key={index} className="flex items-center justify-center">
                  {item}
                </div>
              ))}
            />
          </div>

          <div className="flex h-[56px] flex-col items-center justify-center gap-1">
            <p>Desliza para ver mais</p>
            <span className="material-symbols-outlined">arrow_downward</span>
          </div>
        </section>
      </AboutSection>

      <AboutSection dark>
        <div className="flex h-full items-center justify-center">
          <div className="flex w-full max-w-[1440px] flex-col items-center justify-center">
            <h2 className="text-center font-title text-[36px] font-medium text-black md:text-[48px] lg:text-[60px]">
              hello
            </h2>
            <div className="mt-3 text-center font-sans text-[16px] font-normal text-[#6E6E6E] md:text-[18px] lg:text-[20px]">
              subtitulo
            </div>
          </div>
        </div>
      </AboutSection>
    </main>
  );
}
