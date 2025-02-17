"use client";

import { useDictionary } from "@/contexts/dictionary-provider";
import { horizontalPadding, verticalPadding } from "@/lib/styling";

const About = () => {
  const dict = useDictionary();

  return (
    <main className="flex-col items-center justify-center">
      <div className="flex justify-center p-12">
        <div
          key="text-1"
          className="h-[270px] w-[343px] bg-gradient-to-r from-black/50 via-black/25 to-black/50 bg-clip-text pl-6 font-title text-[36px] font-medium leading-[125%] text-transparent md:h-[360px] md:w-[565px] md:text-[48px]">
          <p>
            Centro de
            <br /> Estudantes de
            <span className="font-title text-[36px] text-black md:text-[48px]">
            {" "}Engenharia Informática
            </span>{" "}
            da Universidade do Minho
          </p>
        </div>

        <div
      key="text-2" 
      className="h-[288px] w-[343px] md:h-[168px] md:w-[636px]">
          <div className="text-justify font-sans text-[12px] font-normal leading-[24px] text-[#6E6E6E] md:text-[16px]">
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
          <br />
          <div className="text-right font-sans text-[12px] font-normal text-black md:text-[16px]">
            <p>Pedro Rangel Henriques</p>
            <p>Diretor Do Departamento de Informática - 2017</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
