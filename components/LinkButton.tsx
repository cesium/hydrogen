import Link from "next/link";

interface IButtonProps {
  title: string;
  linkPath: string;
  className: string;
}

export default function LinkButton({
  title,
  linkPath,
  className,
}: IButtonProps) {
  return (
    <Link
      className={`rounded-md bg-cesium-orange text-xl font-bold  ${className}`}
      href={linkPath}
    >
      {title}
    </Link>
  );
}
