import LogBanner from "@/components/LogBanner";
import logs from "@/data/logs.json";

export default function Logs() {
  return (
    <main className="bg-background">
      <h1 className="flex justify-center text-4xl font-semibold text-[#353335]">
        Logs
      </h1>

      <div className="flex justify-center">
        <div className="pt-12">
          {logs.map((article) => (
            <LogBanner
              title={article.title}
              content={article.content}
              timePublished={article.timePublished}
              path={article.path}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
