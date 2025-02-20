"use client";

import AppLink from "@/components/link";
import { useDictionary } from "@/contexts/dictionary-provider";
import Markdown from "markdown-to-jsx";
import Image from "next/image";

interface Perk {
  icon: string;
  description: string;
}

interface PartnerCardProps {
  title: string;
  url: string;
  logo: string;
  color: string;
  perks: Perk[];
}

const PerkItem = ({ icon, description }: Perk) => (
  <li className="flex items-center gap-3">
    <span className="material-symbols-outlined flex aspect-square size-10 items-center justify-center rounded-md bg-black/5 text-2xl">
      {icon}
    </span>
    <Markdown className="text-base font-normal">{description}</Markdown>
  </li>
);

const PartnerCard = ({ title, url, logo, color, perks }: PartnerCardProps) => {
  const dict = useDictionary();

  return (
    <div
      className="relative flex h-full w-full flex-col gap-4 rounded-[20px] border border-black/10 p-7"
      style={{
        background: `linear-gradient(180deg, ${color}20 0%, ${color}00 50%, ${color}00 100%)`,
      }}
    >
      <figure className="size-24 rounded-lg bg-white">
        <Image
          width={96}
          height={96}
          src={logo}
          alt={title}
          className="size-full rounded-lg object-contain"
        />
      </figure>
      <h1 className="text-xl font-semibold text-black/90">{title}</h1>
      <ul className="flex flex-col gap-3 text-dark">
        {perks.map((perk, index) => (
          <PerkItem key={index} {...perk} />
        ))}
      </ul>
      <AppLink title={dict.button.see_more} href={url} arrow="outward" />
    </div>
  );
};

export default PartnerCard;
