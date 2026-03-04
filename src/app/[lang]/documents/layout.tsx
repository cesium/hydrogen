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
    title: dict.seo.documents.title,
    description: dict.seo.documents.description,
    keywords: [
      "student center",
      "engeneering",
      "informatics",
      "uminho",
      "university",
      "students",
      "CeSIUM",
      "CeSIUM UMinho",
      "documents",
    ],
    openGraph: {
      url: `${process.env.URL}/documents`,
      type: "website",
      title: dict.seo.documents.title,
      description: dict.seo.documents.description,
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
      canonical: `${process.env.URL}/documents`,
      languages: {
        en: `${process.env.URL}/en/documents`,
        pt: `${process.env.URL}/pt/documents`,
      },
    },
  };
}

export default function DocumentsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
