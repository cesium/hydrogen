import DepartmentCard from "@/components/department-card";
import CollaboratorSocioCard from "@/components/collaborator-socio-card";

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
        <CollaboratorSocioCard type="colaborador" />
      </div>
      <div className="flex justify-center pt-6">
        <CollaboratorSocioCard type="socio" />
      </div>
    </main>
  );
}
