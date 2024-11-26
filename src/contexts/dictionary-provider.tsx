"use client";

import { createContext, useContext } from "react";
import type { Locale, Dictionary } from "@/internationalization/dictionaries";
import { getDictionary } from "@/internationalization/dictionaries";

interface DictionaryContextData {
  dict: Dictionary;
  lang: Locale;
}

const DictionaryContext = createContext<DictionaryContextData | undefined>(
  undefined,
);

export function DictionaryProvider({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: Locale;
}) {
  const dict = getDictionary(lang);
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
