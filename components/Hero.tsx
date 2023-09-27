import CeSIUMLogo from "./CeSIUMLogo";

export default function Hero() {
  return (
    <div className="flex items-center justify-center gap-32">
      <div className="w-[480px] flex-col items-center justify-center">
        <div className="mb-6 font-orbitron text-7xl font-bold">CeSIUM</div>
        <div className="font-inter text-xl font-normal text-slate-500">
          Centro de Estudantes de Engenharia Informática da Universidade do
          Minho
        </div>
      </div>
      <CeSIUMLogo width={352} color="#ed7950" />
    </div>
  );
}
