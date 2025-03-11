"use client";

import AboutSection from "@/components/about-section";
import Carousel from "@/components/carousel";
import { useDictionary } from "@/contexts/dictionary-provider";

export default function About() {

  const dict = useDictionary();

  const heroItems = [
    <div
      key="title"
      className="flex lg:flex-1 items-center"
    >
      <p className="bg-gradient-to-r from-black/50 via-black/25 to-black/50 bg-clip-text font-title font-medium leading-[125%] text-transparent text-[36px] sm:text-[40px] xl:text-[48px] w-[343px] sm:w-[358px] lg:w-[460px] h-fit xl:w-[565px]">
        Centro de
        <br /> Estudantes de
        <span className="font-title text-[36px] sm:text-[40px] xl:text-[48px] text-black">
          {" "}
          Engenharia Informática
        </span>{" "}
        da Universidade do Minho
      </p>
    </div>,

    <div
      key="subtitle"
      className="flex flex-col justify-center sm:h-[300px]"
    >
      <div className="text-justify font-sans font-normal leading-[24px] text-[#6E6E6E]">
        <p className="text-[15px] xl:text-[16px] w-[343px] h-fit sm:w-[480px] md:w-[636px] lg:w-[480px] xl:w-[636px]">
          {dict.about.sections.hero.description}
        </p>
      </div>
      <div className="mt-3 lg:mt-5 text-right font-sans text-[15px] font-normal text-black xl:text-[16px]">
        <p>Pedro Rangel Henriques</p>
        <p>{dict.about.sections.hero.subtitle}</p>
      </div>
    </div>,
  ];

  return (
    <main className="flex-col items-center justify-center snap-y snap-mandatory overflow-y-scroll h-screen">
      <AboutSection>
          <section
            className={`relative w-full h-fit items-center justify-center pb-64 pt-44 snap-always snap-start`}
          >
            <div className="hidden h-fit items-center justify-center lg:flex">
              {heroItems.map((item, index) => (item))}
            </div>

            <div className="block lg:hidden">
              <Carousel
                autoplay={2000}
                pagination
                items={heroItems.map((item, index) => (
                  <div key={index} className="flex justify-center items-center">{item}</div>
                ))}
              />
            </div>
          
          <div className="absolute bottom-[30px] left-0 right-0 flex flex-col items-center justify-center gap-1 h-[56px]">
                <p>Desliza para ver mais</p>
                <span className="material-symbols-outlined">arrow_downward</span>
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

