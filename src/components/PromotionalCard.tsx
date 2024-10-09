"use client";

import Image from "next/image";

import { useState, useEffect } from "react";
import { CardType } from "@/lib/types";

interface Cardprops {
  type: CardType;
}

const getColor = (type: CardType) => {
  return type === CardType.Collaborate ? "blue" : "primary";
};

const info: Record<CardType, { name: string; text: string[]; image: string }> =
  {
    [CardType.Collaborate]: {
      name: "colaborador",
      text: [
        "Podes juntar-te a estes departamentos e contribuir para fazer o teu núcleo funcionar.",
        "Vem fazer parte desta equipa e ajuda a tornar o CeSIUM melhor todos os dias.",
      ],
      image: "collaborator.svg",
    },
    [CardType.Membership]: {
      name: "sócio",
      text: [
        "Participa em todos os nossos eventos gratuitamente, e usufrui de muitos mais benefícios.",
        "Podes juntar-te a estes departamentos e contribuir para fazer o teu núcleo funcionar.",
      ],
      image: "partnercard.svg",
    },
  };

const getRandomText = (type: CardType): string | undefined => {
  const texts =
    type === CardType.Collaborate
      ? info[CardType.Collaborate].text
      : info[CardType.Membership].text;

  return texts && texts.length > 0
    ? texts[Math.floor(Math.random() * texts.length)]
    : "";
};

const PromotionalCard = ({ type }: Cardprops) => {
  const [text, setText] = useState("");
  const color = getColor(type);

  useEffect(() => {
    setText(getRandomText(type) ?? "");
  }, [type]);

  return (
    <div
      className={`relative flex h-[269px] w-full flex-col items-center overflow-hidden rounded-xl p-4 text-white md:h-[192px] md:max-w-[1300px] md:flex-row md:p-6 bg-${color}`}
    >
      {/* Image */}
      <div className="absolute bottom-0 left-2 h-[87px] w-[148px] md:bottom-0 md:left-0 md:h-[148px] md:w-[250px]">
        <Image
          src={info[type].image}
          alt="Promotional Image"
          width={0}
          height={0}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Text */}
      <div className="absolute left-2 right-0 top-8 mt-0 flex-grow text-start md:relative md:ml-[236px] md:w-[80%] md:flex-grow md:pb-20 md:text-left ">
        <h4 className="mb-2 font-title text-xl text-white md:text-3xl">
          Torna-te {info[type]?.name}
        </h4>
        <p className="font-sans text-base text-white md:text-base">{text}</p>
      </div>

      {/* Buttons */}
      <div className="relative mt-4 flex h-full w-full items-end justify-end md:mt-0 md:items-center md:justify-end md:space-x-4">
        <button
          className={`hover:bg-gray-100 absolute bottom-4 right-2 rounded-full bg-white px-4 py-2 font-sans text-sm  transition duration-300 md:static md:text-base text-${color}`}
        >
          Saber mais
        </button>

        <button
          aria-label="Fechar"
          className={`material-symbols-outlined absolute right-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg text-white transition duration-300 hover:bg-white md:relative md:right-0 md:top-0 md:h-10 md:w-10 md:text-xl hover:text-${color}`}
        >
          close
        </button>
      </div>
    </div>
  );
};

export default PromotionalCard;
