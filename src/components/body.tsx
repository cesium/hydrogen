import {
  type DictionaryLocale,
  DictionaryProvider,
} from "@/contexts/dictionary-provider";
import { ScrollStateProvider } from "@/contexts/scrollstate-provider";
import type { NextFontWithVariable } from "next/dist/compiled/@next/font";
import UmamiAnalytics from "./umami-analytics";

export default function Body({
  fonts,
  lang,
  children,
}: {
  fonts: NextFontWithVariable[];
  lang: DictionaryLocale;
  children: React.ReactNode;
}) {
  return (
    <body
      className={`${fonts.map((f) => f.variable).join(" ")} overflow-x-hidden overflow-y-scroll bg-foundation font-sans text-black antialiased selection:bg-primary selection:text-white`}
    >
      <ScrollStateProvider>
        <DictionaryProvider lang={lang}>{children}</DictionaryProvider>
      </ScrollStateProvider>
      <UmamiAnalytics />
    </body>
  );
}
