import Date from "@/components/Date";
import Teams from "@/components/Teams";

export default function Team() {
  const yearDefault: number = 2023;

  return (
    <main className="bg-background px-28 pb-8">
      <Date />
      <Teams />
    </main>
  );
}
