"use client";

import { createContext, useContext } from "react";
import type { Dictionary } from "@/internationalization/dictionaries";
import { useState } from "react";

type DictionaryContextType = {
  dictionary: Dictionary;
  updateDictionary: (newDict: Dictionary) => void;
};

const DictionaryContext = createContext<DictionaryContextType | undefined>(
  undefined,
);

export function DictionaryProvider({
  children,
  dict,
}: {
  children: React.ReactNode;
  dict: Dictionary;
}) {
  const [dictionary, setDictionary] = useState<Dictionary>(dict);

  const updateDictionary = (newDict: Dictionary) => {
    setDictionary(newDict);
  };

  return (
    <DictionaryContext.Provider value={{ dictionary, updateDictionary }}>
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
