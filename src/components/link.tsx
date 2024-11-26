import Link from "next/link";

interface ILink {
  title: string;
  href: string;
  arrow: "back" | "forward" | "outward";
}

const CustomLink = ({ title, href, arrow }: ILink) => {
  return (
    <Link
      href={{ href }}
      className="flex items-center gap-1 font-medium text-primary"
    >
      {arrow === "back" && (
        <span className="material-symbols-outlined">arrow_{arrow}</span>
      )}
      <p>{title}</p>
      {(arrow === "forward" || arrow === "outward") && (
        <span className="material-symbols-outlined">arrow_{arrow}</span>
      )}
    </Link>
  );
};

export default CustomLink;
