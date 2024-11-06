import DepartmentCard from "@/components/department-card";
import PromotionalCard from "@/components/promotional-card";
import { CardType } from "@/lib/types";

export default function Home() {
  return (
    <main className="h-screen w-screen flex-col items-center justify-center overflow-scroll px-5 pb-5 pt-4 lg:px-7 lg:pb-16 lg:pt-12">
      <div className="space-y-4">
        <DepartmentCard type="caos" />
        <DepartmentCard type="dmc" />
        <DepartmentCard type="drem" />
        <DepartmentCard type="ped" />
        <DepartmentCard type="rec" />
      </div>
      <div className="flex justify-center pt-6">
        <PromotionalCard type={CardType.Collaborate} />
      </div>
      <div className="flex justify-center pt-6">
        <PromotionalCard type={CardType.Membership} />
      </div>
    </main>
  );
}
