"use client";

import { createContext, useContext } from "react";
import type { Dictionary } from "@/internationalization/dictionaries";

const DictionaryContext = createContext<Dictionary | undefined>(undefined);

export function DictionaryProvider({
  children,
  dict,
}: {
  children: React.ReactNode;
  dict: Dictionary;
}) {
  return (
    <DictionaryContext.Provider value={dict}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary() {
  const context = useContext(DictionaryContext);
  if (context === undefined) {
    throw new Error("useDictionary() must be used within a DictionaryProvider");
  }
  return context;
}
