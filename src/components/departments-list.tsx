import DepartmentCard from "./department-card";

export const departmentNames = [
  "Centro de Apoio ao Open Source",
  "Departamento de Marketing e Conteúdo",
  "Departamento Social e Parcerias",
  "Departamento Pedagógico",
  "Departamento Recreativo",
];

export const shortName = (name: string) => {
  switch (name) {
    case "Centro de Apoio ao Open Source":
      return "caos";
    case "Departamento de Marketing e Conteúdo":
      return "dmc";
    case "Departamento Social e Parcerias":
      return "dsp";
    case "Departamento Pedagógico":
      return "ped";
    case "Departamento Recreativo":
      return "rec";
    default:
      return "caos";
  }
};

export const gradient = (type: string) => {
  switch (type) {
    case "caos":
      return ["[#0085FF]/5", "[#00D1FF]/5"];
    case "dmc":
      return ["[#FF00F5]/5", "[#FF2E00]/5"];
    case "dsp":
      return ["[#0500FF]/5", "[#A500DE]/5"];
    case "ped":
      return ["[#E4B12E]/20", "[#ED7950]/20"];
    case "rec":
      return ["[#03A300]/5", "[#82E700]/5"];
    default:
      return ["[#0085FF]/5", "[#00D1FF]/5"];
  }
};

interface DepartmentsListProps {
  hideTeam?: boolean;
  hideShortName?: boolean;
  className?: string;
}

const DepartmentsList = ({
  hideTeam,
  hideShortName,
  className,
}: DepartmentsListProps) => {
  return (
    <div
      className={className}
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {departmentNames.map((departmentName) => (
        <DepartmentCard
          key={departmentName}
          name={departmentName}
          shortName={shortName(departmentName)}
          gradientFrom={gradient(shortName(departmentName))[0] ?? ""}
          gradientTo={gradient(shortName(departmentName))[1] ?? ""}
          hideTeam={hideTeam}
          hideShortName={hideShortName}
        ></DepartmentCard>
      ))}
    </div>
  );
};

export default DepartmentsList;
