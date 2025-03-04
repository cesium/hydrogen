"use client";
import { horizontalPadding, verticalPadding } from "@/lib/styling";
import PartnerCard from "@/components/partner-card";
import { useDictionary } from "@/contexts/dictionary-provider";

export default function Partners() {
  const dict = useDictionary();

  const partners = dict.partners;

  return (
    <main
      className={`flex flex-col gap-8 sm:gap-12 ${horizontalPadding + verticalPadding}`}
    >
      <div className="grid grid-cols-1 gap-2.5 sm:gap-3 md:grid-cols-2 lg:grid-cols-3">
        {partners.map((partner, index) => (
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
    </main>
  );
}
