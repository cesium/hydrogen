import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLang } from "@/contexts/dictionary-provider";

interface LinkProps {
  title: string;
  href?: string;
  arrow?: "back" | "forward" | "outward";
  color?: "primary" | "blue";
}

const AppLink = ({ title, href, arrow, color }: LinkProps) => {
  const lang = useLang();
  const hrefDefault = href ?? "/";
  const hrefLang = `/${lang}${href}`;
  const router = useRouter();

  const style = `flex items-center gap-1 font-medium transition-opacity hover:opacity-85 ${
    color === "blue" ? "text-blue" : "text-primary"
  }`;

  return arrow === "back" ? (
    <button onClick={() => router.back()} className={style}>
      <span className="material-symbols-outlined">{"arrow_" + arrow}</span>
      <p>{title}</p>
    </button>
  ) : (
    <Link href={arrow === "forward" ? hrefLang : hrefDefault} className={style}>
      <p>{title}</p>
      {(arrow === "forward" || arrow === "outward") && (
        <span className="material-symbols-outlined">{"arrow_" + arrow}</span>
      )}
    </Link>
  );
};

export default AppLink;
