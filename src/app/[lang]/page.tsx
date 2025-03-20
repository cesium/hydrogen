import {
  getDictionary,
  type Locale,
} from "@/internationalization/dictionaries";
import { fullLocale } from "@/lib/locale";
import { type Metadata } from "next";
import StoreCard from "@/components/store-card";
import ShortcutButtonsContainer from "@/components/shortcut-button-container";
import PromotionalCard from "@/components/promotional-card";
import { CardType } from "@/lib/types";
import { horizontalPadding } from "@/lib/styling";

export function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}): Metadata {
  const dict = getDictionary(fullLocale(lang));

  return {
    title: dict.seo.title,
    description: dict.seo.description,
    keywords: [
      "student center",
      "engeneering",
      "informatics",
      "uminho",
      "university",
      "students",
      "CeSIUM",
      "CeSIUM UMinho",
    ],
    openGraph: {
      url: "https://cesium.di.uminho.pt",
      type: "website",
      title: dict.seo.title,
      description: dict.seo.description,
      images: [
        {
          url: "https://cesium.di.uminho.pt/og.png",
          width: 1200,
          height: 630,
          alt: "cesium.di.uminho.pt",
        },
      ],
    },
    alternates: {
      canonical: "https://cesium.di.uminho.pt",
      languages: {
        en: "https://cesium.di.uminho.pt/en_US",
        pt: "https://cesium.di.uminho.pt/pt_PT",
      },
    },
  };
}

export default function Home() {
  return (
    <main className={`${horizontalPadding}`}>
      <section className="grid columns-1 gap-8 sm:columns-2">
        <div className="sm:col-span-2">
          <ShortcutButtonsContainer />
          <StoreCard />
        </div>
        <PromotionalCard type={CardType.Membership} mobileOnlyLayout />
        <PromotionalCard type={CardType.Collaborate} mobileOnlyLayout />
      </section>
    </main>
  );
}
