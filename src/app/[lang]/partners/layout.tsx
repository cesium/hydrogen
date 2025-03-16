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
      url: `${process.env.URL}/partners`,
      type: "website",
      title: dict.seo.partners.title,
      description: dict.seo.partners.description,
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
      canonical: `${process.env.URL}/partners`,
      languages: {
        en: `${process.env.URL}/en/partners`,
        pt: `${process.env.URL}/pt/partners`,
      },
    },
  };
}

export default function PartnersLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
