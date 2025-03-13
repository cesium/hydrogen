import {
  getDictionary,
  type Locale,
} from "@/internationalization/dictionaries";
import { fullLocale } from "@/lib/locale";
import { type Metadata } from "next";

export function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}): Metadata {
  const dict = getDictionary(fullLocale(lang));

  return {
    title: dict.seo.partners.title,
    description: dict.seo.partners.description,
    keywords: [
      "student center",
      "engeneering",
      "informatics",
      "uminho",
      "university",
      "students",
      "CeSIUM",
      "CeSIUM UMinho",
      "partners",
    ],
    openGraph: {
      url: "https://cesium.di.uminho.pt/partners",
      type: "website",
      title: dict.seo.partners.title,
      description: dict.seo.partners.description,
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
      canonical: "https://cesium.di.uminho.pt/partners",
      languages: {
        en: "https://cesium.di.uminho.pt/en_US/partners",
        pt: "https://cesium.di.uminho.pt/pt_PT/partners",
      },
    },
  };
}

export default function PartnersLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
