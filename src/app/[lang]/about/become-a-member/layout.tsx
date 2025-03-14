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
    title: dict.seo.become_a_member.title,
    description: dict.seo.become_a_member.description,
    keywords: [
      "student center",
      "engeneering",
      "informatics",
      "uminho",
      "university",
      "students",
      "CeSIUM",
      "CeSIUM UMinho",
      "become a member",
    ],
    openGraph: {
      url: `${process.env.URL}/about/become-a-member`,
      type: "website",
      title: dict.seo.become_a_member.title,
      description: dict.seo.become_a_member.description,
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
      canonical: `${process.env.URL}/about/become-a-member`,
      languages: {
        en: `${process.env.URL}/en/about/become-a-member`,
        pt: `${process.env.URL}/pt/about/become-a-member`,
      },
    },
  };
}

export default function BAMemberLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
