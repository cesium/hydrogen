import Link from "next/link";
import Image from "next/image";
import React from "react";
import linkGroup from "@/data/LinkGroup.json";

import CeSIUMLogo from "./CeSIUMLogo";

type LinkGroupItem = {
  title: string;
  subtitle?: string;
  description?: string;
  href: string;
  image?: string;
};

type LinkGroup = LinkGroupItem[];

interface RowProps {
  links: LinkGroup;
  rowIndex: number;
}

function handleColSpan(rowIndex: number, colIndex: number): string {
  if (rowIndex === 0) {
    return colIndex === 2 ? "col-span-2" : "col-span-1";
  } else if (rowIndex === 1) {
    return colIndex === 0 ? "col-span-2" : "col-span-1";
  } else {
    return "col-span-1";
  }
}

function Row({ links, rowIndex }: RowProps) {
  return (
    <React.Fragment>
      {links.map((item: LinkGroupItem, colIndex: number) => (
        <div
          key={colIndex}
          className={`relative ${handleColSpan(
            rowIndex,
            colIndex,
          )} h-[250px] p-8 font-orbitron text-5xl font-bold shadow-sm shadow-gray-900/20 ${
            item.image
              ? "hover:opacity-9 overflow-hidden bg-transparent"
              : "bg-gray-200"
          }`}
        >
          {item.image && (
            <Link href={item.href} className="absolute inset-0 h-full w-full">
              <Image
                src={`${item.image}`}
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </Link>
          )}
          <span className="flex flex-row space-x-2">
            <h1>{item.title}</h1>
            <h2 className="mt-[1.2rem]  text-lg">{item.subtitle}</h2>
          </span>
          <h5 className="absolute left-8 top-24 mr-8 font-inter text-sm font-normal text-gray-500">
            {item.description}
          </h5>
          {!item.image && (
            <Link
              href={item.href}
              className="absolute bottom-8 left-8 font-inter text-sm font-medium text-gray-900 transition-all hover:font-bold hover:text-cesium-900"
            >
              <text className="border-b-2 border-cesium-900">Ver mais</text>{" "}
              <i className="bi bi-chevron-right"></i>
            </Link>
          )}
        </div>
      ))}
    </React.Fragment>
  );
}

export default function Banners() {
  const rows: JSX.Element[] = linkGroup.map(
    (row: LinkGroup, rowIndex: number) => (
      <Row links={row} rowIndex={rowIndex} key={rowIndex} />
    ),
  );

  return (
    <div className="mx-auto grid w-full grid-cols-4 gap-4 2xl:mt-60">
      {rows}
      <div className="relative col-span-4 flex h-[250px] flex-col justify-between space-y-4 overflow-hidden bg-dark-gray p-8 font-orbitron text-5xl font-bold text-white shadow-sm shadow-gray-900/20">
        <h1>Torna-te Sócio</h1>
        <ul className="list-inside list-disc font-inter text-sm font-normal text-white">
          {[
            "Kit de Sócio",
            "Cartão de Sócio",
            "Descontos em Parceiros",
            "Acesso a Eventos Especiais",
          ].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <Link
          href="/"
          className="w-fit font-inter text-lg font-medium text-white transition-all hover:font-bold"
        >
          <text className="border-b-2 border-cesium-900">Saber mais</text>{" "}
          <i className="bi bi-chevron-right"></i>
        </Link>
        <span className="absolute -right-[5.5rem] top-[3rem]">
          <CeSIUMLogo width={200} color="white" />
        </span>
      </div>
    </div>
  );
}
