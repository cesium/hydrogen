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
    title: dict.seo.team.title,
    description: dict.seo.team.description,
    keywords: [
      "student center",
      "engeneering",
      "informatics",
      "uminho",
      "university",
      "students",
      "CeSIUM",
      "CeSIUM UMinho",
      "team",
    ],
    openGraph: {
      url: "https://cesium.di.uminho.pt/about/team",
      type: "website",
      title: dict.seo.team.title,
      description: dict.seo.team.description,
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
      canonical: "https://cesium.di.uminho.pt/about/team",
      languages: {
        en: "https://cesium.di.uminho.pt/en_US/about/team",
        pt: "https://cesium.di.uminho.pt/pt_PT/about/team",
      },
    },
  };
}

export default function TeamLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
