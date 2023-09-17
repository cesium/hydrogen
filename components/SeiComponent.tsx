import Image from "next/image";
import sei from "@/public/sei.png";
import { MdOutlineVideoLibrary } from "react-icons/md";

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="flex flex-row gap-20">
        <h1 className="whitespace-nowrap font-orbitron text-4xl font-semibold">
          O nosso maior evento
        </h1>
        <h2 className="text-justify font-inter text-base font-normal text-gray-500">
          SEI - Semana Engenharia Informática - atividades incríveis, talks,
          workshops e concursos emocionantes para vibrar de emoção! 💙
        </h2>
      </div>
      <div className="grid h-[250px] w-full grid-cols-4 gap-10">
        <div className="col-span-1 flex flex-col justify-center gap-4 bg-gray-200 px-4 text-justify">
          <h1 className="font-orbitron text-5xl font-bold text-cesium-orange">
            +1000
          </h1>
          <h2 className="font-inter text-base text-gray-500">
            Participantes na última edição de 2023
          </h2>
        </div>
        <div className="relative col-span-3 bg-gray-200">
          <Image src={sei} layout="fill" objectFit="cover" alt="" />
          <a
            href="https://www.instagram.com/p/Cozkc1yDvkK/"
            className="absolute -bottom-10 right-10 flex h-[100px] w-[100px] items-center justify-center rounded-full border-4 border-white bg-cesium-orange"
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
