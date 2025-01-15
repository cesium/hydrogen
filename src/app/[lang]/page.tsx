"use client";
import DepartmentCard from "@/components/department-card";
import PromotionalCard from "@/components/promotional-card";
import Carousel from "@/components/carousel";
import { CardType } from "@/lib/types";

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
    "Centro de Estudantes de Engenharia Informática da Universidade do Minho",
    "Decorria no ano de 1995, a Licenciatura em Engenharia de Sistemas e Informática (LESI) da UM. (...) Foi neste contexto que um grupo de alunos do 3º ano pediu à Direção de Curso (DC), que eu então dirigia, apoio para criar oficialmente um Centro de Estudantes. (...) A partir desse momento iniciou-se o caminho deste núcleo estudantil que, 20 anos depois, mantém o nome e sigla e mantém o propósito determinado na projeção da imagem do curso e na defesa dos interesses dos seus associados",
  ];


  return (
    <main className="flex-col items-center justify-center">
      <div className="space-y-4">
        <DepartmentCard type="caos" />
        <DepartmentCard type="dmc" />
        <DepartmentCard type="drem" />
        <DepartmentCard type="ped" />
        <DepartmentCard type="rec" />
      </div>
      <div className="flex justify-center pt-6">
        <PromotionalCard type={CardType.Collaborate} />
      </div>
      <div className="flex justify-center pt-6">
        <PromotionalCard type={CardType.Membership} />
      </div>
      <div className="w-full pt-6">
        <Carousel items={images.map((image) => ({ image }))} />
      </div>
      <div className="flex justify-center pt-6">
          <Carousel items={text.map((t) => ({ text: t }))} />
      </div>
    </main>
  );
}
