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

export const fullLocale = (shortLocale: string) => {
  return (locales.find((locale) => locale.startsWith(shortLocale)) ??
    defaultLocale) as Locale;
};

export const shortLocale = (fullLocale: string) => {
  return (fullLocale.split("-")[0] ?? shortDefaultLocale) as Locale;
};
