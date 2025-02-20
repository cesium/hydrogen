"use client";

import AppLink from "@/components/link";
import { useDictionary } from "@/contexts/dictionary-provider";

interface Perk {
  icon: string;
  description: string;
}

interface PartnerCardProps {
  title: string;
  url: string;
  logo: string;
  perks: Perk[];
}

const PartnerCard = ({ title, url, logo, perks }: PartnerCardProps) => {
  const dict = useDictionary();

  return (
    <div className="relative flex h-full w-full flex-col gap-[15px] rounded-[20px] border border-black/10 p-[30px]">
      <figure className="h-[86px] w-[86px] rounded-lg bg-white">
        <img
          src={logo}
          alt={title}
          className="h-full w-full rounded-lg object-contain"
        />
      </figure>
      <h1 className="text-xl font-semibold text-[#353335]">{title}</h1>
      <ul className="flex flex-col gap-3">
        {perks.map((perk, index) => (
          <li key={index} className="flex items-center gap-[13px]">
            <span className="material-symbols-outlined aspect-square w-24 rounded-md bg-black/5 p-2 text-center text-2xl text-black">
              {perk.icon}
            </span>
            <p className="text-base font-normal text-black">
              {perk.description}
            </p>
          </li>
        ))}
      </ul>
      <AppLink title={dict.button.see_more} href={url} arrow="forward" />
    </div>
  );
};

export default PartnerCard;
