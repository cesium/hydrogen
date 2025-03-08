"use client";

import AboutSection from "@/components/about-section";
import Carousel from "@/components/carousel";
import { useDictionary } from "@/contexts/dictionary-provider";

export default function About() {
  const dict = useDictionary();

  const heroItems = [
    <div
      key="title"
      className="flex md:flex-1 items-center"
    >
      <p className="bg-gradient-to-r from-black/50 via-black/25 to-black/50 bg-clip-text font-title font-medium leading-[125%] text-transparent text-[36px] sm:text-[48px] md:text-[38px] xl:text-[48px] w-[343px] sm:w-[430px] lg:w-[460px] h-fit xl:w-[565px]">
        Centro de
        <br /> Estudantes de
        <span className="font-title text-[36px] sm:text-[48px] md:text-[38px] xl:text-[48px] text-black">
          {" "}
          Engenharia Informática
        </span>{" "}
        da Universidade do Minho
      </p>
    </div>,

    <div
      key="subtitle"
      className="flex-col items-center"
    >
      <div className="text-justify font-sans font-normal leading-[24px] text-[#6E6E6E]">
        <p className="text-[12px] md:text-[13px] lg:text-[15px] xl:text-[16px] w-[343px] h-fit sm:w-[480px] xl:w-[636px]">
          {dict.about.sections.hero.description}
        </p>
      </div>
      <div className="mt-3 lg:mt-5 text-right font-sans text-[12px] md:text-[13px] font-normal text-black lg:text-[15px] xl:text-[16px]">
        <p>Pedro Rangel Henriques</p>
        <p>{dict.about.sections.hero.subtitle}</p>
      </div>
    </div>,
  ];

  return (
    <main className="flex-col items-center justify-center snap-y snap-mandatory overflow-y-scroll h-screen">
      <AboutSection>
        <section
          className={`w-full h-fit items-center justify-center pb-64 pt-44 snap-always snap-center`}
        >
          <div className="hidden h-fit items-center justify-center md:flex">
            {heroItems.map((item, index) => (item))}
          </div>

          <div className="block md:hidden">
            <Carousel
              autoplay={2000}
              pagination
              items={heroItems.map((item, index) => (
                <div key={index} className="flex justify-center items-center">{item}</div>
              ))}
            />
          </div>
        </section>
      </AboutSection>

      <section className="snap-always snap-center h-screen">
        <div className="h-full flex justify-center items-center">
          <div className="flex flex-col items-center justify-center w-full max-w-[1440px]">
            <h2 className="text-[36px] font-title font-medium text-black text-center md:text-[48px] lg:text-[60px]">
              hello
            </h2>
            <div className="text-[16px] font-sans font-normal text-[#6E6E6E] text-center mt-3 md:text-[18px] lg:text-[20px]">
              subtitulo
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

