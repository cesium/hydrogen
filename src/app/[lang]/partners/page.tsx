"use client";
import { horizontalPadding, verticalPadding } from "@/lib/styling";
import PartnerCard from "@/components/partner-card";
import PromotionalCard from "@/components/promotional-card";
import { useDictionary } from "@/contexts/dictionary-provider";
import { CardType} from "@/lib/types";

export default function Partners() {
  const dict = useDictionary();

  const partners = dict.partners;

  return (
    <main className={`flex flex-col gap-8 sm:gap-12`}>
      <div className={`flex flex-col gap-3.5 max-w-7xl ${horizontalPadding} py-40`}>
        <h1 className={`font-title text-3xl sm:text-5xl font-medium`}>
          {dict.partners.title}
        </h1>
        <p>
        {dict.partners.description}
        </p>
      </div>
      <div className={`grid grid-cols-1 gap-2.5 sm:gap-3 md:grid-cols-2 2xl:grid-cols-3 ${horizontalPadding} pt-14 bg-muted border-t border-zinc-200`}>
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
      <div className={`${horizontalPadding} pb-16`}>
        <PromotionalCard
            type={CardType.Membership}
        />
      </div>
    </main>
  );
}
