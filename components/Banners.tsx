import Link from "next/link";
import Image from "next/image";
import React from "react";
import logo from "@/public/cesium.svg";
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
          )} h-[250px] rounded-2xl p-8 font-orbitron  text-5xl font-bold ${
            item.image
              ? "hover:opacity-9 overflow-hidden rounded-2xl bg-transparent"
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

const CeSIUMLogo = ({ props }: { props: any }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Camada_1"
    data-name="Camada 1"
    viewBox="0 0 479.29 549.18"
    {...props}
  >
    <defs>
      <style>{`.cls-1{fill: ${props.color} }`}</style>
    </defs>
    <title>{"cesium"}</title>
    <path
      d="m171.29 39.06 164 94.59-95.05 56.7-82.59-47.53-68 39.06 149.88 86.59 233.41-134.35L239.76 0l-68.47 39.06z"
      className="cls-1"
    />
    <path
      d="M157.41 47.06 7.76 134.24l68.01 39.41 81.64-47.06 82.83 47.06 67.52-39.41-150.35-87.18zM479.29 146.35 246.82 280.47v79.06l232.47-134.12v-79.06zM410.35 288.24v71.29l62.59-35.65-62.59-35.64zM479.29 336.94l-150.11 86.12v78.82l150.11-87.06v-77.88z"
      className="cls-1"
    />
    <path
      d="M246.82 376v173.18l68.47-39.77v-94.59l82.36-47.76v-78.82L246.82 376zM164.24 336.23s1.65 96 0 94.59S0 336.23 0 336.23v78.35l232.94 134.59V375.76Z"
      className="cls-1"
    />
    <path
      d="M68.23 280.94v-95.29L0 146.35V320l150.59 86.35.94-77.41-83.3-48z"
      className="cls-1"
    />
    <path
      d="M82.12 193.65v79.29l150.82 86.59v-78.59L82.12 193.65z"
      className="cls-1"
    />
  </svg>
);

export default function Banners() {
  const rows: JSX.Element[] = linkGroup.map(
    (row: LinkGroup, rowIndex: number) => (
      <Row links={row} rowIndex={rowIndex} key={rowIndex} />
    ),
  );

  return (
    <div className="mx-auto grid w-full grid-cols-4 gap-4 2xl:mt-60">
      {rows}
      <div className="relative col-span-4 flex h-[250px] flex-col justify-between space-y-4 rounded-2xl bg-dark-gray p-8 font-orbitron text-5xl font-bold text-white">
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
          <CeSIUMLogo props={{ width: 200, color: "white" }} />
        </span>
      </div>
    </div>
  );
}
