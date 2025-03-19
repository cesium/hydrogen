"use client";

import {
  getDictionary,
  type Locale,
} from "@/internationalization/dictionaries";
import { fullLocale } from "@/lib/locale";
import { type Metadata } from "next";
import StoreCard from "@/components/store-card";
import PromotionalCard from "@/components/promotional-card";
import { CardType } from "@/lib/types";
import { horizontalPadding } from "@/lib/styling";
import ShortcutPanes from "@/components/shortcut-panes";
import { useDictionary } from "@/contexts/dictionary-provider";

export default function Home() {
  const dict = useDictionary();
  const dictHome = dict.home;

  return (
    <main className={`${horizontalPadding}`}>
      <ShortcutPanes shortcuts={dictHome.shortcut_panes} />
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
