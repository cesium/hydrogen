import Link from "next/link";
import React from "react";

const items: string[][] = [
  ["Ser Parceiro", "Parceiros", "Equipa"],
  ["Sobre Nós"],
  ["Departamento de Informática", "Estudar LEI"],
];

interface RowProps {
  links: string[];
  rowIndex: number;
}

function handleColSpan(rowIndex: number, colIndex: number): number {
  if (rowIndex === 0) {
    return colIndex === 0 ? 2 : 1;
  } else if (rowIndex === 1) {
    return 4;
  } else if (rowIndex === 2) {
    return 2;
  } else {
    return 1;
  }
}

function Row({ links, rowIndex }: RowProps) {
  return (
    <React.Fragment>
      {links.map((item: string, colIndex: number) => (
        <Link
          href="/"
          key={colIndex}
          className={`relative col-span-${handleColSpan(
            rowIndex,
            colIndex,
          )} h-[250px] rounded-xl bg-gray-200 text-2xl font-bold text-white hover:bg-gray-300`}
        >
          <span className="absolute bottom-4 left-14">{item}</span>
        </Link>
      ))}
    </React.Fragment>
  );
}

export default function Banners() {
  const rows: JSX.Element[] = items.map((row: string[], rowIndex: number) => (
    <Row links={row} rowIndex={rowIndex} key={rowIndex} />
  ));

  return (
    <div className="mx-auto my-32 grid w-[1280px] grid-cols-4 gap-4 2xl:mt-60">
      {rows}
    </div>
  );
}
