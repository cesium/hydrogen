"use client";

import ScrollableHighlight from "@/components/scrollable-highlight";
import { useDictionary } from "@/contexts/dictionary-provider";

export default function Home() {
  const dict = useDictionary();
  const dictAbout = dict.about;
  const images = dictAbout.sections.cesium.images;
  const backgroundImage = 3;

  return (
    <main className="flex-col items-center justify-center">
      <div className="w-full overflow-hidden pt-4 sm:pt-6">
        <ScrollableHighlight
          title={dict.home.cesium.title}
          subtitle={dict.home.cesium.subtitle}
          background={images[backgroundImage]}
          items={images.filter((_, index) => index != backgroundImage)}
        />
      </div>
    </main>
  );
}
