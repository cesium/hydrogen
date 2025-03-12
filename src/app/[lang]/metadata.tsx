import {
  getDictionary,
  type Locale,
} from "@/internationalization/dictionaries";
import { type Metadata } from "next";

export function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}): Metadata {
  const dict = getDictionary(lang);

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
