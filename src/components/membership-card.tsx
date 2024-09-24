import React from "react";

const Membershipcard: React.FC = () => {
  return (
    <div className="relative h-[269px] w-full max-w-[355px] overflow-hidden rounded-xl bg-primary p-4 text-white">
      <button
        aria-label="Fechar"
        className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white bg-transparent text-lg text-white transition duration-300 hover:bg-white hover:text-blue-600"
      >
        ×
      </button>
      <div className="absolute bottom-0 left-2 h-[87px] w-[148px]">
        <img
          src="/membershipcard.svg"
          alt="Colaborador Icon"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="absolute left-4 right-4 top-6">
        <h3 className="font-orbitron mb-2 text-2xl leading-tight">
          Torna-te <br /> colaborador
        </h3>
        <p className="font-inter text-base">
            Podes juntar-te a estes departamentos e contribuir para fazer o teu núcleo funcionar.
        </p>
      </div>
      <div className="absolute bottom-4 right-4">
        <button className="hover:bg-gray-100 font-inter rounded-full bg-white px-4 py-2 text-sm text-primary transition duration-300">
          Saber mais
        </button>
      </div>
    </div>
  );
};

export default Membershipcard;