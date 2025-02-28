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
    title: dict.seo.about.title,
    description: dict.seo.about.description,
    keywords: [
      "student center",
      "engeneering",
      "informatics",
      "uminho",
      "university",
      "students",
      "CeSIUM",
      "CeSIUM UMinho",
      "about",
    ],
    openGraph: {
      url: "https://cesium.di.uminho.pt/about",
      type: "website",
      title: dict.seo.about.title,
      description: dict.seo.about.description,
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
      canonical: "https://cesium.di.uminho.pt/about",
      languages: {
        en: "https://cesium.di.uminho.pt/en_US/about",
        pt: "https://cesium.di.uminho.pt/pt_PT/about",
      },
    },
  };
}

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
