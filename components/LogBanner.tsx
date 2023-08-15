import Link from "next/link";
import dayjs from "dayjs";

interface ILogBannerProps {
  title: string;
  content: string;
  datePublished: string;
  path: string;
}

export default function LogBanner({
  title,
  content,
  datePublished,
  path,
}: ILogBannerProps) {
  return (
    <article className="pt-10">
      <Link href={path}>
        <div className="h-[225px] w-[930px] bg-light-gray px-8 pt-6">
          <h2 className="text-3xl font-semibold">
            {title + " - "}
            <time dateTime={new Date(datePublished).toISOString()}>
              {dayjs(datePublished).format("HH:mm")}
            </time>
          </h2>
          <p className="break-words pt-2 text-3xl font-semibold">{content}</p>
        </div>
      </Link>
    </article>
  );
}
