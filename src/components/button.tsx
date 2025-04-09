"use client";

import { useLang } from "@/contexts/dictionary-provider";
import Link from "next/link";

interface ButtonProps {
  title: string;
  style: "style1" | "style2" | "style3";
  color?: string;
  as?: "button" | "link";
  href?: string;
  onClick?: () => void;
  umamiEvent?: string;
}

const Button = ({
  title,
  style,
  color = "primary",
  as = "link",
  href,
  onClick,
  umamiEvent,
}: ButtonProps) => {
  const lang = useLang();
  const hrefDefault = href ?? "/";
  const hrefLang = `/${lang}${href}`;

  const isCustomColor = !["signature-blue", "primary", "black"].includes(color);
  const isLocalLink =
    href &&
    !(
      href.startsWith("http") ||
      href.startsWith("mailto") ||
      href.startsWith("tel")
    );

  const baseStyle =
    "py-3 text-base font-normal transition-transform hover:scale-105 active:scale-95 transition-transform ease-in-out duration-300 select-none";
  const styleVariant = {
    style1: `rounded-full bg-white px-5 w-fit ${!isCustomColor ? `text-${color}` : ""}`,
    style2: `rounded-xl font-semibold px-12 text-white ${!isCustomColor ? `bg-${color}` : ""}`,
    style3: `flex gap-1 rounded-full font-semibold px-5 text-white ${!isCustomColor ? `bg-${color}` : ""}`,
  };

  return (
    <>
      {as === "button" && onClick && (
        <button
          onClick={onClick}
          className={`${baseStyle} ${style ? styleVariant[style] : ""}`}
          {...(isCustomColor && { style: { color } })}
          {...(umamiEvent ? { "data-umami-event": umamiEvent } : {})}
        >
          {title}
        </button>
      )}

      {as === "link" && href && (
        <Link
          href={isLocalLink ? hrefLang : hrefDefault}
          className={`${baseStyle} ${style ? styleVariant[style] : ""}`}
          {...(isCustomColor && { style: { color } })}
          {...(!isLocalLink
            ? { rel: "noopener noreferrer", target: "_blank" }
            : {})}
          {...(umamiEvent ? { "data-umami-event": umamiEvent } : {})}
        >
          {title}
          {style === "style3" && (
            <span className="material-symbols-outlined">arrow_forward</span>
          )}
        </Link>
      )}
    </>
  );
};

export default Button;
