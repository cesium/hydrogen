import React from "react";

const items = [
  ["Ser Parceiro", "Parceiros", "Equipa"],
  ["Sobre Nós"],
  ["Departamento de Informática", "Estudar LEI"],
];

export default function HeroSection() {
  return (
    <div className="mx-auto my-32 grid w-[1280px] grid-cols-4 gap-4 2xl:mt-60">
      {items.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {row.map((item, colIndex) => (
            <div
              key={colIndex}
              className={`relative ${
                rowIndex === 0 && colIndex === 0
                  ? "col-span-2"
                  : rowIndex === 1
                  ? "col-span-4"
                  : rowIndex === 2
                  ? "col-span-2"
                  : "col-span-1"
              } h-[250px] rounded-xl bg-gray-200 text-2xl font-bold text-white`}
            >
              <span className="absolute bottom-4 left-14">{item}</span>
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
