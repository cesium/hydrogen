"use client";

import Carousel from "@/components/carousel";
import { useDictionary } from "@/contexts/dictionary-provider";
import { horizontalPadding } from "@/lib/styling";

export default function About() {
  const dict = useDictionary();

  const heroItems = [
    <div
      key="title"
      className="flex items-center lg:mr-14 xl:mr-20"
    >
      <p className="h-[270px] bg-gradient-to-r from-black/50 via-black/25 to-black/50 bg-clip-text font-title text-[36px] font-medium leading-[125%] text-transparent md:h-[360px] w-[340px] lg:w-[376px] xl:w-[430px] sm:text-[42px] lg:text-[42px] xl:text-[48px]">
        Centro de
        <br /> Estudantes de
        <span className="font-title text-[36px] text-black lg:text-[48px]">
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
      <div className="w-[343px] text-justify font-sans text-[12px] font-normal leading-[24px] text-[#6E6E6E] md:text-[14px] lg:text-[16px] h-[288px] sm:h-[168px] md:h-[200px] xl:h-[168px] sm:w-[480px] md:w-[480px] lg:w-[550px] xl:w-[636px]">
        <p>
          Decorria no ano de 1995, a Licenciatura em Engenharia de Sistemas e
          Informática (LESI) da UM. (...) Foi neste contexto que um grupo de
          alunos do 3º ano pediu à Direção de Curso (DC), que eu então dirigia,
          apoio para criar oficialmente um Centro de Estudantes. (...) A partir
          desse momento iniciou-se o caminho deste núcleo estudantil que, 20
          anos depois, mantém o nome e sigla e mantém o propósito determinado na
          projeção da imagem do curso e na defesa dos interesses dos seus
          associados.
        </p>
      </div>
      <div className="mt-3 lg:mt-5 text-right font-sans text-[12px] md:text-[14px] font-normal text-black lg:text-[16px]">
        <p>Pedro Rangel Henriques</p>
        <p>Diretor Do Departamento de Informática - 2017</p>
      </div>
    </div>,
  ];

  return (
    <main className="flex-col items-center justify-center snap-y snap-mandatory overflow-y-scroll h-screen">
      
      <section
        className={`w-full items-center justify-center pb-64 pt-44 ${horizontalPadding} snap-always snap-center`}
      >
        <div className="hidden items-center justify-center md:flex">
          {heroItems.map((item, index) => (
            <div className={index == 0 ? "flex-1" : ""} key={index}>
              {item}
            </div>
          ))}
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

