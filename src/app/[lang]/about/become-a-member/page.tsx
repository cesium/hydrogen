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
    ],
    openGraph: {
      url: "https://cesium.di.uminho.pt/about/become-a-member",
      type: "website",
      title: dict.seo.become_a_member.title,
      description: dict.seo.become_a_member.description,
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
      canonical: "https://cesium.di.uminho.pt/about/become-a-member",
      languages: {
        en: "https://cesium.di.uminho.pt/en_US/about/become-a-member",
        pt: "https://cesium.di.uminho.pt/pt_PT/about/become-a-member",
      },
    },
  };
}

export default function BecomeAMember() {
  return <main>Become a Member</main>;
}
