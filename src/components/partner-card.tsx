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
  simplelayout?: boolean;
}

const PerkItem = ({ icon, description }: Perk) => (
  <li className="flex items-center gap-3">
    <span className="material-symbols-outlined flex aspect-square size-10 items-center justify-center rounded-md bg-black/5 text-2xl">
      {icon}
    </span>
    <Markdown
      className="text-base font-normal"
      options={{
        overrides: { strong: { props: { className: "font-semibold" } } },
      }}
    >
      {description}
    </Markdown>
  </li>
);

const PartnerCard = ({
  title,
  url,
  logo,
  color,
  perks,
  simplelayout,
}: PartnerCardProps) => {
  const dict = useDictionary();

  return (
    <div
      className="relative flex h-full w-full flex-col gap-4 rounded-[20px] p-7"
      style={{
        background: `linear-gradient(180deg, ${color}20 0%, #00000000 50%, #00000000 100%)`,
      }}
    >
      <div className="absolute left-0 top-0 size-full rounded-[20px] border border-black/10" />
      <div className="flex flex-col gap-4">
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
        {!simplelayout && (
          <>
            <ul className="flex flex-col gap-3 text-dark">
              {perks.map((perk, index) => (
                <PerkItem key={index} {...perk} />
              ))}
            </ul>
            <AppLink title={dict.button.see_more} href={url} arrow="outward" />
          </>
        )}
      </div>
    </div>
  );
};

export default PartnerCard;
