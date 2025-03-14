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
      url: `${process.env.URL}/team`,
      type: "website",
      title: dict.seo.team.title,
      description: dict.seo.team.description,
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
      canonical: `${process.env.URL}/team`,
      languages: {
        en: `${process.env.URL}/en/team`,
        pt: `${process.env.URL}/pt/team`,
      },
    },
  };
}

export default function TeamLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
