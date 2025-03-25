"use client";

import { DictionaryProvider } from "@/contexts/dictionary-provider";
import { ScrollStateProvider } from "@/contexts/scrollstate-provider";
import type { Locale } from "@/internationalization/dictionaries";
import type { NextFontWithVariable } from "next/dist/compiled/@next/font";

export default function Body({
  fonts,
  lang,
  children,
}: {
  fonts: NextFontWithVariable[];
  lang: Locale;
  children: React.ReactNode;
}) {
  return (
    <body
      className={`${fonts.map((f) => f.variable).join(" ")} overflow-x-hidden overflow-y-scroll bg-foundation font-sans text-black antialiased`}
    >
      <ScrollStateProvider>
        <DictionaryProvider lang={lang}>{children}</DictionaryProvider>
      </ScrollStateProvider>
    </body>
  );
}
