"use client";

import { useDictionary } from "@/contexts/dictionary-provider";
import { CardType } from "@/lib/types";
import Image from "next/image";
import Button from "./button";

interface CardProps {
  type: CardType;
  /**
   * When true, disables desktop-specific responsive styles,
   * keeping mobile layout across all screen sizes.
   * @default false
   */
  mobileOnlyLayout?: boolean;
}

const getColor = (type: CardType) => {
  return type === CardType.Collaborate ? "signature-blue" : "primary";
};

const PromotionalCard = ({ type, mobileOnlyLayout }: CardProps) => {
  const dict = useDictionary();
  const color = getColor(type);

  return (
    <div
      className={`relative flex h-full min-h-60 w-full flex-col items-center justify-between gap-4 overflow-hidden rounded-2xl p-6 text-white ${!mobileOnlyLayout ? "min-[950px]:min-h-0 min-[950px]:flex-row min-[950px]:p-8" : ""} bg-${color} selection:bg-white/30`}
    >
      {/* Card image */}
      <div
        className={`absolute bottom-0 hidden justify-start ${mobileOnlyLayout ? "min-[840px]:flex" : "min-[330px]:flex"} ${type == CardType.Collaborate ? "left-0" : "left-0"}`}
      >
        <Image
          src={
            type == CardType.Collaborate
              ? "/vectors/collaborator.svg"
              : "/vectors/member.svg"
          }
          alt="Promotional Image"
          height={500}
          width={500}
          className={`${type == CardType.Collaborate ? `h-20 min-[376px]:h-24 ${!mobileOnlyLayout ? "min-[950px]:h-28" : ""}` : `h-16 min-[375px]:h-20 ${!mobileOnlyLayout ? "min-[950px]:h-24" : ""}`} pointer-events-none w-36 select-none min-[376px]:w-44`}
        />
      </div>

      {/* Descriptive text */}
      <div
        className={`left-2 right-0 top-8 z-10 mt-0 w-full flex-grow text-start ${!mobileOnlyLayout ? "min-[950px]:ml-48 min-[950px]:flex-grow min-[950px]:text-left" : ""}`}
      >
        <h1 className="mb-2 font-title text-2xl font-medium text-white">
          {type == CardType.Collaborate
            ? dict.collaborate_card.title
            : dict.member_card.title}
        </h1>
        <p className="font-sans text-base text-white">
          {type == CardType.Collaborate
            ? dict.collaborate_card.text
            : dict.member_card.text}
        </p>
      </div>

      {/* Actions */}
      <div className="z-10 flex w-full justify-end">
        <Button
          title={dict.button.learn_more}
          style="style1"
          as="link"
          color={type == CardType.Collaborate ? "signature-blue" : "primary"}
          href={
            type == CardType.Collaborate
              ? "/about/become-a-collaborator"
              : "/about/become-a-member"
          }
        />
      </div>
    </div>
  );
};

export default PromotionalCard;
