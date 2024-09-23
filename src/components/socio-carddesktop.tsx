import React from "react";

const ColaboradorCardDesktop: React.FC = () => {
  return (
    <div className="relative flex h-[192px] w-full max-w-[1300px] items-center overflow-hidden rounded-xl bg-blue-600 p-6 text-white">
      <div className="absolute bottom-0 left-0 h-[87px] w-[148px] md:h-[148px] md:w-[236px]">
        <img
          src="/sociocard.svg"
          alt="Colaborador Icon"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="ml-[236px] flex-grow">
        <h4 className="font-orbitron mb-2 text-3xl">Torna-te colaborador</h4>
        <p className="font-inter text-base">
          Junta-te a um (ou vários) departamentos e ajuda a tornar o CeSIUM
          melhor todos os <br /> dias.
        </p>
      </div>
      <div className="ml-5 flex h-full items-center justify-center">
        <div className="flex space-x-4">
          <button className="hover:bg-gray-100 font-inter rounded-full bg-white px-4 py-2 text-base text-blue-600 transition duration-300">
            Saber mais
          </button>
          <button
            aria-label="Fechar"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white bg-transparent text-xl text-white transition duration-300 hover:bg-white hover:text-blue-600"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColaboradorCardDesktop;
