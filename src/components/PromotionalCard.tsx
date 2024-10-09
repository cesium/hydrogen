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
      className={`relative flex h-[269px] w-full flex-col items-center overflow-hidden rounded-xl p-4 text-white md:h-[192px] md:max-w-[1300px] md:flex-row md:p-6 bg-${color}`}
    >
      {/* Card image */}
      <div className="absolute bottom-0 left-2 h-[87px] w-[148px] md:bottom-0 md:left-0 md:h-[148px] md:w-[250px]">
        <Image
          src={info[type].image}
          alt="Promotional Image"
          width={0}
          height={0}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Descriptive text */}
      <div className="absolute left-2 right-0 top-8 mt-0 flex-grow text-start md:relative md:ml-[236px] md:w-[80%] md:flex-grow md:pb-20 md:text-left ">
        <h4 className="mb-2 font-title text-xl text-white md:text-3xl">
          Torna-te {info[type]?.name}
        </h4>
        <p className="font-sans text-base text-white md:text-base">
          {info[type].text}
        </p>
      </div>

      {/* Actions */}
      <div className="relative mt-4 flex h-full w-full items-end justify-end md:mt-0 md:items-center md:justify-end md:space-x-4">
        <button
          className={`hover:bg-gray-100 absolute bottom-4 right-2 rounded-full bg-white px-4 py-2 font-sans text-sm  transition duration-300 md:static md:text-base text-${color}`}
        >
          Saber mais
        </button>
      </div>
    </div>
  );
};

export default PromotionalCard;
