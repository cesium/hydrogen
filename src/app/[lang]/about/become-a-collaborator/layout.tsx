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
    title: dict.seo.become_a_collaborator.title,
    description: dict.seo.become_a_collaborator.description,
    keywords: [
      "student center",
      "engeneering",
      "informatics",
      "uminho",
      "university",
      "students",
      "CeSIUM",
      "CeSIUM UMinho",
      "become a collaborator",
    ],
    openGraph: {
      url: `${process.env.URL}/about/become-a-collaborator`,
      type: "website",
      title: dict.seo.become_a_collaborator.title,
      description: dict.seo.become_a_collaborator.description,
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
      canonical: `${process.env.URL}/about/become-a-collaborator`,
      languages: {
        en: `${process.env.URL}/en/about/become-a-collaborator`,
        pt: `${process.env.URL}/pt/team`,
      },
    },
  };
}

export default function BACollaboratorLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
