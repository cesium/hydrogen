"use client";

import StoreCard from "@/components/store-card";
import PromotionalCard from "@/components/promotional-card";
import { CardType } from "@/lib/types";
import { horizontalPadding } from "@/lib/styling";
import ScrollableContent from "@/components/scrollable-content";

export default function Home() {
  return (
    <main className={`${horizontalPadding}`}>
      <ScrollableContent />
      <section className="grid columns-1 gap-8 sm:columns-2">
        <div className="sm:col-span-2">
          <StoreCard />
        </div>
        <PromotionalCard type={CardType.Membership} mobileOnlyLayout />
        <PromotionalCard type={CardType.Collaborate} mobileOnlyLayout />
      </section>
    </main>
  );
}
