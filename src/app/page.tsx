import DepartmentCard from "@/components/department-card";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="h-screen w-screen flex-col items-center justify-center overflow-scroll">
      <div className="space-y-4 p-5">
        <DepartmentCard type="caos" />
        <DepartmentCard type="dmc" />
        <DepartmentCard type="drem" />
        <DepartmentCard type="ped" />
        <DepartmentCard type="rec" />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </main>
  );
}
