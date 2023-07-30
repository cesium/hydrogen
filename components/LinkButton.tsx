import Link from "next/link";

interface IButtonProps {
  title: string;
  linkPath: string;
}

export default function LinkButton({ title, linkPath }: IButtonProps) {
  return (
    <Link
      className="rounded-xl bg-cesium-orange px-6 py-4 text-xl font-bold text-white"
      href={linkPath}
    >
      {title}
    </Link>
  );
}
