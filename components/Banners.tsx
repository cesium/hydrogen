import Link from "next/link"
import React from "react"

type LinkGroupType = string[]
const items: LinkGroupType[] = [
  ["Ser Parceiro", "Parceiros", "Equipa"],
  ["Sobre Nós"],
  ["Departamento de Informática", "Estudar LEI"],
]

interface IRowProps {
  links: LinkGroupType
  rowIndex: number
}

function handleColSpan(rowIndex: number, colIndex: number): string {
  if (rowIndex === 0) {
    return colIndex === 0 ? "col-span-2" : "col-span-1"
  } else if (rowIndex === 1) {
    return "col-span-4"
  } else if (rowIndex === 2) {
    return "col-span-2"
  } else {
    return "col-span-1"
  }
}

function Row({ links, rowIndex }: IRowProps) {
  return (
    <>
      {links.map((item: string, colIndex: number) => (
        <Link
          href="/"
          key={colIndex}
          className={`relative ${handleColSpan(
            rowIndex,
            colIndex,
          )} h-[250px] rounded-xl bg-gray-200 text-2xl font-bold text-white hover:bg-gray-300`}
        >
          <span className="absolute bottom-4 left-14">{item}</span>
        </Link>
      ))}
    </>
  )
}

export default function Banners() {
  const rows: JSX.Element[] = items.map((row: string[], rowIndex: number) => (
    <Row links={row} rowIndex={rowIndex} key={rowIndex} />
  ))

  return (
    <div className="mx-auto my-32 grid w-[1280px] grid-cols-4 gap-4 2xl:mt-60">
      {rows}
    </div>
  )
}
