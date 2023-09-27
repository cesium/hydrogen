import CeSIUMLogo from "../CeSIUMLogo";

const Hero = () => {
  return (
    <div className="flex items-center justify-center gap-32">
      {/* Text */}
      <div className="w-[480px] flex-col items-center justify-center">
        {/* Title */}
        <div className="mb-6 font-orbitron text-7xl font-bold">CeSIUM</div>
        {/* Subtitle */}
        <div className="font-inter text-xl font-normal text-slate-500">
          Centro de Estudantes de Engenharia Informática da Universidade do
          Minho
        </div>
      </div>
      {/* Logo */}
      <CeSIUMLogo width={352} color="#ed7950" />
    </div>
  );
};

export default Hero;
