"use client";

import { createContext, useContext } from "react";
import type { Dictionary, Locale } from "@/internationalization/dictionaries";
import { getDictionary } from "@/internationalization/dictionaries";
import { fullLocale } from "@/lib/locale";

export type DictionaryLocale = Locale | "en" | "pt";

interface DictionaryContextData {
  dict: Dictionary;
  lang: DictionaryLocale;
}

const DictionaryContext = createContext<DictionaryContextData | undefined>(
  undefined,
);

export function DictionaryProvider({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: DictionaryLocale;
}) {
  const dict = getDictionary(fullLocale(lang));
  return (
    <DictionaryContext.Provider value={{ dict, lang }}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary() {
  const context = useContext(DictionaryContext);
  if (context === undefined) {
    throw new Error("useDictionary() must be used within a DictionaryProvider");
  }
  return context.dict;
}

export function useLang() {
  const context = useContext(DictionaryContext);
  if (context === undefined) {
    throw new Error("useLang() must be used within a DictionaryProvider");
  }
  return context.lang;
}
