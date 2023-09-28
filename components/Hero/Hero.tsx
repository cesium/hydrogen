import CeSIUMLogo from "../CeSIUMLogo";
import PromoGrid from "./PromoGrid";

const Hero = () => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-between">
      <div className="flex flex-col items-center space-y-8">
        {/* Logo */}
        <CeSIUMLogo width={200} color="#ed7950" />
        {/* Text */}
        <div className="w-[480px] flex-col space-y-4 text-center">
          {/* Title */}
          <div className="font-orbitron text-8xl font-bold">CeSIUM</div>
          {/* Subtitle */}
          <div className="font-inter text-xl font-medium text-slate-500">
            Centro de Estudantes de Engenharia Informática da Universidade do
            Minho
          </div>
        </div>
      </div>
      <PromoGrid />
    </div>
  );
};

export default Hero;
