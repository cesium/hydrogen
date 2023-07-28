import team from "@/data/2023.json";

export default function Teams() {
  return (
    <div className="mt-8 flex flex-col items-start justify-center gap-10 px-28">
      {team.map((item) => (
        <div className="flex flex-col gap-4">
          <div className="text-2xl font-semibold">{item.title}</div>
          <div className="flex flex-row gap-16">
            {item.members.map((member) => (
              <div className="flex flex-col items-center justify-center">
                <div className="h-[160px] w-[130px] rounded-lg bg-gray-200"></div>
                <div className="mt-4">{member.name}</div>
                <div className="text-sm opacity-50">{member.cargo}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
