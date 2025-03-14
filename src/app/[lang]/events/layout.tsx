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
    title: dict.seo.events.title,
    description: dict.seo.events.description,
    keywords: [
      "student center",
      "engeneering",
      "informatics",
      "uminho",
      "university",
      "students",
      "CeSIUM",
      "CeSIUM UMinho",
      "events",
    ],
    openGraph: {
      url: "https://cesium.di.uminho.pt/events",
      type: "website",
      title: dict.seo.events.title,
      description: dict.seo.events.description,
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
      canonical: "https://cesium.di.uminho.pt/events",
      languages: {
        en: "https://cesium.di.uminho.pt/en/events",
        pt: "https://cesium.di.uminho.pt/pt/events",
      },
    },
  };
}

export default function EventsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
