"use client";

import Link from "next/link";
import { useLang } from "@/contexts/dictionary-provider";

interface Shortcut {
  title: string;
  description: string;
  href: string;
}

interface ShortcutPanesProps {
  shortcuts: Shortcut[];
}

const ShortcutPanes = ({ shortcuts }: ShortcutPanesProps) => {
  const lang = useLang();

  return (
    <div className="flex flex-col gap-0 rounded-2xl border border-dark/10 bg-white pt-8 xl:flex-row xl:gap-8 xl:px-11 xl:pb-0 xl:pt-0">
      {shortcuts.map((shortcut, index) => (
        <Link
          key={index}
          href={`/${lang}${shortcut.href}`}
          className={`group relative w-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-stroke/40 from-20% to-transparent to-60% px-6 py-9 xl:bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] xl:px-14 ${index == shortcuts.length - 1 ? "rounded-b-xl xl:rounded-none" : ""}`}
        >
          <div
            className={`clip-triangle absolute left-0 h-8 w-full bg-white xl:bottom-auto xl:left-[-1px] xl:top-0 xl:h-full xl:w-11 ${index == shortcuts.length - 1 ? "bottom-0 rounded-2xl xl:rounded-none" : "bottom-[-1px]"}`}
          ></div>
          <span className="flex flex-row items-center gap-2">
            <h1 className="font-title text-xl font-medium">{shortcut.title}</h1>
            <span className="material-symbols-outlined text-3xl text-dark/50 transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </span>
          <p className="ml-0 pb-8 text-base xl:ml-5 xl:pb-0">
            {shortcut.description}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default ShortcutPanes;
