"use client";

import Image from "next/image";
import Carousel from "@/components/carousel";

export default function Home() {
  const images = [
    "/images/imagem1.jpg",
    "/images/imagem2.jpg",
    "/images/imagem3.jpg",
    "/images/imagem1.jpg",
    "/images/imagem2.jpg",
    "/images/imagem3.jpg",
  ];

  const text = [
    <div
      key="text1"
      className="flex h-full w-full justify-center bg-gradient-to-r from-black/50 via-black/25 to-black/50 bg-clip-text font-title text-[36px] font-medium leading-[125%] text-transparent md:h-[360px] md:w-[565px] md:text-[48px]"
    >
      <p>
        Centro de
        <br /> Estudantes de
        <p className="font-title text-[36px] text-black md:text-[48px]">
          {" "}
          Engenharia Informática
        </p>
        da Universidade do Minho
      </p>
    </div>,
    <div key="text2" className="mb-10 h-full w-full md:h-[168px] md:w-[636px]">
      <div className="text-justify font-sans text-[14px] font-normal leading-[24px] text-[#6E6E6E] md:text-[16px]">
        <p>
          Decorria no ano de 1995, a Licenciatura em Engenharia de Sistemas e
          Informática (LESI) da UM. (...) Foi neste contexto que um grupo de
          alunos do 3º ano pediu à Direção de Curso (DC), que eu então dirigia,
          apoio para criar oficialmente um Centro de Estudantes. (...) A partir
          desse momento iniciou-se o caminho deste núcleo estudantil que, 20
          anos depois, mantém o nome e sigla e mantém o propósito determinado na
          projeção da imagem do curso e na defesa dos interesses dos seus
          associados
        </p>
      </div>
      <div className="text-right font-sans text-[12px] font-normal text-black md:text-[16px]">
        <p>Pedro Rangel Henriques</p>
        <p>Diretor Do Departamento de Informática - 2017</p>
      </div>
    </div>,
  ];

  return (
    <main className="flex-col items-center justify-center">
      <div className="block pt-6 md:hidden">
        <Carousel
          items={text.map((t, index) => (
            <div key={index}>{t}</div>
          ))}
        />
      </div>
      <div className="hidden justify-between px-10 md:flex">
        {text[0]}
        {text[1]}
      </div>

      <div className="w-full pt-6">
        <Carousel
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
    </main>
  );
}
