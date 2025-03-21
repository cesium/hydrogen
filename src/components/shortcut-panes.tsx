"use client";

import Link from "next/link";

interface Shortcut {
  title: string;
  description: string;
  href: string;
}

interface ShortcutPanesProps {
  shortcuts: Shortcut[];
}

const ShortcutPanes = ({ shortcuts }: ShortcutPanesProps) => (
  <div className="flex flex-col gap-8 rounded-2xl border border-dark/10 bg-white py-12 xl:flex-row xl:px-11 xl:py-0">
    {shortcuts.map((shortcut, index) => (
      <Link
        key={index}
        href={shortcut.href}
        className="group relative w-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-black/10 from-20% to-transparent to-60% px-14 py-9 xl:bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))]"
      >
        <div className="clip-triangle absolute bottom-0 left-0 h-8 w-full bg-white xl:bottom-auto xl:top-0 xl:h-full xl:w-11"></div>
        <span className="flex flex-row items-center gap-2">
          <h1 className="font-title text-xl font-medium">{shortcut.title}</h1>
          <span className="material-symbols-outlined text-3xl text-dark/50 transition-transform group-hover:translate-x-1">
            arrow_forward
          </span>
        </span>
        <p className="ml-0 text-base xl:ml-5">{shortcut.description}</p>
      </Link>
    ))}
  </div>
);

export default ShortcutPanes;
