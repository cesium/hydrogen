import "server-only";

const dictionaries = {
  "en-US": () =>
    import("./dictionaries/en.json").then((module) => module.default),
  "pt-PT": () =>
    import("./dictionaries/pt.json").then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;
export type Dictionary = (typeof dictionaries)[Locale] extends () => Promise<
  infer T
>
  ? T
  : never;

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
