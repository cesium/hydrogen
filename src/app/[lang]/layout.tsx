import "./globals.css";
import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import {
  getDictionary,
  type Locale,
} from "@/internationalization/dictionaries";
import { DictionaryProvider } from "@/contexts/dictionary-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { fullLocale } from "@/lib/locale";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
});

export function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}): Metadata {
  const dict = getDictionary(fullLocale(lang));

  return {
    metadataBase: new URL(process.env.URL ?? "https://cesium.di.uminho.pt"),
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
      googleBot: "index, follow",
    },
    applicationName: "CeSIUM",
    appleWebApp: {
      title: "CeSIUM",
      statusBarStyle: "black-translucent",
      capable: true,
    },
    icons: {
      icon: [
        {
          url: "/favicon.ico",
          type: "image/x-icon",
        },
        {
          url: "/favicon-16x16.png",
          sizes: "16x16",
          type: "image/png",
        },
        {
          url: "/favicon-32x32.png",
          sizes: "32x32",
          type: "image/png",
        },
      ],
      shortcut: [
        {
          url: "/favicon.ico",
          type: "image/x-icon",
        },
      ],
    },
    manifest: "/manifest.webmanifest",
    title: dict.seo.title,
    description: dict.seo.description,
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
      siteName: dict.seo.title,
      type: "website",
      locale: "pt",
      alternateLocale: "en",
      url: `${process.env.URL}`,
      title: dict.seo.title,
      description: dict.seo.description,
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
      canonical: `${process.env.URL}`,
      languages: {
        en: `${process.env.URL}/en`,
        pt: `${process.env.URL}/pt`,
      },
    },
  };
}

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<{ children: React.ReactNode; params: { lang: Locale } }>) {
  return (
    <html lang={fullLocale(lang)}>
      <head>
        <meta name="apple-mobile-web-app-title" content="CeSIUM" />
      </head>
      <body
        className={`${inter.variable} ${orbitron.variable} overflow-x-hidden bg-foundation font-sans text-black antialiased`}
      >
        <DictionaryProvider lang={fullLocale(lang)}>
          <Navbar />
          <div className="h-full">{children}</div>
          <Footer />
        </DictionaryProvider>
      </body>
    </html>
  );
}
