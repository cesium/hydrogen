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
      url: `${process.env.URL}/events`,
      type: "website",
      title: dict.seo.events.title,
      description: dict.seo.events.description,
      images: [
        {
          url: `${process.env.URL}/og.png`,
          width: 1200,
          height: 630,
          alt: process.env.URL,
        },
      ],
    },
    alternates: {
      canonical: `${process.env.URL}/events`,
      languages: {
        en: `${process.env.URL}/en/events`,
        pt: `${process.env.URL}/pt/events`,
      },
    },
  };
}

export default function EventsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
