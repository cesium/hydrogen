"use client";

import { useDictionary } from "@/contexts/dictionary-provider";
import { CardType } from "@/lib/types";

interface Cardprops {
  type: CardType;
}

const getColor = (type: CardType) => {
  return type === CardType.Collaborate ? "blue" : "primary";
};

const PromotionalCard = ({ type }: Cardprops) => {
  const dict = useDictionary();
  const color = getColor(type);

  return (
    <div
      className={`relative flex min-h-60 w-full flex-col items-center justify-between gap-4 overflow-hidden rounded-2xl p-6 text-white min-[950px]:min-h-0 min-[950px]:flex-row min-[950px]:p-8 bg-${color}`}
    >
      {/* Card image */}
      <div
        className={`absolute bottom-0 hidden min-[330px]:block ${type == CardType.Collaborate ? "left-2" : "left-8"}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={
            type == CardType.Collaborate
              ? "/vectors/collaborator.svg"
              : "/vectors/member.svg"
          }
          alt="Promotional Image"
          className={`${type == CardType.Collaborate ? "h-20 min-[376px]:h-24 min-[950px]:h-28" : "h-16 min-[375px]:h-20 min-[950px]:h-24"}`}
        />
      </div>

      {/* Descriptive text */}
      <div className="left-2 right-0 top-8 z-10 mt-0 w-full flex-grow text-start min-[950px]:ml-48 min-[950px]:flex-grow min-[950px]:text-left">
        <h4 className="mb-2 font-title text-2xl font-medium text-white">
          {type == CardType.Collaborate
            ? dict.collaborate_card.title
            : dict.member_card.title}
        </h4>
        <p className="text-justify font-sans text-base text-white">
          {type == CardType.Collaborate
            ? dict.collaborate_card.text
            : dict.member_card.text}
        </p>
      </div>

      {/* Actions */}

      <div className="flex w-full justify-end">
        <button
          className={`hover:bg-gray-100 rounded-full bg-white px-5 py-3 min-[950px]:static min-[950px]:text-base text-${color}`}
        >
          {dict.button.learn_more}
        </button>
      </div>
    </div>
  );
};

export default PromotionalCard;