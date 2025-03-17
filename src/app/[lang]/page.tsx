"use client";

import ScrollableHighlight from "@/components/scrollable-highlight";
import { useDictionary } from "@/contexts/dictionary-provider";
import {
  getDictionary,
  type Locale,
} from "@/internationalization/dictionaries";
import { fullLocale } from "@/lib/locale";
import StoreCard from "@/components/store-card";
import PromotionalCard from "@/components/promotional-card";
import { CardType } from "@/lib/types";
import { horizontalPadding } from "@/lib/styling";

export default function Home() {
  const dict = useDictionary();
  const dictAbout = dict.about;
  const images = dictAbout.sections.cesium.images;
  const backgroundImage = 3;
        
  return (
    <main className={`${horizontalPadding}`}>
      <div className="w-full overflow-hidden pt-4 sm:pt-6">
        <ScrollableHighlight
          title={dict.home.cesium.title}
          subtitle={dict.home.cesium.subtitle}
          background={images[backgroundImage]}
          items={images.filter((_, index) => index != backgroundImage)}
        />
      </div>
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
