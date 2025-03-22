"use client";

import PartnerCard from "@/components/partner-card";
import PromotionalCard from "@/components/promotional-card";
import { useDictionary } from "@/contexts/dictionary-provider";
import { CardType } from "@/lib/types";

export default function Partners() {
  const dict = useDictionary();
  const partners = dict.partners;

  return (
    <main className="flex flex-col gap-8 sm:gap-12">
      <div className="layout-hp flex max-w-7xl flex-col gap-3.5 py-40">
        <h1 className="font-title text-3xl font-medium sm:text-5xl">
          {dict.partners.title}
        </h1>
        <p>{dict.partners.description}</p>
      </div>
      <div className="layout-hp flex flex-col gap-8 border-t border-zinc-200 bg-muted pb-16 pt-14 sm:gap-12">
        <div className="grid grid-cols-1 gap-2.5 sm:gap-3 md:grid-cols-2 2xl:grid-cols-3">
          {partners.list.map((partner, index) => (
            <PartnerCard
              key={index}
              title={partner.title}
              url={partner.url}
              logo={partner.logo}
              color={partner.color}
              perks={partner.perks}
            />
          ))}
        </div>
        <div className="px-2 md:px-5">
          <PromotionalCard type={CardType.Membership} />
        </div>
      </div>
    </main>
  );
}
