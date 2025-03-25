"use client";

import Link from "next/link";

interface ButtonProps {
  title: string;
  style: "style1" | "style2";
  color?: "primary" | "blue";
  as?: "button" | "link";
  href?: string;
  onClick?: () => void;
}

const Button = ({
  title,
  style,
  color = "primary",
  as = "link",
  href,
  onClick,
}: ButtonProps) => {
  const baseStyle =
    "py-[13px] text-base font-normal transition-opacity hover:opacity-85 active:scale-95 transition-transform ease-in-out duration-300";

  const styleVariant = {
    style1: `rounded-full bg-white px-5 w-fit ${
      color === "primary" ? "text-primary" : "text-blue"
    }`,
    style2: `rounded-[10px] px-6 text-white w-[250px] ${
      color === "primary" ? "bg-primary" : "bg-blue"
    }`,
  };

  return (
    <>
      {as === "button" && onClick && (
        <button
          onClick={onClick}
          className={`${baseStyle} ${style ? styleVariant[style] : ""}`}
        >
          {title}
        </button>
      )}

      {as === "link" && href && (
        <Link
          href={href}
          className={`${baseStyle} ${style ? styleVariant[style] : ""}`}
        >
          {title}
        </Link>
      )}
    </>
  );
};

export default Button;