import Image from "next/image";
import sei from "@/public/sei.png";
import { MdOutlineVideoLibrary } from "react-icons/md";
// import Link from "next/link";

export default function Index() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row items-center justify-between gap-20">
        <span className="space-y-2">
          <h1 className="whitespace-nowrap font-orbitron text-4xl font-semibold">
            O nosso maior evento
          </h1>
          <h2 className="font-medium">SEI - Semana Engenharia Informática</h2>
        </span>
        <h2 className="text-justify font-inter text-base font-normal text-gray-500">
          Atividades incríveis, talks, workshops e concursos emocionantes para
          vibrar de emoção! 💙
        </h2>
      </div>
      <div className="flex h-[280px] w-full flex-row justify-between space-x-8">
        <div className="flex h-[280px] w-[350px] flex-col justify-center space-y-4 bg-gray-200 px-4 text-justify">
          <h1 className="font-orbitron text-5xl font-bold text-cesium-900">
            +1000
          </h1>
          <h2 className="font-inter text-base text-gray-500">
            Participantes na edição de 2023
          </h2>
        </div>
        <div className="relative flex w-full bg-gray-200">
          <div className="flex overflow-hidden">
            <Image src={sei} layout="fill" objectFit="cover" alt="" />
          </div>
          <a
            href="https://www.instagram.com/p/Cozkc1yDvkK/"
            className="absolute -bottom-10 right-10 flex h-[100px] w-[100px] items-center justify-center rounded-full border-4 border-white bg-cesium-900"
          >
            <div className="flex h-full w-full items-center justify-center">
              <MdOutlineVideoLibrary size={40} color="white" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
