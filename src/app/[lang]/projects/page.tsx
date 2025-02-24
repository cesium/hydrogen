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
    title: dict.seo.projects.title,
    description: dict.seo.projects.description,
    keywords: [
      "student center",
      "engeneering",
      "informatics",
      "uminho",
      "university",
      "students",
      "CeSIUM",
      "CeSIUM UMinho",
      "projects",
    ],
    openGraph: {
      url: "https://cesium.di.uminho.pt/projects",
      type: "website",
      title: dict.seo.projects.title,
      description: dict.seo.projects.description,
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
      canonical: "https://cesium.di.uminho.pt/projects",
      languages: {
        en: "https://cesium.di.uminho.pt/en_US/projects",
        pt: "https://cesium.di.uminho.pt/pt_PT/projects",
      },
    },
  };
}

export default function Projects() {
  return <main>Projects</main>;
}
