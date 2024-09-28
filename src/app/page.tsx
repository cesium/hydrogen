import DepartmentCard from "@/components/department-card";
import { CardType } from "@/components/PromotionalCard";
import PromotionalCard from "@/components/PromotionalCard";

export default function Home() {
  return (
    <main className="h-screen w-screen flex-col items-center justify-center overflow-scroll p-8">
      <div className="space-y-4">
        <DepartmentCard type="caos" />
        <DepartmentCard type="dmc" />
        <DepartmentCard type="drem" />
        <DepartmentCard type="ped" />
        <DepartmentCard type="rec" />
      </div>
      <div className="flex justify-center pt-6">
        <PromotionalCard type='Collaborate' />
      </div>
      <div className="flex justify-center pt-6">
        <PromotionalCard type='Membership' />
      </div>
    </main>
  );
}