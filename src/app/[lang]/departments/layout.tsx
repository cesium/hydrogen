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
    title: dict.seo.departments.title,
    description: dict.seo.departments.description,
    keywords: [
      "student center",
      "engeneering",
      "informatics",
      "uminho",
      "university",
      "students",
      "CeSIUM",
      "CeSIUM UMinho",
      "departments",
    ],
    openGraph: {
      url: "https://cesium.di.uminho.pt/departments",
      type: "website",
      title: dict.seo.departments.title,
      description: dict.seo.departments.description,
      images: [
        {
          url: "https://cesium.di.uminho.pt/og.png",
          width: 1200,
          height: 630,
          alt: process.env.URL,
        },
      ],
    },
    alternates: {
      canonical: "https://cesium.di.uminho.pt/departments",
      languages: {
        en: "https://cesium.di.uminho.pt/en/departments",
        pt: "https://cesium.di.uminho.pt/pt/departments",
      },
    },
  };
}

export default function DepartmentsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
