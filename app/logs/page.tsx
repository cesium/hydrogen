import LogBanner from "@/components/LogBanner";
import logs from "@/data/logs.json";

export default function Logs() {
  const logsWithId = logs.map((article, index) => ({ ...article, id: index }));

  return (
    <main className="bg-background">
      <h1 className="flex justify-center text-4xl font-semibold text-[#353335]">
        Logs
      </h1>

      <div className="flex justify-center">
        <ul className="pt-12">
          {logsWithId.map((article) => (
            <li key={article.id}>
              <LogBanner {...article} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
