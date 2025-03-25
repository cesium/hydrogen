import type { DictionaryLocale } from "@/contexts/dictionary-provider";

export const defaultLocale = "pt-PT";
const shortDefaultLocale = defaultLocale.split("-")[0] ?? "pt";

const localesDictionary = {
  "en-GB": {},
  "en-US": {},
  "pt-PT": {},
  "pt-BR": {},
};
type Locale = keyof typeof localesDictionary;

export const locales: readonly string[] = Object.keys(localesDictionary);

export const shortLocales = () =>
  locales.map((locale) => locale.split("-")[0] ?? shortDefaultLocale);

export const fullLocale = (locale: DictionaryLocale) => {
  if (locale.includes("-")) return locale as Locale;
  return (locales.find((l) => l.startsWith(locale)) ?? defaultLocale) as Locale;
};

export const shortLocale = (locale: DictionaryLocale) => {
  if (!locale.includes("-")) return locale as "en" | "pt";
  return (locale.split("-")[0] ?? shortDefaultLocale) as "en" | "pt";
};
