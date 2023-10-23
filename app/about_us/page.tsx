import React from "react";

export default function about_us() {
  return (
    <main>
      <div className="mb-20 flex select-none flex-col">
        <h1 className="text-center font-orbitron text-4xl font-semibold">
          Centro de Estudantes de Engenharia Informática da Universidade do
          Minho
        </h1>
      </div>
      <div className="flex select-none flex-col gap-4">
        <p className="items-center text-justify font-inter text-base font-normal text-gray-500">
          &quot;Decorria no ano de 1995, a Licenciatura em Engenharia de
          Sistemas e Informática (LESI) da UM. (...) Foi neste contexto que um
          grupo de alunos do 3º ano pediu à Direção de Curso (DC), que eu então
          dirigia, apoio para criar oficialmente um Centro de Estudantes. (...)
          A partir desse momento iniciou-se o caminho deste núcleo estudantil
          que, 20 anos depois, mantém o nome e sigla e mantém o propósito
          determinado na projeção da imagem do curso e na defesa dos interesses
          dos seus associados&quot;
        </p>
        <p className="text-right text-justify font-inter text-base font-normal">
          Pedro Rangel Henriques <br /> Diretor do Departamento de Informática -
          2017
        </p>
      </div>
      <div className="mt-20 flex select-none flex-col">
        <h1 className="text-center font-orbitron text-3xl font-semibold underline decoration-cesium-900">
          About Us
        </h1>
      </div>
      <div className="mt-12 flex select-none flex-row text-justify font-inter text-base">
        <div className="mr-12 font-normal">
          <h2 className="mb-4 text-xl">O que é o CeSIUM?</h2>
          <p className="text-gray-500">
            O CeSIUM é um Centro de estudantes de Engenharia Informática da
            Universidade do Minho composto por alunos voluntários que têm como
            objectivo principal representar e promover o curso. É um núcleo
            unido e dinâmico capaz de proporcionar experiências únicas e
            enriquecedoras para a tua futura vida profissional.
          </p>
        </div>
        <div className="ml-12 font-normal">
          <h2 className="mb-4 text-xl">O que fazemos?</h2>
          <p className="text-gray-500">
            Procuramos organizar actividades de contéudo semelhante e
            complementar ao curso, assim como promover e divulgar acções de
            lazer e socialização entre estudantes e ex-alunos. Representamos
            ainda os interesses colectivos dos alunos de Engenharia Informática
            junto dos orgãos ou instituições para que a sua carreira académica
            seja mais rica.
          </p>
        </div>
      </div>
    </main>
  );
}
