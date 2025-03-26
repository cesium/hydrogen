import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLang } from "@/contexts/dictionary-provider";

interface LinkProps {
  title: string;
  href?: string;
  back?: boolean;
  color?: string;
}

const AppLink = ({ title, href, back, color = "primary" }: LinkProps) => {
  const lang = useLang();
  const hrefDefault = href ?? "/";
  const hrefLang = `/${lang}${href}`;
  const router = useRouter();
  const isCustomColor = !["blue", "primary", "black"].includes(color);
  const isLocalLink =
    href &&
    !(
      href.startsWith("http") ||
      href.startsWith("mailto") ||
      href.startsWith("tel")
    );

  const style = `flex w-fit group items-center gap-1 font-medium transition-opacity hover:opacity-85 ${!isCustomColor ? `text-${color}` : ""}`;

  return back ? (
    <button
      onClick={() => router.back()}
      className={style}
      {...(isCustomColor && { style: { color } })}
    >
      <span className="material-symbols-outlined">arrow_back</span>
      <p>{title}</p>
    </button>
  ) : (
    href && (
      <Link
        href={isLocalLink ? hrefLang : hrefDefault}
        {...(!isLocalLink && {
          rel: "noopener noreferrer",
          target: "_blank",
        })}
        className={style}
        {...(isCustomColor && { style: { color } })}
      >
        <p>{title}</p>
        <span
          className={`material-symbols-outlined transition-transform duration-200 ${isLocalLink ? "group-hover:translate-x-0.5" : "group-hover:-translate-y-[1px] group-hover:translate-x-[1px]"}`}
        >
          arrow_{!isLocalLink ? "outward" : "forward"}
        </span>
      </Link>
    )
  );
};

export default AppLink;
