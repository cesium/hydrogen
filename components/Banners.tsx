import Link from "next/link";
import Image from "next/image";
import React from "react";
import logo from "@/public/cesiumW.png";
import linkGroup from "@/data/LinkGroup.json";

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
          )} h-[250px] font-orbitron text-5xl font-bold text-black ${
            item.image ? "bg-transparent hover:opacity-90" : "bg-gray-200"
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
          <h1 className="absolute left-8 top-8">{item.title}</h1>
          <h2 className="absolute left-20 top-14 mr-8 text-lg text-black">
            {item.subtitle}
          </h2>
          <h5 className="absolute left-8 top-24 mr-8 font-inter text-sm font-normal text-gray-500">
            {item.description}
          </h5>
          {!item.image && (
            <Link
              href={item.href}
              className="absolute bottom-8 left-8 border-b-2 border-cesium-orange font-inter text-sm font-normal text-cesium-orange hover:border-cesium-orange-700 hover:text-cesium-orange-700"
            >
              Ver mais
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
    <div className="mx-auto my-32 grid w-[1030px] grid-cols-4 gap-4 2xl:mt-60">
      {rows}
      <div
        className={`relative col-span-4 flex h-[250px] flex-col bg-dark-gray font-orbitron text-5xl font-bold text-white`}
      >
        <h1 className="mx-8 mt-8">Torna-te Sócio</h1>
        <ul className="mx-8 mt-2 list-inside list-disc font-inter text-sm font-normal text-white">
          {[
            "Acesso à sala do CeSIUM",
            "Cartão de sócio",
            "Representação dos teus interesses",
            "Kit de Sócios",
          ].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <Link
          href="/"
          className="mb-4 ml-8 mr-auto border-b-2 border-cesium-orange font-inter text-sm font-normal text-cesium-orange hover:border-cesium-orange-700 hover:text-cesium-orange-700"
        >
          Saber mais
        </Link>
        <span className="absolute right-64 top-8">
          <Image src={logo} width={255} alt="" />
        </span>
      </div>
    </div>
  );
}
