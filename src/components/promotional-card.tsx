"use client";

import Image from "next/image";

import { CardType } from "@/lib/types";

interface Cardprops {
  type: CardType;
}

const getColor = (type: CardType) => {
  return type === CardType.Collaborate ? "blue" : "primary";
};

const info: Record<CardType, { name: string; text: string; image: string }> = {
  [CardType.Collaborate]: {
    name: "colaborador",
    text: "Podes juntar-te a estes departamentos e contribuir para fazer o teu núcleo funcionar.",
    image: "collaborator.svg",
  },
  [CardType.Membership]: {
    name: "sócio",
    text: "Participa em todos os nossos eventos gratuitamente, e usufrui de muitos mais benefícios.",
    image: "partnercard.svg",
  },
};

const PromotionalCard = ({ type }: Cardprops) => {
  const color = getColor(type);

  return (
    <div
      className={`relative flex min-h-60 w-full flex-col items-center justify-between gap-4 overflow-hidden rounded-2xl p-6 text-white min-[950px]:min-h-0 min-[950px]:flex-row min-[950px]:p-8 bg-${color}`}
    >
      {/* Card image */}
      <div
        className={`absolute bottom-0 hidden min-[340px]:block ${type == CardType.Collaborate ? "left-12 h-24 min-[950px]:h-28" : "left-10 h-20 min-[950px]:h-24"} min-[950px]:bottom-0`}
      >
        <Image
          src={info[type].image}
          alt="Promotional Image"
          width={0}
          height={0}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Descriptive text */}
      <div className="left-2 right-0 top-8 mt-0 w-full flex-grow text-start min-[950px]:ml-48 min-[950px]:flex-grow min-[950px]:text-left ">
        <h4 className="mb-2 font-title text-2xl font-medium text-white">
          Torna-te {info[type]?.name}
        </h4>
        <p className="text-justify font-sans text-base text-white">
          {info[type].text}
        </p>
      </div>

      {/* Actions */}

      <div className="flex w-full justify-end">
        <button
          className={`hover:bg-gray-100 rounded-full bg-white px-4 py-3 min-[950px]:static min-[950px]:text-base text-${color}`}
        >
          Saber mais
        </button>
      </div>
    </div>
  );
};

export default PromotionalCard;
