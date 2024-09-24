import React from "react";

const Colaboratorcard = () => {
  return (
    <div className="relative flex h-[269px] w-full max-w-[355px] flex-col items-center overflow-hidden rounded-xl bg-blue p-4 text-white md:h-[192px] md:max-w-[1300px] md:flex-row md:p-6">
      {/* Image */}
      <div className="absolute bottom-0 left-2 h-[87px] w-[148px] md:bottom-0 md:left-0 md:h-[148px] md:w-[236px]">
        <img
          src="/sociocard.svg"
          alt="Colaborador Icon"
          className="h-full w-full object-contain"
        />
      </div>

      {/* Text */}
      <div className="absolute left-4 right-4 top-10 mt-0 flex-grow text-start md:relative md:ml-[236px] md:pb-20 md:text-left">
        <h4 className="mb-2 font-title text-xl md:text-3xl">
          Torna-te colaborador
        </h4>
        <p className="font-sans text-base md:text-base  ">
          Podes juntar-te a estes departamentos e contribuir para fazer o teu
          núcleo funcionar.
        </p>
      </div>

      {/* Buttons */}
      <div className="relative mt-4 flex h-full w-full items-end justify-end md:mt-0 md:items-center md:justify-end md:space-x-4">
        <button className="hover:bg-gray-100 absolute bottom-4 right-4 rounded-full bg-white px-4 py-2 font-sans text-sm text-blue transition duration-300 md:static md:text-base">
          Saber mais
        </button>

        <button
          aria-label="Fechar"
          className="absolute right-2 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFFFFF1A] text-lg text-white transition duration-300 hover:bg-white hover:text-blue md:relative md:right-0 md:top-0 md:h-10 md:w-10 md:text-xl"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Colaboratorcard;
