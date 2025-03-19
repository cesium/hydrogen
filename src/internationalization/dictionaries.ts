import en from "./dictionaries/en.json";
import pt from "./dictionaries/pt.json";

const dictionaries = {
  "en-US": en,
  "en-GB": en,
  "pt-PT": pt,
  "pt-BR": pt,
};

export type Locale = keyof typeof dictionaries;
export type Dictionary = (typeof dictionaries)[Locale];

export const getDictionary = (locale: Locale): Dictionary =>
  dictionaries[locale];
